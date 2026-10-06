# Day 13 restructure report

Form-only change in `src/data/days/d13.ts` (notes blocks). No vocab, exercise, dialogue or gloss changes. No new German words, so no gloss additions.

## 1. Blocks restructured (12 edits, 1 new block)

| Block | What was done |
| --- | --- |
| s1 `p` (role-play intro) | split into two short paragraphs |
| s1 `rule` Merke (polite wish) | lead sentence (Ich hätte gerne) + 2 bullets (refusing a time; formal clock) |
| s1 `warn` Auf Wiederhören | lead + 2 bullets |
| s2 `tip` (beim Wandern / gern vs mögen) | lead + 3 bullets |
| s2 `rule` Strategie | lead + 3 bullets |
| s3 `p` (Veranstaltungen / ordinals) | split into two paragraphs |
| s3 `rule` ordinal numbers (one dense block) | split into two rules: formation (lead + 3 bullets) and the new `rule` "Regel — the ordinal ending" (lead + 3 bullets: after am / after der / Wann?) |
| s3 `tip` dates in figures | lead + 3 bullets |
| s3 `tip` class audio | lead + 3 bullets |
| s4 `p` (war / hatte intro) | split into two paragraphs |
| s4 `rule` war and hatte main verb | lead + 2 bullets |

Tables/cards added: none (paradigms were already in the `table` "Das Datum sagen" and the `conj` blocks; no prose duplicated them). Left alone: short blocks, the section 2 intro `p` (about 230 chars), tables, tiles, nouns, sentence, ex, compare. The `sticky` was left unchanged because the renderer prints sticky as one plain paragraph (no newline/bullet support), so splitting would have no visible effect.

## 2. Meaning preservation

All restructured blocks: kept all examples, exceptions and qualifiers (only, not, also, usually, "only one t", "not sieben-t", "and after ab dem") ✔. Every bold term and every example string (Ich hätte gern, Am Freitag muss ich arbeiten, elf Uhr dreißig, zehn Uhr fünfundvierzig, beim Skifahren/Klettern/Feiern, Mila fährt gern Fahrrad, Helena mag ihre Ski, vier → vierten, sechzehn → sechzehnten, zwanzig → zwanzigsten, einunddreißig → einunddreißigsten, 16.7., 16.07.2026, 15.11. variants, 2026, Kursbuch p. 66, Übung 4b p. 72, Tag 1/11/12/17, Ich war krank, Ich hatte einen Hund, wir waren spielen) survives. Only changes: sentence boundaries became paragraph/bullet boundaries; in the ordinal rule the new lead "An ordinal is the number plus -t- or -st-, with four irregular ones." is a summary of the bullets that follow (the ordinal bullets themselves use colons instead of parentheses); in the new ordinal-ending rule the lead "The ending of the ordinal depends on the word before it." is a summary of its bullets.

## 3. Doubts (not changed)

- Tip "Dates in figures": `am fünfzehnten Elften` / `am sechzehnten Siebten` (month as ordinal) is attributed to Kursbuch p. 66; correct and colloquial but worth a native glance.
- `Wir sind beim Wandern` hover/English "We are out hiking (right now)" is fine.
- Table "Veranstaltungstipps": the film row says `ab 12. September`, say-phrase `ab dem zwölften September` (correct); the Stadtfest `Wo` cell is just `in Nürnberg` (not wrong).
- Nothing factually wrong found.

Checks: `check-content` clean except missing-clip; `audit-notes --day=13` no errors, 0 warnings; typecheck clean.
