# Tag 1 — verifier report (class 08.09.2026)

## 1. What I checked

- Rules: `docs/verifier-brief.md`, `docs/lesson-authoring.md` (§10).
- Day files: `src/data/days/d01.ts` (6 sections, 44 vocab entries, 1 dialogue of 6 lines, 50 exercises, examTip), `src/data/gloss/g01.ts` (5 entries), `scripts/art/d01.json` (hero only).
- Primary sources (own pass before reading coverage map / writer report):
  - Transcript `classes/2026-09-08 German Haus A1/transcript.txt`, all of it.
  - Kursbuch pp. 8, 9 (Deutsch international), 10 (2a dialogues, smiley box zoomed at 300 dpi), 11 (3a, Tschüs, Frau Weber), 17 (Redemittel summary), 30 (Gut gesagt: grüßen).
  - Übungsbuch spreads 3 (pp. 6-7), 22 (pp. 44-45 Sprechen Teil 1).
  - `books/modellsatz_text.txt` (Sprechen Teil 1 Prüferblatt, Hören item numbering Teil 1 = 1-6, Teil 3 = 11-15) and `books/Goethe_A1_Modellsatz.pdf` p.28 (the Teil 1 keyword sheet, rendered).
  - `classes/Greetings.pdf` (text).
- Then `docs/coverage.md` (A3 rows 1-8, A5 R9/R10/R17, Part B Day 1) and `d02.ts`/`d03.ts` for the ownership boundaries (sound pairs, sp/st, w/v on Tag 2; ß rule and umlauts on Tag 3; Tag 3 points back to Tag 1 for the ch sounds).
- Every German string, translation, Hindi gloss, exercise key (50) and exam claim was checked. `fill` matching is case-, ß- and umlaut-insensitive (`src/lib/utils.ts normalize`), so the fill keys accept all correct spellings.

## 2. Corrections

| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | Section 6 + examTip: "Your first **card** is Name?" / "first keyword on the card" | "A sheet with keywords lies on the table for everyone; the first keyword is Name?" / "on the keyword sheet" | Sprechen Teil 1 uses one keyword sheet ("Ein Blatt mit Stichworten wird für alle sichtbar ausgehängt bzw. ausgelegt"); cards (Handlungskarten) belong to Teil 2/3. Wrong exam fact. | H | modellsatz p.40 + Goethe PDF p.28; UB p.45 |
| 2 | ie/ei tile: "say the second letter"; two mcq `why`s "Say the second letter" | "say the **English name** of the second letter: E 'ee', I 'eye'" | The mnemonic only works with English letter names. With the German letter names taught on Tag 2 (E = "eh", I = "ee") it gives ie = "eh", ei = "ee" — wrong sounds. | H | own knowledge; d02 letter table |
| 3 | nouns card "die Nudeln — noodles, pasta (plural only)"; vocab en "(plural)" | "(plural; one noodle = die Nudel)"; vocab "(plural of die Nudel)" | die Nudel is a normal singular; "plural only" is false. | H | own knowledge (Duden: die Nudel, -n) |
| 4 | Warn: "Alone, ch is the harsh sound in Nacht or the soft sound in ich." | "In German words ch is either …" + "Two exceptions you will meet later: chs sounds like 'ks' (sechs), and some foreign words keep their own sound (der Chef with 'sh')." | False absolute: chs = [ks] in sechs (A1 number), Chef = [ʃ]. | H | own knowledge |
| 5 | ch tiles: "ch after a, o, u" / "ch after i, e: a soft hiss" (+ mcq why) | "after a, o, u, au: harsh" / "after i, e and all other sounds: soft hiss … close to the h in English 'huge'" | The ich-sound is used after every sound except a/o/u/au (Milch, München, euch, Mädchen); the old tile left the learner without a rule for them. Tag 3 relies on Tag 1 for "sprechen". "huge" gives a correct English model instead of only "hiss". | H (rule) / M (comparison) | own knowledge; coverage R10 |
| 6 | Example "Wie geht's? — Auch gut, danke." | "Danke, gut. Und dir? — Auch gut, danke." | "Auch gut" (good too) only makes sense after the other person has answered; as a direct answer to Wie geht's? it is unnatural. | H | own knowledge; KB p.10 has it as reply to "Und dir?" |
| 7 | Rule: "For every other question, such as a name, use Und du?"; vocab "und du? — (any other question)"; fill why "any other question" | "Hand the question back with the same little word it used: … Wie geht es dir? → Und dir? … Wer bist du? / Wie heißt du? → Und du?"; vocab "(after Wer bist du? / Wie heißt du?)" | "Every other question" is a false absolute (later: Wie gefällt dir …? → Und dir?, Wie geht es Ihnen? → Und Ihnen?). The echo rule is true and covers both. | M | own knowledge; transcript [132:00] |
| 8 | "With someone you address as Sie, start with Guten Tag and finish with Auf Wiedersehen." | "the safe choice is Guten Tag (or Guten Morgen / Guten Abend) to start and Auf Wiedersehen to finish. Colleagues who say Sie to each other often say Tschüs too (KB p.11: Tschüs, Frau Weber)." | Read as a rule it excluded Guten Morgen/Abend with Sie-persons and contradicted the book's own Sie-dialogue. | M | KB p.11 3a C |
| 9 | "The first page of the Kursbuch (KB p.8–9)" | "The opening pages of Kapitel 1 (KB p.8–9)" | p.8 is the chapter opener, not the first page of the book. | H (wording) | KB scan |
| 10 | "German is read the way it is written." | "German is **mostly** read …" | False absolute (vowel length unmarked, chs, loanwords — see #4). | M (wording) | own knowledge |
| 11 | compare why "Heißen goes with wie" | "To ask a name, wer goes with bist … and heißen goes with wie" | "Wer heißt Anna?" (who is called Anna?) is correct German; the restriction is about asking someone's name. | M (wording) | own knowledge |
| 12 | Table "Ganz gut — quite good (a little less than gut)" | added "; a neutral face in the book" | Verified on KB p.10 / p.17 (zoomed): Ganz gut has a neutral face; aligns with the other rows that cite the smileys. Not an error, a confirmation. | H | KB p.10, p.17 |

Severity count: wrong fact 4 (#1, #3, #4, #5), wrong/misleading teaching 1 (#2 — teaches wrong sounds once the German alphabet is learnt), unnatural German 1 (#6), wording/false-absolute 6 (#7-#12). No wrong exercise key found.

## 3. Removals and additions

- Removals: none (nothing unverifiable left after the fixes).
- Additions: chs / Chef exception line (#4); "huge" comparison (#5); KB p.11 Tschüs-with-Sie note (#8). No new vocab, no new exercises.

## 4. Doubts I could not settle

- Greeting hours (Morgen until ~10-11, Abend from ~17-18) are a rule of thumb, labelled as such; regional usage varies (some say Guten Morgen until 12). Acceptable.
- "Ich bin gut … sounds like 'I am good (at something)'" — fine as written and does not call it impossible (R17).
- Cross-Day duplicates reported by the audit for Tag 1 (heißen, sein vs Tag 5; der Kindergarten vocab + artikel exercise vs Tag 15). Tag 1 is the earliest Day, so Tag 5 / Tag 15 must drop them; not in my files.
- Hover on "geht" in Wie geht's? shows the literal "goes" from the shared glossary. Correct, only literal; not changed (shared file).

## 5. Writer doubts

| Writer doubt | Resolution |
|---|---|
| Hour ranges | Kept, explicitly "rule of thumb"; correct as such. |
| ch comparisons ("loch", "hiss"), tsch = "chat" | "loch" correct for the ach-sound; tsch = ch in "chat" correct. Rule widened and "h in huge" added (#5); chs/Chef exception added (#4). |
| Es geht / so lala added | Both standard German and natural; so lala was even said in class [92:00]. Kept. |
| Und dir only in fill | Correct key; rule reworded as the echo rule (#7). |
| Hindi glosses (Kindergarten, Würstchen, Autobahn) | Checked all 44 `hi` values; all correct, natural Devanagari. No change. |
| der Kranke omitted | Fine (adjectival noun, not needed); the 8 listed loanwords match KB p.8-9 exactly. |
| Vocab/exercise duplicates with later Days | Confirmed Tag 1 is the earliest; later Days should drop them. |
| glossary "geht" = goes | Literal but true; left (shared file). |
| Wortliste bold not marked | No field for it; not an error. |
| Dialogue / Entschuldigung own text | Dialogue natural; not claimed as book text. KB p.10 lines used in examples match the scan. |

Other things confirmed correct: Gute Nacht farewell-only + Guten Abend even at midnight (matches class and standard usage); Gute vs Guten pointer to Tag 6; Tschüs/Tschüss both correct (book: Tschüs, KB p.10/11/17); Moin / Grüß Gott / Grüezi as a one-line pointer to Tag 8 (KB p.30 verified); final g in Tag = k; tsch/sch; ß = sharp s with the rule left to Tag 3; Hören Teil 1 item 6 "Guten Morgen, Herr Albers", Teil 3 items 12 "Hallo Jan, hier ist Boris" and 14 "Guten Tag, hier Rogalla" (verified with item numbering); examiner opening "Guten Tag … Mein Name ist … Erzählen Sie uns: Wer sind Sie?" (verified); all articles/plurals (Handtücher, Flaschen, Koffer, Würstchen, Kindergärten, Butterbrote, Autobahnen, Namen); every exercise key, exactly one correct mcq option each, order tiles unique (capitalised "Mein" excludes "Anna ist mein Name"). Art prompt: one calm scene, no text requested. Headings/captions German-only, no emoji. Nothing owned by Days 2-5 is re-taught (w/v, sp/st, alphabet, ß rule, Du/Sie, conjugation tables are pointers only). Class content all present (Deutsch/Deutschland, greetings, sounds, Wie geht's + answers + Ich bin gut warning, three name questions, Und du/Und dir, UB p.6-7 material as own exercises).

Checks after edits: `node scripts/check-content.mjs` clean apart from missing-clip; `node scripts/audit-notes.mjs --day=1` shows no Tag 1 errors other than the cross-Day duplicates where Tag 1 is the owner; `npm run typecheck` clean.

VERDICT: PASS
