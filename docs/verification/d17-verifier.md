# Tag 17 — verifier report

## 1. What I checked

- `docs/lesson-authoring.md`, `src/data/days/d17.ts` (4 sections, 23 vocab, 17 dialogue lines, 44 exercises before / 45 after), `src/data/gloss/g17.ts` (38 entries), `scripts/art/d17.json`.
- Class transcript `classes/2026-10-05 German Haus A1/transcript.txt` (it starts mid-way through the dative verbs; it covers the articles, the nine prepositions, the Laura audio, the voicemail note task and the Goethe-style short dialogues).
- Kursbuch Kapitel 7 contents (PDF p. 6) and pp. 80–89. The relevant pages are p. 83 (Dativ table, mit + Dativ, "Im Dativ Plural haben die meisten Nomen ein -n"), p. 84 (Ortsangaben zu/bei/aus/von, **in + Dativ (Wo?)**, Kurzformen incl. **in + dem → im**) and the summary on p. 89.
- Übungsbuch Kapitel 7 spreads 44–48 (pp. 88–97: Dativ drills, Kurzformen incl. "in + dem", Lernwortschatz).
- `books/modellsatz_text.txt`: Hören Teil 1 is heard twice (a/b/c), Teil 2 **once** (richtig/falsch), Teil 3 twice (a/b/c). There is no note-sheet task.
- Every German string was checked for case endings, gender, plural and word order. Every exercise key was checked.

## 2. Corrections

| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | examTip: "In Hören the texts are played twice" | Teil 1 and 3 are played twice, **Teil 2 only once** | False exam claim | H | modellsatz lines 109, 196, 232 |
| 2 | examTip: "an exam sentence with mit, bei or zu followed by an accusative article stands out as a mistake" | "when you write in Schreiben, check that the article after mit, bei, zu, aus, von or nach is dative" | Goethe A1 has no error-spotting task, so the claim was invented | H | modellsatz |
| 3 | §4 rule: "In the listening exercises the audio is played twice and you fill in a note sheet (Notizblatt) or tick" | The note sheet was the class task. The Goethe A1 Hören has a/b/c or richtig/falsch, and Teil 2 is heard once | Read as an exam-format claim, it was wrong | H | modellsatz; transcript [104:00] |
| 4 | Rule title "some verbs always take a dative object" | "a few verbs take a dative object" | False absolute: schmecken and passen are often used with no object (*Das schmeckt gut*) | H | own knowledge |
| 5 | §1: "It appears in two places: after verbs … and prepositions" | "In this lesson you meet it after a small group of verbs and after certain prepositions" | Incomplete: there is also the indirect object (geben, which the Day itself mentions) and in + Dativ for Wo? (KB p. 84) | H | KB p. 84 |
| 6 | §3: "Nine prepositions are **always** followed by the dative" | "In class you learned nine prepositions that take the dative …" plus the note "grammar books also put **außer** in this set" | It was presented as a closed set without außer. *ab* + date also allows the accusative (ab ersten Mai) | M–H | own knowledge / Duden |
| 7 | nach = "to a city, a state or a country" | "to a city or a country without an article" + "a country with an article takes in: in die Schweiz" | False absolute (in die Schweiz / in die Türkei / in die USA) | H | own knowledge |
| 8 | "Two pairs go together: nach Hause … zu Hause" | "Fixed pair: …" | It is one pair | H | — |
| 9 | Fill keys `sein___ Schwester` → "seiner", `unser___ Kind` → "unserem", `Max hilft sein___ Großmutter` → "seiner" | Prompts changed to `___ Schwester (sein-, his)` etc. | With a stem before the gap, the expected input is the ending (cf. d10 `Mango___` → "saft"), so a learner typing "er" was marked wrong | H | exercise convention |
| 10 | Valentin MCQ options included "der Kaffee" | Option removed (3 options) | Valentin says "Kaffee ist gut", so the distractor was arguably also correct | H | transcript [128:00] |
| 11 | "Worüber fragt Laura NICHT?" | "Worüber spricht Laura NICHT?" | "fragen über" is not idiomatic (fragen **nach**). The KB wording is "Über welche Themen spricht Laura?" | H | KB p. 83 3a |
| 12 | Tip: "A telephone number … is noted digit by digit" | Numbers are often read digit by digit, sometimes in pairs (*einundsechzig* = 61) | The original was misleading and missed the pair reading, which is common | M | own knowledge |
| 13 | warn: "ab needs a point in time right after it" | "ab (from … on) in this lesson is followed by a point in time" | ab + place is also correct (Flüge ab Frankfurt) | M | own knowledge |
| 14 | "Bücherei is a public library" | "Bücherei is a library (like Bibliothek)" | Wording only. The fact was right, and it fixes the teacher's "bookshop" | H | — |
| 15 | das Spielzeug had no `pl` | `pl: 'die Spielzeuge'` | A plural exists. Leaving pl out means "no plural" in this data format | M–H | Duden |
| 16 | "Sie kommt von der Chefin" = "from the boss's office" | "She is coming from the boss." | The English added information that is not in the German | M | — |
| 17 | Art prompt: "an underground sign visible" | "an underground train entrance … with no signs or lettering" | A U-Bahn sign is a letter; the prompts must contain no text | H | authoring §7 |

## 3. Removals and additions

**Removed:** the exam claims in corrections 1–3 and the distractor in correction 10.

**Added (coverage, KB pp. 84/89):**
- **in + Dativ for Wo?** (*Er ist im Haus. Sie ist in der Bank.*), the contraction **in + dem = im**, and **beim Arzt sein** (Wo? bei).
- The table is now "Wohin? Wo? Woher?" with a Wo? column (*beim Arzt, in der Schule, im Supermarkt, in Berlin*), with new `say` lines.
- One fill exercise: `Ich bin heute ___ Büro. (in + dem, Wo?)` → im.
- d13 already points to "im = in dem (Tag 17)", so this was a real gap.

**Added (rule, §2):**
- kein- in the plural (*keinen Kindern*).
- n-nouns that add -n in the singular (*dem Kunden, dem Kollegen, Herrn Schmitt*). The dialogue uses "von dem Kunden" and "Herrn Schmitt" while the rule said only plurals add -n.

## 4. Doubts not settled

- The order exercise "Die Kirche ist gegenüber dem Bahnhof" can also be built as "Die Kirche ist dem Bahnhof gegenüber" (postposed gegenüber), which is also correct German. I left the key as it is, because the taught form is the one in the key.
- The Day does not cover the dative personal pronouns (mir, dir, ihm, ihr, ihm, uns, euch, ihnen/Ihnen) or the verbs gefallen and danken. They are not in the transcript and not in the KB Kapitel 7 grammar (Kapitel 9 has "Gefallen und Missfallen"). I did not add them; a later Day should own them. The rule already says "more dative verbs follow in later chapters".
- Kapitel 7 topics not in this Day: und/oder/aber, Briefstandards, Small Talk, Medien/Computer, zuerst/dann, Bank vocabulary, the s/sch/st pronunciation. The coverage map has no Day 13+ section, so I assume a later Day (18) owns them. Please confirm.
- **Other Day (not edited):** d13 line 171 says of a note-taking listening task "In the exam the task is the same: … write only the numbers and names". The Goethe A1 Hören has no writing task, so the d13 verifier should check this.

## 5. Writer doubts

- Phone number, U-Bahn line and Kammladen audio left out: agreed. The ASR digits are unreliable.
- The nine-preposition set: resolved. It is now presented as the class set, with außer noted. The writer's remark "ab, as in Netzwerk" is not borne out: KB Kapitel 7 lists only zu, bei, aus, von (+ mit, in).
- The writer's "Goethe-style voicemail note task": not Goethe format. Corrected in the Day (correction 3).

## 6. Checks

`node scripts/check-content.mjs`: only missing-clip. `node scripts/audit-notes.mjs --day=17`: no errors, no Tag 17 warnings. `npm run typecheck`: clean.

VERDICT: PASS
