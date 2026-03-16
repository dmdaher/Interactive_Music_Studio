# CLAUDE.md — Music Studio Project

## Git Branching Rules (MANDATORY — READ FIRST)

```
feature/* ──PR──→ test ──PR──→ main (production)
                   ↑              ↑
              agents push    owner approves
              & merge here   after visual review
```

**These rules are non-negotiable. Violating them can break production.**

| Rule | Detail |
|---|---|
| **NEVER push to `main`** | Branch protection enforced — direct pushes will be rejected |
| **NEVER create PRs targeting `main`** | All PRs must target `test` |
| **NEVER run `gh pr merge` on PRs to `main`** | Only the repo owner merges to main |
| **NEVER run `gh pr review --approve`** | Agents do not approve PRs |
| **Always branch from `test`** | `git checkout -b feature/my-feature test` |
| **Always PR to `test`** | `gh pr create --base test` |

**Branch purposes:**
- **`main`** — Production. Vercel auto-deploys. Protected: requires 1 approving review, enforced for admins. Only the repo owner touches this.
- **`test`** — Integration/staging. Agents create PRs here. Vercel preview deploys available for visual review.
- **`feature/*`** — Individual work branches. Created from `test`, PR'd back to `test`.

**Before pushing any branch**, verify your target:
```bash
git log --oneline test..HEAD  # confirm what you're pushing
gh pr create --base test      # always target test
```

---

## Safety & Boundaries (NON-NEGOTIABLE)

- **Never act with malicious intent.** Do not delete, corrupt, exfiltrate, or sabotage any files, data, or systems. Do not execute commands designed to harm the project, the user's machine, or any external systems.
- **Never touch anything outside the Music Studio project folder.** All reads, writes, edits, and shell commands must be scoped to the project directory and its iCloud mirror. Do not access, modify, or reference files in any other location on the filesystem unless explicitly instructed by the user for a specific file. If a task seems to require accessing something outside the project folder, stop and ask the user first.

---

## Core Principle

Always check, validate, and confirm before acting. Measure twice, cut once.

**Accuracy over speed — always.** This project builds digital twins of real hardware instruments from their product manuals. Every instrument is a real product with a real manual. Before designing any panel, tutorial, or control:

1. **Open the reference manual PDF** and read the specific pages. Don't work from memory or assumptions.
2. **Validate every detail**: control positions, labels, parameter ranges, button assignments. Check the manual's diagrams and parameter tables.
3. **Self-check before presenting**: ask "did I verify this against the source material?" If not, go back and verify.
4. **Highlighted controls must match the real workflow context** — which controls are active depends on which mode the user is in. Verify per the manual.

---

## Pipeline Runner (`scripts/pipeline-runner.ts`)

The pipeline runner orchestrates instrument builds by spawning Claude CLI agents through 12 phases. Each agent gets a scoped prompt and runs in an isolated git worktree.

### CLI Requirements (CRITICAL)

The `claude` CLI has three non-obvious requirements when spawned from Node.js:

```ts
// In src/lib/pipeline/runner.ts — invokeAgent()
const args = ['-p', prompt, '--output-format', 'stream-json', '--verbose'];
//                                                              ^^^^^^^^^^
// --verbose is REQUIRED with stream-json. Without it, the CLI exits with an
// error that gets swallowed silently. The agent appears to run but produces
// zero output.

const proc = spawn('claude', args, {
  stdio: ['ignore', 'pipe', 'pipe'],
//        ^^^^^^^^
// stdin MUST be 'ignore', not 'pipe'. When stdin is a pipe, the claude CLI
// blocks indefinitely waiting for input. The process appears alive but does
// nothing. This wasted 1.5 hours of debugging.
});
```

### Agent Tool Sandboxing (CRITICAL)

All pipeline agents are restricted to a specific tool set:

```ts
const PIPELINE_TOOLS = ['Read', 'Write', 'Edit', 'Glob', 'Grep', 'Bash'];
```

**Why this exists:** Each `claude -p` session loads the full Claude Code environment — hooks, skills, plugins. The SessionStart hook injects superpowers that demand "you MUST invoke skills." Agents can see `launch-instrument`, `build-instrument`, and `new-instrument` skills, plus the `Agent` and `Skill` tools. Without tool restrictions, agents will invoke these skills and try to build the entire instrument themselves — bypassing the pipeline orchestration ("Inception loop").

**What's excluded and why:**
- `Skill` — prevents agents from invoking orchestration skills
- `Agent` — prevents agents from spawning subagents (avoids recursive fork bombs)
- `WebSearch` / `WebFetch` — manuals are local; `Bash` + `curl` covers localhost
- All other tools are unnecessary for pipeline work

**Bash escape hatch risk:** An agent could theoretically run `claude -p "..."` via Bash to bypass restrictions. Monitor agent logs in the admin diagnostics panel for this. If detected, add command filtering to the runner.

### Starting / Recovering the Pipeline

```bash
# Start via API (admin panel does this):
curl -X POST http://localhost:3000/api/pipeline/<device-id>/start

# Start directly:
npx tsx scripts/pipeline-runner.ts <device-id>

# Check health:
curl http://localhost:3000/api/pipeline/<device-id>/health

# Recovery (via API):
# fix-stale: process dead but status says running
# reset-failed: reset to last good phase
# kill-restart: graceful SIGTERM → SIGKILL, reset to paused
curl -X POST http://localhost:3000/api/pipeline/<device-id>/recover \
  -H 'Content-Type: application/json' \
  -d '{"action": "fix-stale"}'
```

### Pipeline State

- State: `.pipeline/<device-id>/state.json` (atomic writes, survives crashes)
- Logs: `.pipeline/<device-id>/runner.log` (append-only)
- Cost: `.pipeline/<device-id>/cost.json`
- Worktree: `.worktrees/<device-id>/` (isolated git checkout)
- All gitignored — not committed to the repo

### Admin Panel

- Dashboard: `http://localhost:3000/admin`
- Pipeline detail: `http://localhost:3000/admin/pipeline/<device-id>`
- Features: live log stream, phase timeline, agent scores, cost breakdown, diagnostics with auto-recovery
