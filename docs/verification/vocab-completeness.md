# Vocabulary completeness — Days 1-12 (report)

Brief: `docs/vocab-brief.md`. Files changed: the `vocab` arrays of `src/data/days/d01, d02, d04-d12.ts` and the gloss files `src/data/gloss/g04, g06, g07, g09, g11.ts`. Notes, exercises, dialogues and Days 13+ were not touched. Every change was a small, targeted insert. No line was deleted.

Checks after the last edit: `node scripts/audit-notes.mjs` gives **0 errors, 0 warnings**. `node scripts/check-content.mjs` is clean apart from the expected `missing-clip` (audio not rendered yet). `npm run typecheck` is clean.

Sources read: the Kursbuch Wortliste pp. 162-174, rendered at 145-250 dpi and read column by column (p. 175 is the back cover). The Übungsbuch Lernwortschatz pp. 16-17, 28-29, 40-41, 56-57, 68-69. The class transcripts, searched for the words in question. `docs/coverage.md` and all Day files 1-17, with a usage count for every candidate word.

Abbreviations: **WL** = Kursbuch Wortliste (printed page, chapter/exercise tag). **B** = printed bold, which means needed for the exam. **LWS** = Übungsbuch Lernwortschatz page.

---

## 1. The 78 dropped words

"Hover ✓" means `lookup()` in `src/lib/glossary.ts` returns a correct meaning. I checked this with a bundled copy of the real glossary.

| # | Word | Decision |
|---|---|---|
| 1 | alles klar? | Already an entry: Tag 4 `Alles klar?`. The dropped list only missed it because of the capital letter. |
| 2 | bitte | Politeness word, hover ✓ ("please / you are welcome"). It is also inside the phrase entries `Wie bitte?`, `Noch einmal, bitte.` and others. |
| 3 | bitte, ein bisschen langsamer | Already an entry on Tag 4. |
| 4 | das verstehe ich nicht | Already an entry on Tag 4. |
| 5 | der Dialog | Instruction word, not bold (WL 1/7c). Hover ✓ ("dialogue"). Covered by the glossary. |
| 6 | die Entschuldigung | Already an entry: Tag 4 `Entschuldigung!`. |
| 7 | dir | Pronoun, hover ✓. |
| 8 | mein / meine | Possessive (Day 13+ owns it), hover ✓. |
| 9 | mir | Pronoun, hover ✓. |
| 10 | noch einmal, bitte | Already an entry on Tag 4. |
| 11 | traurig | **Added to Tag 6.** Not in WL ch. 1-5, but the class used it on 16.09 in the translation task "Poonam und Ramesh sind traurig". |
| 12 | wie schreibt man das? | Already an entry on Tag 2. |
| 13 | atmen | **Added to Tag 5.** The Day 5 spelling-rule table uses it (consonant + m → -e-). |
| 14 | das Bier | Left out. It is used nowhere, it is not in WL ch. 1-5, and the class only mentioned beer prices in passing (coverage.md says to leave that out). |
| 15 | das Interview | **Added to Tag 2.** WL p. 167, 1/4b, bold (KB p. 12 interviews = Day 2 pages). |
| 16 | heute | **Added to Tag 5.** WL 3/6b B, LWS p. 41. Tag 5 is the earliest Day that uses it heavily. |
| 17 | machen | **Added to Tag 5.** WL 1/1c B, LWS p. 17. Tag 5 uses it in the verb-ending table. |
| 18 | oder | Conjunction, hover ✓. |
| 19 | regnen | Left out. It is used nowhere, WL tags it 7/9d (chapter 7), and the class only named it as an e-insertion example. See doubts. |
| 20 | sie | Pronoun. **The hover is wrong.** See doubt 1. |
| 21 | trinken | **Added to Tag 11.** WL 4/8a B, LWS p. 57. Tag 11 teaches it. Tag 9 only has it once inside an imperative example. |
| 22 | und | Conjunction, hover ✓. |
| 23 | Ihr / Ihre | Possessive (Day 13+). Ihre hover ✓. **The hover for "Ihr" is wrong.** See doubt 1. |
| 24 | Jahre alt | **Added the phrase `Ich bin … Jahre alt.` to Tag 4.** Tag 4 teaches it (rule title). It is also on LWS p. 28. |
| 25 | dein / deine | Possessive, hover ✓. |
| 26 | die Ziffer | Used twice on Tag 4. Not in WL. Hover ✓ ("digit"). Covered by the glossary. |
| 27 | doppel | Not a standalone word (WL only has *doppelt*, 3/5a, not bold). Hover ✓. Covered by the glossary. |
| 28 | noch einmal | Covered by the Tag 4 phrase `Noch einmal, bitte.`. |
| 29 | aber | Conjunction, hover ✓. |
| 30 | das T-Shirt | Left out. It is used nowhere and WL tags it 11/1a. |
| 31 | der Ball | Used only in the Tag 2 letter tile "B wie Ball". Hover ✓. It is bold, but WL tags it 5/10a (KB p. 58, a Day 13+ page). Not added. Flagged for Days 13+. |
| 32-35 | der Freund, die Freundin, der Kollege, die Kollegin | **Added to Tag 5.** WL 2/2a B, LWS p. 28. Class 12.09 introduced chapter 2 as "Freunde, Kollegen und ich". |
| 36 | halten | **Added to Tag 5.** It is in the Tag 5 vowel-change table (a→ä). Not in WL ch. 1-5. |
| 37 | helfen | **Added to Tag 5.** WL 4/11 B. It is in the Tag 5 vowel-change table (e→i). |
| 38 | ja | Answer word, hover ✓. |
| 39 | lustig | **Added to Tag 5.** WL 2/3b B, LWS p. 29. |
| 40 | nehmen | **Added to Tag 5.** WL 4/6a B, LWS p. 57. It is in the Tag 5 vowel-change table. |
| 41 | nein | Answer word, hover ✓. |
| 42 | nicht gern | Covered by the Tag 5 entries `gern` and `nicht so gern`, and nicht has hover ✓. |
| 43 | raten | **Added to Tag 5.** WL 1/5b B, LWS p. 17. It is in the Tag 5 vowel-change table. |
| 44 | toll | **Added to Tag 5.** WL 2/3a B, LWS p. 29. |
| 45 | waschen | **Added to Tag 5.** WL 4/11 B, LWS p. 57. It is in the Tag 5 vowel-change table. |
| 46 | werfen | **Added to Tag 5.** It is in the Tag 5 vowel-change table (e→i). Not in WL ch. 1-5. |
| 47 | das Handy | **Added to Tag 4.** Used on Tags 4 and 9. The class taught Handynummer on 11.09. |
| 48 | das Kapitel | Classroom term, not bold (2/6c). Hover ✓. |
| 49 | das Nomen | Grammar term, not bold. Hover ✓. |
| 50 | das Wörterbuch | **Added to Tag 6.** WL 2/10a B, LWS p. 29. |
| 51 | der Artikel | **Added to Tag 6.** WL 2/6a B. The grammar is taught on Tag 6. |
| 52 | der Kugelschreiber | Left out. It is used nowhere, WL tags it 11/10a, and Tag 11 has *der Kuli*. |
| 53 | der Lieferant | Used only as an example of the "-ant → der" rule on Tag 6. Not A1 vocabulary. **Hover added to g06.** |
| 54 | der Plural | Grammar term, not bold. Hover ✓. |
| 55 | der Singular | Grammar term, not bold. **The hover was missing, so I added it to g07.** |
| 56 | die Lampe | Left out. It is used nowhere and WL tags it 9/1a. |
| 57 | die Lernkarte | Left out. It is used nowhere, it is not bold (2/8c), and the class did not teach it. |
| 58 | die Seite | **Added to Tag 6.** WL 2/6c B. Tag 2's "Kursbuch Seite 11/13" had no hover before; it does now. |
| 59 | neu | **Added to Tag 6.** WL 2/12a B, LWS p. 29. Tag 6 is the first Day that uses it in teaching examples. Tags 1-2 only use it in example sentences. |
| 60 | vergleichen | **Added to Tag 6.** It is used nowhere, but it is bold (WL 2/6c). |
| 61 | Bis dann! | Left out. It is used nowhere and WL tags it 7/1c. |
| 62 | bis | Preposition, hover ✓. |
| 63 | die Idee | Bold, but WL tags it 5/12 (KB p. 59, Day 13+). It is used only on Tags 14 and 15. Hover ✓. Not added. Flagged for Days 13+. |
| 64 | die Zeit | **Added to Tag 7.** WL 4/3a B. "Hast du … Zeit?" belongs to Tag 7's *sich verabreden*. |
| 65 | die Öffnungszeiten | **Added to Tag 10.** Tag 10 teaches it (Lesen Teil 3 sign). WL tags it 11/12c. |
| 66 | jeder | Determiner. **The hover was missing (Tag 4 caption "Jeder stellt sich kurz vor."), so I added it to g04.** |
| 67 | montags | **Added to Tag 10.** Tag 10 explains it ("montags means on Mondays"). |
| 68 | offen | **Added to Tag 6.** WL 5/14 B. Its first use is the Tag 6 example "Die Tür ist offen." |
| 69 | super | **Added to Tag 7.** WL 2/3a B, LWS p. 29. The class taught "Ja, super" on 17.09. |
| 70 | um | Preposition, hover ✓. |
| 71 | von | Preposition, hover ✓. |
| 72 | zusammen | **Added to Tag 11.** WL 4/4 B (KB p. 46, "Zusammen essen" = Tag 11). |
| 73 | das Komma | **Added to Tag 4.** Tag 4 teaches "drei Komma fünf". Not in WL. |
| 74 | die Währung | Left out. It is used nowhere and it is not in WL ch. 1-5. |
| 75 | moin | Already an entry: Tag 8 `Moin`. |
| 76 | die Brille | **Added to Tag 9.** The class used it on 21.09 in the kein examples, and Tag 9 uses it. |
| 77 | die Nachrichten | Covered by the Tag 12 entry `die Nachricht` (en: "message; (plural) the news"). |
| 78 | vor | Preposition, hover ✓. |

Totals (78):
- **33 added as entries.**
- **10 already covered by an existing entry.** The exact-match script missed 7 of them because of capitals or punctuation; the other 3 are noch einmal, nicht gern and die Nachrichten.
- **8 left out** because they are unused and not ch. 1-5 exam vocabulary: Bier, regnen, T-Shirt, Kugelschreiber, Lampe, Lernkarte, Bis dann!, Währung.
- **2 bold ch. 5 words on Day 13+ pages** (Ball, Idee), flagged for that owner.
- **3 got a new hover only** (Lieferant, Singular, jeder).
- **22 function words or grammar terms** that are covered by the hover dictionary. Two of these hovers are wrong: sie and Ihr (doubt 1).

---

## 2. Wortliste check, chapters 1-5

- I transcribed every entry tagged 1/…-5/… on WL pp. 162-174: **844 lines**. A few lines group closely related headwords, for example the number words or *gute Nacht / guten Abend / …*. **581 of them are bold.** My notes are in the session scratchpad and not in the repo.
- Unclear bold readings were checked again on 200-250 dpi crops: Arm, Ding, Aussage, stellen (1), Interview and eintausend are bold. *Ihr, Ihre* and *Ihnen* are printed in regular weight.
- **Already covered before this work:** 395 of the 581 bold lines matched a vocab entry automatically. Many more were already covered by a phrase entry or were function words.
- **After this work:** 487 bold lines match an entry. The other 94 break down as follows, and none is an open gap inside Days 1-12:
  - **Function words with a correct hover** (articles, pronouns, prepositions, conjunctions, particles): aber, alle, alles, als, am, an, andere, auf, bis, das, dein, die, diese, dir, ein/eine, er, es, etwas, euer, für, ich, ja, jede/jeder, man, mehr, mein, nein, nicht, nichts, noch, nur, oder, so, sonst, um, und, uns, unser, von, vor, wir, plus. *durch* has no hover, but no Day 1-12 uses it.
  - **Covered by an existing phrase or another entry:** bitte, Dank (`Vielen Dank!`), Entschuldigung (`Entschuldigung!`), tschüs (`tschüss`), ganz (`ganz gut`), spät (`Wie spät ist es?`), einfach (`Das ist ganz einfach.`), gerne (`gern`), merken (`sich merken`), stellen (`eine Frage stellen`), einhundert/eintausend (`hundert`/`tausend`; I added a hover for each to g04).
  - **Skipped on purpose (ch. 1-4):**
    - *ansehen* (2/10a): separable verb, and separable verbs are taught on Tag 14. No Day 1-12 uses it.
    - *Chefin* (4/11): its partner *der Chef* is a Tag 15 entry, so the pair should be placed together (see doubt 2).
    - *erste* (3/1b): ordinal numbers are chapter 6.
  - **Chapter 5 words on Day 13+ pages** (KB pp. 57 Familie, 58-63): Mutter, Vater, Onkel, Eltern, Sohn, Tochter, Schwester, Geschwister, Großeltern, Opa, Verwandte, Ball, Hund, Sport, Homepage, Tour, Karte, Hausaufgabe, Problem, Gruß, lieb, nächste, Idee, leidtun, verschieden, Aussage, beschreiben, Techniker/Technikerin, vorbereiten, vorher, sitzen, entschuldigen, pünktlich, Verspätung. coverage.md assigns the family words and KB pp. 57 (8-9)-63 to Day 13+, and I may not edit those Days. **They are listed here for the Day 13+ owner.** Tag 12 now has *die Oma* (KB p. 54, Kaan's day) and *das Training* (KB p. 57, 7a calendar). *Opa* got a hover in g11 because a new example uses it.
- **Lernwortschatz** (treated like bold): every item on the five spreads is now covered, with these exceptions:
  - zuordnen (separable, unused)
  - *ein Mal / das erste Mal* (ordinals, ch. 6)
  - mein/dein/Ihr (possessives, Day 13+)
  - the ch. 5 family words, Musikschule and Stress (Day 13+)
  - einkaufen, Kantine, nett, Leute, passen, E-Mail, Party, Geburtstag: these exist, but on Days 13+ (doubt 2)
  - *Entschuldigung, wo finde ich …?* and *Können Sie wechseln, bitte?* are the example sentences of the Tag 10 entries `finden` and `wechseln`.
- **Non-bold words** were added only where the Day's notes use them heavily or the class taught them: atmen, halten, werfen, das Handy, das Komma, montags, die Öffnungszeiten, die Brille, traurig, die Uhrzeit (Tag 12 uses it 8 times). Non-bold LWS items: okay, der Start, zeichnen, `Ich bin … Jahre alt.`

---

## 3. Every entry added (108) and its source

Each entry has de, hi (Devanagari), en, type, gender and plural (nouns), forms (stem-changing or -e- insertion verbs), and an example with its English translation. Every plural was checked against the WL print (or Duden where the word is not in the WL).

| Tag | Entry | Source |
|---|---|---|
| 1 | hier | WL p. 167, 2/7a B. Tag 1 explains *hier ist …* on the phone. |
| 2 | die Familie (die Familien) | WL p. 165, 5/1a B. The du/Sie tables of Tags 1-2 rely on it (class 09.09: du for family). |
| 2 | das Interview (die Interviews) | WL p. 167, 1/4b B. |
| 4 | das Telefon (die Telefone) | WL p. 172, 1/4a B. |
| 4 | das Handy (die Handys) | Dropped word. Used on Tags 4 and 9. Class 11.09. |
| 4 | minus | WL p. 169, 1/7b B. It is in the Tag 4 e-mail table. |
| 4 | das Komma (die Kommas) | Dropped word. Tag 4 decimals. |
| 4 | Ich bin … Jahre alt. | LWS p. 28. Tag 4 rule. Class 11.09. |
| 4 | laut | WL p. 168, 1/6a B. |
| 4 | sammeln | WL p. 171, 1/1c B. LWS p. 17 "im Kurs". |
| 5 | atmen (du atmest) | Dropped word. Tag 5 spelling table. |
| 5 | machen | WL p. 168, 1/1c B. LWS p. 17. |
| 5 | lieben | WL p. 168, 2/3a B. |
| 5 | nennen | WL p. 169, 2/3c B. |
| 5 | stehen | WL p. 172, 2/10a B. Tag 5 "Das Verb steht auf Position 2". |
| 5 | raten (rätst, rät) | WL p. 170, 1/5b B. LWS p. 17. Tag 5 table. |
| 5 | halten (hältst, hält) | Dropped word. Tag 5 table. |
| 5 | waschen (wäschst, wäscht) | WL p. 174, 4/11 B. LWS p. 57. Tag 5 table. |
| 5 | helfen (hilfst, hilft) | WL p. 167, 4/11 B. Tag 5 table. |
| 5 | nehmen (nimmst, nimmt) | WL p. 169, 4/6a B. LWS p. 57. Tag 5 table. |
| 5 | werfen (wirfst, wirft) | Dropped word. Tag 5 table. |
| 5 | toll / lustig / wirklich | WL pp. 173 / 168 / 174, 2/3a-b B. LWS p. 29. |
| 5 | der Freund, die Freundin, der Kollege, die Kollegin (-e, -nen, -n, -nen) | WL pp. 166/168, 2/2a B. LWS p. 28. Class 12.09. |
| 5 | heute | WL p. 167, 3/6b B. LWS p. 41. |
| 5 | der Moment (die Momente), with "im Moment" in en | WL p. 169, 2/3b B. LWS p. 28. |
| 6 | die Mitte (no plural, WL "Sg.") | WL p. 169, 3/1b B. LWS p. 40. Tag 6 Mittwoch note. |
| 6 | der Kalender (die Kalender) | WL p. 167, 5/7a B. Tag 6 title. |
| 6 | Tennis (n, no article, WL "Sg. ohne Artikel") | WL p. 172, 2/12b B. LWS p. 28. Class 16.09 "Spielst du Tennis?". |
| 6 | traurig | Class 16.09. |
| 6 | vergleichen | WL p. 173, 2/6c B. |
| 6 | sich merken (merke mir · merkst dir · merkt sich) | WL p. 168, 2/11a B. KB p. 24 box "Merken Sie sich die Artikel mit Farben". |
| 6 | der Artikel (die Artikel) | WL p. 163, 2/6a B. |
| 6 | das Wörterbuch (die Wörterbücher) | WL p. 174, 2/10a B. LWS p. 29. |
| 6 | die Seite (die Seiten) | WL p. 171, 2/6c B. |
| 6 | die Farbe (die Farben); blau, grün, rot | WL pp. 165 / 164 / 166 / 171, 2/10a-11a B. |
| 6 | die Möglichkeit (die Möglichkeiten) | WL p. 169, 2/6a B. |
| 6 | weitere | WL p. 174, 2/6c B. |
| 6 | neu | WL p. 169, 2/12a B. LWS p. 29. |
| 6 | offen | WL p. 170, 5/14 B. Tag 6 example. |
| 6 | wichtig | WL p. 174, 4/11 B. LWS p. 57. Tag 6 examples. |
| 7 | die Taxifahrerin, Polizistin, Friseurin, Handwerkerin, Mechanikerin, Journalistin (all -nen) | WL pp. 172 / 170 / 166 / 167 / 169 / 167, 2/6a-2/9a B. LWS p. 28 (Handwerkerin, Mechanikerin). |
| 7 | der Reiseführer (die Reiseführer), die Reiseführerin (-nen) | WL p. 170, 1/4a B. |
| 7 | der Club (die Clubs); Basketball (m, no article) | WL p. 164, 2/12a B; WL p. 163, 2/12b B. |
| 7 | die Zeit (die Zeiten) | WL p. 174, 4/3a B. LWS p. 68. |
| 7 | super | WL p. 172, 2/3a B. LWS p. 29. Class 17.09. |
| 7 | berichten (berichtest, berichtet) | WL p. 163, 2/9b B. |
| 7 | die Notiz (die Notizen) | WL p. 169, 2/9b B. LWS p. 29. |
| 7 | tauschen / wählen | WL p. 172, 2/8c B; WL p. 174, 2/12b B. |
| 8 | der Arm (die Arme) | WL p. 163, 3/5b B. |
| 8 | circa | WL p. 164, 3/1b B. |
| 8 | da | WL p. 164, 3/1b B. LWS p. 40. |
| 8 | okay | LWS p. 41 (WL 3/2b, not bold). Taxi dialogue. |
| 8 | eine Frage stellen | WL p. 172, *stellen (1)* 3/k&k B. |
| 9 | die Brille (die Brillen) | Dropped word. Class 21.09. Tag 9 kein example. |
| 9 | das Ding (die Dinge) | WL p. 164, 3/k&k B. |
| 9 | dann / immer | WL p. 164, 1/6a B; WL p. 167, 2/8b B. Both are used throughout Tag 9's directions. |
| 9 | zeichnen (zeichnest, zeichnet); der Start (no plural, LWS "Sg.") | LWS p. 40 (WL 3/2b, 3/8, not bold). |
| 10 | der Saft (die Säfte) | WL p. 171, 4/5a B. LWS p. 56. Tag 10 uses *Saft* 10 times, and it had no hover before. |
| 10 | das Lebensmittel (die Lebensmittel) | WL p. 168, 4/1a B. |
| 10 | die Öffnungszeiten (gender pl), montags | Dropped words. Tag 10 Lesen Teil 3 section. |
| 10 | das Kilogramm (die Kilogramm) | WL p. 168, 4/6d ÜB B. LWS p. 56. |
| 10 | wie viel | WL p. 174, 4/6a B. |
| 10 | natürlich / dort | WL p. 169, 4/11 B; WL p. 164, 4/6a B. Both are used on Tag 10. |
| 10 | international | WL p. 167, 1/1a B. Tag 10's strategy on international words. |
| 11 | trinken, frühstücken, probieren, schneiden (schneidest, schneidet), planen, erzählen, beantworten (beantwortest, beantwortet) | WL pp. 173, 166, 170, 171, 170, 165, 163; 4/3b-4/11 B. LWS p. 57. |
| 11 | das Gericht (-e), das Paar (-e), das Team (-s), das Thema (Themen) | WL pp. 166, 170, 172, 172; 4/10b-4/11 B. |
| 11 | manchmal, morgens, vormittags, mittags, nachmittags, abends, wenig, wach | WL 4/9a B (pp. 168, 169, 173, 169, 169, 162, 174, 174). LWS p. 57. Tag 11 uses morgens 7 times. |
| 11 | zusammen / zurück | WL p. 174, 4/4 B; 4/11 B. |
| 12 | die Oma (die Omas) | WL p. 170, 5/1a B. LWS p. 68. Class 24.09 (Kaan besucht seine Oma). |
| 12 | das Training (die Trainings) | WL p. 173, 5/7a B (KB p. 57, 7a = Tag 12). |
| 12 | die Uhrzeit (die Uhrzeiten) | WL p. 173, 5/4a. Tag 12 uses it 8 times. |

Gloss additions (only for inflected forms in the new examples, and for the hovers that were missing):
- g04: sage, jeder, einhundert, eintausend
- g06: merken, merke, merkst, merkt, lieferant
- g07: berichte, berichtest, berichtet, singular
- g09: zeichne, zeichnest, zeichnet
- g11: probiere, schneide, schneidest, schneidet, grillparty, opa, erzählt, beantworte, beantwortest, beantwortet

Note: the Tag 12 verifier report says that frühstücken, morgens, vormittags, mittags, nachmittags and abends were removed from Tag 12 because Tag 11 had them. Tag 11 no longer had them, so they had fallen out of every Day. They are now back on Tag 11, which is the earliest Day that uses them and also their WL tag (4/9a).

---

## 4. Doubts and things outside my files

1. **Wrong hover for lowercase *sie* and for *Ihr* (needs a glossary.ts change, which I may not edit).**
   - `lookup()` is case-insensitive, and vocabulary entries override `EXTRA`. So the Tag 2 entry `Sie` (you, formal) makes every lowercase **sie** (she/they, several hundred uses) show "you (formal, capital S)".
   - In the same way, the Tag 2 entry `ihr` makes **Ihr** in *Wie ist Ihr Name?* show "you (informal, several people)".
   - A gloss file cannot fix this, because per-day glosses never override. A lowercase `sie` entry would collide with `Sie` in the audit's duplicate check.
   - Suggested fix in glossary.ts: let the hand-checked `EXTRA` win for `sie`/`ihr`, or make the lookup case-aware. The meanings should be "she / they; Sie = you (formal)" and "you (plural); her; Ihr = your (formal)".
2. **Ch. 1-4 exam words whose only entry is on a Day 13+** (they break "earliest Day owns it", but I may not delete from Days 13+):
   - ab, mit, nach, seit, zu (Tag 17)
   - allein, Chef, bleiben (Tag 15)
   - aufstehen (3/3), E-Mail (2/12b), einkaufen (4/2a), Party (Tag 14)
   - bekannt (1/2c), Kantine (4/9a) (Tag 16)
   - Leute (2/1), Mann (4/8a), nett (4/11), passen (2/6a), Kunde/Kundin, Arbeitszeit (Tag 17)
   - Spaß (4/11), krank, Spiel (Tag 13)

   The orchestrator should decide whether to move them down. *Chefin* (4/11) was not added, so that it can sit with *Chef*.
3. **Placement judgement calls.** Each is defensible, but another reader could choose differently:
   - Freund/Freundin/Kollege/Kollegin on Tag 5 (WL tag 2/2a = KB p. 19). Tag 5's notes do not use them. Tag 7 (work) would also fit Kollege.
   - Reiseführer/-in on Tag 7 (the job theme), although the WL tag is 1/4a (Tag 2 pages).
   - Tennis on Tag 6 (first use, class 16.09), but Basketball on Tag 7 (WL 2/12b, KB p. 25 form).
   - immer on Tag 9 (first German use, "immer geradeaus"), not Tag 7 (WL 2/8b).
   - Mitte, Kalender and offen on Tag 6, their first use, although the WL tags are later.
   - die Familie on Tag 2 (the du/Sie rule), while the family members stay with Day 13+.
   - die Zeit on Tag 7.
4. **traurig** rests on one translation sentence in class (16.09). **regnen** was left out: the class mentioned it only as a spelling example, and it is chapter 7.
5. **Plurals I did not change** (they are not my entries, and none is wrong):
   - The WL prints *Frühling* and *Herbst* as "(Sg.)", but Tag 6 gives *die Frühlinge / die Herbste*. These plurals exist in Duden but are rare.
   - The WL prints *Euro, Cent* and *Kilo* with -s plurals. Tags 4 and 10 omit the plural, which matches usage after numbers (*zwei Euro*).
6. *das Komma*: Duden allows *Kommas* and *Kommata*. I gave *Kommas*.
7. Another process changed `d01.ts` on disk while I was working. My insert there applied cleanly, and the final audit and typecheck are clean.

---

**Summary.**
- I added 108 vocabulary entries across Tags 1-12: 33 from the dropped list and 75 from Wortliste ch. 1-5 and the Lernwortschatz. Of those 75, all but 4 are bold; the 4 non-bold ones are okay, der Start, zeichnen (all on the Lernwortschatz) and die Uhrzeit (used 8 times on Tag 12). Every entry was checked for article, plural, Hindi and English. I also added 26 hover glosses.
- Of the 78 dropped words, 33 were added, 10 were already covered by an existing entry, 8 were left out on purpose, 2 belong to Day 13+, 3 needed only a hover, and 22 are function words or grammar terms covered by the hover dictionary.
- Inside Days 1-12, no bold ch. 1-4 content word is now without an entry, except the three deliberate skips: ansehen, Chefin and erste.
- Still open for others: the *sie*/*Ihr* hover bug in glossary.ts, ch. 5 family and later words for Day 13+, and about 20 ch. 1-4 words whose only entry sits on a Day 13+.
- audit: 0 errors / 0 warnings. check-content: only missing-clip. typecheck: clean.
