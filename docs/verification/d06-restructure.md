# Tag 6 — restructure report

Form only. Checks run after the edits: `check-content` (only the known `missing-clip`), `audit-notes --day=6` (0 errors, 0 warnings), `npm run typecheck` clean. A before/after word-multiset diff of the notes region shows no lost German word (only English "and" where one sentence became bullets, and "fall" → "falls").

## 1. Blocks restructured (20 edits, 1 table + 1 intro `p` + 1 `ex` added, no gloss additions needed)

| Block | What was done |
| --- | --- |
| `p` Wochentage | lead + 3 bullets |
| `rule` all days are der | lead + 3 bullets (Wochenende, capital letter, short forms) |
| `tip` Mittwoch / Sonntag | 4 bullets (Mittwoch, Sonntag/Montag, Sonnabend, am / im) |
| `rule` seasons and months are der | lead + 3 bullets (Frühjahr, spelling, Jänner) |
| `tip` D-A-CH | lead + 3 bullets (D, A, CH) + closing sentence |
| `p` two kinds of questions | lead + 2 bullets + closing sentence |
| `tip` wie lange / welch- / wie viele | 2 bullets; the welch- paradigm (welcher Tag, welche Woche, welches Jahr, welche Sprachen) moved into a NEW `table` "welch- wie ein Artikel" with a one-line intro `p` |
| `rule` W-Frage order | lead + 4 bullets (question word, verb, subject, extra) + closing paragraph |
| `rule` wer is the subject | lead + 3 bullets (two examples, sein caution); markdown italics `*...*` removed because the renderer shows them as literal asterisks |
| `rule` Ja-/Nein-Frage | lead + 2 bullets (italic asterisks removed as above) |
| `tip` Nein / nee / nö / na | 2 paragraphs (asterisks removed) |
| `rule` Satzmelodie | lead + 4 bullets (rises / W-Frage falls / statement falls / book pairs) |
| `p` Genus | lead + 4 bullets (asterisks removed) |
| `rule` things are er, sie, es | lead + closing sentence; the three example pairs moved into a NEW `ex` block (English `hi` added: The pen is new. It is blue. / The tablet is small. It is good. / The book is good. It costs five euros.) |
| `rule` endings give das | lead + "Always das" bullet + "Usually das" 3 bullets |
| `rule` endings give die | lead + "Almost without exception" 5 bullets + "Usually die" 5 bullets |
| `rule` endings usually der | lead + 6 bullets + closing sentence |
| `warn` tendencies | lead + 5 bullets of exceptions + closing sentence |
| `rule` dictionary entry | lead + 4 bullets |
| `p` Artikelbild | 2 paragraphs + 3 colour bullets + closing sentence |

Not changed: `sticky` (renders as one paragraph, no bullet support; components out of scope), short blocks (season intro `p`, Kursbuch colour `p`, Fräulein tip, Kreuzen Sie an tip), all `compare`, `ex`, `table`, `sentence`, `nouns`, `tiles`, `figure` blocks, headings, vocab, dialogue, exercises.

## 2. Meaning preservation

All restructured blocks: kept: all examples / exceptions / qualifiers ✔ ("Always das", "Usually das", "Almost without exception", "Usually die", "usually der" labels, and every named exception: der Moment, der Euro, der Espresso, der Cappuccino, der Zoo, das Stadion, der Baum, der Raum, der Kuchen, das Restaurant, das Ei, der Name, der Käse, der Junge, das Ende). Specific notes:

- The das / die / der rules now carry the reliability label per group of endings, as in the original; the only added words are the one-line leads "Some endings point to das / die".
- The Sie / sie and er forms in the `ex` block for "things are er, sie, es" use the original example sentences; only the English translations are new.
- The welch- table repeats the four examples of the original tip; "feminin / maskulin / neutrum / Plural" follow the wording of the existing "Der bestimmte Artikel" table.
- "the Kursbuch (p. 24, 10a) shows entries like these" is kept in the same bullet as the umlaut note it belonged to.

## 3. Factual doubts (nothing changed)

- None found. The stated exceptions and tendencies were read as written and left untouched.
