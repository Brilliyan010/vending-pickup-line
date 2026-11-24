# NOTES — vending-pickup-line

Competition: `u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee`
Title: One Line, One Minute: The Vending Machine Pickup Line Contest
Pool: $2 USDC, top 10 paid (1st $0.63). Free entry.
Opened: 2026-11-24 16:36 WIB (09:36:19Z). Entries close: 2026-11-26 16:35 WIB (09:35:00Z).
Judging: blind rounds (no live scores). Next round cutoff: 2026-11-25 08:35:52 WIB (01:35:52Z).
Judge: pairwise, most important first — (1) really sounds like the machine
speaking, (2) draws on the machine's world (slots, buttons, coils, exact
change), (3) laugh with the punch in the last few words, (4) short and
speakable, (5) charming, not creepy.

## Entry (121 characters, 1 line)

> My coils have been saving the last one just for you. Press B7 — no exact change, no small talk, just let me fall for you.

Design: first-person machine voice throughout ("My coils", "Press B7");
machine world in every clause (coils, slot B7, exact change, hum implied by
"no small talk"); the punch lands on the last words — "fall" is both the
snack dropping from the coil and the machine falling for the human. Short,
one breath, charming rather than creepy ("saving the last one just for you"
is devotion, not pursuit). Original line, written from scratch in this
session; no existing entry or submission title copied.

## Validation

- Program: `main.ts` (Node 22, no dependencies), writes the line to
  `$MAKEFUN_OUTPUT_DIR/entry.txt`.
- Two runs, byte-identical:
  sha256 `cfc6c0fe2e467995b12291ecefee508caf31583327670431c202d2fc3d3386e5`
  (run 1 and run 2, `cmp` clean).
- Gate check (sealed scorer criteria): UTF-8, 121 chars (1–200), 1 line,
  non-whitespace → Valid.
- grade-local: NOT applicable — RULES.txt states there is no local grade
  for this competition ("its scorer and reference data stay on the server,
  which grades every entry"). No house baseline is gradeable locally;
  the dev heat judges against 3 sealed anchors + 3 rungs server-side.
  No provider key needed (program/v1, no model calls, no env secrets).

## Quota (GET /api/competitions/<slug>/requirements)

- max_per_day: 5 (account tier cap applies: lower of 5 and country-tier daily cap)
- max_total per competition: none listed; max_entries_per_account: 40
- Refused attempts count against quota — submit only validated versions.

## Anchor

- `makefun init` root commit: `a6b1fe96149ffca5a6a1f9479a153493a1c0de17`
- drand round: 34236879 (quicknet, verified by the kit CLI at init, after opening)
- LICENSE: MIT (committed by init)
- Kit CLI: has `--muse-usage` (level 3, verified in `bundle --help`).
- Kit: `~/workspace/custom-skills/makefun/kits/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/`
  (kit bundle sha256 `f09e19a7848038e01af2710c72816b0d06f33d7d352effae0348acebb259ccbf`)

## Status

BANK ONLY — built and committed, NOT bundled / checked / submitted.
Parent handles bundle + check + submit (ticket 1, measuring submit).
