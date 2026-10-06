# Tag 10 — verifier report (class 22.09.2026)

## 1. What I checked

- Read `docs/lesson-authoring.md`, `docs/verifier-brief.md`, the whole of `src/data/days/d10.ts` (9 sections, 72 vocab, 12-line dialogue, 51 exercises), `src/data/gloss/g10.ts`, `scripts/art/d10.json`.
- Primary sources, rendered and read on the page: Kursbuch pp. 25, 33, 34, 35, 44, 45, 46, 47; Übungsbuch pp. 34–39, 44–51 (spreads 17, 18, 19, 22, 23, 24, 25, plus a zoom of the UB p. 35 map); `books/modellsatz_text.txt` (Hören candidate pages, transcriptions, Lesen Teil 3, Sprechen Teil 1–3 examiner pages); the full class transcript `classes/2026-09-22 German Haus A1/transcript.txt`.
- Then `docs/coverage.md` (Day 9 and Day 10, A3/A5 rows) and the writer report.
- Removed vocab sweep: all 13 words are still vocab entries on earlier Days in the current files: Flasche, Würstchen (d01); Lösung (d02); Hausnummer, Postleitzahl (d04, and d07 too); Straße, Glas (d06, Straße on d07 too); Platz, Adresse (d07); Markt, Gast (d08); Glück, Test (d09). **None restored.**
- Checks: `check-content` clean apart from missing-clip; `audit-notes --day=10` shows no Tag 10 errors or warnings (the remaining vocab-dup lines are with Tags 11/13/14/15/16, where Tag 10 is the earliest owner); `npm run typecheck` clean.

## 2. Corrections

| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | Section 2: the class dialogues (Hotel Europa, Café Delfino, Rathaus) placed right after the KB p. 33 7a description ("The class listened to three conversations with these destinations"), table rows numbered Gespräch 1/2/3, no answer key | New paragraph naming the real source **Übungsbuch p. 35, 7a** ("Hören Sie und sehen Sie den Plan an. Welcher Weg ist das: 1, 2 oder 3?"), the map streets, and a table Dialog A/B/C → **Weg 2 / Weg 3 / Weg 1** plus the route steps; the mcq now says "Dialog B" | The class audio is not KB 7a (7a has no Café, and its 7b uses route drawings, not a map with coloured routes). The UB p. 35 map has exactly Lindenstraße, Rathausplatz, Hauptstraße, Tannenstraße, Kaiserstraße and red/teal/yellow routes 1/2/3, which is what the teacher described ("red, green, yellow"). Key: A (Hauptstraße) = teal 2, B (Kaiserstraße) = yellow 3, C (Lindenstraße, Rathausplatz) = red 1 | H | UB p. 35 scan; transcript [08:00]–[16:00] |
| 2 | "-chen words (Brötchen, Würstchen, Hähnchen) are **always das**"; artikel `why` "words ending in -chen are always das" | "The small-form ending -chen … always makes a noun das. Careful: **der Kuchen** also ends in -chen, but it is not a small form" (tip + two `why`s) | False absolute: der Kuchen is taught on this very Day | H | own knowledge; d06 states the diminutive rule correctly |
| 3 | Mittagessen noun cards included das Hähnchen and der Schinken, under "Kursbuch pp. 44–45 show four meals with their words" | Removed those two cards from Mittagessen; tip now says they were met in class (Hähnchen pl. die Hähnchen; Schinken, usually pork, pl. die Schinken) | Not on the KB Mittagessen board (book: Apfelsaft, Kartoffeln, Salz, Pfeffer, Gemüse, Wasser, Essig, Öl, Cola, Fleisch); Schinken also appeared twice (Mittag- and Abendessen) | H | KB p. 44–45 |
| 4 | Price rule: "2,20 € is zwei Euro zwanzig: the word Cent is dropped" | "usually said zwei Euro zwanzig … The full form with Cent at the end is also correct: the model test writes *Neunzehn Euro fünfundneunzig Cent*." Fill 2,20 € now also accepts "zwanzig Cent" | The rule implied Cent must be dropped; the model-test option itself contains Cent | H | modellsatz p. 9 |
| 5 | PLZ "five digits" (rule and table) | "five digits in Germany, four in Austria and Switzerland" | False as a general statement for D-A-CH | H | own knowledge |
| 6 | Hindi `finden`: ढूँढ़ना, पाना | पाना, ढूँढ़ निकालना | ढूँढ़ना = to look for = suchen; a learner would mix up finden/suchen | H | own knowledge |
| 7 | Hindi `das Brot`: ब्रेड, रोटी | ब्रेड, डबल रोटी | रोटी alone suggests chapati | M | own knowledge |
| 8 | Hindi `die Limonade`: लेमोनेड | मीठा सोडा, लेमोनेड | German Limonade is any sweet fizzy soft drink | M | own knowledge |
| 9 | Hindi `die Metzgerei`: मांस की दुकान; `die Nudel`: नूडल | कसाई की दुकान, मांस की दुकान; नूडल, पास्ता | more natural / complete (writer doubt) | M | own knowledge |
| 10 | Dialogue situation "At the counter … (dialogues 3 and 5)", all seller lines "Verkäufer" | Situation says dialogues 3 and 5 are **joined**: counter, then checkout; the two checkout lines are spoken by "Kassierer" | In the book these are two separate scenes (counter / Kasse); the merge must not look verbatim | M | KB p. 47 |
| 11 | KB 7b "match each conversation to one of three routes drawn on a map" | "one of three small route drawings (Welche Wegbeschreibung passt?)" | Matches the page | H | KB p. 33 |
| 12 | Dialogue 1 "Ja, Moment – hier, bitte." | "Ja, Moment – hier bitte." | verbatim as on the page | H | KB p. 47 |
| 13 | "Orchester aus aller Welt …" → "Orchestra from all over the world as a guest" | "Orchestras from all over the world visiting Hamburg" | unnatural/illogical English | M | — |
| 14 | Hausnummer hint "say the hundreds first" | "listen for the hundreds first … (hundertsieben = 107, but hundertsiebzehn = 117)" | it is a listening task | M | UB p. 44 |
| 15 | `der Keks` en | adds "(in Austria also das Keks)"; `der Liter` gets pl "die Liter"; fills accept PLZ and Tuete | UB p. 47 lists der/das Keks; Liter has a plural | M | UB p. 47 |

Severity count: wrong fact 5 (#1, #2, #3, #4, #5), wrong Hindi meaning 1 (#6) plus 3 imprecise ones (#7–#9), wrong key 0, wording/attribution 6 (#10–#15).

## 3. Removals and additions

- Removed: Hähnchen and Schinken cards from the Mittagessen board (they are still in the tip, the food-group table, the Metzgerei row and the vocab).
- Added: answer key Weg 2/3/1 for UB p. 35 7a; glosses `dialog`, `beschreibung`, `kassierer`.
- Restored vocab: none needed (see §1).

## 4. Verified as correct (no change)

- All seven KB p. 47 dialogue texts used (1, 2, 4 as examples; 3 and 5 in the dialogue) match the page word for word, including "Was möchten Sie?", "Ich, bitte.", "150 Gramm Schinken", "Die kostet 35 Cent", "18,65 Euro", "Brauchen Sie den Kassenzettel?"; the Preise-sprechen box (0,99 / 1,09 / 2,20).
- Direction dialogue German (Hotel Europa / Café Delfino / Rathaus): the ASR text is identical on both playings and natural; the Day reproduces it faithfully ("Ja," before "das Café Delfino" and the echo "Das Rathaus?" are left out, which is harmless). No book attribution claimed beyond what is now stated.
- Every food noun: article and plural match KB pp. 44–45 / UB pp. 46–47 (Joghurt der/das, Cola die, Müslis, Tees, Kaffees, Kuchen, Kekse, Würste, Hähnchen, Schinken). Käse = चीज़ (not paneer) is right; Joghurt = दही, Sahne = क्रीम, मलाई, Pfeffer = काली मिर्च, Gurke = खीरा all correct.
- Prices and quantities: UB p. 50 "Heute im Angebot" (Marmelade 350 g Glas 2,69; Milch 1 l Flasche 1,29; Zucker 1 kg Packung 0,79; Joghurt 200 g Becher 0,69; Tomaten 250 g Dose 0,69), Emmas Supermarkt Tomaten 2,63 €, the l/g/kg "kein Plural" box, "Was kosten die Tomaten?": all as on the page. Number words checked (zweihundertsieben, hundertsiebzehn, achtzehn Euro fünfundsechzig, zwölf Euro achtundsiebzig, etc.).
- Exam claims against the model test: Hören about 20 min, 15 items; Teil 1 six conversations a/b/c twice; Teil 2 four Durchsagen R/F once; Teil 3 five messages a/b/c twice; instruction sentence; Zimmer 254/245; 11833/11883/12833; the price options (Dreißig Euro / Neunzehn Euro fünfundneunzig Cent / Fünfundneunzig Euro); "neunzehnfünfund neunzig" in the transcript (Teil 1 Nr. 1); 12 Euro 78 (Teil 2 Nr. 7); Lesen Teil 3 Öffnungszeiten sign at the post office; Sprechen Teil 1 "Wie ist Ihre Postleitzahl/Hausnummer?"; Teil 2 themes Essen und Trinken, Familie, Einkaufen and the Stadtplan example; Teil 3 "Ein Glas Wasser, bitte!" / "Ja, natürlich. Bitte."
- KB p. 25 (Goethestr. 7, 10711 Berlin), KB p. 34 lines and the 9c article answers, KB p. 35, UB p. 37 Filmnacht ad, UB p. 38 Jänner box, UB p. 44 207/117/107, UB p. 46 Wörter-lernen box, KB p. 46 5a and UB p. 49 5a umlaut pairs: all match.
- All exercise keys checked; every mcq has exactly one correct option.

## 5. Doubts I could not settle

- "Eine Flasche Milch kostet **ein** Euro neunundzwanzig": strictly accusative would be *einen Euro*, but the Kursbuch box ("1,09 Euro → ein Euro neun") and UB p. 50 ("Die Milch kostet ein Euro achtundzwanzig") use *ein*, and it is the normal spoken price form. Left as is.
- Hindi `das Hähnchen` चिकन, मुर्गा and `der Schinken` हैम: acceptable; हैम may mean little to a Hindi-only reader (it is usually pork, which the tip now says).
- **Other files (not edited):** `d07` has `der Platz` = "space, room", so the hover on Platz in Tag 10 (meaning "town square") may show the wrong sense; consider adding "square" to that entry. `docs/coverage.md` Day 10 §1/§2 wrongly lists the three class dialogues as "KB p. 33 7a-b"; they are UB p. 35 7a (which the map assigns to Day 9 as a GAP item; Tag 10 now teaches it, so Day 9 should not repeat it). d04/d07 both list die Postleitzahl and d06/d07 both list die Straße (cross-Day duplicates, not Tag 10's).

## 6. Writer doubts

- Direction dialogues source: **resolved**, it is UB p. 35 7a (see Correction 1).
- "neunzehnfünfundneunzig" as one word: **resolved**, fine as spoken form; the full form is now taught too.
- Plurals Salze/Essige/Öle: real (type/variety plurals); kept. Pizzen correct (Pizzas also exists); kept. Wasser without plural: fine at A1.
- der/das Joghurt: correct as noted. das Kilo: correct.
- Hindi Metzgerei/Becher/Nudel: Metzgerei and Nudel improved; Becher fine.
- Deleted vocab (13 words): **resolved**, all still on earlier Days; nothing restored.
- Tag 10 kept as earliest owner of Frühstück, Mittagessen, Abendessen, Getränk, kaufen, brauchen, Konzert, Ticket: correct (the later Days must drop them).
- Glosses "mengen", "bitten": correct for their heading use.

VERDICT: PASS
