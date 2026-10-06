# Tag 15 — verifier report

## 1. What I checked

- Sources read (page scans, not summaries): Kursbuch pp. 80-89 (Kapitel 7: photo task 1a-c with Gespräch 1 and 2, Lauras Blog "Mein Praktikum in Köln" 2a-d with the und/oder/aber box, pp. 83-88 later topics, p. 89 "kurz und klar" incl. "Antworten auf Ja-/Nein-Fragen" and "Sätze verbinden"); Übungsbuch pp. 86-87 (1b dialogues A-C with phrase box, 1c ja/doch/nein items 1-7, 2a-d Laura/und/aber/oder, "Vor aber steht immer ein Komma") and pp. 96-97 (Lernwortschatz Kapitel 7); `books/modellsatz_text.txt` (task formats); the class transcript of 2026-10-01 in full.
- Items checked: 19 vocab entries (article, plural, Hindi, examples), 7 note sections' prose and rules, 3 tables, 4 sentence diagrams, 2 compare blocks, 8+11 example sentences, 7 dialogue lines, 37 exercises (41 after additions), examTip, gloss file (23 → 31 keys), art spec, names file.
- Duplicates: none of the 19 vocab entries exists in another Day; der Kindergarten stays only in Tag 1 (used here in examples only); der Alltag (Tag 12), die Arbeit / der Termin / die Firma (Tag 7), der Kuli / satt (Tag 11), mitnehmen / abholen (Tag 14) are not re-entered.
- Cross-references checked: Tag 5 has the e→i table with nehmen/helfen; Tag 12 halb acht; Tag 13 war/hatte; Tag 14 separable verbs; Tag 17 dative (helfen + Dativ, bei + Dativ).

## 2. Corrections

| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | "Each answer uses a separable verb from Tag 14." | "Two of the answers use a separable verb (mitnehmen, annehmen); helfen, grüßen and bringen are not separable." | False: three of the five verbs are not separable. | H | KB p.80 1a; own knowledge |
| 2 | "helfen takes the dative (Tag 17), so we say beim Ticketkauf (bei + dem)." | "beim is bei + dem: the preposition bei takes the dative (Tag 17)." | False cause: the dative in beim comes from the preposition bei, not from helfen. | H | own knowledge |
| 3 | Photo description "Er grüßt einen Kollegen." | "Er grüßt eine Kollegin." plus a note: with a man *einen Kollegen* (der Kollege adds -n in the accusative). | The book option is "eine Kollegin grüßen" and photo C shows a woman; the class said "einen Kollegen", so both are now explained, and -n is no longer mistaken for a plural. | H | KB p.80-81 |
| 4 | Section 2 heading "Small Talk im Büro", caption "Kleine Gespräche im Büro", focus "Small Talk im Büro" | "Gespräche im Alltag" / "Kleine Gespräche im Alltag" | The dialogues are at a café, a ticket machine and a neighbour's door (UB p.86 "Alltagsgespräche verstehen"), not in an office. "Small Talk im Büro" is a different book section (KB p.87) that the class has not done. | M | UB p.86, KB p.87 |
| 5 | Tip: "this is exactly the task in the listening exercise where the dialogue lines must be matched to the pictures" | "the trap in the Übungsbuch task (p. 86, 1b) where you fill the dialogue gaps from a box of phrases" + one line on du (colleagues) vs Sie (stranger, neighbour) | Wrong description of the task: UB 1b is a gap fill from a phrase box. | H | UB p.86 |
| 6 | "The text below is our own version with the same ideas as the Übungsbuch text" | "The blog is in the Kursbuch (p. 82, 2a); the true/false statements are in the Übungsbuch (p. 87, 2b). Below is a shortened version with the same facts." | Wrong source: the text is in the Kursbuch. | H | KB p.82, UB p.87 |
| 7 | Praktikum text omitted the boss/colleagues, customers and Club Español; weekend line was "Am Wochenende treffe ich Freunde …" | Added 3 lines (Chefin und Kollegen erklären viel, aber manchmal keine Zeit; telefoniere mit Kunden / Chefin nimmt mich zu Kunden mit; Club Español, Deutsch und Spanisch) | Without them the Übungsbuch true/false statements the class marked (Chefin hilft immer? Kunden? Spanisch im Club?) cannot be answered from the notes. | H | KB p.82, UB p.87 2b |
| 8 | Commas before und/oder in two blog sentences ("…Sevilla, und das Wetter auch", "…Kaffee, oder ich mache…") | commas removed | Optional commas, but they contradicted the rule taught two blocks earlier ("no comma before und/oder") and the book has none. | M (wording) | KB p.82 |
| 9 | Dialogue "bei der Firma Paul" | "bei der Firma Pohl" | ASR mishearing; the book's name is Pohl. | H | KB p.81 Gespräch 2 |
| 10 | mcq "Which word means 'but'?" options aber / oder / und / **doch** | doch → auch | doch is also a conjunction meaning "but, yet", so two options were defensible. | H (key) | own knowledge |
| 11 | order "I like coffee, but today I am drinking tea." key only "… aber heute trinke ich Tee" | prompt adds "(Put heute straight after aber.)"; why mentions the alternative | "Ich mag Kaffee, aber ich trinke heute Tee" is also correct and buildable from the same tiles; the grader (case and punctuation-insensitive) would have marked it wrong. | H (key) | own knowledge; `src/lib/utils.ts` matches() |
| 12 | p (und/oder/aber): "each part keeps the verb in position 2"; mcq why "trinke is in position 2 of its part" | "each part keeps its normal order … (if the same subject is left out after und / oder, the verb simply comes right after the joining word)"; why reworded | With the subject left out the verb is the first word after und; the old wording was confusing. | M (wording) | own knowledge |
| 13 | examTip "In Lesen and Hören you decide whether a statement matches" | "In Lesen Teil 1 and 3 and in Hören Teil 2 you mark statements Richtig or Falsch" | Hören Teil 1/3 and Lesen Teil 2 are multiple choice; made exact. | H | modellsatz_text.txt |
| 14 | Hindi leicht "आसान"; allein "अकेला" | "आसान, हल्का"; "अकेले, अकेला" | en gives "easy, light", so Hindi needs both; allein is used as an adverb (अकेले). | M | own knowledge |

## 3. Removals and additions

- Removals: none (the unverified "Übungsbuch text" claim was reworded, see 6).
- Additions:
  - Tip on doch: doch also contradicts a negative **statement** (*Du hast keine Zeit. — Doch, ich habe Zeit!*). The Lernwortschatz lists doch (*Kommst du heute nicht? — Doch.*).
  - 4 Richtig/Falsch exercises from the Übungsbuch p.87 2b statements (verified on the scan): Sie kommt spät ins Büro (F), Die Chefin hilft Laura immer (F), Sie spricht im Club auch Spanisch (R), Sie möchte wieder nach Hause (F).
  - Gloss keys: kollegin, chefin, erklären, manchmal, telefoniere, kunden, fragen, club. Names file: pohl, español.

## 4. Doubts not settled

- Coverage, not a Day 15 error: KB p.87 "Small Talk im Büro" (good and bad small-talk topics, weather/sport/family/weekend phrases) and the UB p.87 2c-d und/aber/oder tasks were not taught in this class. If no later class covers p.87, a later Day should own it (coverage.md has no Day 13+ section).
- "Haben Sie keinen Zucker? — Doch, hier bitte." In the book the seller says "Doch. Hier steht er." Both are correct; left as is (not claimed as a quote).
- ja/nein/doch rule confirmed against KB p.89 and UB p.86 (Hast du keinen Termin? Doch./Nein. Kommst du nicht mit? Doch./Nein.). The teacher said "Ja, um drei" for UB 1c item 3 (ASR), but the book item has *keinen*, so **Doch** is right; the Day's key is correct.

## 5. Writer doubts

- "Exact Übungsbuch dialogue wording": resolved. I read UB p.86 (dialogues A-C, phrase box) and KB pp.80-81 (Gespräch 1 and 2). Every table phrase appears there or is a correct variant (Ja, gern(e); Alles gut. Und dir?; Können Sie mir helfen?; Ich brauche ein Tagesticket; Können Sie ein Paket für mich annehmen?; Klar, kein Problem; das ist nett; Was ist los?; Bis dann, ich hole dich ab). The Day's dialogue is labelled as a model and is correct German.
- Köln/Kiel and Vormittag/Nachmittag (ASR): resolved from KB p.82: Köln, **Am Vormittag** haben wir oft Besprechungen. The Day is right.
- "einer Kollegen grüßen" slip: the book says "eine Kollegin grüßen"; see correction 3.
- sich fühlen / Mach dir keine Vorwürfe: correctly left out (reflexive verb and imperative, not A1 chapter 7 content).

Checks: `node scripts/audit-notes.mjs --day=15`: no errors, 0 warnings; `node scripts/check-content.mjs`: clean apart from missing-clip; `npm run typecheck`: clean.

VERDICT: PASS
