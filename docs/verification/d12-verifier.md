# Tag 12 — verifier report (class 24.09.2026)

## 1. What I checked
- Rules: docs/verifier-brief.md, docs/lesson-authoring.md (§10).
- Files: src/data/days/d12.ts (every note block, 33 vocab entries before my changes, the 9-line dialogue, 49 exercises, examTip), src/data/gloss/g12.ts, scripts/art/d12.json, src/lib/uhrzeit.ts, and the clock components in src/components/notes/visuals.tsx (ClockFace, FormalClocks, ClockExplorer, plus the legend CSS in src/styles/rich.css).
- uhrzeit.ts: I ran `informalTime` for all 12 hours × all 12 minute steps (144 phrases) and read every one, plus the `kind`, `target` and `why` text for each minute step. All are correct standard German: `ein Uhr` at 1:00, `eins` after nach/vor/halb (fünf nach eins, halb eins, Viertel vor eins), 12:25 = fünf vor halb eins, 12:30 = halb eins ("12:30, not 1:30"), 11:45 = Viertel vor zwölf, :25 = fünf vor halb X+1, :35 = fünf nach halb X+1, :40 = zwanzig vor X+1. ALL_INFORMAL_TIMES has 144 distinct phrases.
- Widget geometry: sectors nach 0°→m·6, vor halb m·6→180°, halb 0→180°, nach halb 180°→m·6, vor m·6→360°. The circled numeral is `target`, which is the next hour for every halb/vor form. The formal clocks (5:15, 17:15, 21:20, 0:15) match their German text.
- Primary sources: Kursbuch pp. 54, 55, 56, 57, 58, 59, 60, 61, 62, 63 (rendered); Übungsbuch pp. 58–59 (4a ranges, 2b), 60–61 (7a–c), 68–69 (Lernwortschatz Kap. 5); books/modellsatz_text.txt (Hören Teil 1/2/3 instructions and scripts, Lesen Teil 1 example, Lesen Teil 3 Nr. 12 and 15); the whole transcript, including both plays of the 2a audio.
- Only after that: coverage.md (Day 12 Part B, A3 rows 45, 48, 49, A5 R15/R16/R21) and d12-writer.md.

## 2. Corrections
1. Tip after the verb table: "The Kursbuch lists these verbs with their er-form because …" → "Learn such verbs together with their er-form, as the Übungsbuch word list does (p. 68: schlafen, er schläft; treffen, er trifft)". Why: the Kursbuch has no such list. 1a just uses er-forms because the sentences are about Kaan. The er-form listing is in the Übungsbuch Lernwortschatz, and it is there only for schlafen and treffen. Wrong source claim. H. Source: KB p. 54, UB p. 68.
2. Sentence before the verb table: "The verb is always in position 2" → "In a statement the verb is always in position 2". Why: the same Day has yes/no questions with the verb in position 1 (Hast du am Nachmittag Zeit?). False absolute. H. Own knowledge.
3. §4 tip: "1:00 informally is ein Uhr" → "01:00 (and one o'clock in everyday speech) is ein Uhr, never 'eins Uhr'". Why: the old wording suggested that official 01:00 is said differently. Officially it is also "ein Uhr". H.
4. §5 Kursbuch tip: the list of p. 56 5a labels left out "sieben" (top of the clock) and "kurz nach sieben". Both are now added, so the list matches the page. M (completeness of a book claim). KB p. 56.
5. §5 paragraph: "the exam tasks use steps of five" → "the everyday times in the model test are simple ones such as halb eins and gleich 5 Uhr". Why: this was an unverifiable exam claim. The model test uses full, halb and gleich times plus 12.36 Uhr in Lesen, not "steps of five". M. Modellsatz.
6. §6 paragraph: "Kursbuch p. 63 … um drei Uhr" → "um Viertel vor drei". Why: p. 63 prints "um Viertel vor drei". "um drei Uhr" is on the p. 57 box. Misquote. H. KB p. 63.
7. Dialogue (written for the notes): Kaan's walk with Marie was "um fünf". The timeline on the same page, taken from the 2a audio, says "um vier", and in the audio Kaan goes to the cinema with Marie in the evening. I changed the dialogue to "Dann vielleicht um vier? / Um vier gehe ich mit Marie spazieren", with the ending "Am Abend gehen Marie und ich um halb acht ins Kino. Kommst du mit? — Ja, gern! Super, bis dann." I adjusted the situation line and the mcq ("Kaan hat um vier Uhr Zeit für Tobi" → Falsch, with a new why). Why: two contradicting versions of the same Sunday on one page would confuse the 2a listening. M. Transcript [40:00]–[44:00].
8. §7 table: "Lesen Teil 1" → "Lesen Teil 1, Beispiel" (the 12.36 item is the example item 0). H. Modellsatz p. 16.
9. examTip: "Times appear in all parts of the exam" → "Times come up in both Hören and Lesen". The model test supports only Hören and Lesen. M.
10. Art d12-hero: "a tall clock tower" → "… with a plain clock face without numerals". Why: the no-numbers rule (a generated clock face will show garbled numerals). L.

## 3. Removals and additions
- Removed from vocab (audit vocab-dup, §4 "earliest Day keeps it"): frühstücken, morgens, vormittags, mittags, nachmittags, abends. All six are vocab entries on Tag 11, and those entries are correct. Day 12 still teaches all of them in the tiles, the rule, the examples and the exercises. I added glosses for morgens / vormittags / mittags / nachmittags to g12, because the audit then reported no hover for them. **Orchestrator note:** A3 row 48 gives Tageszeiten to Day 12. If the Day 11 writer or verifier also drops these words, they must come back here.
- Added the compare row "Um wie viel Uhr ist es jetzt?" → "Wie viel Uhr ist es jetzt?". Why: the teacher said "Um wie viel Uhr ist es" for "what time is it now" (transcript [44:00]), and the class will copy it. The row explains that Um wie viel Uhr …? asks when something happens. "jetzt" is included because "Um wie viel Uhr ist es?" is fine when es means an event.
- Added a paragraph after the explorer that explains what the shaded wedge and the circled numeral show for every minute zone. It matches the widget code exactly: nach 12→hand, vor halb hand→6, halb right half, nach halb 6→hand, vor hand→12, circle = next hour for the halb/vor forms. Before this, the Day had no explanation of the shading.

## 4. Doubts I could not settle (not in my files)
- **Explorer legend (visuals.tsx, shared):** it says "right half = nach / left half = vor". For :25 (fünf vor halb, right half) and :35 (fünf nach halb, left half) that is wrong. Also, the "vor" dot is drawn as an outline ring, but the widget never draws an outline: every sector is the same tinted fill. My new paragraph says "mostly nach / mostly vor, but :25 and :35 count from halb", so the page is not wrong. Still, the legend should be fixed, for example "shaded = the minutes the phrase counts · circled = the hour it names".
- Vocab-dup errors that remain with later Days: der Alltag (Tag 15), hoffentlich (Tag 14), vielleicht (Tag 17). Tag 12 is the earliest, so those Days must drop theirs. These are the only audit errors left that involve Tag 12.
- "zehn nach halb sechs (selten)" for :40 and "zehn vor halb sechs" for :20 are regional. They are correctly labelled as alternatives. I left them.

## 5. Writer doubts
- 2a distractors not in the audio: confirmed. Both plays in the transcript contain only: lange schlafen, Mittag mit Familie, Fußball im Park, um drei Felix und Sarah im Café Centro, um vier mit Marie spazieren, danach hoffentlich Kino. Resolved: correct.
- Timeline wording: matches the audio. Resolved.
- "fünfundzwanzig nach fünf" as an alternative: correct and understood. Resolved.
- 5:28 / 5:38 / 5:42: arithmetic correct and taught in class ([68:00]–[72:00]). Resolved.
- Tageszeiten ranges: UB p. 59 4a prints exactly 6–9 (sample), 9–12, 12–14, 14–18, 18–22, 22–6. Only one assignment makes sense. Resolved.
- Lesen Teil 3 Nr. 12: the sign says samstags 8.00–12.00, so the statement about Saturday afternoon is false. The Day's wording is right. Resolved.
- Hören Teil 1 Nr. 2: the script says "jetzt ist es gleich 5 Uhr", and the options are 15 Uhr / Halb 5 Uhr / Gleich 5 Uhr. Resolved.
- Writer §6 (explorer :25): done in uhrzeit.ts. Verified for all 12 hours (see §1).

## 6. Checks
- `node scripts/check-content.mjs`: clean apart from missing-clip.
- `node scripts/audit-notes.mjs --day=12`: no Tag-12-specific findings. The only errors that involve Tag 12 are the three [all] vocab-dups with later Days (Tag 14/15/17), which those Days must fix.
- `npm run typecheck`: clean.

VERDICT: PASS
