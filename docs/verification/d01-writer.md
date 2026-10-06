# Tag 1 — writer report (class 08.09.2026)

Files written: `src/data/days/d01.ts`, `scripts/art/d01.json` (hero only), `src/data/gloss/g01.ts`, `scripts/audit-names.d/d01.txt`, this report.
Checks run: `check-content` (only "missing-clip" for Day 1), `audit-notes --day=1` (0 errors of its own; the only Tag 1 lines are vocab-dup / example-dup / exercise-dup against other Days' old files, see Doubts), `npm run typecheck` clean.

## 1. Sources actually read

- `docs/writer-brief.md`, `docs/lesson-authoring.md`, `docs/coverage.md` (Part A in full incl. A5, Part B Days 1-4), old `d01.ts`, `src/types.ts`, `d12.ts` (style only).
- Transcript `classes/2026-09-08 German Haus A1/transcript.txt` (all of it).
- Kursbuch pp. 8, 9, 10, 17, 30 (printed = PDF index) and Wortliste pp. 162-167.
- Übungsbuch spread index 3 (pp. 6-7), index 8 (pp. 16-17 Lernwortschatz), index 22 (pp. 44-45, Sprechen Teil 1 cards).
- `classes/Greetings.pdf` (greetings/farewells and sound table), `books/_extract_BASIC_NOTES.txt` (first part), `books/modellsatz_text.txt` (Sprechen Teil 1 Prüferblatt, Hören Teil 1 item 6, Teil 3 items 12-15).

## 2. Coverage checklist

TAUGHT IN CLASS
- Opening (why learn German, class rules, three books): ✘ on purpose, not lesson content.
- Deutsch vs Deutschland: ✔ section 1 (rule, ex, compare).
- Hallo with "ah": ✔ section 3 tile "Hallo".
- Guten Morgen / Tag / Abend, g always hard, Abend: ✔ sections 2 and 3.
- Gute Nacht farewell only, midnight still Guten Abend, "Guten Nacht" corrected: ✔ section 2 (tiles, rule, compare).
- ch after a/o/u vs after i/e: ✔ section 3 tiles + warn (corrected, see 3/5).
- Auf Wiedersehen (ie = "ee", ei = "eye"): ✔ section 3 tile; Tschüss / tsch, Ciao: ✔ sections 2 and 3.
- Wie geht es dir? / Wie geht's? fixed: ✔ section 4 rule.
- Answers (Danke, es geht mir gut; Mir geht es sehr gut; es/mir swap; Danke, gut; sehr gut/schlecht/sehr schlecht; ganz gut; so lala): ✔ section 4 (sentence, table, p).
- "Ich bin gut" warning: ✔ section 4 compare.
- Und dir? / Und du?: ✔ section 4 rule, vocab, exercises.
- Three name questions/answers, ß in heißt = s sound: ✔ section 5.
- Pair practice dialogue model: ✔ `dialogue` (own text, not claimed as the class text).
- Alles klar?, Entschuldigung, wie heißt du?: ✔ as pointer to Tag 4 (section 5 tip); Entschuldigung, wie heißt du? used in tip.
- End: every learner says "Ich heiße ...": ✔ sticky.

MUST COVER
- Greeting by time of day, Gute Nacht farewell only: ✔.
- Five-step answer scale: ✔ table (7 steps incl. es geht, nicht so gut).
- Three name questions; Und du / Und dir; Deutsch vs Deutschland; first sounds (a, g, ch, ie/ei, ß, tsch): ✔.
- GAP KB pp. 8-9 / UB p.6 1 (Deutsch international): ✔ section 1, nouns cards with article and plural (der Kranke left out, see Doubts).
- GAP KB p.17 grüßen/verabschieden and Befinden boxes: ✔ sections 2 and 4 (Guten Tag, Herr Hansen!; Tschüs/Ciao/Auf Wiedersehen/Gute Nacht; Wie geht's dir?; Danke, sehr gut/gut; Ganz gut; Und dir?). Ihnen only as pointer to Tag 2.
- GAP UB p.7 2d, 3a: ✔ own exercises (answer scale, greeting by time of day / picture-type situations as mcq).
- Grüß Gott / Grüezi one-liner + "see Tag 8": ✔ section 2 tip (Moin included in the same pointer).
- Greeting hours as rule of thumb: ✔ "roughly", flagged as not exact.

## 3. Corrections (old d01.ts, teacher, coverage map)

1. Whole alphabet table, trap letters, spelling section, Du/Sie section, six-question table, Fragewörter table, ß/ss table, umlaut and ae/oe/ue rules, sound-pair table: removed from Day 1 (belong to Days 2-3). before → after: content moved out; how sure: H (ownership table).
2. heißen/sein conjugation tables, "stem ends in ß → -t" rule, "und = sind", "sein is not a helping verb", zu Hause/nach Hause, Das ist mein Kollege, vocab traurig/verheiratet/ledig/essen/buchstabieren/Dialog/Person: removed (Day 5/4/13+). H.
3. Old ß table "after ei, ie always ß; exceptions Eis, Preis, reisen": removed from Day 1; only "ß is a sharp s" remains, the rule goes to Day 3 (R9). H.
4. Old "Ich bin gut ... means I am a good person; wrong": → "not how you say I am fine; it sounds like I am good (at something)", with Es geht mir gut / Danke, gut as the exam-safe answers (R17). M-H.
5. Teacher: "ch after i/e = sh (sch)", "ch never ch": → ch has two sounds, the ich-sound is a soft hiss (not "sh", not "k"); English "ch" is written tsch, "sh" is sch. H for the corrections, M for the English comparisons ("loch", "hiss").
6. Teacher: "G is always G, Tag not Tat": kept hard g, added that final g in Tag sounds like k (Auslautverhärtung). H.
7. Teacher: "ganz gut = absolutely fine / whole": → "quite good, fairly good, a little less than gut" (the book shows a neutral face). H/M-H.
8. Old times "until about 11 / 11-18 / after 18" → "roughly 10-11 / 17-18", explicitly a rule of thumb (class gave no hours). M.
9. Old tip "Gute vs Guten follows der/die": shortened to a pointer to Tag 6 (gender owner). H.
10. Old "Hi" stays (Greetings.pdf), but not claimed as in Kapitel 1 (Wortliste lists hi under Kapitel 6). H.
11. Old claim "Goethe speaking test uses Das ist mein Kollege exactly" (not Day 1): removed.
12. Old examTip listed all seven keyword cards and spelling: replaced with a true Day 1 tip based on the model test Prüferblatt (examiner opens with Guten Tag and Mein Name ist ..., "Wer sind Sie?"), UB p.45 first card Name?, and Hören Teil 1 item 6 / Teil 3 items 12 and 14 opening with greeting + name. H (read in `modellsatz_text.txt`).

## 4. Doubts (verifier look here first)

- Hour ranges in the greeting tiles (10-11, 17-18) are a common rule of thumb, not from the book or the transcript.
- English comparisons for the ch sounds ("Scottish loch", soft hiss) and "tsch = ch in chat".
- "Es geht." and "so lala" were added from standard German; the book scale stops at Ganz gut, the class gave schlecht / sehr schlecht.
- Und dir? is taught as the counter-question to Wie geht's? (as in the book and class); fill exercise accepts only "dir". "Und du?" after Wie geht's? is heard colloquially, so a purist could object.
- Hindi vocabulary glosses (Kindergarten, Würstchen, Autobahn) are my own wording, please check.
- der Kranke (KB p.9 G) is not in the nouns cards: adjectival noun, not needed at A1.
- Cross-Day duplicates for the final sweep: vocab heißen, sein (Tag 5), wer, wie (Tag 6), Deutschland (Tag 3), der Kindergarten (Tag 15); example "Ich lerne Deutsch." (Tag 3); exercise artikel Kindergarten (Tag 15). Day 1 is the earliest, so the later Days should drop them.
- The shared glossary maps "geht" to "goes", so hovering it inside "Wie geht's?" shows the literal meaning (EXTRA entry, not mine).
- Wortliste bold (exam-required) marking was not applied to vocab (no field for it).
- The dialogue and "Entschuldigung" are my own text; the KB p.10 2a lines are used as examples only (read on the page), never labelled verbatim.

## 5. Teacher / standard-German differences resolved

ch = "sh" (see 3/5); G always G vs final g = k (3/6); ganz gut = "absolutely fine" (3/7); "Gute Nacht never as a greeting, even at midnight" kept (standard); the three name answers interchangeable kept (book and standard); "Tschüs" vs "Tschüss": both correct, book writes Tschüs; "Fräulein" not mentioned (R8, Day 6).

## 6. A5 rows checked

- R5 (exam formats): Day 1 examTip only states what is in the model test (Sprechen Teil 1 Prüferblatt; Hören Teil 1 item 6; Teil 3 items 12 and 14). No invented formats.
- R8 (Fräulein): not used on Day 1.
- R9 (ß rule): the old Day 1 table was wrong in its ei/ie claim; removed, rule left to Day 3. Confirmed H.
- R10 (ch): confirmed, taught as ich-sound / ach-sound, not "sh". M on the wording.
- R17 (Ich bin gut): confirmed; softened as above.
- R19 (Hobby singular): not touched on Day 1.
- Others (R1-R4, R6-R7, R11-R16, R18, R20-R21) do not touch Day 1.
