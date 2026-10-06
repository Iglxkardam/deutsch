# Tag 9 — verifier report

## 1. What I checked
- Rules: docs/verifier-brief.md, docs/lesson-authoring.md (§10).
- Day files: src/data/days/d09.ts (7 sections, 29→26 vocab, 49 exercises, dialogue, examTip), src/data/gloss/g09.ts (17→19 entries), scripts/art/d09.json (1 prompt).
- Primary sources, page scans rendered and read: Kursbuch pp. 30, 31, 32 (zoomed on pictures A–E and the 6b sentences), 33, 37; Übungsbuch pp. 32–33, 34–35, 36–37.
- books/modellsatz_text.txt: Lesen Teil 3 (sign "Busverkehr bis 23.00 Uhr und von 1.00 Uhr bis 5.00 Uhr", item 15), Hören Teil 1 transcripts Nr. 3 and Nr. 5, "Sie hören jeden Text zweimal", Sprechen Teil 3 "Bitten formulieren und darauf reagieren".
- Class transcript 2026-09-21 in full.
- After my own pass: docs/coverage.md (Day 9 Part B, Day 8 boundary, A3/A5), then docs/verification/d09-writer.md.
- Tools: check-content clean (only missing-clip), audit-notes --day=9 shows no Tag 9 errors apart from the cross-day "der Bus" duplicate (see Doubts), typecheck clean.

## 2. Corrections
1. Picture story, frame A: "Oje, kein Fahrrad! Schnell, da ist ein Bus." → "… da ist ein Bus!". Frame C: "Oh nein! Keine Fahrkarte?!" → "Oh, nein! Keine Fahrkarte?!". Frame D: "Ich gehe zu Fuß! Jetzt aber schnell!" → "Ich gehe zu Fuß. Jetzt aber schnell!". Why: the book lines on KB p.32 6b are presented as quotations and were misquoted. The same fix was made in the matching mcq stem and in the vocab examples (Fahrkarte, zu Fuß gehen). Wording. Certainty H. Source: KB p.32 (zoomed scan).
2. "Jetzt aber schnell!" was translated as "But now quickly!" (timeline, vocab schnell, vocab jetzt) → "Now hurry!". I added a line to the tip saying that here **aber** is an emphasis particle and does not mean "but". Why: the literal translation teaches a wrong meaning of aber. Wording/meaning. H. Own knowledge.
3. Tip "The plural is always keine … its article is always die" and the "always keine" wording in the compare line and two exercise explanations → "In the plural it is keine for every gender". Why: a false absolute, because the dative plural is keinen (taught later). Rule wording. H. Own knowledge.
4. Compare line and one mcq explanation: "kein always needs a noun after it" → "kein goes with a noun". Why: a false absolute, because the pronoun forms keiner/keins exist ("Ich habe keins"). Rule wording. M-H. Own knowledge.
5. Sie-imperative rule: "the same as the infinitive … Sie fahren → Fahren Sie" → "fahren → Fahren Sie", and I added the one exception, **sein → Seien Sie**. Why: §6 requires exceptions to be stated, and "Sie fahren" was an odd source form. Rule wording. H. Own knowledge.
6. "Hier gleich links und dann geradeaus." was translated as "Right here, left, and then straight ahead." → "Turn left just here and then go straight ahead." The tip on gleich, "right here / immediately", → "just here, immediately (the first turning on the left)". Why: in a directions lesson, "right" read as a direction gives the wrong instruction. Wording. H.
7. Model-test sentence: "There you go right here around the corner …" → "You go to the right here, around the corner, and take the lift." Same reason as 6. Wording. H.
8. Hindi for die Wegbeschreibung: "रास्ता बताना" (a verb phrase, "to tell the way") → "रास्ते का विवरण" (a noun, "description of the way"). Hindi gloss. M-H.

## 3. Removals and additions
- Removed from vocab, because they are already entries on earlier Days (§4 earliest-Day rule; the audit flagged them): **richtig** (Tag 2/4), **Vielen Dank!** (Tag 4), **der Meter** (Tag 8). The words are still used in d09 examples and keep their hover from the earlier Day.
- Added two Sie-imperative examples for the coverage MUST COVER verbs **besuchen** and **fragen**, which were missing: "Besuchen Sie das Museum." and "Fragen Sie bitte Frau Müller." (Neither shows a masculine accusative.)
- Added hover glosses: handy (das Handy, die Handys) and zeit (die Zeit). The audit had reported both as having no tooltip.

## 4. Doubts not settled
- **der Bus** is in the vocab on both Tag 8 and Tag 9. The earliest-Day rule says Tag 8 keeps it, but the coverage map (Day 8 DO NOT TEACH) says Bus/Zug/Fahrrad vocabulary belongs to Day 9. I kept it on Tag 9 so that it does not disappear from both Days. The orchestrator should remove it from d08 (or from d09) in the final sweep.
- The vocab example "Wo ist der Weg zum Bahnhof?" is grammatical but less idiomatic than "Wie komme ich zum Bahnhof?". I left it unchanged; it is not wrong.
- The decision rule "bare noun → kein" is a correct A1 simplification. Some nouns allow both forms (Ich spiele kein/nicht Fußball; Ich bin kein/nicht Lehrer). The Day does not use these, so I added nothing.

## 5. Writer doubts
- **Frame letters B–E** (checked first): resolved, H. Only "3. A" is printed on the page (a blue example answer). The pictures settle the rest without doubt: B shows the bus driving away while she thinks of the U-Bahn sign (sentence 2); C has a "Fahrkarte?!" thought bubble at the U-Bahn platform (sentence 1); D shows her imagining herself running (sentence 5); E shows a door sign "HEUTE KEIN TEST" (sentence 4). The A→E order is also the story's logical order. The teacher's reading in class agrees. The quoted sentences themselves were misquoted (correction 1).
- Nehmen/Essen with feminine/neuter objects only: confirmed. No accusative is visible.
- Model-test Hören Nr. 5 quotation: verified word for word against modellsatz_text.txt.
- "Kochen Sie Reis": correct and natural. I kept it.
- der Bus duplicate: see Doubts. der Meter: removed from d09 (Tag 8 has it). das Glück and der Test: no duplicates.
- Hindi glosses: Fahrkarte "यात्रा का टिकट" is correct. Wegbeschreibung was fixed (correction 8).

## 6. Other items verified correct
All articles and plurals (Bus/Busse, Zug/Züge, Fahrrad/Fahrräder, Flugzeug/e, Schiff/e, U-/S-Bahnen, Straßenbahnen, Fahrkarten, Weg/e, Plan/Pläne, Ziel/e, Marktplatz/-plätze, Test/s; Glück with no plural). The kein table matches the G box on KB p.32 and the KB p.37 Artikel table. The KB p.33 7c dialogue phrases match the page. The ÜB p.34 6f "Auf dem Bild sind …, aber kein(e) …" pattern matches. zum/zur is correct. Every exercise key is correct, with exactly one correct mcq option. The order keys are acceptable: the English prompt fixes the order of the clauses. Exam claims (Lesen Teil 3 sign and answer Richtig; Hören Teil 1 six conversations, each heard twice; Sprechen Teil 3 requests) match the model test. The art prompt has no text and is factually plausible. Ownership: zu Hause / nach Hause → Tag 5; U-/S-Bahn difference and sein + Adjektiv → Tag 8 (both pointers correct); listening to directions → Tag 10 (Tag 10 has the section).

VERDICT: PASS
