# Tag 5 — restructure report

Form only; no German or English fact was changed. Checks run after the edits: `check-content` (only the known `missing-clip`), `audit-notes --day=5` (no errors; the 5 remaining warnings are pre-existing example-dup flags of other Days), `npm run typecheck` clean. A before/after word-multiset diff of the notes region shows no lost German word (only English glue words such as and / so / are / both / or, where one sentence became several bullets).

## 1. Blocks restructured (22 edits, 1 table added, 1 tip split off, 0 gloss additions needed)

| Block | What was done |
| --- | --- |
| `p` Millionen | lead + 3 bullets (capital letter / plural / below a million) |
| `tip` Indian numbers | 3 bullets (Lakh, Zehn Lakh, Crore) + bullet for Milliarde |
| `p` Verb / Infinitiv | lead + 3 bullets |
| `rule` Stamm + Endung | lead + 3 bullets (examples / basic endings / only -n verbs) |
| `tip` capital S | lead + 2 bullets (Sie kommt / Sie kommen) |
| `rule` a name is er/sie/es | lead + 5 bullets, one each: one name, one thing, two names, several things, du/ihr/Sie |
| `tip` Kursbuch p. 17 | 2 short paragraphs |
| `rule` s, ß, z, x: du only -t | lead + 2 bullets; the four du examples moved into a NEW `table` "Stamm auf s, ß, z oder x" (heißen, tanzen, reisen, faxen) |
| `rule` t or d: extra -e- | lead + 4 bullets (arbeiten, reden, unchanged persons, exception) |
| `rule` consonant + m/n | lead + 3 bullets (examples / not after l, r, h / not after mm, nn) |
| `rule` alle Nomen groß | lead + 2 bullets (ich/Sie, infinitive as noun) |
| `p` Vokalwechsel intro | lead paragraphs + 3 bullets for the three patterns + separate sentence for au → äu |
| `warn` vowel change | lead + 2 bullets; the -t-stem sentence split off into a NEW `tip` with 3 bullets |
| `tip` Kursbuch pp. 160–161 | lead + 2 bullets |
| `rule` Position 2 | lead + 2 bullets |
| `rule` one present tense | lead + 4 bullets |
| `p` sein / haben | 3 short paragraphs + 2 bullets |
| `rule` zu Hause / nach Hause | lead + 2 bullets |
| `tip` ein / einen | lead + 2 bullets |
| `rule` Verb + gern | lead + 3 bullets |
| `tip` gern position | lead + 3 bullets |
| `rule` Strategie Sprechen Teil 1 | paragraph + 2 bullets + closing sentence |

Not changed: the `sticky` (renderer shows it as a single paragraph, no bullet support, and components are out of scope), short blocks (billion warning, tip about sch/ch, tip "Tim und ich", short `p`s), all `compare`, `ex`, `table`, `conj`, `sentence`, `tiles`, `numbers`, `figure` blocks, headings, vocab, dialogue, exercises.

## 2. Meaning preservation

All restructured blocks: kept: all examples / exceptions / qualifiers ✔ (every "only", "not", "just", "also", "usually-type" qualifier of the original is still in the same claim). Specific notes:

- "a name is er/sie/es" rule: the two example pairs (Jonas lernt, Der Kurs kostet / Eva und Nina reisen, Die Kurse kosten) are each in their own bullet; ihr never means "they" kept.
- consonant + m/n rule: the original listed four examples after "not after l, r, h or mm / nn"; they are now attached to the group they illustrate (lernen = r + n, wohnen = h + n, kommen / schwimmen = mm). That pairing is grammatically correct but is mine, not stated in the original.
- s/ß/z/x rule: the table adds an er/sie/es column; the original already states that du and er/sie/es look identical, so these forms (heißt, tanzt, reist, faxt) add no new claim.
- "Both are fixed phrases" became "Two fixed phrases" (zu Hause / nach Hause); the claim is the same.

## 3. Factual doubts (nothing changed)

- None of substance. Minor: the page reference "Kursbuch number list on p. 27" and "Übungsbuch p. 20, 3g" were not re-checked against scans (outside the scope of a form-only pass).
- No doubtful German found.
