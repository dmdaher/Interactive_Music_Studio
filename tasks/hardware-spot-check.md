# Hardware Spot-Check — 5 Tutorials on Real Fantom 08

These 5 tutorials were selected because they involve multi-step hardware interactions hardest to verify from manual alone: button sequences where press-vs-hold matters, screen parameters that may differ between manual and hardware, and multi-screen workflows.

**How to use:** Follow each tutorial step-by-step on your real Fantom 08. Mark each check as PASS or FAIL. Note any discrepancies.

---

## 1. `split-keyboard-zones` (10 steps)

**What it tests:** Core split workflow — press Split, set split point, assign tones.

### Pre-setup
- Load any scene (or start from INIT SCENE)
- Only Zone 1 should be active

### Step-by-step checks

| Step | Action | What to verify | PASS/FAIL |
|------|--------|---------------|-----------|
| 2 | Press Zone View | Zone View screen opens, shows Zone 1 covering full keyboard (A0–C8) | |
| 3 | Press Split button | **Split LED lights green.** Zone 4 activates automatically for lower range. Zone View shows 2 zones: Zone 1 (upper) + Zone 4 (lower). Zone 1 LED blue, Zone 4 LED amber. | |
| 4 | Hold [SPLIT] + press C4 key | Split point moves to C4. Zone 4 = A0–B3, Zone 1 = C4–C8. **No Enter needed — instant.** | |
| 5 | Press Zone 4 button | Zone 4 LED lights amber (selected). Zone 1 LED stays lit but dimmer/not selected. | |
| 6 | Press Bass category button | Tone list opens. First tone in Bass category — **is it "Acoustic Bass"?** (Tutorial claims this.) Scroll with Value dial to verify. | |
| 7 | Press Zone 1 button | Zone 1 LED lights blue (selected). Zone 4 LED stays lit amber. | |
| 8 | Press A.Piano category button | Tone list opens. First tone — **is it "Concert Grand"?** | |
| 9 | Press Write | Write LED lights red. Confirm dialog appears. Press Enter to save. | |
| 10 | Verify final state | Zone View shows: Zone 1 (Concert Grand, C4–C8) + Zone 4 (Acoustic Bass, A0–B3) | |

### Key questions
- Does pressing Split use Zone 1+4 specifically (not Zone 1+2)?
- Is the default split point C4 or somewhere else?
- Does hold-Split + press-key set split point instantly (no Enter)?

---

## 2. `four-zone-setup` (12 steps)

**What it tests:** Complex 4-zone creation with different key ranges.

### Pre-setup
- Load an INIT SCENE (or any blank scene)

### Step-by-step checks

| Step | Action | What to verify | PASS/FAIL |
|------|--------|---------------|-----------|
| 2 | Press Zone View | Shows Zone 1 only, full keyboard range | |
| 3 | Press Zone 1, then Bass category | Bass tones appear. **"Finger Bass" should be in the list** (may not be first). | |
| 4 | Hold [SHIFT] + press [SPLIT] | **Does this open KEY RANGE screen / ZONE EDIT?** Tutorial claims it opens key range editor for current zone. Set upper limit to B2 with Value dial. | |
| 5 | Press Zone 2 | **Does pressing an inactive zone button activate it automatically?** Zone 2 LED should light red. | |
| 7 | Press Zone 3 | Zone 3 activates. LED lights green. | |
| 9 | Press Zone 4 | Zone 4 activates. LED lights amber. Synth tone list — **"Saw Lead 1" should be in the list.** | |
| 11 | Press Write | Write LED red. Save dialog. Press Enter to confirm. | |
| 12 | Verify final state | Zone View shows 4 zones with correct key ranges and tone names. | |

### Key questions
- Does SHIFT+SPLIT open KEY RANGE / ZONE EDIT screen?
- Does pressing an inactive zone button (Zone 2, 3, 4) activate it immediately?
- Zone LED colors: 1=blue, 2=red, 3=green, 4=amber — correct?
- Are "Finger Bass", "Concert Grand", "Strings Sect 1", "Saw Lead 1" findable in their respective categories?

---

## 3. `sampling-basics` (9 steps)

**What it tests:** Full sampling workflow — enter sampling, record, preview, assign to pad.

### Pre-setup
- Have a microphone or line source connected (or plan to sample internal sounds)

### Step-by-step checks

| Step | Action | What to verify | PASS/FAIL |
|------|--------|---------------|-----------|
| 2 | Press Sampling button | **Sampling Menu appears** with options: "To Pad", "To Keyboard", "To Storage". Touch "To Pad" — Sampling Standby screen opens. **Sampling button has NO LED** (tutorial uses `active` only, no `ledOn`). | |
| 3 | Turn E1 knob | **Does E1 switch between TRIG/IN modes?** Or does it control something else on this screen? | |
| 4 | Turn E2, E4 | E2 selects input source (MIC/LINE). **E4 adjusts recording level.** Level meter responds in real time. | |
| 5 | Touch \<START\> on display | Recording begins. Screen shows "NOW SAMPLING". Time counter starts. | |
| 6 | Touch \<STOP\> on display | Recording stops. Time counter stops. Preview/confirmation appears. | |
| 7 | Press E1 (PREVIEW), then E6 (OK) | **E1 plays back the sample. E6 accepts.** Also verify: E4 = RETRY, E5 = CANCEL. | |
| 8 | Verify pad assignment | Sample Pad screen shows sample on Pad 1. Press Pad 1 — **Pad 1 LED lights green** and sample plays. | |
| 9 | Press Exit | Returns to home screen. | |

### Key questions
- Does the Sampling button open a menu first, or go directly to standby?
- E-knob assignments on Sampling Standby: what does each E1-E6 control?
- E-knob assignments on preview dialog: E1=PREVIEW, E4=RETRY, E5=CANCEL, E6=OK — correct?
- Does Pad 1 LED light green when sample is assigned?
- Is recording started/stopped via touchscreen \<START\>/\<STOP\> buttons, or physical transport buttons?

---

## 4. `arpeggio-setup` (9 steps)

**What it tests:** Arpeggiator configuration — open, change style, enable hold, enable per-zone.

### Pre-setup
- Load any scene with a synth tone

### Step-by-step checks

| Step | Action | What to verify | PASS/FAIL |
|------|--------|---------------|-----------|
| 2 | Press Arpeggio button | **Arpeggio LED lights green.** Arpeggio screen opens showing parameters: Style, Hold, Variation, Motif, etc. | |
| 3 | Turn Value dial | **Style changes** in the top bar (P001, P002, P003...). Verify 128 styles exist. | |
| 4 | Cursor Down to Motif, turn Value dial | Motif options: UP, DOWN, UP&DOWN, RANDOM, NOTE ORDER, GLISSANDO, CHORD, AUTO1, AUTO2, PHRASE — **verify available options match.** | |
| 5 | Press E1 function button | **Does E1 toggle Hold ON/OFF?** Or is Hold changed via cursor + Value dial? | |
| 6 | Cursor Up to Variation, turn Value dial | Variations cycle through available options for current style. | |
| 7 | Press Exit, then Zone View, then select Zone 1, press Arpeggio | **Does pressing Arpeggio button while in Zone View toggle ARP on/off for the selected zone?** ARP indicator should appear in Zone View. | |
| 8 | Hold a chord, press Play | Arpeggio plays notes in sequence at scene tempo. Play LED lights green. | |
| 9 | Press Stop, then Exit | Playback stops. Returns to home screen. Arpeggio LED turns off. | |

### Key questions
- Does pressing Arpeggio open the screen AND enable the arpeggiator, or just open the screen?
- How is Hold toggled? E1 button? Or navigate + Value dial?
- How is ARP enabled per-zone? Press Arpeggio while zone is selected in Zone View? Or different method?
- Does the ARP indicator appear in Zone View when enabled?
- Style count: exactly 128?

---

## 5. `effects-routing` (11 steps)

**What it tests:** Effects signal flow, per-zone MFX, send levels, master effects.

### Pre-setup
- Load a scene with at least 2 zones (or create one)

### Step-by-step checks

| Step | Action | What to verify | PASS/FAIL |
|------|--------|---------------|-----------|
| 2 | Press Zone 1 | Zone 1 LED lights blue. Zone View shows zone details. | |
| 3 | Press Master FX button | **Effects Edit screen opens.** Shows INTERNAL tab with routing diagram. Master FX button has **no LED** (tutorial uses `active` only). | |
| 4 | Select Zone 1 in routing diagram | Zone 1's MFX block highlights. Shows current MFX type. | |
| 5 | Touch MFX EDIT area | **Zone Effects zoom screen opens** showing: MFX type, MFX on/off, Zone EQ settings, send levels. | |
| 6 | Navigate to Chorus/Reverb send | Can adjust Chorus Send and Reverb Send values (0–127). | |
| 7 | Press Zone 2 button | Zone 2 selected. Its independent MFX settings shown. Zone 2 LED lights red, Zone 1 LED stays lit blue. | |
| 8 | Enable MFX for Zone 2 | MFX can be toggled on. MFX type can be changed (e.g., to Compressor). | |
| 9 | Navigate to Master FX section | Master Comp, Master EQ, IFX1, IFX2 visible in routing diagram. | |
| 11 | Press Exit | Returns to home screen. | |

### Key questions
- Does pressing Master FX button open Effects Edit directly, or through a menu?
- Signal flow order: Zone → MFX → Zone EQ → IFX1/IFX2 → Chorus → Reverb → Master Comp → Master EQ → TFX → Output — does this match what the screen shows?
- Can each zone have completely independent MFX settings?
- Is there a UTILITY option to initialize zone effects?
- IFX1/IFX2 — are these visible in the routing diagram? What is their default state (Thru)?

---

## Summary of Critical Verifications

| Tutorial | Most important thing to verify |
|----------|-------------------------------|
| split-keyboard-zones | Split uses Zone 1+4, hold-Split + key sets split point instantly |
| four-zone-setup | SHIFT+SPLIT opens key range, pressing inactive zone activates it |
| sampling-basics | E-knob assignments on sampling/preview screens match tutorial |
| arpeggio-setup | How Hold is toggled, how ARP is enabled per-zone |
| effects-routing | Master FX button access path, signal flow diagram accuracy |

**After checking:** Update this file with PASS/FAIL results and any notes about discrepancies. File any bugs found as issues in `tasks/todo.md`.
