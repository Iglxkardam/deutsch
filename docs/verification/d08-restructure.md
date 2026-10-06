# Day 8 restructure report

Only notes blocks of `src/data/days/d08.ts` were edited (small Edit calls). No gloss changes were needed. Checks: `check-content` clean (only missing-clip), `audit-notes --day=8` no errors and no warnings, `npm run typecheck` clean. A token diff against a copy of the original shows only connective words lost (and, you, here ...) because they were replaced by list structure.

## 1. Blocks restructured (15 edits; 1 `ex` added)

| Block | What was done |
| --- | --- |
| s1 `p` Sprechtest | 5 topic bullets (name, where you come from, where you live, languages, hobby) + short closing paragraph |
| s1 tip Wie geht es dir? | counter-question line + 4 bullets (which Day taught which topic) |
| s2 `p` Hamburg | 2 short paragraphs + 5 bullets (the five sights) |
| s2 tip numbers | split into 2 paragraphs |
| s3 tip Polizei / Bank / -haus | 4 bullets + cross-reference line |
| s3 warn U-Bahn | lead + 2 bullets |
| s4 rule der See / die See | lead + 4 bullets (der See, die See, das Meer with the Kursbuch sentence, Fluss) |
| s5 `p` Taxifahrt | split into 3 short paragraphs |
| s5 warn schön / schon | 2 bullets + the dialogue sentence |
| s5 tip München | list of places as 4 bullets + the "same moves" as 3 bullets |
| s6 `p` ein/eine intro | lead + 2 bullets (unbestimmt / bestimmt) + closing sentence |
| s6 rule ein/eine vs der/die/das | lead + 4 bullets (known, unique place, no plural indefinite article, known plural) |
| s6 tip group game | 3 bullets |
| s7 `p` More examples | split into `p` + new `ex` (4 examples, each with an English translation) + `p` (rule sentence) |
| s8 rule double consonant | lead + "Two more tendencies" + 2 bullets |

Not changed: short `p`/`tip`/`warn` blocks, all tables, `compare`, `sentence`, `timeline`, `nouns`, the final `sticky` (about 330 characters, renderer has no bullet support; left as is).

## 2. Meaning preservation

- All restructured blocks: kept all examples, exceptions and qualifiers (always short, normally a long i, only one of it, no indefinite article in the plural) unchanged. ✔
- s1 tip: added the lead-in "Where each topic was taught:" (no new claim; the same four Day references). ✔
- s7 examples: the four sentences were lifted from inline italics into an `ex` block with new English translations (voll = full, neu = new, klein = small, interessant = interesting). ✔

## 3. Factual doubts (nothing changed)

- The timeline in section 5 lists "die Alster" as "the river Alster" and the dialogue question "Wie heißt der See?" refers to a lake in the same scene; the Alster is a river that is dammed into lakes (Binnenalster / Außenalster) in Hamburg, so this is not wrong, but it may be worth a glance by the verifier.
