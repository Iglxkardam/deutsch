# Restructure brief — make long paragraphs scannable (no change of meaning)

You are reformatting the **long, dense text blocks** of ONE Day of "Deutsch Quest" (repo `C:\projects\kardam\kardam`) so the learner can scan them instead of reading an essay. The learner's feedback, verbatim in spirit: *"a rule written as one paragraph full of bold words is an essay — write it so it can be read."* Example of what they rejected (Day 17):

> dem, der, dem, den + n — In the dative **masculine and neuter are the same**: **dem / einem / meinem**. The **feminine** is **der / einer / meiner**. In the **plural** the article is **den** and the **noun adds -n**: **die Kinder → den Kindern**, **die Freunde → den Freunden**. Do not add a second -n if the plural already ends in **-n** (**die Tanten → den Tanten**) or in **-s** (**die Autos → den Autos**). **kein-** and the possessives (…) take the same endings as **ein-**: …

## The one rule that matters most

**You change FORM only. You must not change, add, remove or "improve" any fact.** Every German word, example, article, ending, number, exception and every qualifier ("only", "not", "always", "usually", "except", "also", "both") in the original must survive. These Days were independently verified for correctness; your restructuring must not undo that. If a sentence is unclear to you, keep its meaning exactly and restructure around it — never "fix" German here (if you believe something is wrong, leave it and list it in your report).

## Read first

1. `docs/lesson-authoring.md` §5 (blocks) and §6 (readability rules — new).
2. Your Day file `src/data/days/dNN.ts`, and `src/components/notes/RichNotes.tsx` + `src/components/notes/visuals.tsx` + `visuals2.tsx` (what each block looks like). Day 12 is a good visual reference.

## What to do

Go through every `p`, `rule`, `tip`, `warn` block (and `sticky`) of your Day. For each one that is **over ~250 characters, or has 5+ bold terms, or reads as a block of prose**, restructure it:

- **Text structure**: inside these blocks a blank line (`\n\n`) starts a new paragraph, and lines starting with `- ` become a bullet list. Use a `rule` as: one short lead sentence + 2–5 bullets (one fact per bullet: a condition, a contrast, an exception), written as ordinary string content with `\n` newlines, e.g.
  ```ts
  { t: 'rule', title: 'Regel — Dativ: der Artikel ändert sich',
    body: 'In the dative every article changes.\n\n- masculine and neuter: **dem / einem / meinem**\n- feminine: **der / einer / meiner**\n- plural: **den** — and the noun adds **-n**' },
  ```
- **Paradigms become tables / cards.** If the text lists forms per gender, per person, per case, per time, put them in a `table` (remember: if it has `say`, exactly one phrase per row sharing a word with that row), `conj`, `nouns` or `sentence` block placed right after the rule, and shorten the prose accordingly (a rule + its table beats a rule that describes the table). Do not duplicate a table that already exists in the Day — if one is already there, remove the redundant prose instead.
- **Contrasts become `compare` rows** (wrong / right / why) only when the original already states a real mistake.
- **Split long blocks** into several shorter blocks where it reads better (a `rule` + a `tip`, or a `p` + bullets).
- **Bold**: only the German term being taught, max ~3 per sentence; remove decorative bold. Keep `**…**` markup valid.
- **Examples**: lift inline example chains out of prose into an `ex` block or `compare` (each `ex` item: German `de`, English `hi`). Keep every example that existed (you may move it; do not drop it). Do not invent new German.
- Short blocks (under ~250 characters, few bold terms) that already read well: leave them alone.
- Keep headings, captions, vocabulary, dialogue and exercises as they are. Do not touch `hi`/`en` translations except where you move a sentence.
- Do not use emoji. Headings and table captions stay German-only.
- English wording may be tightened where it is purely redundant; no new claims.

## Checks you must run and pass (for your Day)

```
node scripts/check-content.mjs          # structure, table/say, gender, plural
node scripts/audit-notes.mjs --day=N     # zero ERRORS; hover words for any new German token (gloss file src/data/gloss/gNN.ts)
npm run typecheck
```
Other agents are working on other Days at the same time: if a tool fails because of another Day's file, wait a minute and retry (up to ~5 times). The audit now covers `sentence`, `conj`, `nouns`, `numbers`, `tiles`, `compare`: any German you add to a new block is checked.

## Files you may edit

ONLY `src/data/days/dNN.ts` (notes blocks) and `src/data/gloss/gNN.ts`. Make **small targeted Edit calls**; never rewrite the whole Day file with Write (another agent may be editing vocab of the same file). No git, no `npm run audio`/`art`, no other files.

## Report

Write `docs/verification/dNN-restructure.md`: (1) how many blocks you restructured and how (list: block → what you did); (2) a **meaning-preservation table**: for each restructured block, one line "kept: all examples / exceptions / qualifiers ✔" or the exact thing you could not keep and why; (3) anything in the Day you think is factually doubtful (do NOT change it). Finish with a SHORT message: blocks restructured, tables/cards added, and any doubt.

An independent token-diff will compare every German and English word of the Day before and after; words you lose will be reviewed, so keep qualifiers and examples.
