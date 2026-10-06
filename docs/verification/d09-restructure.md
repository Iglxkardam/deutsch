# Day 9 restructure report

Checks: `check-content` clean (apart from missing-clip), `audit-notes --day=9` no errors and no Day 9 warnings, `npm run typecheck` clean. No gloss additions were needed (no new German tokens).

## 1. Blocks restructured (17 blocks, 1 new table)

| Block | What was done |
| --- | --- |
| rule "kein for ein + noun and bare nouns, nicht for everything else" | lead sentence + 3 bullets (kein = ein-replacement; kein = bare noun; nicht = everything else) + the short test as its own paragraph. The existing decision table is kept. |
| tip "kein is ein with a k" | lead + 3 bullets (endings; plural keine; table shows Nominativ / Tag 11) |
| warn "Names take nicht" | lead with the example + 2 bullets |
| tip "nicht + der/die/das vs. kein" | lead + 2 bullets (one per meaning) |
| p "Where does nicht stand?" | lead question + 2 bullets + closing Tag 8 pointer |
| tip "zu Fuß gehen" | lead + 2 bullets (Tag 8 pointer; later chapter for mit) |
| p picture story intro | split into 2 paragraphs |
| tip "Oje / ach nee / aber / So ein Glück / Heute kein Test" | 4 bullets, one fact each |
| p direction words | lead + 2 bullets (nach optional; geradeaus never takes nach) |
| rule "Imperativ mit Sie" | lead + 4 bullets; the fahren/nehmen/essen chain moved out of prose into a NEW table "Infinitiv und Imperativ mit Sie" (gehen, fahren, nehmen, essen with English) placed right after the rule |
| warn "Sie-command vs. statement" | lead + 3 bullets |
| p "Asking the way" | lead + 4 bullets |
| tip "link words for a route" | lead + 3 bullets |
| p "Listening to directions ... Tag 10" | split into 2 paragraphs |
| tip "Lesen sign" | split into 2 paragraphs (+ closing sentence) |

Left alone (short and readable): intro p, both table intros, picture-description p's, `sticky` (the `sticky` block renders plain text only, it does not support bullets, so it was not restructured), all `ex`, `compare`, `table`, `timeline`, `tiles`, `sentence`, `nouns`.

## 2. Meaning-preservation

- rule kein/nicht: kept: all categories (verb, adjective, name incl. person/city/country, der/die/das noun, place or direction), "also", "no article", Zeit/Geld examples, the ein/eine test ✔ (only added lead "Two cases take kein / keine; nicht negates everything else", which restates the content).
- tip kein: kept: same endings, keine for every gender, "no ein", definite article die, Nominativ note, Tag 11 ✔
- warn names: kept: Deutschland/Österreich example, both "do not think" statements, Busse/Zeit/Geld/Fleisch ✔
- tip nicht vs kein: kept: both example sentences and both meanings incl. "maybe a shop" ✔
- p nicht position: kept: "usually", "directly before", nicht voll / nicht ins Kino, "at the end", Ich spiele nicht, Tag 8 ✔
- tip zu Fuß: kept: fixed phrase, no article, Tag 8, mit + noun later, by bus / by train ✔
- picture story p: kept: all words, only paragraph split ✔
- tip exclamations: kept: Oje, ach nee, oh nein, nee casual, aber = emphasis not "but", So ein Glück, das Glück no plural, verb left out ✔ (added only the lead "Four things to notice in the story").
- p directions: kept: "optional", both Gehen Sie examples, "never" ✔
- rule Imperativ: kept: Aufforderung, infinitive + Sie, position 1, "all the verbs you need now, even those that change their vowel with du and er", fahren/nehmen/essen (now in the table, bullet says "see the table"), sein exception (Seien Sie) later, du command later chapter ✔. The table adds only the English glosses go / drive / take / eat.
- warn Sie-command: kept: verb first / verb second, question-mark version, Ja/Nein-Frage, voice falls / rises ✔
- p asking the way: kept: p. 33 7c, p. 37, Entschuldigung, Wo ist bitte …?, repeat, thank ✔
- tip link words: kept: all six phrases and the "gleich" explanation ✔
- p/tip splits: kept: all words, only paragraph breaks ✔
- The `sticky` text is unchanged.

## 3. Doubtful items (not changed)

- The "Lesen sign" tip says buses run "bis 23.00 Uhr" and "von 1.00 Uhr bis 5.00 Uhr"; this matches exercise text, but I could not verify it against the model-test scan.
- Nothing else doubtful.
