# Day 16 restructure report

Only `src/data/days/d16.ts` notes blocks were edited (small Edits). `g16.ts` needed no additions (audit: no errors, 0 warnings). Checks: `check-content` clean except missing-clip; `audit-notes --day=16` no errors, 0 warnings; `npm run typecheck` clean.

## 1. Blocks restructured

| Block | What was done |
| --- | --- |
| 1 intro `p` (speaking practice) | Lead sentence + 3 bullets |
| 1 `rule` Strategie | Lead sentence + 4 bullets (no-translation, nach Hause, modal verb, exam scoring) |
| 1 market `p` | Market example kept as lead, "suggestion" split into 2 bullets (noun, verb) |
| 2 `p` gehen/fahren | Lead + 2 bullets (fahren / gehen) |
| 2 `tip` gehen vs fahren | Lead (rule of thumb) + 3 bullets |
| 3 taxi `p` | Lead + 3 bullets |
| 4 `p` es gibt / da ist | Lead + 2 bullets; **new `table`** "es gibt und da ist" (meaning / case / examples) added after it; the "heißen: Sie heißt …" sentence became its own short `p` |
| 4 Familienfoto `p` | Lead + 4 bullets |
| 5 office `p` | Split into 2 short paragraphs |
| 5 `tip` du/Sie | Lead + 3 bullets |

Tables/cards added: 1 (`table`, no `say`). Blocks left alone (short, readable): tip about the internet, all `compare`, `ex`, the dialogue table, `warn` (Die Universität heißt …), `sticky`.

## 2. Meaning preservation

- Intro p: kept: all claims (daily routine last half hour, self-study half hour, little new grammar) ✔
- Strategie rule: kept: Tag 5, Tag 14, Ich gehe nach Hause, Ich will den Eiffelturm sehen, full/half/0 scoring, "do not", "safer choice" ✔
- Market p: kept: Was kaufst du heute? — Ich kaufe drei Tomaten und vier Äpfel, der Vorschlag example, separable vorschlagen ✔
- gehen/fahren p: kept: vehicle list, Ich fahre nach Berlin, "walk", "when transport does not matter", Ich gehe ins Kino by bus ✔
- gehen/fahren tip: kept: market/church/station, "most sentences", Ich fahre mit dem Fahrrad zum Markt, Tag 17, zu Fuß gehen Tag 9, nach for cities and most countries ✔
- Taxi p: kept: Picture F, driver/customer, Kapitel 3 / Tag 8, all three questions, ankommen Tag 14, zu or nach, Fahren Sie bitte zum Bahnhof, Tag 9 ✔
- es gibt p: kept: exists / accusative / da ist, dort ist / nominative / "there (at that spot) is"; examples Es gibt einen Turm, es gibt eine Brücke, Da ist ein Turm, Da ist eine Universität moved into the new table (written as sentences: "Es gibt eine Brücke" and "Da ist eine Universität" are in separate rows); heißen: Sie heißt … ✔. Note: the original comma-chain "Es gibt einen Turm, es gibt eine Brücke" is now two table cells, wording unchanged.
- Familienfoto p: kept: Kursbuch p. 74 game, Wer ist das? — Das ist … Mutter. Und hier siehst du … Vater., Das ist unser Großvater, aussehen, Er sieht so jung aus, unser/mein pattern, unsere Lehrerin, Auf dem Foto sehe ich …, links / rechts ist …, im Hintergrund ist … ✔
- Office p: kept ✔
- du/Sie tip: kept: Sie/boss, du example, "pick one form", Tag 2, halb zehn = 9:30, Tag 12 ✔

## 3. Doubts (nothing changed)

- Strategie rule says "In the speaking exam each task gets full points ... half points ... 0": this scoring is taken from the class; I could not verify it against the official Goethe A1 rating scheme.
- Taxi tip: the claim "Ich gehe ins Kino is fine even if you take the bus" is accepted colloquial German; fine for A1.
- The "heißt" line uses "Sie heißt …" which depends on the preceding "Da ist eine Universität" example; the example now lives in the table, but the ex block below still contains the full "Da ist eine Universität. Sie heißt Delhi University." sentence, so context is preserved.
