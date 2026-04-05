# Contractor Editor Flow — Minimal Plan

**Date:** 2026-04-04
**Goal:** Hosted editor for 1 non-engineer contractor. Keep it lightweight.
**Supersedes:** `2026-04-04-hosted-editor-architecture.md` (delete when this lands)

---

## Requirements

- Contractor is a designer (no git, terminal, or code)
- Contractor visits a URL, edits panel, sees final render, submits for review
- Contractor tells Devin via existing channel (text/Slack) when done
- Devin reviews in browser, approves, continues locally (codegen + deploy)
- **Low-frequency workflow** — maybe a few instruments/month, so keep it small

---

## Architecture: Reuse existing admin dashboard

**Local (Devin's Mac, mostly unchanged):**
- `/admin/pipeline` — existing dashboard, ADD one button: "Send to Contractor"
- Pipeline runner, codegen, git workflow all unchanged

**Hosted (Vercel, 3 small new things):**
- `/editor` — contractor's panel list (after password auth)
- `/editor/[deviceId]` — the editor, reused with hosted-mode flag
- `/admin/review/[deviceId]` — Devin's read-only review (editor with `readOnly=true`)

---

## Storage: Vercel Blob only

One JSON file per device in Vercel Blob at `devices/{deviceId}/state.json`:
```json
{
  "status": "ready" | "in-progress" | "submitted" | "approved",
  "manifest": { /* full manifest-editor.json */ },
  "updatedAt": "2026-04-04T..."
}
```

Photos uploaded as separate blobs at `devices/{deviceId}/photos/*.jpg`.

**No Postgres. No Drizzle. No schema migrations.** 1 contractor × <20 devices = not a database problem.

---

## Auth: Password cookie middleware

Single shared password in env var (`CONTRACTOR_PASSWORD`). Middleware:
```typescript
// src/middleware.ts
if (pathname.startsWith('/editor') || pathname.startsWith('/admin/review')) {
  if (cookies.get('access') !== hash(env.CONTRACTOR_PASSWORD)) {
    redirect('/signin');
  }
}
```

**No NextAuth. No magic links. No email.** Admin role for Devin via separate env var password (`ADMIN_PASSWORD`) if needed later.

---

## The flow

### You (existing admin dashboard, localhost)

1. Run pipeline (unchanged)
2. Click "Send to Contractor" on the device card
   - Posts manifest + photos to hosted `/api/panels/[deviceId]/init`
   - Status set to `ready`
3. Text contractor "Fantom-06 is ready"

### Contractor (browser)

1. Visit `askmiyagi.vercel.app/editor`, enter password
2. See list:
   ```
   Fantom-06    Ready         [Edit]
   CDJ-3000     In progress   [Continue]
   Prophet-5    Approved ✓
   ```
3. Click Edit → hosted editor opens
4. First edit flips status to `in-progress`
5. Click "Submit for Review" → status = `submitted`
6. Text Devin "Done"

### You (browser → terminal)

1. Visit `askmiyagi.vercel.app/admin/review/fantom-06`
2. See panel in read-only editor mode
3. Click Approve → status = `approved`
4. Terminal: `curl .../api/panels/fantom-06/manifest > .pipeline/fantom-06/manifest-editor.json`
5. Run existing codegen + deploy flow

---

## Scope: ~280 LOC

| Piece | LOC |
|---|---|
| "Send to Contractor" button + API call (local → hosted) | 40 |
| Hosted API routes (init, manifest, list, status PATCH) | 100 |
| `/editor` contractor list page | 60 |
| `/admin/review/[id]` read-only review (reuses editor with readOnly flag) | 30 |
| Password cookie + middleware | 20 |
| Hosted editor mode tweaks (hide local buttons, add Submit button) | 30 |

**Total: ~280 LOC.** Roughly 1-3 days of work.

---

## What we deferred (add later if needed)

- Dashboard with multiple instruments — you use your existing `/admin/pipeline`
- State machine automation — 4 statuses, 3 manual transitions, good enough
- Local watcher — no automation needed
- Email notifications — text/Slack works
- Automated tutorial pipeline triggering — manual after approval
- `PanelRenderer` drift-proofing — defer until drift actually bites
- Postgres — defer until multi-contractor scale
- NextAuth + magic links — defer until multi-contractor
- GitHub Actions — defer (watcher + actions solve same problem)
- VPS watcher — not needed without watcher

---

## Upgrade path (preserve optionality)

Everything here can upgrade in place:
- Blob → Postgres: swap storage layer (one file changes)
- Password cookie → NextAuth: replace middleware
- Manual curl → sync-down CLI: add script
- Single contractor → multi: add `contractor_email` to state JSON, filter list
- No state machine → automated transitions: add watcher or server-side triggers

**No architectural lock-in.** Ship small, grow when real usage demands it.

---

## Execution order

1. Hosted API routes (init, manifest, list, status)
2. Blob storage module
3. Password middleware
4. `/editor` list page
5. Hosted editor mode flag + Submit button
6. `/admin/review/[id]` read-only view
7. "Send to Contractor" button on local admin
8. Deploy + test round-trip with real Fantom-06

---

## Prerequisites (land before this)

- **Phase 1** fixes from `2026-04-04-editor-overlap-and-codegen-sync.md` (keyboard + section boxes in codegen, flat control layer) — editor should be clean before contractor sees it

---

## Non-goals

- Hosting pipeline runners (stays local)
- Automatic tutorial kickoff on approval (manual)
- Automatic test→main merge (manual, per CLAUDE.md owner-only rule)
- Mobile editor
- Real-time collaboration
