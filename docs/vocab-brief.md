# Vocabulary completeness brief

You are fixing the vocabulary lists of the finished, verified Days 1-12 of "Deutsch Quest" (a German A1 trainer; repo `C:\projects\kardam\kardam`). The learner studies ONLY from these notes for the Goethe A1 exam; they also drill the `vocab` lists as flashcards. Two things went wrong during the rewrite and you fix both. **Accuracy is the top rule**: every article, plural, English and Hindi meaning you add must be right; if unsure, leave it out and say so.

Read first: `docs/lesson-authoring.md` (§5 vocabulary format and the rules: a word lives in ONE Day, the EARLIEST Day that teaches it; `pl` starts with "die " and is omitted for nouns without a plural; Hindi in Devanagari; no bare function words), and the Day files you will edit.

## Task A — words that fell out of every Day

`docs/dropped-vocab.txt` lists 78 words that were vocabulary entries before the rewrite and are now a vocabulary entry on NO Day (right column: where the current Days still use the word, as dNNxCOUNT). Writers dropped them because each assumed another Day owned them. For EACH word decide, and record the decision:

1. **Covered elsewhere / not vocabulary**: pure function words and grammar terms the hover dictionary already explains (und, oder, aber, ja, nein, bis, um, von, vor, sie, dir, mir …) and possessives (mein/dein/Ihr — owned by a later Day). No entry needed. Verify with `src/lib/glossary.ts` (EXTRA) that a hover meaning exists; if a hover meaning is missing or wrong, add a correct one to the gloss file of the Day that uses it most (`src/data/gloss/gNN.ts`).
2. **Real vocabulary still used in the notes** (e.g. machen, trinken, heute, der Freund, die Freundin, der Kollege, die Kollegin, das Handy, die Zeit, die Öffnungszeiten, die Brille, die Nachrichten, die Seite, neu, toll, zusammen, helfen, nehmen …): add ONE entry on the right Day. The right Day = the Day whose class/book pages teach it first (check the class transcript, `docs/coverage.md`, and the Day files); where several Days use it, the earliest one that really teaches it. Never leave a word that a Day's notes/examples/exercises rely on without an entry somewhere.
3. **Not used anywhere any more** (traurig, das Bier, das Interview, regnen, das T-Shirt, der Kugelschreiber, die Lampe, die Lernkarte, vergleichen, Bis dann!, die Währung …): leave them out UNLESS the Kursbuch Wortliste marks them as exam-required (bold) for chapters 1-5, or the class taught them (check the transcript); then add them to the right Day.

## Task B — exam-required words missing from every Day

The Kursbuch Wortliste (alphabetical word list, Kursbuch printed pages ~162-174; PDF index = printed page; file `toaz.info-netzwerk-neu-a1-kursbuch-pr_bcc91f014f96b3b00eb2908e5e43debe.pdf`) tags every entry with the chapter it first appears in (`1/…`, `2/…`) and prints the words required for the Goethe exam in **bold**. Render the pages with PyMuPDF and read the PNGs (use the scratchpad directory for images, never the repo): `python -c "import pymupdf; pymupdf.open(r'<pdf>')[N].get_pixmap(dpi=120).save(r'<scratchpad>/w.png')"`.

For chapters 1-5 (the chapters Days 1-12 cover): list every entry tagged with those chapters, mark bold ones, and check each against the current vocab of ALL Days (and against the notes/exercises: a word taught well in notes but without an entry also counts as missing). Add the **missing bold words** to the right Day's vocab. Non-bold words: add only those the class actually taught or that the Day's own notes use heavily. Skip words belonging to chapters 6+, and words the book gives only as passive/international ("Kurs", "Hotel" are fine to add; very long loan-word lists are not needed).

Also read the Lernwortschatz pages (Übungsbuch pp. 16-17, 28-29, 40-41, 56-57, 68-69; spread i = printed pages 2i, 2i+1) — they list the words the book itself wants learned per chapter; treat missing ones like bold words.

## How to add an entry

```ts
{ de: 'der Freund', hi: 'दोस्त', en: 'friend (male)', type: 'noun', gender: 'm', pl: 'die Freunde', ex: 'Das ist mein Freund Tim.', exHi: 'This is my friend Tim.' },
```
- Put it in the vocab array of the chosen Day, near related words. Example sentence: correct, natural A1 German using only words/grammar the Day (or earlier Days) have taught. `exHi` is the English translation.
- Irregular/stem-changing verbs: add `forms: 'ich … · du … · er …'`.
- Check the plural against the Wortliste (it prints plurals) — never guess.
- Before adding, grep ALL `src/data/days/d*.ts` for the word so you never create a duplicate.
- New German words in your example sentences must get hover meanings (gloss file) if they are inflected/compound; run the audit to see.

## Rules

- You may edit ONLY: the `vocab` arrays (and gloss files `src/data/gloss/gNN.ts`) of Days 1-12. Do not change notes, exercises or dialogues; do not touch Days 13+, types, components, styles, glossary.ts, curriculum.ts, scripts; no git; no `npm run audio`/`art`.
- Another agent is still editing Days 13-19 and may be running checks; if a check fails because of their files, wait a minute and retry.
- Run `node scripts/audit-notes.mjs` (zero ERRORS — it catches duplicates and wrong genders against vocabulary), `node scripts/check-content.mjs`, `npm run typecheck`.

## Report

Write `docs/verification/vocab-completeness.md`: (1) a table of all 78 dropped words with your decision (covered by glossary / added to Tag N / left out + why); (2) the Wortliste check: number of ch.1-5 entries, number bold, which were already covered, which you added (and to which Day), which you skipped and why; (3) every entry you added with its source (Wortliste page, class, Lernwortschatz); (4) doubts. Finish with a SHORT summary.
