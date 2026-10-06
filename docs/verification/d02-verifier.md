# Tag 2 — verifier report (class 09.09.2026)

## 1. What I checked
- Day file `src/data/days/d02.ts` (7 sections, 43 vocab entries, 10-line dialogue, 50 exercises before my additions, examTip), gloss `src/data/gloss/g02.ts` (25 entries), art spec `scripts/art/d02.json` (2 prompts).
- Primary sources, read myself before the writer report: Kursbuch p.11 (3a/3b, du-und-Sie box), p.12 (4a-c, 5a-b), p.13 (6a-c, 7a alphabet with printed letter names, 7b-c, "Gut gesagt: Wie bitte?"); Übungsbuch pp.8-9 (3b-e, 4a-d), pp.12-13 (6, 7a-e incl. 7d "Te O eN I Ka eR O O eS"), pp.44-45 (Sprechen Teil 1 box and the seven keyword cards); `books/modellsatz_text.txt` (Sprechen Teil 1 Prüferblatt, lines 987-1098; R/F and "Kreuzen Sie an" task wording); handouts `classes/Du oder Sie.pdf` (4 pp.) and `classes/Greetings.pdf` (2 pp.); full class transcript 2026-09-09.
- Then `docs/coverage.md` (A2, A3 rows 5-8, A5, Day 2 section) and the writer report.
- Every alphabet tile name compared letter by letter with KB p.13 7a: all 30 match (a be tse de e ef ge ha i jot ka el em en o pe ku er es te u fau we iks üpsilon tset ä ö ü estset).
- KB p.11 lines in section 3 compared with the scan: all 8 lines verbatim.
- All articles/plurals, all exercise keys (one correct mcq option each), order tiles, fill normalisation (`src/lib/utils.ts`: case-insensitive, ß/ss and umlaut-tolerant).
- Checks after edits: `check-content` clean (only missing-clip), `audit-notes --day=2` no Day-2-specific finding (remaining vocab-dup errors are later Days repeating Day 2 words; Day 2 is the earliest and keeps them), `typecheck` clean.

## 2. Corrections (before → after → why → certainty → source)
Wrong fact:
1. Section 5 intro: spelling happens "at the end of the speaking exam" → "in the speaking exam (Sprechen Teil 1, after your introduction)". Spelling closes each introduction in Teil 1, not the exam. H. Prüferblatt l.1079-1082.
2. Merke Sprechen Teil 1: "you introduce yourself to the examiners … usually asks you to spell … may also ask for a number" → "introduce yourself to the group … at the end of your introduction the examiner asks you to spell … and also asks for a number (phone or house number)". Teil 1 is a group introduction; the Prüferblatt says "Außerdem fragt er nach einer Nummer". H. Prüferblatt l.1012-1023, 1079-1097; UB p.44 box.
3. examTip and exam-mcq `why`: added that the examiner also asks for a number. H. Same source.
4. Section 2 tip: "Ich komme aus Punjab" (teacher's example) → "Ich komme aus Kerala. / Ich komme aus Delhi." plus "(Punjab is usually used with an article in German: aus dem Punjab.)". The region name takes der (der Pandschab/Punjab, "im Punjab"). M-H. Own knowledge (Duden entry "Pandschab, der").
5. Capital-S rule: "At the start of a sentence every word has a capital" (false as written) → "The first word of every sentence has a capital letter anyway, so at the start of a sentence only the situation tells you whether Sie or sie is meant." H.
6. Compare hint "Wasser … VAH-ser" (long a) → "VASS-er (short a)". H.
Wording / false absolutes:
7. "Frau + surname means Sie, never du" and mcq why "always goes with Sie" → "goes with Sie" (regional "Münchner Du" exists; the rule is still taught as the norm). M.
8. "German Z is always ts" (compare + mcq why) → "In German words Z sounds like ts" (loanwords such as Jazz). M.
9. "Volkswagen = Volk + Wagen" → "Volks + Wagen (Volk = people, Wagen = car)" — the compound has the linking s it is pronounced with ("FOLKS"). H.
10. Figure caption "the family name is always spelled" → "you are often asked to spell your family name". H.
11. "the old word Fräulein is no longer used" → "the old form of address Fräulein is no longer used" (the word itself still exists). H.
12. Section 3 tip: "colleagues who already know each other say Hallo, Frau Weber" (the book does not say they are colleagues) → "In scene B … Herr Hansen and Frau Weber, who already know each other, greet with Hallo Frau Weber and Hallo Herr Hansen" (exact book text). H. KB p.11.
13. Vocab die Frau en "Mrs, woman" → "Mrs, Ms (title), woman" (the Day itself teaches Frau for every adult woman, married or not). H.
14. Hindi: "Woher kommen Sie?" "आप कहाँ से आते हैं?" → "आप कहाँ से हैं?" (natural); "Und Ihnen?" "और आपको?" → "और आप (कैसे हैं)?". M-H.
15. das Alphabet: plural missing (implied "no plural") → pl "die Alphabete". H.
Answer key:
16. fill "Wie geht es ___?" and "Und ___?" accepted "ihnen" while the `why` insists on capital I → accepted list reduced to "Ihnen" (the checker is case-insensitive anyway, so no learner effect; removes the contradiction). H.
Art:
17. Hero prompt described "two scenes side by side" (guide §7: one calm scene) → one office-lobby scene: formal handshake in front, two friends laughing in the background. H.

## 3. Removals and additions
Removals: none beyond the reworded claims above.
Additions:
- Section 4 paragraph: the KB letter names are written as they sound; dictionary spellings are Jot, Vau, Ypsilon, Zett, Eszett (stops a learner writing "üpsilon"/"tset" as words). H.
- Section 5 strategy: double letter = say it twice (as in UB p.13 7d "O O") **or** "Doppel-" + letter; ä/ö/ü said by name (also "A-Umlaut" etc.); ß = estset/Eszett. H.
- Section 5 table: "Kannst du das buchstabieren?" (informal twin, KB p.13 7c) with its `say` phrase.
- Exercises (+3): fill "___ kommen Sie? — Aus Indien." (Woher; UB p.9 4b type), fill "Und wie heißt ___? (to a friend)" (du; UB p.8 3d type), mcq "Schmitt: how to say the double t" (te – te / Doppel-te).

## 4. Doubts not fully settled
- Punjab with article: I am fairly but not completely sure for the Indian *state* (news also writes "im Bundesstaat Punjab" without article). I avoided the question by changing the example and wrote "usually". If the orchestrator prefers, delete the bracket.
- "s + Vokal = z as in zoo" and "-ig = ich" are standard (northern) pronunciation; southern Germany/Austria/Switzerland say voiceless s and -ik. Correct for A1 and the exam; not mentioned in the Day.
- Dialogue: two adults "meet at a language course" and use Sie; participants in German courses often say du to each other. Not wrong (formal is possible), left.
- Section 7 "Stichwörter" table overlaps d04 section 1 table (Land?/Wohnort? rows); duplication judgement for the orchestrator (Day 4 should point to one owner).

## 5. Writer doubts
- Vocab overlap: Day 2 is the earliest Day for all listed words, so Day 2 keeps them; later Days must delete (orchestrator). Resolved.
- Exercise duplicate with Tag 3: audit shows no exercise-dup involving Tag 2. Resolved.
- English pronunciation respellings: checked; "VAH-ser" corrected (short a), the others (FOH-gel, AN-ya, tsoh, FOLKS-vah-gen) are fine. Resolved.
- "Hallo, Frau Weber between colleagues": reworded to the exact book scene without the inference. Resolved.
- Fräulein: reworded "as a form of address". Resolved.
- Sonja not used: fine (Anja suffices). Resolved.
- Aufgabenwörter: every phrase found in the books (Hören Sie/Lesen Sie KB 3a, Spielen Sie die Situationen KB 3b, Notieren Sie KB 6b, Ordnen Sie zu/Ergänzen Sie UB 4a-c, Kreuzen Sie an UB 3c and the model test); English meanings correct. Resolved.

VERDICT: PASS
