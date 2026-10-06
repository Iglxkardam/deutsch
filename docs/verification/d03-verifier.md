# Day 3 verifier report (class 10.09.2026: Länder und Sprachen)

## 1. What I checked
- Rules: docs/verifier-brief.md, docs/lesson-authoring.md (§4, §5, §10).
- Day files: src/data/days/d03.ts (all notes blocks, 79 vocab entries before / 72 after, the dialogue, 50 exercises, examTip), src/data/gloss/g03.ts, scripts/art/d03.json. Answer matching code (src/lib/utils.ts `normalize`/`matches`), so I could check the claim that the app accepts ae/oe/ue/ss.
- Primary sources, read as page scans: Kursbuch pp. 4 (contents, D-A-CH), 8-9, 10-11, 12 (4a-c), 13, 14-15 (8a-e, six people, "aber: aus der Schweiz" box), 16, 17 (summary, Personalpronomen in Texten), 18-19. Übungsbuch spreads pp. 8-9 (3b-e, 4a-d), 10-11 (4e, 5a-f, Aylin/Sarah/Nils chat), 14-15 (8b-f, R1-R3). Handout classes/Sprache Und Länder.pdf (both pages). Goethe A1 model test: books/modellsatz_text.txt (Sprechen Teil 1 examiner script, spelling and number prompts) and the Teil 1 card scan (PDF p. 28: Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?).
- Class transcript 2026-09-10 in full.
- After my own pass: docs/coverage.md (A2, A3, A4, A5, Day 3 Part B) and docs/verification/d03-writer.md.
- Verified as correct against the scans: all six Kursbuch texts (word for word), the summary table, Switzerland's four languages (KB p.15 8b), the aus der/dem/den lists (UB p.14 8c), Tunesien → Arabisch and Griechenland → Griechisch, Kanada and Neuseeland languages (UB p.14 8b), the chat (Aylin from Berlin, lives in Stuttgart; Sarah from Stuttgart, lives in Berlin; Nils from and in Frankfurt), the UB p.9 4a answers (Aus Brasilien. Und du? / Aus Irland. Und Sie?), KB p.17 er/sie text, the examiner's model introduction (Mein Name ist / Ich komme aus / Ich lebe in / Ich spreche Deutsch, ... / hobby).

## 2. Corrections
| # | Before | After | Why | Cert. | Source |
|---|---|---|---|---|---|
| 1 | ß rule: "After a short vowel it writes ss" with no exception | Added: "Some short words simply end in one s: aus, das, es, was, bis, der Bus." | As written the rule makes a learner write "auß" (diphthong + voiceless s) or "dass/ess/bys" for das/es/bis. aus is a word of this very Day. | H | own knowledge (standard orthography) |
| 2 | Merke Und du?/Und Sie?: "In real life you may answer a Sie question in the du form if the other person is friendly" | Removed. The block now points to Tag 2 for handing the question back and keeps only the matching-task rule (UB p.9 4a): keep the form the other person used. | Switching to du yourself when you were addressed with Sie is a social mistake; the teacher's loose remark (T3 [88:00]) should not be taught. The hand-back rule itself is owned by Day 2 (d02 rule "answer with ich, hand the question back with Und Sie?"). | H | own knowledge; d02.ts; UB p.9 4a |
| 3 | Tip: "the Kursbuch list above is what the Start Deutsch 1 level needs" | "the list above (the class list, also in the Übungsbuch p. 14, 8c) is what you need at A1" | The ten-country list is not in the Kursbuch (KB p.15 box only has Schweiz, Türkei, Ukraine, USA); it is the class list and UB p.14 8c. | H | KB p.15, UB p.14 |
| 4 | "Cities never take an article" | "Cities take no article" | False absolute (Den Haag; city + adjective). | M | own knowledge |
| 5 | vocab welche: en "which (plural)" | "which (with die-words and plurals)" | welche is also feminine singular; this Day's own example "Welche Sprache sprichst du?" uses it in the singular. | H | own knowledge |
| 6 | examTip "prepare four sentences ... Mein Name ist ..." and "Only the countries on the aus list have an article." | Names all seven Teil 1 cards, says three are this Day's (Land? Wohnort? Sprachen?) with the sentence for each; "Only a few countries have an article after aus (the list in section 2)." | The card has seven keywords, not four; the article sentence contradicted the Day's own tip (die Mongolei, der Sudan). | H | Modellsatz p.28 card |
| 7 | Section 7 paragraph: "The country, the town and the languages are always part of it" + spelling explained again | Lists the seven cards, maps Land?/Wohnort?/Sprachen? to the sentences, spelling as a pointer to Tag 2. | Accurate to the card; spelling at the end of Teil 1 is owned by Day 2 (d02 Merke + table). | H | Modellsatz; coverage A3 row 7 |
| 8 | mcq "what might the examiner ask you at the end of Sprechen Teil 1?" | New mcq "your card says Land?. What do you say?" (Ich komme aus Indien / Ich wohne in Indien / Ich spreche Indien / Ich komme in Indien) | Same question as d02 (line ~514); §4 forbids repeating an earlier Day's exercise. New one tests this Day's skill; exactly one option fits Land?. | H (dup) | d02.ts |
| 9 | Tile ä "like the e in Bett" on der Käse | "an open e, as in Bett (long here)" | Käse has a long ä; Bett a short e. Same quality, different length. | M | own knowledge |
| 10 | Figure caption "the three German-speaking countries" | "the three main German-speaking countries" | German is also official in Liechtenstein, Luxembourg, Belgium, South Tyrol. | M | own knowledge; KB p.4 uses D-A-CH |
| 11 | Merke wie: "wie, wo, woher, wer are the question words of the first week" | adds today's welche | Day teaches Welche Sprachen ...? in section 4. | L (wording) | Day itself |
| 12 | Section 3 tip: "the examiner introduces himself with four sentence beginnings" | "first introduces himself or herself with these sentence beginnings" | The script has five lines (incl. hobby); gender of the examiner is not fixed. | L (wording) | Modellsatz |

Severity count: wrong fact 6 (#1, #2, #3, #5, #6, #7), wrong key / duplicate exercise 1 (#8), wording 5 (#4, #9, #10, #11, #12).

## 3. Removals and additions
- Removed from vocab (earlier Day already has the entry, §4): Deutschland (d01), kommen, wohnen, wo, woher, aus, in (d02). The words remain in notes, examples and exercises; tooltips come from the earlier Days' vocab.
- Example "Ich lerne Deutsch." (duplicate of d01) → "Und welche Sprache lernst du? – Ich lerne Deutsch." (example-dup warning cleared).
- Removed the "answer a Sie question with du in real life" remark (see #2).
- Added: the short-word exception to the ß/ss rule (#1); the seven Teil 1 cards (#6, #7).

## 4. Doubts I could not settle
- vocab-dup lernen and sprechen with Tag 5: Day 3 is earlier and keeps them; d05.ts must delete its entries (not my file). These two remain as audit errors that name Tag 3.
- Class worksheet (Steffi/Kiril/Jan/Marina/Lars/Aya/Franziska) and the UB 5a / 8e audio are not in the repo; content is covered by equivalents, not checked word for word.
- The order exercise "Sie kommt aus der Schweiz ." also allows the emphatic "Aus der Schweiz kommt sie.", which the key rejects. The key is the natural sentence; I left it.
- Irak → Arabisch only (Kurdish is co-official) and Algerien → Arabisch only (Tamazight co-official): simplifications, not errors, at A1.

## 5. Writer doubts
- Punjabi spelling: not used in the notes; nothing to fix (German dictionaries give Pandschabi/Panjabi). Resolved: leave out.
- Bangladesch → Bengalisch, Pakistan → Urdu/Englisch, Iran → Persisch: correct. Resolved.
- Irak → Arabisch only: acceptable simplification (see doubts).
- Aylin/Sarah/Nils chat: checked on UB p.11 scan by speaker colours and content; the Day's statements are right. Resolved.
- "in der Schweiz / im Iran / in den USA": correct standard German. Resolved, kept.
- "Und Sie?" real-life remark: wrong advice; removed (#2).
- Modellsatz wording: correct; now also mentions the hobby line implicitly via the seven cards. Resolved.
- ß with eu/äu but no example: the statement is true (äußern, scheußlich); ei and au examples suffice at A1. Resolved, unchanged.

## 6. Checks
- check-content: clean apart from missing-clip.
- audit-notes --day=3: no Day 3 errors except vocab-dup lernen/sprechen (fix belongs to d05). No tooltip gaps.
- typecheck: clean.

VERDICT: PASS
