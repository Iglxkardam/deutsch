# Day 4 verifier report (class 11.09.2026)

## 1. What I checked
- `docs/verifier-brief.md`, `docs/lesson-authoring.md` (§10), `src/data/days/d04.ts`, `src/data/gloss/g04.ts`, `scripts/art/d04.json`.
- Page scans (rendered and read): Kursbuch p. 13 (6a numbers, boxes "Zahlen lesen und sprechen", "E-Mail-Adresse sagen", "Gut gesagt: Wie bitte?"), p. 27 (box "Zahlen ab 20"), p. 36 (12a); Übungsbuch pp. 12-13 (6a-e, 7a-e), pp. 22-23 (7e list), pp. 44-45 (Hausnummer 207/117/107, Sprechen Teil 1 sheet and box).
- `books/modellsatz_text.txt`: Hören Teil 1-3 task pages and transcripts, Schreiben Teil 1 form and solutions, Sprechen Teil 1 examiner sheet.
- Class transcript 2026-09-11 (numbers, UB p. 23 read-out, age, telephone numbers [72:00]-[80:00]).
- Coverage map Day 4 section, A2 exam table, A3 rows 11-15, A5 — after my own pass. Then the writer report.
- Items: every number tile (37 numbers), every table row, all 58 vocab entries, 12 dialogue lines, all 50 exercises, examTip, glosses, art prompts.
- Checks after edits: `check-content` clean (apart from missing-clip), `audit-notes --day=4` no Tag 4 errors or warnings, `typecheck` clean.

## 2. Corrections
| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | "doppel" taught as a standard way to say a repeated digit (rule, tile "doppel vier", table row "mit doppel", dialogue line, vocab entry `doppel`, fill exercise "0166 = null eins doppel ___", sticky "three ways") | doppel removed from rule, tile, table, dialogue, vocab and exercise; one `warn` says the teacher used it, that it is the English habit, and that Germans say "vier vier" or "vierundvierzig"; new fill exercise on pair reading (44 = vierundvierzig); sticky "two ways" | "doppel drei / doppel vier" is not usual German (native speakers on HiNative: "'Doppel-drei', 'Doppel-vier' gibt es auf Deutsch nicht"; matches my own knowledge). Germans read digit by digit or in pairs. Taught in class [76:00], so it is mentioned so the learner can recognise it. | H | own knowledge + native-speaker source; transcript [76:00] |
| 2 | Sprechen Teil 1 "seven keyword cards"; table "Sieben Karten", column "Karte"; mcq "On which ... card" | "one sheet with seven keywords"; "Sieben Stichworte", "Stichwort"; mcq "For which ... keyword" | Modellsatz: "Ein Blatt mit Stichworten wird ... ausgehängt"; UB p. 45 shows one sheet. Cards are Teil 2 and 3, so "cards" confused the parts. | H | modellsatz p. 39; UB p. 45 |
| 3 | Schreiben Teil 1: "five missing details (e.g. Hausnummer, Postleitzahl, Telefonnummer)" | "five missing details from a short text; in the model test two of them are numbers (how many people, how many children)" | In the model test Hausnummer and PLZ are already printed in the form; the missing items are 4, 2, Seeheim, bar, Datum. | H | modellsatz pp. 24, 37 (Lösungen) |
| 4 | Pia mcq why: "the other options differ by one digit" | "each other option changes or swaps a digit" | 0715 and 4389679 are swaps (two positions differ), so the statement was false. | H | own check |
| 5 | Phone rule: "Both ways occur in the listening exam" | "Both ways are common, so recognise both" | Not verifiable for digit-by-digit in the model test (its number is printed "11 8 33"). | M | modellsatz p. 36 |
| 6 | "German adds no extra und after hundert or tausend" | "Standard German puts no und after hundert or tausend (one hundred and five = hundertfünf)" | Colloquial/Duden-accepted "hundertundeins" exists; avoid false absolute. | M-H | own knowledge |
| 7 | "years up to 1999 are read as hundreds"; "from 2000 as thousands" | "years from 1100 to 1999 are read in hundreds (neunzehnhundert …)"; "from 2000 on, a year is read like an ordinary number" | "up to 1999" wrongly includes 1000-1099 and small years; the 2000+ wording sharpened. 1969 = neunzehnhundertneunundsechzig is correct. | H | own knowledge |
| 8 | "Years and decimals appear in the Kursbuch (p. 36) as a number-reading exercise" | "appear in the Kursbuch (p. 36, 12a: 1969–1972, 3,5)" | 12a is a video gap-fill, not a reading exercise. | H | KB p. 36 |
| 9 | "null ... the first digit of almost every German phone number" | "the first digit of every German area code and mobile number (040, 0151)" | Local numbers without area code do not start with 0; precise version is true. | M | own knowledge |
| 10 | Hören Teil 1 "Zimmer 254 or 245" | "(example item: Zimmer 2, 254 or 245)" | The room number is the Beispiel and has three options. | H | modellsatz p. 8 |
| 11 | artikel Euro why: "After a number it stays singular: zwei Euro" | "After a number it keeps this form: zwei Euro (not Euros)" | "zwei Euro" is plural in meaning; "stays singular" was misleading. | M-H | own knowledge |
| 12 | gloss | added `stichworte`, `stichwort`, `doppel` | new words in notes | H | — |

Counts: wrong fact 6 (1, 2, 3, 7, 8, 10), wrong key/explanation 2 (4, 11), wording/precision 4 (5, 6, 9, 12).

## 3. Removals and additions
- Removed: vocab entry `doppel`; tile "doppel vier"; table row "mit doppel"; exercise "0166 = null eins doppel ___".
- Added: `warn` on doppel (section 5); fill exercise "0151 23 44 67 in pairs ... ___" (vierundvierzig); dialogue line now uses pairs (Lena then repeats digit by digit, which makes the dialogue more natural).

## 4. Verified as correct (selected)
- KB p. 13 box: @ = ät, . = Punkt, - = minus, _ = Unterstrich (the coverage map's "at / Bindestrich" is wrong; the Day follows the book). "Gut gesagt" box: Entschuldigung, noch einmal bitte / Das verstehe ich nicht / Bitte ein bisschen langsamer. sech-/sieb- bold, 14 shown as vier|zehn.
- UB p. 23 7e: 984, 8.349, 7.532, 304, 611, 52.351, 30.290, 1.024, 2.015, 65.271 (ten numbers; sticky correct).
- UB p. 44: Hausnummer 207/117/107; p. 45: Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby? and the frames used in the table.
- Modellsatz: Hören T1 6 items heard twice; T2 4 items R/F heard once; T3 5 items heard twice, 11833/11883/12833; T1 option "Neunzehn Euro fünfundneunzig Cent"; Sprechen T1 spell + number (Telefon-, Handy-, Haus-, Autonummer; PLZ/Hausnummer).
- All number words in tiles, tables, examples and exercises (1024, 2015, 3789, 8349, 30290, 52351, 74300, 13.880, 1.250, 4.520, 611 vs 6.011, 0175 3489679, 040 561214) are correct.
- Euro/Cent: 3,50 € = drei Euro fünfzig; 19,95 € = neunzehn Euro fünfundneunzig (Cent); zwei Euro, fünfzig Cent.

## 5. Doubts not fully settled
- "Bitte, ein bisschen langsamer." has a comma; the Kursbuch prints it without. Both are acceptable punctuation; left as is.
- Order exercise "Das verstehe ich nicht ." also allows "Ich verstehe das nicht" (correct German) if the learner ignores the capital D. Acceptable; flagged only.
- "Autonummer" (examiner sheet) not listed in the exam table; not needed for the learner.
- The coverage map (A3 row 12, "doppel") and A3 row 13 ("at / Bindestrich") should be corrected by the orchestrator; I did not edit shared files.

## 6. Writer doubts
- "at" and "Bindestrich" also heard: resolved, kept. @ is spoken "ät" (= English "at"), and "Bindestrich" (also "Minus", "Strich") is commonly said for "-". The book form (ät, minus) stays primary.
- Seven-card mapping: resolved; matches UB p. 45 frames (now "keywords", see correction 2).
- Autonummer: see doubts; harmless omission.
- Years rule (1969): resolved; correct, wording narrowed to 1100–1999 (correction 7).
- "zwo": resolved, correct (standard on the telephone and in radio/DIN spelling contexts to avoid zwei/drei confusion).
- "doppel drei": resolved; the writer was right to drop it, and I removed "doppel" as a taught form altogether (correction 1).
- 7.532 / 65.271 not spelled out: acceptable (sticky asks the learner to read them).
- Vocab duplicates with later Days: later Days' problem; Day 4 is the earlier owner.
- examTip once/twice facts: verified against the model test.

VERDICT: PASS
