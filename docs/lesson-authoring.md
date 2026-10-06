# Lesson authoring guide

How a Day in Deutsch Quest is written, checked and rendered. Everyone who writes or reviews a lesson — a person or an agent — follows this.

## 0. Why this exists (the learner's words, made rules)

The learner studies German for the Goethe-Zertifikat A1 and for a B1 later. These notes are their **only** study material: they attend the class, but they use this app instead of the books. So:

1. **Nothing false.** "If you put wrong, I will learn wrong and fail, or I will not be able to write correct German." One wrong article, plural, ending, translation or rule is a real harm. When unsure, leave it out or verify it — never guess.
2. **Nothing duplicated.** A fact is taught once, on the Day that owns it. Later Days link to it ("see Tag 4") instead of re-teaching.
3. **Nothing missing.** Each Day must contain everything the learner needs from the class **and** the book chapter **and** the exam syllabus for that topic, so they never have to hunt in ten places.
4. **Enjoyable.** Notes are visual: diagrams, colour-coded cards, a few illustrations. But "no slop": every visual must teach something. No emoji, no decoration for its own sake.

## 1. Sources and the order of trust

Highest trust first:

1. **Standard German (Hochdeutsch) that you are certain of.** If the class, the book scan and your own knowledge disagree, correctness wins.
2. **The Netzwerk neu A1 Kursbuch and Übungsbuch** (scans in the repo root, no text layer — render pages with PyMuPDF and read the PNG; printed page numbers differ from PDF indexes, find the offset). Page 4 of the PDF is the contents page with each chapter's learning goals (Wortschatz, Grammatik, Aussprache, Strategie, Landeskunde). The Wortliste is around printed pp. 162–174 (bold = required for the exam).
3. **Teacher handouts**: `books/_extract_*.txt`, `books/modellsatz_text.txt` (Goethe A1 model exam), `classes/*.pdf`.
4. **The class transcript** (`classes/YYYY-MM-DD German Haus A1/transcript.txt`). It is *ASR output*: Hindi/English/German mixed, German words mangled, repetition loops. It tells you **what was taught and in what order** — it is not a source of correct spelling. The teacher also simplifies and occasionally misspeaks (e.g. calling the U-Bahn an inter-city train; it is the S-Bahn that links suburbs). When the teacher is loose, teach the correct version.
5. **docs/coverage.md** — which Day owns which syllabus item (see §3).

Never quote a Kursbuch dialogue or exercise "verbatim" unless you have read it on the page scan. If you cannot verify the wording, write your own clearly-correct example instead, and do not claim it comes from the book.

## 2. Workflow for one Day

**Writer**

1. Read `docs/coverage.md` (your Day's section + the shared sections), the current `src/data/days/dNN.ts`, the class transcript, and the book pages listed for your Day.
2. Decide the sections (usually 4–7). Cover everything under MUST COVER; do not teach anything under DO NOT TEACH HERE (link to the owning Day instead).
3. Rewrite the Day in the rich format (§5–§7). Keep what is correct and useful; fix or delete what is not.
4. Resolve every audit finding for your Day (§9), add tooltip words to your gloss file (§8), write your art spec (§7).
5. Write `docs/verification/dNN-writer.md`: what you changed, what you removed and why, items you are unsure about, differences between the teacher and standard German, and the coverage checklist with ✔/✘ per MUST COVER item.

**Verifier** (a different agent, who has not seen the writer's reasoning): see §10. A Day is not finished until a verifier has signed it off.

## 3. Completeness and ownership

- `docs/coverage.md` assigns every grammar rule, strategy and vocabulary theme to exactly one Day. Teach what your Day owns; point to the owner for the rest.
- Book items the class skipped but the chapter requires ("GAP" items) are written into the Day that the coverage map assigns them to, so the learner is not missing anything the exam may ask.
- Cross-reference as plain text, e.g. "the verb endings from **Tag 2**", not a re-teach.

## 4. Duplicates

- A vocabulary entry (`de` string) exists in **one** Day's `vocab` — the **earliest** Day that teaches it. If an earlier Day already has it, delete it from yours (you may still use the word in notes, examples and exercises).
- Do not repeat a rule, tip or table that another Day owns. `npm run audit` flags near-duplicates; fix every flag or justify it in your report.
- Do not repeat an exercise question that exists on an earlier Day; replace the later one with a new question testing the same skill.

## 5. Data format

A Day is `src/data/days/dNN.ts` exporting a `Day` (`src/types.ts` is authoritative).

```ts
export const d12: Day = {
  id: 12, kapitel: 5,
  title: '…',                 // German title
  goal: '…', focus: '…',      // goal: English, what the learner can do; focus: German terms · separated
  minutes: 60, examSkill: 'Hören' | 'Lesen' | 'Schreiben' | 'Sprechen',
  look: 'rich', hero: 'dNN-hero',   // always set both for a rewritten Day
  notes: [ … blocks … ],
  vocab: [ … ], dialogue: { … }, exercises: [ … ], examTip: '…',
}
```

### Note blocks

Text blocks (English prose with **bold German terms**; the bold part becomes a highlighted, hoverable German word):

| block | use |
| --- | --- |
| `{ t: 'h', text: '1 · Titel' }` | Starts a new section card. **German only**, form `N · Title`. |
| `{ t: 'p', text }` | A paragraph. |
| `{ t: 'rule', title: 'Regel — …', body }` | The thing to memorise. Title is `Label — headline` (`Regel`, `Strategie`, `Merke`). |
| `{ t: 'tip', text }` / `{ t: 'warn', text }` | Helpful note / common-mistake warning. |
| `{ t: 'sticky', text }` | "Your turn" self-test, last block of the Day. |
| `{ t: 'table', caption, head, rows, say? }` | A reference table. `caption` **German only**. If `say` is given it needs **exactly one phrase per row**, sharing a word with that row. |
| `{ t: 'ex', items: [{ de, hi }] }` | Example sentences. `de` German; **`hi` is the English translation** (historical field name — not Hindi). |

Visual blocks (rich Days only — use them where they teach):

| block | use | machine-checked? |
| --- | --- | --- |
| `{ t: 'figure', art, alt, caption? }` | An illustration from `public/art/<art>.jpg` (§7). | — |
| `{ t: 'timeline', steps: [{ icon, de, en }] }` | A sequence (a day, steps of a procedure). Icons: `IconName` in types.ts. | — |
| `{ t: 'clock', mode: 'formal', items: [{h, m, de}] }` | Analog clocks with the 24h reading. | — |
| `{ t: 'clock', mode: 'explorer', say: ALL_INFORMAL_TIMES }` | The halb/vor/nach explorer (Tag 12 owns it; do not repeat). | generated from rules |
| `{ t: 'preps', items: [{ word, icon, use, de, en }] }` | Cards for prepositions. | — |
| `{ t: 'sentence', items: [{ parts: [{ text, role }], en }] }` | Colour-coded sentence parts (`subj verb obj time place neg other`) to show word order and case. | — |
| `{ t: 'conj', verb, en, rows: [{ pron, stem, ending }], note? }` | One verb conjugated; stem muted, ending highlighted. `stem + ending` must be the real form. Six rows: ich, du, er / sie / es, wir, ihr, sie / Sie. | endings checked |
| `{ t: 'compare', rows: [{ wrong, right, why }] }` | Common mistakes. `wrong` is shown struck through — only include mistakes learners really make. | — |
| `{ t: 'nouns', items: [{ art, noun, pl?, en }] }` | Gender cards (der blue / die pink / das green). | against vocab |
| `{ t: 'numbers', items: [{ n, de }] }` | Number tiles. | **de checked against n** |
| `{ t: 'tiles', cols?, items: [{ big, small?, sub?, say? }] }` | Big-glyph grid: letters, weekdays, months, countries. | — |

### Vocabulary entries

```ts
{ de: 'das Brot', hi: 'रोटी, ब्रेड', en: 'bread', type: 'noun', gender: 'n', pl: 'die Brote', ex: 'Ich kaufe ein Brot.', exHi: 'I am buying a bread.' }
```

- `de` for nouns includes the article. `gender` `m|f|n|pl`. `pl` **must start with `die `**; for nouns with no plural (Milch, Salz, Wasser) **omit `pl`** — never `'—'`.
- `hi` is natural Hindi in Devanagari; `en` English. `exHi` is the English translation of `ex` (historical name).
- Irregular or stem-changing verbs: give `forms: 'ich … · du … · er …'`.
- Types: `noun verb adj adv phrase num prep pron other`. Do not add bare function words (der, und, ist) as vocab.
- Capital letters matter: `sie` and `Sie` are different entries.

### Exercises

`mcq` (`options`, `a` = index), `fill` (`a` = list of accepted answers), `order` (`words`, `a` = the sentence; **`hi` is the English prompt**), `artikel` (`noun` without article, `a` der/die/das), `listen` (`text` spoken, `a` accepted spellings). Every exercise needs a `why`. An exercise's answer key must be right: a wrong key teaches wrong German. 25–50 exercises per Day, spread over the Day's topics and the exam format.

## 6. Writing rules

**Readability is a requirement, not a nicety. The learner must be able to scan a rule in seconds — no essays.**

- A paragraph is at most ~2 short sentences (about 220 characters). Blank line = new paragraph. Lines starting with `- ` make a bullet list (consecutive lines form one list); this works inside `p`, `rule`, `tip` and `warn` text.
- A `rule` is: one short lead sentence (the rule itself) + either 2–5 bullets (one fact each: an exception, a condition, a contrast) **or** a table/`conj`/`nouns`/`sentence` block placed right after it. Never a wall of prose.
- Anything with a **paradigm** (articles per gender, verb endings, plural patterns, time words, prepositions + case) goes in a table, `conj`, `nouns` or `sentence` block — never described in a sentence.
- Bold only the German term being taught, never whole phrases and never more than ~3 per sentence. Put examples in `ex` blocks (or `compare`), not inline in running prose — at most one tiny inline example per bullet.
- Keep every exception and every "only/not/always/usually" qualifier — shortening must not change the claim.

- **English explanations, German examples.** Headings and table captions are German **only** (so every word is hoverable). Rule titles may be `Regel — English headline`.
- Do not write "always"/"never" unless it is true in standard German. State exceptions.
- No emoji anywhere. No filler ("Great job!"). Short paragraphs; lead with the example.
- Section order: concept → visual → examples → pitfalls (`compare` / `warn`) → try-it (`sticky`) last.
- Be complete but concise: if a sentence does not teach something the learner needs for the class, the book or the exam, cut it.
- Dialogue / examples you invent must be correct, natural A1 German with plausible names and places.

## 7. Design rules ("no slop")

- One idea per section. Each visual earns its place by showing something text cannot (word order, gender, ending, time, direction).
- Use a `figure` sparingly: the hero, plus at most two more in the whole Day, only where a picture helps the topic. Never stack two figures.
- Prefer `sentence`, `conj`, `nouns`, `compare`, `numbers`, `tiles`, `timeline`, `clock` over a plain table when they fit; keep a `table` for genuine reference grids.
- Illustrations (`scripts/art/dNN.json`):
  ```json
  { "d05-hero": { "ratio": "16:9", "prompt": "…one clear scene specific to the lesson…" } }
  ```
  Names are `dNN-<slug>`; the hero is `dNN-hero`. Prompts describe a single calm scene; **no text, letters or numbers in the image** (the generator garbles them). The shared style (cream / teal / terracotta flat vector) is added automatically. Do not run the generator — the orchestrator does.

## 8. Hover meanings (glossary)

Every German word the learner hovers should show its English meaning. Vocabulary words are covered automatically; **inflected forms, declined adjectives, compounds and plurals are not**. Add them to `src/data/gloss/gNN.ts`:

```ts
export const g05: Record<string, Gloss> = {
  'bestimmte': { en: 'definite', note: 'bestimmt, declined' },
}
```

Keys lower-case. Be certain of every meaning. Names of people/cities/companies go (one per line, lower-case) in your own `scripts/audit-names.d/dNN.txt` instead. `node scripts/audit-notes.mjs --day=N` lists the words that would show no tooltip.

## 9. Checks you must run (and what "done" means)

```
node scripts/check-content.mjs          # structure, table/say, gender, plural
node scripts/audit-notes.mjs --day=N     # numbers, noun genders, endings, exercises, duplicates, tooltips
npm run typecheck
```

Done = no ERRORS in the audit for your Day, every WARNING either fixed or explained in your report, `check-content` clean apart from "missing-clip" (audio is rendered later by the orchestrator), typecheck clean for your files.

**Do not** run `npm run audio` or `npm run art`, edit `curriculum.ts`, `glossary.ts`, `types.ts`, components or styles, or run git commands. If typecheck fails only in files you do not own, ignore it and say so.

## 10. Verifier checklist

The verifier tries to **break** the Day. For every German string and every claim:

1. Spelling, capitalisation, umlauts, ß/ss.
2. Article, gender, plural of every noun; verb conjugations and stem changes; case endings; word order.
3. Every rule statement is true as written (no false "always/never"; exceptions stated).
4. English translations correct and natural; Hindi vocabulary meanings correct.
5. Every exercise: the key is right, exactly one option is right (mcq), `order` has a unique sensible answer, `fill` accepts the right spellings.
6. Every example and dialogue line is natural German a native speaker would say.
7. Anything claimed to come from the Kursbuch/Übungsbuch/handout is checked against the page scan or extract; unverifiable claims are removed or reworded.
8. Coverage: re-read the class transcript and the coverage map — is anything taught or required missing? Is anything duplicated from another Day?
9. Visuals: does each visual say something true?

The verifier fixes definite errors directly, and writes `docs/verification/dNN-verifier.md`: each correction (before → after → why), each removal, each doubt it could not resolve, and a final line `VERDICT: PASS` or `VERDICT: FAIL — <reasons>`.

## 11. After the Days are written (orchestrator)

`npm run art` (illustrations) → look at every image → `npm run audio` → `npm run audit` + `check` + `typecheck` + `build` → browser check of each Day → commit and push.

## 12. Adding a new Day later

Class recording → `classes/links.md` recipe (download, transcribe) → read `docs/coverage.md` and extend it for the new Day → write the Day per this guide → add `src/data/gloss/gNN.ts` (and its line in `src/data/gloss/index.ts`) → add it to `curriculum.ts` → verifier → art + audio → push.
