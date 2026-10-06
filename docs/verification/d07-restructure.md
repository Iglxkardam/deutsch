# Day 7 restructure report

Only notes blocks of `src/data/days/d07.ts` were edited (small Edit calls). No gloss changes were needed. Checks: `check-content` clean (only missing-clip), `audit-notes --day=7` no errors / no Day 7 warnings, `npm run typecheck` clean. A token diff against a copy of the original shows only connective words lost (and, the, means, gives, ...) because they were replaced by list structure or by the new table.

## 1. Blocks restructured (21 edits; 1 table added, 1 `ex` added, 2 `p` added)

| Block | What was done |
| --- | --- |
| s1 intro `p` | split into 3 short paragraphs |
| rule compound noun | lead + 3 bullets (Krankenhaus example, "words you have not met", Mittwoch exception) |
| s2 `p` five patterns | lead + 5 bullets (the patterns) + 2 short paragraphs; the "sixth tile" note moved to its own `p` right after the tiles block |
| rule plural article die | lead + 3 bullets (der Arzt / das Zimmer / die Woche) + Tag 8 note; the "does not change in plural" sentence moved to a new `p` + new `ex` (Der Taxifahrer ist müde. / Die Taxifahrer sind müde., with English) |
| tip plural tendencies | lead + 6 bullets (one tendency each; the "-er/-el/-en" sentence split into masculine/neuter and feminine bullets) |
| s3 `p` job questions | lead + 2 bullets (formal / informal) + "also used" sentence |
| rule no article before job | lead + 2 example bullets + "The female form:" + 3 bullets (-in, umlaut, -innen) |
| warn Arbeit / Arbeiter | lead + 2 bullets |
| rule von ... bis | lead + 3 bullets (2 examples, how to ask) + Tag 12 note |
| rule bei / in | 2 bullets (bei company, in place) + "ready-made phrases" sentence |
| rule Ich habe frei | lead + 5 bullets (examples, ask, nicht variant, position 2, class/standard order) |
| rule am + weekday | lead + 2 bullets + cross-reference sentence |
| tip pro / meistens / nachts | lead + 2 bullets + closing line |
| warn ins | lead + 3 bullets |
| tip keep it short | 2 short paragraphs + 2 bullets (Nee, An diesem Sonntag) |
| s6 `p` four texts | lead + 4 bullets (names with jobs) + closing sentence |
| tip Lesen Teil 1 | 2 paragraphs + 2 bullets (68.000 / Montag und Dienstag) |
| s7 `p` form intro | split into 2 paragraphs |
| rule Strategie Schreiben Teil 1 | lead + 3 bullets; the four text-to-form examples moved to a new `table` ("Vom Text zum Formular") placed right after |

Not changed (already short / readable, or no structure support): the section-1 `p` on Jobs (-in), the remaining short `p` blocks, all `table`/`ex`/`compare`/`sentence`/`tiles`/`numbers` blocks, and the final `sticky` (about 480 characters; the `sticky` renderer does not support bullets or paragraph breaks, so it was left unchanged).

## 2. Meaning preservation

- All restructured blocks: kept all examples, exceptions and qualifiers (only/not/always/usually/nearly always/mostly/sometimes) unchanged. ✔
- Plural tip: "feminine ones mostly add -n" became "feminine words ending in -er, -el, -en mostly add -n" (the same group, made explicit because the bullet stands alone). ✔
- Plural-article rule: added English translations for the two moved examples (new `hi` text only; German unchanged). ✔
- Strategie rule: "means Anzahl der Personen: 4 and Davon Kinder: 2" is now the table row "Anzahl der Personen: 4 and Davon Kinder: 2" (the word "means" is replaced by the table's column heads "The text says" / "The form gets"); the fifth-gap sentence is the row "the holiday town (the fifth gap)" → "Urlaubsort: Seeheim". All four clues and the "five missing pieces", "only the missing words or numbers", "rarely directly", "dictionaries not allowed" are kept. ✔

## 3. Factual doubts (nothing changed)

None found. (Reminder only: the Day says "Hobbys" as plural of das Hobby, which is the standard Duden form.)
