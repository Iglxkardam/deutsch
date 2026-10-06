# Day 14 restructure report

Form-only change in `src/data/days/d14.ts` (notes blocks). No vocab, exercise, dialogue or gloss changes. No new German words, so no gloss additions.

## 1. Blocks restructured (14)

| Block | What was done |
| --- | --- |
| s1 `p` (prefix + verb intro) | split into three short paragraphs |
| s1 `rule` prefix goes to the end | one wall of prose became a lead + 5 bullets (usual prefixes; um-; statement/W-question; yes/no question; modal verb) |
| s1 `warn` be-, ge-, er-, ver-, ent- | lead + 2 bullets |
| s2 `rule` Merke prefix gives the direction | lead (incl. "guide for guessing, not a law") + 3 bullets (mit-, zurück-, nehmen) |
| s3 `p` (modal verb) | split into two paragraphs |
| s3 `tip` modal verbs | lead + 4 bullets |
| s4 `p` (invitation e-mail) | split into two paragraphs |
| s4 `tip` Macht ihr mit | lead + 2 bullets |
| s4 `tip` class rule (questions in German) | lead + 3 bullets (one phrase each) + closing line |
| s4 `warn` named guests only | lead + 2 bullets |
| s5 `p` (Goethe A1 Schreiben Teil 2) | split into three paragraphs |
| s5 `warn` Lieber / Liebe / Sehr geehrte | lead + 3 bullets (formal forms; comma + small letter; Gruß) |
| s5 `tip` keep it short | lead + 3 bullets |

Tables/cards added: none (modal-verb table, vowel-change table, Anrede table, sentence cards already exist; no prose duplicated them). Left alone: short blocks, tables, sentence, ex. The `sticky` was left unchanged because the renderer prints sticky as one plain paragraph (no newline/bullet support).

## 2. Meaning preservation

All restructured blocks: kept all examples / exceptions / qualifiers ✔ (never separated, not every verb, only with a modal verb, unless the first word is a noun, a name or Sie, no comma, named guests only, may say no, "guide for guessing, not a law"). All bold terms and all example strings (Ich steige in Köln um, Holst du Lawrence ab?, Ich besuche meine Oma, bezahlen, verstehen, zurücknehmen, ich kann/er kann, können → kann, wollen → will, Wie geht’s?, Hoffentlich hast du Zeit., Viele Grüße / Anni, etc.) survive. Only change: boundaries between sentences became paragraph/bullet boundaries; in the "direction" rule the original last sentence became the lead and the lead "The prefix gives the direction." reuses the block title's wording; in the prefix rule the lead "The prefix goes to the end of the clause." restates the title.

## 3. Doubts (not changed)

- Prefix list in the rule includes **um** and **bei/her/hin/los/fern**; the claim "um- separates in umsteigen but not in every verb" is correct (um- is separable in umsteigen but inseparable in some other verbs).
- Anrede table: `Hallo Max,` is paired with `Herzliche Grüße` and `Bis bald` is used with `Liebe Freunde,`; all acceptable informal pairings.
- "Sehr geehrte Damen und Herren" description "(an office, a tourist information)" is fine.
- Tip says "Modal verbs belong to Kapitel 5 ... dürfen and sollen come in Kapitel 8" — a curriculum claim I could not check against the book.
- Nothing factually wrong found.

Checks: `check-content` clean except missing-clip; `audit-notes --day=14` no errors, 0 warnings; typecheck clean.
