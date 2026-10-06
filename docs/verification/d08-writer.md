# Day 8 writer report (class 18.09.2026)

Files: `src/data/days/d08.ts`, `src/data/gloss/g08.ts`, `scripts/art/d08.json`, `scripts/audit-names.d/d08.txt`, this report.
Checks run: `check-content` (only missing-clip), `audit-notes --day=8` (no Tag 8 errors except the old-file vocab-dup pairs listed in Doubts; no Tag 8 warnings), `npm run typecheck` clean.

## 1. Sources actually read

- Transcript `classes/2026-09-18 German Haus A1/transcript.txt`, all of it.
- Kursbuch pages 28, 29, 30, 31, 37 (rendered and read). KB p.32 and p.33 were rendered but not needed (Day 9).
- Übungsbuch printed pp. 30-31 (spread 15), 32-33 (16), 34-35 (17), 38-39 (19), 40-41 (20, Lernwortschatz "eine Stadttour", "Maße angeben"). UB pp.36-37 (spread 18) not read: Day 9 content.
- `books/modellsatz_text.txt`: Hören Teil 1-3, Lesen Teil 2-3, Sprechen Teil 2-3 (for the exam tip).
- `docs/coverage.md` Part A (all rows incl. A5) and Day 8 / Day 9 sections of Part B; `docs/lesson-authoring.md`; `src/types.ts`; `d12.ts` (style only); old `d08.ts`.

## 2. Coverage checklist

TAUGHT IN CLASS
- Speaking test questions, "Und dir", "Ich lese gern" (not "Ich mache lesen"): ✔ Section 1 (table, tip, compare).
- Quiz on chapter 2: ✘ nothing to teach (revision only; no content recorded in the transcript beyond the word "Hobby").
- Hamburg = Hafenstadt, KB words Bahnhof/Hafen/Konzerthaus/Kirche/Rathaus: ✔ Section 2.
- Breakout places (Krankenhaus, Hotel, Theater, Brücke, Fluss, Park, Bus, Markt, Straßenbahn, U-Bahn, S-Bahn, Bibliothek, Flughafen, Kunsthalle, Stadion, Museum, Bank, Kino, Universität, Polizei(station), Schießstand, Fabrik, Fitnessstudio, Schule): ✔ Section 3 (noun cards + vocab). "Ticket" (a student said "der Ticket", not corrected in class) left out: it belongs to the events/transport vocabulary and the gender was not settled in class.
- U-Bahn vs S-Bahn vs Straßenbahn: ✔ Section 3 (table + warn; teacher's "between cities" corrected).
- Taxi dialogue (Moin, Kennen Sie Hamburg, der See/die See, Fluss, schön/schon, Danke schön, Rathaus, Kirche = Michel, 13,70 Euro): ✔ Sections 4-5 and the dialogue.
- UB 2a (Bremen order of places): ✘ see Doubts.
- UB 2b (Bremen dialogue completion): ✔ Section 5 (pairs read on the page).
- München ordering exercise: ✔ short tip only (source not in the books, see Doubts).
- Definite vs indefinite article, first/second mention, no plural indefinite, Das ist eine Kirche / Die Kirche ist groß, Der Bahnhof ist groß (not "das"), homework frame: ✔ Section 6.
- "Guten Appetit" at the end of class: ✘ owned by Day 11 (A3 row 47); not repeated here.

MUST COVER / GAP
- Places with article and plural, transport words, der/die See, Moin, schön/schon, Danke schön, ein/eine vs der/die/das, sein + Adjektiv: ✔ Sections 3-7.
- KB p.37 box "Fragen zu Orten": ✔ Section 6 table (kein/keine answer pointed to Tag 9).
- KB p.28-29 1a-d (numbers about Hamburg): ✔ Section 2 (facts read on the page: 12.000 Schiffe, circa 100 km, Rathaus 120 Jahre / 111 m / Turm 112 m, Michel Turm 132 m, Elbphilharmonie 866 Mio. Euro, 720 Züge). Listening part 1a and the poster task 1d: ✘ (audio and a class poster project; not text content).
- KB p.30 2c, 3 (article game), KB p.31 4a-c (article box): ✔ Section 6 (tip for the game; table for the box, own examples).
- UB p.30 1a-d, p.31 2c, p.32 3, 4a-c: ✘ as exercises copied from the book (not allowed to quote unverified); the skills are covered by my own artikel/fill exercises and the Section 3 plural cards. The Lernwortschatz "eine Stadttour" and "Maße angeben" lists (UB p.40) are in the vocab (Mensch, Haus, Rathaus, Konzerthaus, Kirche, Turm, Hotel, Brücke, Park, Markt, Bahnhof, Hafen, See, Fluss, Meer, Station, Ort, Meter, Kilometer, lang, breit, hoch, über, Kosten, interessant, schön, schon).
- Aussprache lange und kurze Vokale (KB p.31 5a-b, UB p.32 5, p.33 5c): ✔ Section 8 (word lists from the pages, double-consonant rule from the Kursbuch box).
- Moin / Grüß Gott / Grüezi: ✔ Section 5 table.
- UB p.39 R1-R3: ✔ skills only (name places with article; question and answer about places). R3 (route description) belongs to Day 9/10.

## 3. Corrections (old d08 / teacher)

| Before | After | Why | Sure |
|---|---|---|---|
| Old note: U-Bahn and S-Bahn "connect a city with the towns around it" | U-Bahn = city railway; S-Bahn = links the city with suburbs and nearby towns | The U-Bahn is a city system (A5 R7) | H |
| Teacher: U-Bahn used "between cities"; S-Bahn can run on tram tracks | Dropped both | Not standard German usage | H |
| Old vocab `die See`, pl "die Seen" | `die See` without plural; plural kept on `der See` | The plural Seen belongs to der See. Lernwortschatz: der See, -n | H |
| Old: "die See = open sea" only | also das Meer (Lernwortschatz and KB p.29 use Meer) | Teacher said "ocean" for die See; ocean is der Ozean | M-H |
| Old vocab example "Hamburg liegt nicht direkt an der See" | Replaced by KB fact "Bis zum Meer ... circa 100 Kilometer" | Source fact on the page; the old sentence needed a preposition not taught | H |
| Old tip "Krankenhaus, Schule ... were already in earlier days" | Removed; all places listed with article here | They were not all taught earlier (coverage.md) | H |
| Old exam tip "Hören Teil 2 often plays exactly this scene" | Rewritten from the model test (Teil 1: six conversations, three options, heard twice) | A5 R5 | H |
| Old Bremen section: "Dom ... Theater für Musicals ... Museum" described as in the Kursbuch | Replaced with the UB 2b dialogue that I read on the page | The UB 2a audio text is not on the page | H |
| Old München facts presented as from the Kursbuch | Short tip marked as "in class", no claim of source | Source unverified | H |
| Old "Danke schön" vocab, `moin` lower-case | `Moin` capitalised (a greeting at the start of a sentence; the word is spelt Moin) | Standard orthography | M-H |
| Transcript ASR "Schlechtland", "Das Kunsthalle" (student), "Die Fluss" | `der Schießstand`, `die Kunsthalle`, `der Fluss` | Standard German; the teacher corrected Fluss in class | H (Schießstand: word spelling and gender certain; the transcript spelling is garbled ASR) |

## 4. Doubts (verifier: look at these first)

1. UB p.31 2a order of places. The class answer was Rathaus, Kirche, Museum, Theater, Bahnhof, but the ASR of the audio mentions "Theater für Musicals" before "aber hier, das ist ein Museum". I did not teach any order and wrote no exercise on it. Needs a check against the audio or the answer key.
2. Pairing of guest and driver lines in UB 2b: I read the options and the driver's lines on the page; I matched them in the same order as the class did. Logically unique, high confidence.
3. `der Bus` and `der Meter`: Day 9 old file also has them; `der Bus` was first taught in class 8 (and U-/S-/Straßenbahn are Day 8), `der Meter` comes from the Day 8 Lernwortschatz "Maße angeben". The Day 9 writer should drop them.
4. Vocab duplicates with old files of other Days (ignore until the final sweep): das Kino (old Tag 5), der Taxifahrer, das Krankenhaus, die Universität, der Kilometer, groß (old Tag 7), interessant (old Tag 15). I removed `die Stadt` (Tag 2/3 have it). `schön` and `schon` are also in the old Tag 8 list only.
5. `Grüß Gott`: the map on KB p.30 does not give a precise region; I wrote "southern Germany and Austria" from my own knowledge (certain).
6. Vowel lists: every long/short claim comes from the printed words on KB p.31 5a and UB p.33 5c (the page marks are not in the scan, since they are exercises). I classified them myself; I am sure of all of them (Montag long, Sonntag short, Star long, fahren long, Herr short).
7. `der Schießstand` plural `die Schießstände`: certain, but low priority for the exam.
8. Hamburg station photo: I only say "Bahnhof" (KB text "Jeden Tag fahren hier 720 Züge"); I did not name it Hauptbahnhof.

## 5. Teacher / standard German differences resolved

- Und dir (informal) / Und Ihnen (formal): teacher's "und einen" is an ASR error for "Ihnen"; the teacher's "always und dir" is kept for the du form, and Day 1 owns the greetings.
- "Ich mache lesen" corrected to "Ich lese gern".
- U-Bahn between cities: corrected (see above).
- die See = "ocean": corrected to sea (das Meer).
- Teacher's simplified article rule (known / unknown) kept as the A1 rule of thumb; the Kursbuch frames it as "neu / nicht bekannt" versus "bekannt".
- "Das Bahnhof" (teacher's slip, corrected in class): shown in `compare`.
- "Moin is hello in the north": kept, with the KB's D-A-CH box added.

## 6. A5 rows checked

- R5 (exam formats): checked against `modellsatz_text.txt`; exam tip rewritten (Hören Teil 1 = six conversations, three options, twice; example item "Wohin fährt Herr Albers?"; Lesen Teil 3 signs with a place label). Finding: confirmed, old tip was wrong.
- R7 (U-Bahn): confirmed, corrected.
- R4 (kein): only the ready-made taxi sentence "Das ist kein See, das ist ein Fluss" and the KB answer pattern "Nein, das ist kein/keine ..." appear, with a pointer to Tag 9; no rule taught.
- R9 (ß): not needed here; only "Fluss" (ss after a short vowel) is mentioned in the pronunciation rule. Finding: consistent.
- R8, R10, R17: not touched on Day 8.
