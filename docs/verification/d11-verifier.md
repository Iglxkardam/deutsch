# Tag 11 — verifier report (class 23.09.2026)

## 1. What I checked
- `docs/lesson-authoring.md` (§10), `src/data/days/d11.ts` (all 7 sections, 27 vocab, 13 dialogue lines, 50 → 51 exercises, examTip), `src/data/gloss/g11.ts`, `scripts/art/d11.json`.
- Primary sources, rendered and read: Kursbuch pp. 46, 47, 48, 49, 50, 51, 53; Übungsbuch pp. 46–53 (spreads 23–26); `books/modellsatz_text.txt` (Hören Teil 1 item 3, Lesen Teil 1, Schreiben Teil 2, Sprechen Teil 3) and the Modellsatz PDF p. 31 (Sprechen Teil 3 picture cards).
- Class transcript (complete) and frames of the class screenshare video at 28:20 and 49:10 (teacher's PowerPoint "Accusative" and Word handout "nom akk").
- Then coverage.md Day 11 section + R2/R3/R5/R14, then the writer report.
- Checks after editing: `check-content` clean (apart from missing-clip), `audit-notes --day=11` no errors / no warnings, `typecheck` clean.

## 2. Corrections (before → after → why → certainty → source)
1. Section 2 heading "Nur der Maskulin ändert sich" → "Nur das Maskulinum ändert sich". "der Maskulin" is not a German noun. Wording/German error. H. Own knowledge (and KB p. 53 uses "maskulin" as the adjective).
2. Rule title "only masculine changes in the Akkusativ" → "only the masculine article changes in the Akkusativ" (some masculine nouns change too, e.g. later der Herr → den Herrn; pronouns change). Wording. H.
3. Tip "The Kursbuch rule for the indefinite article (Akkusativ = Nominativ / + -en)" → "The Übungsbuch (p. 48) rule …". The box is on UB p. 48, not in the Kursbuch. Wrong source. H. UB p. 48.
4. Warn "sein (and heißen) only link two Nominativ words" → "take no object: after them comes an adjective (Der Bus ist klein.) or a noun in the Nominativ". The old line was a false absolute (sein + adjective is the most common case, and the class itself used Der Bus ist klein). Wrong fact (wording). H. Own knowledge, transcript [12:00].
5. Merke "The conjugated verb is always the second item in the sentence" → "In a statement the conjugated verb is the second item (KB p. 53 …)". False absolute: the same Day teaches verb-first yes/no questions (Möchtest du noch ein Würstchen?). Wrong fact. H. KB p. 53.
6. Compare row why "eine never changes" → "eine stays eine in the Akkusativ" (eine → einer in the Dativ). False absolute. H.
7. MCQ "Which article stays the same in the Akkusativ? der / ein / kein / das" had two correct options (neuter ein also stays ein: ein Brot → ein Brot). → options labelled "der (masculine) / ein (masculine) / kein (masculine) / das (neuter)". Wrong key (ambiguous). H.
8. KB p. 46 invitation: "Three possible answers: …" → "Which answer fits? Only 'Gern. Wir kommen …'", with why the other two do not (A is written later by the hosts; C talks about tomorrow, the party is tonight). The book task is "Welche Antwort passt?"; presenting all three as possible answers was false. Wrong fact. H. KB p. 46 3a.
9. "Koch am Bodensee" table: "Was kauft er auf dem Markt? — Tomaten, Champignons und Salat (Kartoffeln und Zwiebeln braucht er auch)" omitted "Dann kauft er noch frischen Fisch" → answer now lists all three sentences. Following tip changed from "every question has exactly one place in the text" (untrue for this question) to "the market answer is spread over three short sentences". Wrong fact. H. KB p. 51.
10. W-Fragen strategy "You do not need to understand every word — read on (Kursbuch)." The attribution is not on KB p. 51 → attribution moved to what the page does say ("W-Fragen helfen", KB p. 51); the advice itself kept unattributed. Unverifiable attribution. H. KB p. 51.
11. Tip "The Goethe model test in this repo has exactly this: a waiter, a guest, a menu." There is no menu in the model text → "a waiter and a guest in a restaurant (Hören Teil 1)". Wrong exam claim. H. modellsatz_text.txt lines 715–727.
12. "Mahlzeit! is a short everyday wish around mealtime, much like Guten Appetit" → "what colleagues say to each other around lunchtime, mostly at work (as a greeting in the corridor or canteen, or like Guten Appetit before lunch); the answer is simply Mahlzeit!". The old line was vague and misses that it is a lunchtime/workplace greeting. Wording/fact. H. Own knowledge.
13. Section 1 rule: Nominativ articles "(der, die, das, ein, kein)" → "(der, die, das, ein, eine, kein, keine)". Incomplete list. H.
14. Section 2 paragraph "the others never do" → "the others keep their article"; "(den, einen)" → "(den, einen, keinen)". Wording. H.
15. Section 2 paragraph "uncountable nouns take no ein: Ich möchte Tee" sat next to "Ich möchte einen Tee" in section 3 → added "(When you order one cup or glass, einen Tee or ein Wasser is also right.)" to remove the apparent contradiction. Wording. H.
16. MCQ why "satt is only for people who have eaten enough" → "satt means full from eating (people, animals); a full bus is voll". False absolute. H.
17. Hindi for schmecken "स्वाद लगना" → "स्वाद लगना, स्वादिष्ट लगना" (the Day's sense is "taste good"). Wording. M.

## 3. Removals and additions
- Removed: the "(Kursbuch)" attribution in item 10; "a menu" in item 11.
- Added (zum-rule, section 5): "With the verb essen you also hear zu Mittag essen and zu Abend essen (zu, without -m): Wir essen um sieben zu Abend. But with a food word use zum + the meal: Wir möchten Reis zum Abendessen." The teacher taught "zum Mittag / zu Abend" [100:00]–[104:00] in a garbled way ("Wir möchten Reis zu Abend" is wrong); the writer dropped it. Tag 12 already uses "Er isst mit der Familie zu Mittag" without explanation, so the correct form belongs here. H.
- Added exercise (mcq) from the class listening KB p. 48 8a, dialogue 3 (text from the transcript, where the audio was transcribed cleanly twice): "Möchtest du auch ein Stück Schokolade? — Nein, danke. — Du magst keine Schokolade? — Doch, ich esse sehr gern Schokolade, aber ich mache gerade eine Diät." Tests möchten (now) vs mögen/gern (in general); it was a MUST COVER item ("Wer möchte was?") that had no exercise.
- Gloss additions: maskulinum, frischen, doch, diät, gerade, stück.

## 4. Doubts I could not settle
- Order exercise "Ich kaufe einen Salat und ein Brot ." — "Ich kaufe ein Brot und einen Salat." is also correct German; the English prompt ("a salad and a bread") fixes the order, so I left it. If the app compares strings exactly, a learner who swaps the objects is marked wrong.
- Dialogue line "Möchtest du auch?" (elliptical, no object) is natural spoken German; left as is.
- "Ich nehme die Busse." (class example) is grammatical but an odd thing to say; left because it is the teacher's example and illustrates plural die.
- Vocab overlaps grillen (Tag 13) and die Einladung (Tag 14): Tag 11 is the earliest Day, so the later Days should drop them (not my files). The audit no longer reports them at the time of my run.

## 5. Writer doubts
1. Vocabulary overlaps: agree Tag 11 is the owner of grillen / Einladung (KB p. 46, class); other Days' problem. Resolved (no action here).
2. Lernwortschatz scope: the vocab chosen is correct; no wrong entries found. Resolved.
3. Plurals: die Kulis, die Schirme, die Vögel, die Essen, die Röcke, die Geschenke, die Gitarren, die Taschen, die Einladungen all correct. Resolved.
4. Mahlzeit: rewritten (correction 12). Resolved.
5. "Was wünschen Sie?" / "Ich hätte gern": confirmed in modellsatz_text.txt lines 716–717 (Hören Teil 1, Nummer 3). Resolved; "menu" claim removed.
6. "dann Shrimp" = "Der Vater hat den Schirm": **confirmed**. It is not an Übungsbuch or Kursbuch exercise but the teacher's Word handout "nom akk", shown on screen at 49:10: "8. Der Vater hat ______ Schirm. (m)". The same handout labels Käse "(m/f)" and Schuhe "(f)"; both labels are wrong (der Käse; der Schuh, pl. die Schuhe). The Day correctly teaches only den Käse and does not use the Schuhe item.
7. Hindi meanings: checked all 27; satt "पेट भरा हुआ" and tragen "पहनना, उठाकर ले जाना" are right; schmecken refined (correction 17).
8. KB/UB 3d table answers not written out: the full rule and the KB p. 53 table are present; acceptable.

Also confirmed against the scans: möchten and mögen conj cards (KB p. 48/49/53), "Ich esse gern Schokolade. = Ich mag Schokolade." (KB p. 49), "Ich mag … (sehr/nicht) gern" (KB p. 53), "Timo mag gern Eis, aber keine Schokolade" (UB p. 51 9a), Verben mit Akkusativ table (KB p. 53), KB p. 46 3b sentences, Positionen im Satz (KB p. 49/53), Wortgruppen/pairs (KB p. 50), examTip facts (Hören T1 item 3, Lesen T1 "einen Salat mitbringen", Sprechen T3 picture cards with "Ein Glas Wasser, bitte!", Schreiben T2 ca. 30 words, three points). All sentence-block role colourings checked: subject/verb/object/time assignments are grammatically right.

VERDICT: PASS
