# Tag 16 — verifier report

Class 02.10.2026, Kapitel 7 (speaking practice). Verified file: `src/data/days/d16.ts`, `src/data/gloss/g16.ts`, `scripts/art/d16.json`.

Note: an earlier verifier run was interrupted mid-edit, so the working file already differed from the writer's HEAD version. Before checking anything else I re-read the whole current file from scratch. The interrupted edits were all complete and syntactically sound: the strategy rule with Tag 5/14 pointers, the market paragraph with der Vorschlag, the Äpfel row, the internet tip, the revised gehen/fahren paragraph, table and tip, the taxi compare row, es gibt / da ist (accusative vs nominative) with its compare block, *Sie ist in Indien sehr bekannt*, and the photo phrases. I checked each one as if it were new. The exercises did not yet match the revised notes (see correction 2 below).

## 1. What I checked

- Sources: the class transcript `classes/2026-10-02 German Haus A1/transcript.txt` in full (content from 20:00 only; 00:00–20:00 and several later blocks are empty). Kursbuch contents pp. 4–6, Plattform 2 game pp. 74–75, and Kapitel 7 pp. 80–89 (page scans). `books/modellsatz_text.txt`: Sprechen Teil 1–3, the Prüferblätter and the Bewertung Sprechen. The Days that own the cross-referenced items: Tag 5 (position 2), Tag 8 (taxi dialogue, KB p. 30), Tag 9 (Sie-imperative, zu Fuß gehen), Tag 10 (Sprechen Teil 2/3 format), Tag 12 (halb), Tag 14 (modal verbs, ankommen, mitkommen), Tag 15 (die Besprechung, dictionary advice), Tag 17 (mit/zu/nach + dative). Then the writer's report.
- Items: 5 sections, 15 vocab entries, a 9-line dialogue, a 6-line office dialogue table, 4 compare blocks before my edits (11 rows after them), 31 exercises after my edits (29 before), the examTip, the glosses and the art prompt.
- Duplicates: every vocab `de` was grepped across all Days. None is a vocab entry on an earlier Day. der Turm and die Brücke (Tag 8), die Besprechung (Tag 15) and mitkommen (Tag 14) are used here but stay with their owners.

## 2. Corrections

| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | Rule: “In the exam each answer is marked on whether you did the task understandably; language mistakes can cost half the points” | “In the speaking exam each task gets full points if you do it and are understood, half points if mistakes mean you do it only partly, and 0 if you cannot be understood” | The old wording did not say which exam part it meant (Schreiben is marked differently), and it was vaguer than the real scale. | M | Modellsatz, Bewertung Sprechen |
| 2 | Exercise 2 `why`: “fahren = go by vehicle; gehen = go on foot.” | “fahren = travel in or on a vehicle. gehen = walk, and also the usual verb for going to a place in town (Ich gehe ins Kino).” | “gehen = on foot” is a false absolute: *Ich gehe ins Kino / zur Arbeit* is normal even if you take the bus. It also contradicted the notes. I checked every sentence that states the gehen/fahren rule; the notes, table and tip are now correct (the KB also has *fahren / zu / das Büro*, p. 85). | H | own knowledge; KB p. 85 |
| 3 | examTip: “In Sprechen the examiner looks for complete, simple sentences with the verb in the right place …” | Points to Tag 10 for the format. Says Teil 3 is a request from a picture card, and a Sie-command with bitte is one way to make it. Says what counts is doing the task and being understood. Keeps the advice on asking for repetition and not switching language. | “Complete sentences” is not the criterion: the model Teil 3 answer is *Ein Glas Wasser, bitte!* The real criterion is “Aufgabe erfüllt und verständlich”. | H | Modellsatz Teil 3, Bewertung |
| 4 | Compare: “es gibt never changes, even when a plural follows.” | “es gibt stays singular, even when a plural follows.” | False absolute: the past tense is *es gab*. | M | own knowledge |
| 5 | Taxi compare `why` | adds “(or: Sind wir bald da? = Are we there soon?)” | Gives the present-tense way to say what the student meant. | — (addition) | own knowledge |
| 6 | Office table: “At what time is the meeting?” and “Yes, certainly. All clear, see you soon!” | “What time is the meeting?” and “Yes, sure. All right, see you soon!” | “All clear” is not natural English for *Alles klar*. | H | wording |
| 7 | Vocab die Großmutter, ex: *Julia hilft ihrer Großmutter.* | *Das ist unsere Großmutter.* (That is our grandmother.) | The old sentence is correct, but it uses a dative (helfen + ihrer) that is only taught on Tag 17. The new one repeats today's unser/unsere pattern. | M | wording |
| 8 | artikel Großvater `why`: “his wife is die Großmutter” | “Plural: die Großväter. Grandmother: die Großmutter.” | Clearer, and adds the plural. | — | wording |
| 9 | Art prompt: “A yellow taxi … a clock tower …” | “An ivory-beige German taxi … no signs or lettering anywhere.” | Taxis in Germany are ivory/light beige, not yellow, which is a wrong cultural detail for a German course. A clock face also invites numbers. **The existing `public/art/d16-hero.jpg` shows a yellow (NYC-style) taxi and a clock with numerals, so it needs to be generated again** (the orchestrator does this; I did not run `npm run art`). | H | own knowledge |

## 3. Removals and additions

Removals: none, apart from the reworded claims above. I first drafted a row “Um halb zehn Uhr → Um halb zehn” and then removed it myself. Standard teaching drops *Uhr* after *halb*, but *halb zehn Uhr* does occur in regional usage (Switzerland, Austria), so calling it “wrong” in a struck-through row would be an overclaim.

Additions (all corrections the teacher made in class, or mistakes heard in class, written in correct form):
- Section 4 compare: *Kommen Sie hier!* → *Kommen Sie bitte her!* The teacher herself said *Kommen Sie hier, Sachin*. Standard German uses *her / hierher* for movement towards the speaker. I added glosses `her` and `hierher`.
- Section 5 compare (3 rows):
  - *Wir haben einen Besprechung* → *eine* (a student's mistake).
  - *Kommst du heute in der Besprechung?* → *zur Besprechung* (the teacher's own model sentence; *in der* is location).
  - *Kommen nicht zu spät!* → *Kommen Sie nicht zu spät!* (a student left out Sie).
- 3 exercises:
  - da ist + nominative vs es gibt + accusative (mcq).
  - es gibt + plural (mcq).
  - *zur Besprechung* with Sie (mcq).
- I renamed one question stem (“Describing a town: which sentence is correct?”) so it does not clash with a Tag 4 stem.

Coverage: the transcript's taught items are all in the Day: the market (Äpfel sind; Vorschlag), the taxi (Wohin möchtest du gehen? / fahren, Wann kommen wir an?, Wie viel Zeit brauchen wir?, the pointer to the KB Kapitel 3 taxi dialogue), es gibt / da ist / dort ist, heißen, bekannt, the family photo (unser, aussehen, Lehrerin, mitkommen, Gehen wir), the office meeting (Kantine, Besprechung, Kommen Sie nicht zu spät, sicher), and the strategy advice.

I left out two things on purpose:
- The teacher's *Ich hole eine Cola ab*. *abholen* is for collecting a thing or person that is waiting; the natural sentence is *Ich hole mir eine Cola*. This is not worth teaching here.
- The student's *Wohin fährst du ab?* The teacher replaced it herself.

KB check: the class's picture tasks match the Plattform 2 *Wiederholungsspiel* (KB pp. 74–75: market, restaurant, family photo, calendar). Its p. 74 family-photo prompt is quoted correctly in the Day. The “Bild F / Taxi” and “Büro” pictures are not on those pages (their source is unknown), so the Day correctly does not attribute them to the book.

Kapitel 7 items that no Day covers yet (none of them was practised in this class, so I did not add them): **Small Talk im Büro** (KB p. 87) and **Medien / Probleme mit Medien** (KB p. 85: den Computer hochfahren, die Datei speichern, drucken; Ich habe kein Netz). They belong to a later Day or need an owner in the coverage map.

## 4. Doubts

- The hero image needs to be generated again (see correction 9).
- The transcript is ambiguous on self-study (“No. More.” … then “half an hour … that's enough”). The Day says half an hour is enough. That is acceptable, but it is the teacher's own advice, not a fact.
- *Sie heißt Delhi University* keeps the English proper name. That is acceptable for a name.

## 5. Writer doubts

- “First 20 minutes empty, more may have been taught”: checked against KB Kapitel 7 and the Plattform 2 game. Nothing else in the audible part needs adding (see the coverage note above). Resolved.
- “Family-photo wording reduced to simple correct sentences”: checked, all correct and natural. Resolved.
- The writer's “gehen = on foot / fahren = by vehicle” as the “standard” rule was itself a false absolute. It is now corrected throughout (notes, table, tip and exercise 2 `why`). Resolved.

## Checks

`node scripts/audit-notes.mjs --day=16`: no errors, 0 warnings. `node scripts/check-content.mjs`: clean. `npm run typecheck`: clean.

VERDICT: PASS
