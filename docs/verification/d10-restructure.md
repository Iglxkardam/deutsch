# Day 10 restructure report

Checks: `check-content` clean (apart from missing-clip), `audit-notes --day=10` no errors and no Day 10 warnings, `npm run typecheck` clean. No gloss additions were needed (no new German tokens). No new tables were needed: every paradigm-like list already has a table, `nouns`, `numbers` or `preps` block in the Day.

## 1. Blocks restructured (27 blocks, all by text structure)

| Block | What was done |
| --- | --- |
| p street-name endings | lead + 3 bullets (-straße, -platz, -gasse) |
| rule "street first, then the number" | lead + 3 bullets (Postleitzahl/Ort; Kursbuch form; Str.) |
| tip "in der Hauptstraße / am Rathausplatz" | lead + 3 bullets |
| p house-number exam practice | split into 2 paragraphs |
| p Kursbuch 7a/7b | lead + 3 bullets |
| p Übungsbuch 7a map | split into 2 paragraphs (task / map description) |
| rule "Strategie: draw the route" | lead + 2 bullets (listen only for ...) + closing paragraph |
| p class practice (note-sheet) | split into 2 paragraphs |
| rule "ins is a signal" | lead + 2 bullets (examples; "Wir gehen ins ___") |
| warn number options | lead + 3 bullets + closing sentence |
| rule "Strategie: use the words you know" | lead + 2 bullets |
| tip "Do not copy the gender" | lead + 2 bullets + closing sentence |
| p Übungsbuch ads | split into 3 paragraphs |
| p Jahreszeiten | lead + 2 bullets |
| tip Fleisch / Hähnchen / Schinken / Saft | 2 bullets for the two meats, then paragraph for Saft compounds, paragraph for the compound-article point |
| tip "no plural / -chen" | lead + 2 bullets (-chen = das; Kuchen exception) |
| rule "Strategie: learn words by place" | lead + 2 bullets |
| p Aussprache | split into 2 paragraphs |
| tip montags | split into 2 paragraphs |
| rule "say the euros, then the cents" | lead + 5 bullets + closing Tag 4 pointer |
| rule "units stay singular after a number" | lead + 4 bullets (abbreviations; examples; food follows unit; containers have plural) |
| tip trolley coin | split into 2 paragraphs |
| warn Was möchten Sie? | split into 2 paragraphs |
| p Sprechen Teil 2 / 3 | split into 3 paragraphs |

Left alone: `sticky` (renders plain text only, bullets are not supported), all short p/tip blocks, all `ex`, `table`, `nouns`, `compare`, `timeline`, `preps`, `sentence`, `numbers`, `figure`.

## 2. Meaning-preservation

All restructured blocks: kept: all examples / exceptions / qualifiers ✔. Specific points checked:
- ins rule: all five examples kept, "neuter before you hear it" kept ✔
- Strategie draw the route: "only" preserved by the lead "Listen only for:" ✔
- price rule: "usually", "also correct", "only the cents", "do not change", "fast speech ... shortened", Hören Teil 1 item 1, Tag 4 all kept ✔
- units rule: abbreviation order moved from before the sentence to the first bullet (the lead now states the plural rule first); every example kept ✔
- -chen tip: "always makes a noun das" and the der Kuchen exception both kept ✔
- Fleisch tip: plural forms of Hähnchen / Schinken, "usually pork", all four Saft compounds, Tag 7 pointer kept ✔
- warn numbers: both exam number sets and all three price options kept ✔
- Ads p: the quoted ad sentence is unchanged, only separated into its own paragraph ✔

## 3. Doubtful items (not changed)

- "The small-form ending -chen always makes a noun das": correct for diminutives; **Hähnchen** is listed as an example, but it is a normal word for "chicken" rather than a transparent diminutive. Fine as a teaching simplification.
- `Joghurt` is listed as "der Joghurt (also das Joghurt)": correct, as both genders exist in standard German.
- In the shopping dialogue table "Ich möchte ein Stück Emmentaler" is used without a gloss for Emmentaler (a cheese); it is covered by the tooltip audit.
- "Hören Teil 3: 5 messages on a mailbox or announcements" and the Teil 1/2/3 counts were not verified against the model-test scan here.
