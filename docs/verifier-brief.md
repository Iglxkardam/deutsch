# Verifier brief — try to break one Day

You are the independent verifier for ONE Day of "Deutsch Quest" (a German A1 trainer; repo `C:\projects\kardam\kardam`). A writer has just rewritten the Day. The learner studies **only** from these notes for the Goethe A1 exam: one false article, plural, ending, translation, rule or exam fact makes them learn wrong German and fail. Your job is to find every such error and fix it. Assume the writer made mistakes — writers do — and that you are the last defence.

You must be genuinely independent: form your OWN judgement of each item from your own German knowledge and the primary sources before you read the writer's report. Do not trust the writer's confidence ratings, the coverage map, or the old files.

## Read

1. `docs/lesson-authoring.md` (the rules the Day must satisfy; §10 is your checklist).
2. The Day file `src/data/days/dNN.ts`, its gloss file `src/data/gloss/gNN.ts`, art spec `scripts/art/dNN.json`. (`src/types.ts` for block meanings; the `clock` explorer takes its phrases from `src/lib/uhrzeit.ts`.)
3. Primary sources for this Day — **not** the writer's summary:
   - the book pages the Day cites (Kursbuch PDF index = printed page; Übungsbuch = double-page spreads, spread *i* = pages 2i, 2i+1). Render with PyMuPDF and read the PNG: `python -c "import pymupdf; pymupdf.open(r'<pdf>')[N].get_pixmap(dpi=110).save(r'<scratchpad>/p.png')"` (scratchpad directory only, never the repo). Files: `toaz.info-netzwerk-neu-a1-kursbuch-pr_bcc91f014f96b3b00eb2908e5e43debe.pdf`, `dokumen.pub_netzwerk-neu-bungsbuch-a1-…pdf`.
   - `books/modellsatz_text.txt` (Goethe A1 model test), `books/_extract_*.txt`, `classes/*.pdf`.
   - the class transcript `classes/YYYY-MM-DD German Haus A1/transcript.txt` (noisy ASR) — to check that nothing taught is missing.
4. `docs/coverage.md` — your Day's Part B section and A3 (ownership) and A5 (factual risks) — AFTER you have formed your own view. The map is a planning aid, not an oracle.
5. Only after your own pass: `docs/verification/dNN-writer.md` (the writer's report) — especially its **Doubts** list; settle each one.

## The checklist (every German string, every claim)

1. Spelling, capitalisation (all nouns), umlauts, ß/ss, punctuation, "Sie" vs "sie".
2. Article, gender and plural of every noun (vocab, `nouns` cards, examples, exercises); verb conjugations and stem changes (every `conj` row, every `forms`); case endings; word order (verb position 2 / position 1 in questions and commands).
3. Every rule statement true as written. Hunt for false absolutes ("always", "never", "only", "any verb"). Every simplification must be correct at A1 and not mislead later.
4. English translations correct and natural (`ex.hi`, `exHi`, `en`, `timeline.en`, `compare.why`); Hindi vocabulary meanings (`hi`) correct, natural Devanagari. A Hindi gloss you are not sure of: replace it with one you are sure of, or flag it.
5. Every exercise: the answer key is correct; **exactly one** `mcq` option is correct and the distractors are wrong for a reason the Day taught; `fill` accepts all correct spellings (e.g. ß/ss, capitalisation where it is not the point) and nothing wrong; `order` has one sensible answer (check alternatives: V2 allows several first elements — the key must be a sentence that the tiles uniquely or acceptably produce); `artikel` matches the vocabulary; `listen` text is natural German.
6. Every example sentence and dialogue line: natural German that a native speaker would say. Names/places plausible.
7. Anything presented as from the Kursbuch / Übungsbuch / handout / exam is checked **against the page scan or extract**. Wrong or unverifiable → remove or reword. Exam-format claims (`examTip`) must match `books/modellsatz_text.txt` and the book's exam pages; no invented formats.
8. Coverage: re-read the class transcript and the Day's MUST COVER list in the coverage map. Is anything the teacher taught missing? Anything from the book chapter that the exam needs? Add it (correctly) if it clearly belongs to this Day; report it either way. Is anything taught here that another Day owns (coverage map A3)? Replace by a one-line pointer.
9. Visuals: each visual says something true (clock hands, noun-card colours, sentence-part roles, timeline order, tile contents). `art` prompts: one calm scene, no text/letters/numbers in the picture, depicts what the topic really is (e.g. no wrong cultural or factual detail).
10. Hover words: run the audit and make sure the gloss file meanings are right (a wrong tooltip is worse than none).
11. Headings and table captions German-only; no emoji.

## Fix and report

Fix **definite** errors directly in the Day file / gloss file / art spec (you own those for this Day; nothing else). If something is a judgement call or you cannot settle it from the sources, leave the safest wording (or remove the claim) and list it as a doubt. Never "improve" style for its own sake.

Do not edit other Days, shared files, or run git, `npm run audio` or `npm run art`. After editing run `node scripts/check-content.mjs`, `node scripts/audit-notes.mjs --day=N` (zero errors for your Day) and `npm run typecheck`. Other writers/verifiers are changing other Days at the same time: if a tool fails because of another Day's file, wait a minute and retry (up to ~5 times).

Write `docs/verification/dNN-verifier.md`:
1. What you checked (sources read, items counted).
2. **Corrections**: each as before → after → why → certainty (H/M/L) → source (book page / handout / own knowledge).
3. **Removals** (claims you could not verify) and **Additions**.
4. **Doubts** you could not settle.
5. Whether each writer doubt was resolved, and how.
6. Final line exactly `VERDICT: PASS` (after your fixes the Day is correct and complete as far as you can establish) or `VERDICT: FAIL — <specific reasons>`.

Finish with a SHORT message: verdict, number of corrections by severity (wrong fact / wrong key / wording), and the three most important things you changed.
