# Day 6 verifier report (class 16.09.2026)

## 1. What I checked
- Read `docs/verifier-brief.md`, `docs/lesson-authoring.md`, the whole of `src/data/days/d06.ts`, `src/data/gloss/g06.ts`, `scripts/art/d06.json`.
- Primary sources (rendered and read myself): Kursbuch p.21 (4a-c, 5a, "Gut gesagt: Nein!", G box), p.22 (6a twelve words, G box bestimmter Artikel and its colours), p.24 (10a dictionary entries, 11a Artikelbild word list, colour box der = blau / das = grün / die = rot), p.27 (grammar summary), p.35 (season wheel); Übungsbuch pp.20-21 (3e-g, 4a-b, 4c-e Satzmelodie, 5a-b), pp.24-25 (8-11a, box "Nomen und Artikel ... mit drei Farben"), pp.38-39 (10a, box "In A (und Teilen von CH) heißt der Januar auch Jänner"), pp.44-45 (Hören 6 "Wann gehen die Frauen ins Schwimmbad?"); `books/modellsatz_text.txt` (Hören "An welchem Tag will die Frau kommen?", Sprechen Teil 2 Prüferblatt with topics Einkaufen and Wochenende, "Kreuzen Sie an").
- Full class transcript (gender hints at [116:00]-[136:00], question words at [32:00], Ja/Nein at [52:00]-[64:00], calendar at [24:00]-[32:00], cross-not-tick at [12:00]).
- Then coverage.md (Day 6 Part B, A3 rows 25-29, A5), then the writer report.
- Counted: 7 note sections, ~45 note blocks, 65 vocab entries before (56 after), 50 exercises, 2 art prompts, 18 gloss keys (24 after). Every German string, article, plural, conjugation, answer key and book/exam claim checked.

## 2. Corrections
| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | das-endings rule: "-chen and -lein ... -ment ... -um ... -o" all under "these endings give das" (no grading) | "Always das: -chen/-lein (diminutives)", then "Usually das: -ment (der Moment), -um in Latin words (short -aum words are der: der Baum, der Raum), -o (der Euro, der Espresso, der Cappuccino, der Zoo)" | -um and -o are tendencies, not rules: der Baum/Raum/Traum, der Espresso/Cappuccino/Zoo are common. Intro of the same section promised to separate reliable from tendency endings. | H | own knowledge |
| 2 | "The suffix -tum is different: der Irrtum." | removed | Implies -tum = der; most -tum nouns are das (das Eigentum, das Wachstum, das Christentum); only Irrtum/Reichtum are der. | H | own knowledge |
| 3 | compare row: "every -chen noun is das"; mcq why "Every -chen noun is neuter" | "every -chen diminutive is das"; note in rule that der Kuchen only looks like one | der Kuchen (A1 word, Tag 10 vocab), der Knochen end in -chen but are masculine. | H | own knowledge |
| 4 | artikel Rechnung why: "the ending -ung is always die" | "the ending -ung gives die" | false absolute (der Sprung, der Schwung); the rule block already says "almost without exception". | M (wording) | own knowledge |
| 5 | compare "Wer singen gern?" why: "wer always takes the er/sie/es form" (also fill why) | "wer is the subject here, so the verb takes the er/sie/es form" | Contradicted the Day's own rule: Wer bist du? / Wer sind Sie? | H | own knowledge |
| 6 | "Übungsbuch p. 21 (5c–e)" | "(4c–e)" | On the scan the Satzmelodie tasks are 4c, 4d, 4e; 5a is the crossword. | H | UB p.21 |
| 7 | "Regel — seasons and months are always der" | "the four seasons and the twelve months are der" + note "das Frühjahr is neuter (ends in das Jahr)" | das Frühjahr is a normal word for spring; "always" was false. | H | own knowledge |
| 8 | "Days are always written with a capital letter" | "The day names are nouns, so they are written with a capital letter: am Montag." | the adverb montags (Tag 7) is lower-case; avoid a false absolute. | M | own knowledge |
| 9 | warn exceptions list | added der Euro, der Kuchen, das Ei (-ei but das); "already meet" → "will meet at A1" | das Ei is the main A1 counterexample to -ei = die; Kuchen/Ei are Tag 10 words, so "already" was wrong. | H | own knowledge |
| 10 | mcq "„Haben Sie am Dienstag Zeit?“ – „Nein ...“ An welchem Tag hat die Frau Zeit?" | "Ein Mann fragt eine Frau: ... – Die Frau: ..." | Nothing in the stem said who the woman is; the question was unanswerable as written. | M | — |
| 11 | Jänner mcq why: "In Austria the January is also called" | "In Austria (and parts of Switzerland) January is also called" | English wording; matches the UB box. | L (wording) | UB p.38 |
| 12 | art d06-artikel: "a hospital with a green cross ... a yellow taxi" | "a hospital building with an ambulance in front ... a cream-coloured German taxi" | German taxis are ivory, not yellow; green cross is a pharmacy sign in many countries. | M | own knowledge |
| 13 | gloss 'kreuzt': "you mark with a cross (du-form)" | "mark(s) with a cross (du- and er/sie/es-form)" | kreuzt is also the er form ("er kreuzt an" in the forms field). | H | own knowledge |

## 3. Removals and additions
- Removed from `vocab` (earlier Day already has the entry, lesson-authoring §4; the audit flagged each as ERROR): wer, wie (Tag 1); wo, woher, die Information, der Computer (Tag 2); fragen, die Frage, die Antwort (Tag 4). The words remain in notes, tables, nouns cards and exercises; hover comes from the earlier Day. check-content still clean.
- Removed: "-tum ... der Irrtum" (see 2).
- Added gloss keys: frühjahr, baum, raum, espresso, cappuccino, zoo (words introduced by my fixes).

## 4. Doubts not settled
- `antworten` (Tag 6 + Tag 17) and `die Straße` (Tag 6 + Tag 7) are still flagged as vocab-dup; Tag 6 is the earlier Day, so Tag 17 and Tag 7 should drop theirs (not my files).
- "In Bavaria and Austria people say na" – taken from the book box; fine.
- Teacher said the -o rule is "always das" and "das Porto, port"; das Porto is postage, not port – not used in the Day, nothing to fix.
- The 8-page class document is not in the repo, so I could not compare against it.

## 5. Writer doubts
- UB p.20 4b Arbeitstage = Mo-Fr: resolved — the book's own sorting task (Arbeitstage / Wochenende) and standard usage; correct as written.
- das Tischlein: correct (rare but genuine diminutive). Kept.
- "-ent for persons usually der": correct (Student, Präsident, Patient; das Talent is not a person). Kept.
- die Daten: correct.
- wie lange → "कितनी देर तक": acceptable for duration. Kept.
- KB p.35 wheel grouping: confirmed on the scan.
- 8-page document: unavailable (see doubts).
- Vocab overlaps: resolved for words owned by earlier Days (removed here); antworten / die Straße remain for the later Days to drop.
- Writer's own source list says "UB pp.20-21 (... 5c-e ...)": wrong numbering, fixed (correction 6).

## 6. Checks run
- `node scripts/check-content.mjs`: clean apart from missing-clip.
- `node scripts/audit-notes.mjs --day=6`: no Day-6 errors except the two cross-Day duplicates above (owned by Tag 7 / Tag 17 to remove); no tooltip warnings.
- `npm run typecheck`: clean.

VERDICT: PASS
