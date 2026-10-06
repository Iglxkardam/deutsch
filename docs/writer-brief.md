# Writer brief — rewrite one Day

You are rewriting ONE Day of "Deutsch Quest" (a German A1 trainer; repo `C:\projects\kardam\kardam`). The learner attends a daily online class (Netzwerk neu A1, teacher Surbhi) and studies **only** from these notes for the exam. If a note is wrong they learn wrong German and fail. That is the single most important fact about this job. Read it twice.

**Day N = the class of that date** (d01 = 08.09 … d12 = 24.09, 2026). Eleven other writers are rewriting the other Days at this very moment.

## 1. Read, in this order (all of it)

1. `docs/lesson-authoring.md` — the contract (rules, block catalogue, data format, design rules, checks, what "done" means). Follow it exactly.
2. `docs/coverage.md` — **Part A** (A1 chapter map, A2 exam relevance, A3 ownership table, A4 duplicates, **A5 factual risks — read every row**) and **your Day's section in Part B** (class pages, TAUGHT IN CLASS, MUST COVER, DO NOT TEACH HERE, exam relevance, visual ideas).
3. Your Day's current file `src/data/days/dNN.ts`. For Days 1–7 the old files are organised by topic, not by class, so content for your class may sit in other `d0X.ts` files — Part B says where. **You may read old files and reuse good material, but never edit any Day file except your own**, and never rely on another Day's current content (it is being rewritten): rely on the ownership table and the DO NOT TEACH HERE list.
4. `src/types.ts` (the block types) and `src/data/days/d12.ts` (a finished rich Day, as a style reference — its *content* is also being re-verified, do not copy facts from it).
5. The class transcript `classes/YYYY-MM-DD German Haus A1/transcript.txt` (noisy ASR; use it for WHAT was taught and in what order).
6. The book pages. The Kursbuch PDF is `toaz.info-netzwerk-neu-a1-kursbuch-pr_bcc91f014f96b3b00eb2908e5e43debe.pdf` (PDF index = printed page); the Übungsbuch is `dokumen.pub_netzwerk-neu-bungsbuch-a1-…pdf` (double-page spreads: spread *i* holds printed pages 2i and 2i+1). Render pages with PyMuPDF and read the PNG with the Read tool (`python -c "import pymupdf; pymupdf.open(r'<pdf>')[N].get_pixmap(dpi=110).save(r'<scratchpad>/p.png')"`; use your scratchpad directory for images, never the repo). **Read every book page your Day's section lists**, and look at the Lernwortschatz lists for your chapter. Also the handouts `books/_extract_*.txt`, `books/modellsatz_text.txt` (Goethe A1 model test) and `classes/*.pdf` where Part B points at them.

## 2. What you produce

Only these files (create/overwrite):

- `src/data/days/dNN.ts` — the rewritten Day: `look: 'rich'`, `hero: 'dNN-hero'`, sections of notes using the visual blocks where they teach, vocabulary, dialogue (if the class had one), 30–50 exercises, an `examTip` that is **true** (see below).
- `scripts/art/dNN.json` — a hero (`dNN-hero`) plus at most two more scenes; see guide §7.
- `src/data/gloss/gNN.ts` — hover meanings for German words that appear in your Day but are not vocabulary entries (guide §8).
- `scripts/audit-names.d/dNN.txt` — names of people/cities/companies in your Day (one per line, lower-case).
- `docs/verification/dNN-writer.md` — your report (§5 below).

Touch nothing else: not other Days, `types.ts`, components, styles, `curriculum.ts`, `glossary.ts`, build scripts, `package.json`. No git commands. Do not run `npm run audio` or `npm run art`.

## 3. How to decide the content

- **TAUGHT IN CLASS** items must all be in your Day, correct and complete — including what the teacher explained in English/Hindi that the learner would otherwise only have in their handwritten notes.
- **MUST COVER** items — including the GAP items (book/exam syllabus the class did not teach) — must all be in your Day. These make the notes sufficient so the learner needs no other source.
- **DO NOT TEACH HERE** items belong to another Day: write a one-line pointer ("endings: see Tag 5"), nothing more. A fact is taught once, on its owner Day.
- Vocabulary for your Day = words the class used/taught that day + the book's Lernwortschatz items assigned to your Day. Do not rely on grepping other Days to dedupe (they are changing); the ownership table decides. The orchestrator runs a final cross-Day duplicate sweep.
- If the transcript and the book disagree, the book and standard German win. If the teacher was loose or wrong, teach the correct version (do not mention the teacher in the notes; record it in your report).
- **Verify the factual-risk rows (A5) that touch your Day against the book scan and your own knowledge before you act on them** — the coverage map is a good planning document, not an oracle.
- Never present text as "from the Kursbuch" unless you read it on the page. Never invent quotes. Dialogues/examples you write yourself must be correct, natural A1 German.
- When you are not sure a German form, translation or rule is right: leave it out. A gap you report is better than a wrong fact the learner memorises.
- Exam facts: describe the real Goethe-Zertifikat A1 / Start Deutsch 1 format only as shown in `books/modellsatz_text.txt` and the Übungsbuch exam pages. Do not invent task formats. (The class may also have practised telc-style tasks; if you mention them, say "exam-style practice", not a specific official format.)

## 4. Quality bar for the notes themselves

- Visual and enjoyable, but never decorative: every visual block must teach something that prose cannot (guide §7). No emoji. Headings and table captions German-only.
- Concise. If a sentence does not help the learner with the class, the book or the exam, cut it.
- Exercises: every answer key must be correct; exactly one correct `mcq` option; `order` tasks with a single sensible answer; `fill` accepting every correct spelling; no trick questions the notes did not teach. Cover every topic of the Day and the real exam task types for that topic.
- Hindi vocabulary meanings (`hi`) in natural Devanagari, English in `en`.

## 5. Checks, then your report

Run `node scripts/check-content.mjs`, `node scripts/audit-notes.mjs --day=N` and `npm run typecheck`. For your Day: **zero audit ERRORS**; every WARNING fixed or justified; hover words added to your gloss file (the audit lists them); check-content clean for your Day (ignore "missing-clip" and problems that belong to other Days). The checks bundle ALL Days, so another writer's half-saved file can make a tool fail briefly: wait a minute and retry (up to ~5 times) before reporting a problem. The audit may list `vocab-dup` pairs involving other Days' *old* files — ignore those, they are settled at the end.

Write `docs/verification/dNN-writer.md` containing:
1. Sources actually read (book pages, transcript parts, handouts).
2. **Coverage checklist**: every TAUGHT IN CLASS / MUST COVER / GAP item → ✔ where it is in the Day, or ✘ + why.
3. **Corrections**: every fact, rule, translation or example from the old file or the teacher that you changed or removed, with before → after → why → how sure you are (H/M/L).
4. **Doubts**: anything you could not settle (the verifier will look at these first).
5. **Teacher/standard-German differences** you resolved.
6. The A5 rows you checked and your finding for each.

Finish with a SHORT message: the Day's sections, counts (vocab, exercises, visuals, figures), the 5 most important corrections, and any problem you could not resolve.
