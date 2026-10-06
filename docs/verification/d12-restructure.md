# Day 12 restructure report

Checks run: `check-content` (only the pre-existing audio missing-clip notice), `audit-notes` (no errors, 0 warnings), `npm run typecheck` (clean).

## 1. Blocks restructured (19 blocks; 1 table added)

Only form changed: blank-line paragraphs and `- ` bullets. One new `table` (Verben mit Vokalwechsel) was added because the tip described a paradigm in prose; its German forms all come from the original tip and the existing verb table. The new caption word "Vokalwechsel" is already glossed (g14).

| Block | What I did |
| --- | --- |
| 1 p "Kapitel 5 is called Alltag und Familie" | split into 2 paragraphs |
| 1 tip Mensa / Nachricht | 2 bullets |
| 1 tip wohin / wo | lead + 2 bullets + closing line |
| 1 tip "The last five verbs change their vowel" | split: short tip (rule), new `table` (fahren, treffen, lesen, essen, schlafen: du / er / change), second tip (learn with er-form, p. 68) |
| 2 tip "The cinema is only hoped for" | 3 bullets |
| 2 p Kursbuch p. 55 tasks 3a-b | lead + 2 bullets |
| 3 rule "am + part of the day" | lead + 2 bullets (night exception; habit adverbs) |
| 4 rule "Stunde + Uhr + Minuten" | lead + 4 bullets |
| 4 tip 05:15 / 17:15 | 2 paragraphs |
| 4 tip written official times | 2 bullets |
| 5 rule "everyday time uses the 12-hour clock" | lead + 3 bullets |
| 5 p "How to read the clock" | lead + 5 bullets (nach, vor halb, halb, nach halb, vor) + closing paragraph |
| 5 warn "halb sechs is 5:30" | lead + 2 bullets |
| 5 tip Kursbuch p. 56 5a (long) | split into 2 tips: bullet list of the clock phrases; kurz vor / kurz nach + "ein Uhr vs eins" |
| 5 p "same building blocks work for every minute" | lead + 3 bullets (5:28, 5:38, 5:42) + 2 paragraphs |
| 5 tip official vs everyday | lead + 3 bullets |
| 6 warn "Wann? is not only for days and months" | split into 2 paragraphs |
| 6 p weekdays / Kursbuch p. 63 | paragraph + "Kursbuch p. 63 sums it up:" + 2 bullets (Wann? / Wie lange?) |
| 7 rule "Strategie 2" | lead + 3 bullets |
| 7 tip Hören / Lesen | 2 bullets |

## 2. Meaning preservation

All of the above: kept: all examples / exceptions / qualifiers ✔. Exact differences:

- New vowel-change table: contains no word that was not already in the Day (du fährst / triffst / liest / isst / schläfst and the er-forms from the existing table). The mapping a → ä, e → i, e → ie is as in the original tip (essen e → i, lesen e → ie).
- Left alone: the `sticky` (not rendered as a list), short blocks, all existing tables, tiles, clocks, dialogue, vocab, exercises.

## 3. Doubts (not changed)

- The original tip lists "e → i, e → ie" for fahren/treffen/lesen/essen/schlafen; essen is irregular (du isst, er isst) so "e → i" is a simplification, but it matches the original wording.
- Table "Informelle Uhrzeit": row :20 gives "zehn vor halb sechs" as the alternative and :40 "zehn nach halb sechs (selten)"; both are valid but the :40 alternative is unusual; left as-is.
