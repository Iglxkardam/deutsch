# Coverage map: Days 1-12 (Netzwerk neu A1, class German House A1, Goethe A1)

Planning document for the 12 Day writers. It changes no lesson file. Read your own Day in Part B plus Part A.

**How it was built.** All 12 transcripts, all 12 `d01.ts`-`d12.ts`, the Kursbuch contents page and every Kursbuch page from p.8 to p.63 (ch.1-5), Übungsbuch pp.6-63 (ch.1-5 incl. Lernwortschatz and the Plattform 1 exam pages), the three teacher handout extracts (`books/_extract_*.txt`), `classes/*.pdf` and the Goethe model test (`books/modellsatz_text.txt`) were read. Where a point is not certain it says **unclear**.

**Conventions**
- "Tag N" = Day N = the class of that date. d01=08.09, d02=09.09, d03=10.09, d04=11.09, d05=12.09, d06=16.09, d07=17.09, d08=18.09, d09=21.09, d10=22.09, d11=23.09, d12=24.09 (2026).
- **KB** = Kursbuch, **UB** = Übungsbuch. **Page numbers are printed page numbers.** For the Kursbuch PDF the PDF index equals the printed page (offset 0, checked at pp.8, 16-17, 62-63, 160-161). The Übungsbuch PDF has 88 double-page spreads; spread index *i* holds printed pages 2*i* and 2*i*+1 (index 3 = pp.6-7).
- Transcript timestamps such as [32:00] are the **start of a 4-minute block**, so they are accurate to about 4 minutes. Chunks (e.g. "[84:00]-[96:00]") span several blocks.
- **GAP** = the Netzwerk chapter or the exam syllabus requires it, but the class did not teach it (as far as the transcript shows). A GAP is assigned to a Day, with the printed page.
- Transcript noise: ASR mangles German badly ("we get as dear" = "wie geht es dir", "Ish" = "ich"). Names of exercises were reconstructed by matching the quoted sentences against the book scans.

---

## KEY FINDING: the current `dNN.ts` files do not follow the class order

The 12 current files are ordered by **topic**, not by class. Examples (checked against transcripts):

| Current file | What it actually contains | Which class taught it |
|---|---|---|
| d01.ts | greetings + **alphabet, ß rules, sound pairs, spelling** + **Du/Sie** + the six questions + classroom phrases + heißen/sein tables | greetings = class 1; alphabet, spelling, Du/Sie, formal questions = **class 2**; classroom phrases = **class 4** [92:00]; full verb tables = **class 5** |
| d02.ts | verb endings, spelling changes, W-Fragen, **countries/languages/aus+der/dem/den**, sprechen | countries/languages/aus = **class 3**; verb endings = **class 5**; W-Frage formula = **class 6** |
| d03.ts | numbers 0-20, phone numbers, email, Wie alt | numbers/phone/Wie alt = **class 4** (up to 1000+ in the same lesson); email = **never taught** |
| d04.ts | gern, Ja/Nein-Frage, irregular verbs, hobbies | gern + irregular verbs = **class 5**; Ja/Nein-Frage = **class 6** |
| d05.ts | der/das/die, plural | gender = **class 6**, plural = **class 7** |
| d06.ts | days, months, seasons, sich verabreden | days/months/seasons = **class 6**; sich verabreden = **class 7** |
| d07.ts | numbers >20, haben/sein, jobs, work texts, form | numbers = **class 4**; haben/sein = **class 5**; jobs/texts = **class 7**; form = never taught |
| d08.ts | Hamburg places, der/die See, ein vs der | class 8 (matches) |
| d09.ts | nicht/kein, directions, Imperativ Sie | class 9 (matches) |
| d10.ts | addresses, Hören strategy, meals, supermarket | class 10 (matches) |
| d11.ts | Nominativ/Akkusativ, möchten/mögen | class 11 (matches) |
| d12.ts | Alltag, time, um/am/im | class 12 (matches) |

**Consequence for the writers.** Days 8-12 can be rewritten largely in place. Days 1-7 must be **re-cut to the class order**: Part B tells each writer what the class taught that day and which blocks of the old file move elsewhere. The learner follows class day by day and uses this app as the only notes, so Day N must hold what class N taught.

---

# PART A - SHARED SECTIONS

## A1. Chapter map

Printed pages. Lines in quotes are copied from the Kursbuch contents page (KB p.8, 18, 28, 44, 54, 64; PDF index 4-6).

### Kapitel 1 "Guten Tag!" - KB pp.8-17, UB pp.6-17 (Lernwortschatz UB pp.16-17, Das kann ich UB p.15). Days: **1, 2, 3, 4**
- Lernziele: "grüßen und verabschieden | sich und andere vorstellen | nach dem Befinden fragen und darauf reagieren | über sich und andere sprechen | Zahlen bis 20 nennen | Telefonnummer und E-Mail-Adresse nennen | buchstabieren | über Länder und Sprachen sprechen".
- Wortschatz: "Zahlen von 1-20 | Länder und Sprachen".
- Grammatik: "W-Frage | Aussagesatz | Verben und Personalpronomen | Personalpronomen in Texten".
- Aussprache: "Alphabet". Strategie: "E-Mail-Adresse schreiben und sagen". Landeskunde: "Länder und Sprachen".
- Die Netzwerk-WG: "Ich bin Anna. | Willkommen, Anna! | Und deine Nummer?" (KB p.16, Video scenes 1-3; not covered by any class).
- Page map: p.8-9 opener (1a-c international words); p.10 2a-c Hallo! Tschüs!; p.11 3a-b Guten Tag! Auf Wiedersehen!; p.12 4a-c Woher kommen Sie?, 5a-b interviews; p.13 6a-c Zahlen und Buchstaben, 7a-c Alphabet/E-Mail/spelling; pp.14-15 8a-e Länder und Sprachen; p.16 9-12 WG; p.17 grammar summary. UB: p.6-7 (1-3 greetings), p.8-9 (3b-e Sie/du, 4a-d), p.10-11 (4e, 5a-f), p.12 (6a-e numbers), p.13 (7 alphabet, 8a), p.14 (8b-f), p.15 (R1-R3).

### Kapitel 2 "Freunde, Kollegen und ich" - KB pp.18-27, UB pp.18-29. Days: **5, 6, 7** (+ part of 4)
- Lernziele: "über Hobbys sprechen | sich verabreden | Wochentage benennen | über Arbeit, Berufe und Arbeitszeiten sprechen | Zahlen ab 20 nennen | ein Formular ausfüllen".
- Wortschatz: "Hobbys | Wochentage | Zahlen ab 20 | Berufe".
- Grammatik: "unregelmäßige Verben und Personalpronomen | Ja-/Nein-Frage | bestimmter Artikel: der, das, die | Nomen: Singular und Plural | Verben haben und sein".
- Aussprache: "Satzmelodie: Fragen und Antworten". Strategie: "Artikel lernen". Landeskunde: "Neu im Club". WG: "Gehen wir zusammen? | Wo arbeitest du?" (KB p.26).
- Page map: p.18-19 opener + 1, 2a-b; p.20 3a-d Meine Hobbys; p.21 4a-c Wochentage, 5a-b Gehen wir ins Kino?; p.22 6a-c Mein Beruf, 7a-b; p.23 7c-d, 8a-c plural, 9a-c Berufe; p.24 10a-b, 11a-b Artikel lernen; p.25 12a-b Neu im Club (form); p.26 WG 13-14; p.27 summary. UB: p.18-21 (1-5), p.22-23 (6, 7), p.24-25 (8-11), p.26 (12), p.27 (R), p.28-29 Lernwortschatz.

### Kapitel 3 "In Hamburg" - KB pp.28-37, UB pp.30-41. Days: **8, 9, 10 (end)**; month/season list was already taught in Day 6
- Lernziele: "Plätze und Gebäude benennen | Fragen zu Orten stellen und antworten | Verkehrsmittel benennen | nach Dingen fragen | nach dem Weg fragen und einen Weg beschreiben | Jahreszeiten und Monate benennen | über Hobbys sprechen".
- Wortschatz: "Plätze und Gebäude | Verkehrsmittel | Richtungen | Monate und Jahreszeiten".
- Grammatik: "unbestimmter Artikel: ein, ein, eine | Negationsartikel: kein, kein, keine | Imperativ mit Sie | Adjektiv mit sein".
- Aussprache: "lange und kurze Vokale". Strategie: "Texte mit internationalen Wörtern verstehen". Landeskunde: "Events in Hamburg | Jahreszeiten in D-A-CH". WG: "Die Stadttour in München | Entschuldigung, wo ist der Viktualienmarkt?".
- Page map: pp.28-29 1a-d Stadttour; p.30 2a-c Die Taxifahrt, 3; p.31 4a-c articles, 5a-b vowels; p.32 6a-c Kein Glück?!; p.33 7a-c Links, rechts, geradeaus, 8; p.34 9a-d Events; p.35 10a-d Jahreszeiten in D-A-CH; p.36 WG 11-13; p.37 summary. UB: p.30-37 (1-9), p.38-39 (10, R), p.40-41 Lernwortschatz. UB Plattform 1 (pp.42-45): Prüfungstraining Hören Teil 1 + Sprechen Teil 1.

### Plattform 1 - KB pp.38-43: "wiederholen und trainieren, Landeskunde: berühmte Personen, Städte in D-A-CH". Not covered by any class.

### Kapitel 4 "Guten Appetit!" - KB pp.44-53, UB pp.46-57. Days: **10, 11**
- Lernziele: "einen Einkauf planen | Gespräche beim Einkauf führen | Gespräche beim Essen führen | über Vorlieben beim Essen sprechen | über Essen sprechen".
- Wortschatz: "Mahlzeiten | Lebensmittel | Getränke | Geschäfte".
- Grammatik: "Akkusativ | Verben mit Akkusativ | Verben mögen und möchten | Positionen im Satz".
- Aussprache: "Umlaute ä, ö, ü". Strategie: "Wörter ordnen und lernen | mit W-Fragen Texte verstehen". Landeskunde: "Berufe rund ums Essen". WG: "Beas Idee | Der WG-Nachmittag".
- Page map: pp.44-45 opener (1a-b, 2a-c); p.46 3a-d Kommt ihr?, 4, 5a-b Umlaute; p.47 6a-c Einkaufen im Supermarkt; p.48 7a-b Grillparty, 8a-b möchten; p.49 9a-c Frühstück, Mittagessen, Abendessen; p.50 10a-c Wörter lernen; p.51 11 Berufe rund ums Essen; p.52 WG 12-13; p.53 summary. UB: p.46-55 (1-11, R), p.56-57 Lernwortschatz.

### Kapitel 5 "Alltag und Familie" - KB pp.54-63, UB pp.58-69. Day: **12** (start); rest = Day 13+ (outside this plan)
- Lernziele: "die Uhrzeit verstehen und nennen | Zeitangaben machen | über Familie sprechen | sich verabreden | einen Termin telefonisch vereinbaren | sich für eine Verspätung entschuldigen und darauf reagieren".
- Wortschatz: "Tagesablauf | Uhrzeiten | Familie". Grammatik: "Zeitangaben: am, um, von ... bis | Possessivartikel im Nominativ und Akkusativ | Modalverben müssen, können, wollen | Modalverben im Satz: Satzklammer".
- Aussprache: "r im Wort und am Wortende". Strategie: "ein Telefongespräch vorbereiten". Landeskunde: "Pünktlichkeit?". WG: "Wir gehen joggen. | Wo ist Max? | Mmh, lecker."
- Page map: p.54-55 1a-b, 2a-b, 3a-b (Kaans Tag); p.56 4a-b, 5a-b, 6 (Uhrzeit); p.57 7a-b, 8a-b, 9 (Familie und Termine, r); p.58 10a-c (Possessivartikel); p.59 11-12 (Modalverben); p.60 13-14 (Termin telefonisch); p.61 15 Pünktlichkeit; p.62 WG 16-18; p.63 summary. UB: p.58-59 (1-6), p.60 (7a-c), p.61-63 (8-10 etc.).

### Kapitel 6 "Zeit mit Freunden" - KB pp.64-73. No class of Days 1-12 touched it.
Lernziele: Freizeit, Datum, Geburtstage, Einladung, bestellen/bezahlen, Ereignis, Radio-Veranstaltungstipps; Wortschatz: Ordinalzahlen, Freizeitaktivitäten, Essen und Getränke, Veranstaltungen; Grammatik: Datumsangaben am ..., trennbare Verben, Personalpronomen im Akkusativ, für + Akkusativ, Präteritum von haben und sein.

### Back matter
- Grammatikübersicht incl. unregelmäßige Verben list: KB pp.160-161 (fahren, essen, lesen, sehen, geben, nehmen, schlafen, sprechen, treffen, mögen/möchten ...).
- Alphabetische Wortliste: starts KB p.162 and runs to about p.175. Rule printed on p.162: "Die fett markierten Wörter sind besonders wichtig. Sie brauchen sie besonders für den Test 'Start Deutsch 1'." Writers must look up each Day's nouns/verbs here and mark bold ones as exam-required in the vocab (not done in this plan; bold marking is only readable on the scan).
- UB Prüfungsteile table (UB p.42): Hören T1 six Gespräche, T2 four Durchsagen, T3 five Nachrichten auf der Mailbox oder Ansagen; Lesen T1 Mail/Brief, T2 einfache Alltagstexte, T3 kurze Informationstexte; Schreiben T1 Formular, T2 kurzer Text; Sprechen T1 sich vorstellen, T2 um Informationen bitten und geben, T3 Bitten formulieren und darauf reagieren.

---

## A2. Goethe-Zertifikat A1 "Start Deutsch 1": what each topic feeds

Format used here is the repo's own model test (`books/modellsatz_text.txt`, 8th edition 2024) and UB p.42. All writers use these facts and no others for exam tips.

| Module (time) | Part and task | Typical content | Days that train it |
|---|---|---|---|
| **Hören** (~20 min, 15 items) | **Teil 1**: 6 short conversations, one multiple-choice item each (a/b/c, often pictures), heard **twice** | room numbers, prices, times, places, jobs, directions | 2, 3, 4, 8, 9, 10, 12 |
| | **Teil 2**: 4 announcements (Durchsagen) with Richtig/Falsch, heard **once** | station/shop/company announcements, times, places | 4, 10, 12 |
| | **Teil 3**: 5 messages on a mailbox or announcements, multiple choice, heard **twice** | phone numbers (11833 vs 11883), days, what is broken | 4, 6, 10 |
| **Lesen** (~25 min, 15 items) | **Teil 1**: an e-mail/letter, 5 Richtig/Falsch statements | times, days, places | 6, 7 |
| | **Teil 2**: 5 short everyday texts/web ads, choose a or b | school/ticket/hotel websites | 8, 10 |
| | **Teil 3**: 5 signs/notices, Richtig/Falsch | opening hours (Öffnungszeiten), "Rauchen verboten", bus times | 6, 12 |
| **Schreiben** (~20 min) | **Teil 1**: fill a form with 5 missing details from a short text | Vorname, Nachname, Straße + Hausnummer, PLZ + Ort, E-Mail, Telefon, payment, date | 2, 4, 7 |
| | **Teil 2**: short message, ~30 words, 3 content points, with Anrede and Gruß | invitation, request, information | 6, 7 (gap), 12 |
| **Sprechen** (~15 min, group of up to 4 + two examiners) | **Teil 1** sich vorstellen from keyword cards: **Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?** (UB p.45 shows exactly these seven cards); at the end the examiner often asks "Buchstabieren Sie Ihren Namen" or "Sagen Sie Ihre Telefonnummer" (UB p.44 box) | 1-7 | all |
| | **Teil 2**: ask and answer questions from a keyword card (Thema + Wort, e.g. "Geschäft - Wann?") | W-Fragen, days, times, prices | 6, 8, 10, 12 |
| | **Teil 3**: make and react to a request/offer from a picture card ("Bitten formulieren") | Bitte + Imperativ/Können Sie ...?, Ich möchte ..., Haben Sie ...? | 9, 10, 11 |

Note: Goethe and telc A1 have the same level; the teacher said both share patterns (Tag 6 [132:00], Tag 10 [72:00]). The teacher's class audios on Tag 4, 10 and 12 include "Notizblatt" style tasks and 15-item sets that are not in the 2024 Goethe model; do not describe those formats as Goethe formats.

---

## A3. Ownership table (each item has exactly ONE owner Day)

Owner = the first class that actually taught it (transcript), unless marked GAP (assigned by the book). Later Days link ("see Tag N") and do not re-teach. A later Day may **use** a word or phrase inside an example as a fixed phrase.

| # | Item | Owner | Evidence / note | Allowed elsewhere |
|---|---|---|---|---|
| 1 | Greetings and farewells (Hallo, Guten Morgen/Tag/Abend, Gute Nacht = farewell only, Auf Wiedersehen, Tschüss, Ciao, Bis bald/morgen/später) | **1** | T1 [28:00]-[48:00] | Moin (regional greeting): Day 8 |
| 2 | Wie geht's / Wie geht es dir, Danke gut, Es geht mir gut, Und dir; "Ich bin gut" warning | **1** | T1 [48:00]-[56:00] | formal Ihnen: Day 2 |
| 3 | Asking/saying a name, 3 ways (Wer bist du / Wie heißt du / Wie ist dein Name; Ich bin / Ich heiße / Mein Name ist), Und du? | **1** | T1 [68:00]-[72:00] | formal versions: Day 2 |
| 4 | Deutsch (language) vs Deutschland (country) | **1** | T1 [20:00] | |
| 5 | Basic sounds: a = "ah", g hard, ch after a/o/u vs after i/e, ie/ei, ß, tsch | **1** | T1 [28:00]-[48:00] | Day 2 adds the rest |
| 6 | Du / ihr / Sie: who gets which; capital S; formal question forms (Wie geht es Ihnen, Wie heißen Sie, Wie ist Ihr Name, Wer sind Sie, Woher kommen Sie, Wo wohnen Sie); Herr/Frau + surname | **2** | T2 [12:00]-[36:00]; handouts Du oder Sie.pdf | |
| 7 | German alphabet, letter names, the 4 trap letters (V=f, W=v, J=y, Z=ts); sound pairs (-tion, -ig, eu/äu, au, sch, st-/sp-, s+vowel); spelling a name aloud (Buchstabieren Sie bitte) | **2** | T2 [84:00]-[104:00]; Greetings.pdf | |
| 8 | Umlaut sounds ä/ö/ü; ß-vs-ss rule; ae/oe/ue spelling | **3** (Q&A at [16:00]) | T3 [12:00]-[20:00]; BASIC NOTES. Ch.4 Aussprache (KB p.46 5a-b) is a GAP recycled on Day 10 | |
| 9 | Countries and languages (Land/Sprache), "Welche Sprachen sprichst du / sprechen Sie?", Ich spreche ... | **3** | T3 [28:00]-[40:00] | |
| 10 | aus + country with article (aus der Türkei/Schweiz/Ukraine/Slowakei, aus dem Irak/Iran/Libanon/Jemen, aus den USA/Niederlanden; all others no article) | **3** | T3 [60:00]-[68:00]; UB p.14 8c | |
| 11 | Numbers 0-20, 21-99 (units before tens), 100s, 1000s, dot for thousands / comma for decimals, Euro and Cent | **4** | T4 [28:00]-[56:00] | Millionen: Day 5 [12:00]; see A3 row 12 |
| 12 | Telefon-/Handynummer (Wie ist deine/Ihre ...?), digit by digit, doppel | **4** | T4 [72:00]-[80:00] | |
| 13 | **E-Mail-Adresse sagen/schreiben (@ = at, . = Punkt, _ = Unterstrich, - = Bindestrich)** | **4 (GAP)** | never taught in class; KB p.13 7b-c, UB p.13 7c-e; ch.1 Strategie | |
| 14 | Wie alt bist du? Ich bin ... Jahre alt (sein, not haben) | **4** | T4 [72:00] | |
| 15 | Classroom phrases (Entschuldigung, Noch einmal bitte, Das verstehe ich nicht, Bitte ein bisschen langsamer, Alles klar?); addressing the teacher as Frau/Herr + name | **4** | T4 [92:00]-[96:00]; KB p.13 box "Gut gesagt: Wie bitte?"; UB p.13 7c; UB p.17 "andere wichtige Wörter und Wendungen" | Entschuldigung, wie heißt du? in Day 1 dialogue only |
| 16 | Millionen (eine Million, zwei Millionen) | **5** | T5 [12:00] | |
| 17 | Verb = stem + ending; infinitive; endings -e -st -t -en -t -en; pronoun set ich/du/er-sie-es/wir/ihr/sie/Sie (four kinds of sie/Sie) | **5** | T5 [16:00]-[44:00]; Regelmäßige Verben.pdf; KB p.17, p.27 | Days 1-4 may show "ich heiße / du heißt / Sie heißen", "ich komme / wohne" as **phrases** only |
| 18 | Spelling changes: ß/s/z/x stem -> du -t; t/d stem -> -est/-et; consonant+m/n (atmen, regnen) -> -e- | **5** | T5 [44:00]-[48:00], T6 [112:00] | |
| 19 | Irregular vowel changes in du and er/sie/es: a->ä (fahren, schlafen), e->i (essen, geben, sprechen, treffen, nehmen), e->ie (lesen, sehen, empfehlen) | **5** | T5 [48:00]-[60:00]; Sein/haben/Irregular handout; KB p.160-161 | sprechen as a phrase on Day 3 |
| 20 | Sentence order: subject-verb-rest; verb always in position 2 (also after a time word or object) | **5** | T5 [60:00]-[72:00], [128:00]-[136:00] | |
| 21 | One present tense ("I am going" = Ich gehe; never sein + verb) | **5** | T5 [64:00]-[72:00], [96:00]-[104:00] | |
| 22 | sein and haben (conjugation, sein = state, haben + noun), zu Hause vs nach Hause | **5** | T5 [96:00]-[104:00]; Hilfsverben handout | Wie alt sind Sie? = Day 4 |
| 23 | gern / nicht so gern / sehr gern + hobby verbs (kochen, singen, fotografieren, ...) | **5** | T5 [112:00]-[128:00]; KB p.18-20; UB p.18-20 | |
| 24 | Nouns written with capital letters; Morgen/morgen | **5** | T5 [136:00]; BASIC NOTES (reminder T11 [88:00]) | |
| 25 | Wochentage, Wochenende, Jahreszeiten, Monate (the lists) | **6** | T6 [24:00]-[32:00]; KB p.21, p.35 | am/im usage: see rows 38-39 |
| 26 | W-Fragen: question words (was, wie, wo, wann, warum, welche, wer, woher, wie lange, wie viele, wie oft), formula Fragewort + Verb + Subjekt + Extra, wer + 3rd person singular | **6** | T6 [32:00]-[52:00] | Days 1-5 use the words as vocabulary only |
| 27 | Ja-/Nein-Frage (verb first; answer ja/nein; "Nein, ..." with correct information) | **6** | T6 [52:00]-[64:00]; KB p.21, p.27 | |
| 28 | **Satzmelodie** (rise for Ja/Nein, fall for W-Frage/statement) | **6 (GAP)** | not taught; KB p.21 4c-5a, UB p.21 5c-e; ch.2 Aussprache | |
| 29 | Grammatical gender: der/die/das, gender signals by ending (-chen -lein -ment -um -o -> das; -ung -heit -keit -schaft -ion -ität -ei -ie -anz -enz -e -> die; -ist -ling -ismus -or -ant -> der; days/months/seasons der); learn nouns with articles; er/sie/es for things | **6** | T6 [112:00]-[136:00]; BASIC NOTES; KB p.24 10a-11b (Strategie "Artikel lernen") | |
| 30 | Compound noun takes the article of its last word | **7 (GAP)** | not stated by the teacher; examples Krankenhaus, Schwimmbad on T7 | |
| 31 | Plural: patterns (no change, -e, -(e)n, -er + umlaut, -s), plural article always die | **7** | T7 [52:00]-[56:00]; KB p.23 8a-c, UB p.24 8a-b | |
| 32 | Female job nouns with -in; Berufe | **7** | T7; KB p.22-23; UB p.24 9a | |
| 33 | Sich verabreden: Gehen wir ins Kino? Am Samstag? Nee, das geht leider nicht. Ja, super. (ins + place) | **7** | T7 [84:00]-[100:00]; KB p.21 5a-b | |
| 34 | von ... bis; Ich habe frei / Wann hast du frei?; bei + company; in + place of work | **7** | T7 [100:00]-[136:00]; KB p.22 7a | |
| 35 | am + weekday | **7** | T7 [84:00] ("am Samstag"); formal summary T12 | |
| 36 | **Formular ausfüllen** (Vorname, Nachname, Geburtsdatum, Geburtsort, Straße/Hausnummer, PLZ/Wohnort, Telefon, E-Mail, männlich/weiblich) | **7 (GAP)** | never taught; KB p.25 12a-b, UB p.26 12a-c; ch.2 Landeskunde "Neu im Club" | |
| 37 | Definite vs indefinite article; ein/eine/ein; no plural indefinite article (Das sind Busse) | **8** | T8 [120:00]-[128:00]; KB p.31 4a-c | |
| 38 | Places and buildings; U-Bahn/S-Bahn/Straßenbahn; der See/die See; Moin; schön/schon; Danke schön | **8** | T8 [44:00]-[76:00] | |
| 39 | sein + Adjektiv (Der Bus ist voll, Das Zimmer ist groß) | **8** | T8 [120:00]-[128:00] (Das ist ein Bus. Der Bus ist voll.); KB p.37 box | |
| 40 | nicht vs kein/keine; Negationsartikel | **9** | T9 [28:00]-[44:00]; KB p.32 6c, p.37 | Days 6/8 may show "keine Zeit", "kein Fluss" as fixed phrases |
| 41 | Verkehrsmittel (Bus, Fahrrad, U-Bahn, Zug, Straßenbahn; zu Fuß gehen) | **9** | T9 [32:00]-[40:00]; KB p.32 6a-b | U-/S-/Straßenbahn already Day 8 |
| 42 | Directions (nach links, nach rechts, geradeaus) and Imperativ mit Sie (Gehen Sie ..., Fahren Sie ..., Nehmen Sie ...) | **9** | T9 [80:00]-[100:00]; KB p.33 7c box, UB p.36 8b-c | Day 3 phrases "Buchstabieren Sie bitte" are the same pattern; do not explain it there |
| 43 | Wegbeschreibung listening; Straße/Platz/Gasse; **address order = street name THEN house number** | **10** | T10 [08:00]-[20:00]; KB p.33 7a-b; see Risk R1 | |
| 44 | Meals and foods, drinks, Geschäfte (Bäckerei, Metzgerei, Markt, Supermarkt), supermarket dialogues, prices, Gramm/Kilo/Liter | **10** | T10 [60:00]-[132:00]; KB p.44-45, 47 | |
| 45 | Hören strategy: read the task, predict the type of word per gap; write down every word you catch | **10** (strategy 1) and **12** (strategy 2) | T10 [20:00]-[24:00]; T12 [68:00] | |
| 46 | Nominativ vs Akkusativ (masculine der->den, ein->einen, kein->keinen; others unchanged); verbs with Akkusativ (brauchen, haben, essen, kaufen, nehmen, kochen, machen, mögen, möchten) | **11** | T11 [16:00]-[32:00]; KB p.46 3d, p.53 | Days 6/10 use "einen Termin", "einen Euro" as phrases only |
| 47 | möchten and mögen (conjugation, difference); zum Frühstück/Mittagessen/Abendessen; at-table phrases (Guten Appetit, gleichfalls, Schmeckt's?, lecker, satt, bezahlen) | **11** | T11 [88:00]-[132:00]; KB p.48-49 | |
| 48 | Uhrzeit formal (24 h) and informal (halb, Viertel, vor, nach); um + time; Tageszeiten | **12** | T12 [44:00]-[124:00]; KB p.56 | |
| 49 | am / um / im / von ... bis summary | **12** | T12 [124:00]; KB p.57 box, UB p.60 7a-b | |
| 50 | Possessivartikel (mein/dein/Ihr + noun) | **Day 13+** (KB p.57-58, p.63) | Days 1-12 only as fixed phrases: Mein Name ist, Wie ist dein Name, Das ist meine Kollegin | |
| 51 | Modalverben können/müssen/wollen | **Day 13+** (KB p.59, p.63) | Days 1-12 only as fixed phrases: Können Sie das buchstabieren?, Das kann ich nicht | |

---

## A4. Known duplicates and contradictions between the current day files

(vocab duplicates found by a script; rule duplicates by reading.)

**Vocabulary entries present on two or more days** (the earliest Day keeps it, per `docs/lesson-authoring.md` §4):
- d01+d04: `essen`. d01+d07: `ledig`, `verheiratet`, `zu Hause`, `nach Hause`.
- d02 twice: `sie` (inside d02 vocab). d02+d04: `atmen`, `reden`, `reisen`, `tanzen`. d02+d06: `gehen`.
- d04+d05: `das Auto`; d04+d06: `das Kino`, `das Museum`, `das Schwimmbad`, `das Wochenende`; d04+d05+d06+d07: `das Restaurant`.
- d05+d06: `das Café`, `der Kurs`. d05+d07: `das Krankenhaus`, `das Seminar`, `das Zimmer`, `der Architekt`, `der Kilometer`, `der Krankenpfleger`, `der Patient`, `die Studentin`.
- d06+d07: `frei`. d06+d08: `leider`.
- Note: after re-cutting by class order, the owners change (e.g. `ledig`/`verheiratet` were not taught in class at all; see Day 5 notes).

**Rules/tables taught twice or more (file + what):**
- **sein-is-not-a-helping-verb / one present tense**: d01 (warn + exercises), d02 (rule + warn), d04 (tip), d07 (rule + table + 4 wrong/right examples). Owner Day 5.
- **du-ending after ß/s/z/x ("heißt", "tanzt")**: d01 rule, d02 rule + table, d04 table "Wiederholung aus Tag 2". **-e- insertion**: d02 rule + table, d04 table. Owner Day 5.
- **Capital S of Sie / nouns capital**: d01 rule (twice), d02 warn, d05 rule. Sie: Day 2; nouns: Day 5.
- **Du/Sie/ihr**: d01 section 5 (2 rules + table), d02 (sie/Sie table, du/ihr/Sie table, tip), d04 (du/ihr/Sie table).
- **Verb in position 2 + the two class corrections (Boris kocht nicht gern, Eva spricht gut Deutsch)**: d02 (tip + exercises), d04 (rule + warn + exercises).
- **W-Frage formula and "wer + er-form"**: d02 (rule + table), d04 (rule). Owner Day 6.
- **Compound noun takes last article**: d03, d04, d05 (3 times).
- **Plural article always die**: d05, d06, d07, d08, d09.
- **Plural patterns**: d05 table, d06 table, d07 table, d08 plural column.
- **Haben (not sein) for days off + von ... bis**: d06 (2 rules) and d07 (rule + tip). Owner Day 7.
- **Numbers**: d03 has "Große Zahlen - ein kurzer Blick" (Million, 70.000, dot/comma) and d07 section 2 repeats it fully; d03 also says numbers above 20 come on Tag 7 although class 4 taught them.
- **Phone-number asking and doppel**: d01 (wie = name/number), d03 (rule), d07 (tip).
- **Satzmelodie**: d04 (tip), d06 (rule). Owner Day 6 (GAP).
- **zu Hause vs nach Hause**: d01 tip, d07 tip, plus both vocab entries.
- **Age uses sein**: d03 rule, d07 warn.

**Contradictions inside the app:**
1. **Address order.** d07 form table lists "Straße und Hausnummer: Bahnhofstraße 12" (street then number = correct) but d10 says a German address is "house number, then street name" (wrong). See R1.
2. **kein.** d09 says kein only negates "a/an + noun" but d06 teaches "keine Zeit", d10 "keinen Zucker", d11 "keinen Fisch" (no article after the negated noun). See R4.
3. **mögen + gern.** d11 says "never add gern to mögen" and in the same lesson teaches "Timo mag gern Eis, aber keine Schokolade" (which is the book's own sentence, UB p.51 9a). See R3.
4. **"Any verb except sein needs an object"** (d11) vs d02/d04 own examples (Ich wohne in Hamburg, Er fährt nach Hamburg, Wir gehen zusammen ins Museum). See R2.
5. **Numbers above 20 "on Tag 7"** (d03) vs class 4 [28:00]-[56:00].
6. d09 table header "kein, keine, keinen" in the Nominativ-only table (keinen = Akkusativ = Day 11).
7. Premature material: d06 "einen Termin" (Akkusativ), d08 "kein See" and d10 "ins ___ (neuter accusative)" use rules owned by Day 9/11.
8. d12 informal-time table gives ":25 = fünfundzwanzig nach fünf" only; the class ([56:00]) and the Kursbuch (p.56 "fünf nach halb acht", the usual "fünf vor halb ...") use halb-based forms for 25 and 35 minutes.

---

## A5. Factual risks (things that look wrong or over-simplified)

Confidence: **H** = I am sure; **M** = fairly sure, check with a second source; **L** = unsure.

| # | Where | What is said | Correct fact | Conf. |
|---|---|---|---|---|
| R1 | d10 section 1; class 10 [12:00] | "House number first, then street: Nummer 20, Hauptstraße" | German addresses put the **street name first, then the number**: Hauptstraße 20. KB p.25 form sample "Goethestr. 7, 10711 Berlin"; d07's own form. Also "Ich wohne auf der Rathausplatz vierzehn" is wrong: Ich wohne am Rathausplatz 14 / Rathausplatz 14 (der Platz). | **H** |
| R2 | d11 rule; class 11 [12:00] | "Any verb except sein needs an object" | Many verbs take no object (wohnen, gehen, kommen, arbeiten, schlafen); sein/werden/bleiben take a **nominative** complement; haben, brauchen, essen, kaufen, nehmen, machen ... take an Akkusativ object. Teach only: "with these verbs the object is Akkusativ". Also later Dativ objects exist (helfen), so "always accusative no matter what" is A1-only shorthand. | **H** |
| R3 | d11 rule, exercises; class 11 [88:00] | "mögen never takes gern" | The Netzwerk itself writes "Ich mag ... (sehr/nicht) gern" (KB p.53 box) and "Timo mag gern Eis" (UB p.51 9a). "mag gern" is correct but slightly redundant; the real restriction: mögen is used with a **noun**, not with a second verb (not "ich mag essen"). | **H** |
| R4 | d09; class 9 [20:00] | "nicht negates verbs/adjectives/names; kein only negates 'a/an'" | kein also negates a noun **without** article (Ich habe keine Zeit, Wir mögen keinen Fisch, Das sind keine Busse, kein Geld). Correct rule: kein negates nouns that have **ein/eine or no article**; nicht negates everything else (verb, adjective, nouns with **definite** article or possessive, names, places). | **H** |
| R5 | d10 examTip, d08, d09, d11 examTips | "Hören Teil 1 plays a voicemail and you fill 5 gaps" / "Teil 2 plays taxi scenes" / "exam plays picture stories" / "Sprechen Teil 2 = ordering food" | Per the model test and UB p.42: Hören T1 = 6 short conversations (3 choices), T2 = 4 Durchsagen (R/F), T3 = 5 mailbox messages/announcements (3 choices); no note-filling, no picture stories. Sprechen T2 = question from keyword card; T3 = request from picture card. | **H** |
| R6 | class 10 [24:00] and 4 [132:00]; teacher | "Fleisch could be mutton" | **das Fleisch = meat in general**. Hammel/Lamm = mutton; Schweinefleisch, Rindfleisch, Hähnchen. (d10 has it right.) | **H** |
| R7 | class 8 [56:00] | "U-Bahn can be used for going inter-city" | U-Bahn is inside a city; the **S-Bahn** links a city with surrounding towns. (d08 correct.) | **H** |
| R8 | class 6 [120:00] (das Fräulein = Miss) | "Fräulein for unmarried women" | Obsolete and no longer used officially; always **Frau**. Mention only as an old -lein word if at all. | **H** |
| R9 | d01 table "ß after ei, ie" | ß after ei/ie always | ß follows a **long vowel or diphthong when the s is voiceless** and stays in every form: heiß, heißen, groß, Straße, Fuß, draußen, schließen. The "exceptions" Eis, Preis, reisen are no exceptions: the s is voiced in the related forms (Eises, Preise, reisen), so it is written s. Switzerland uses ss. | **H** |
| R10 | class 1/2 pronunciation | "ch after e/i = sh" | The ich-sound is a soft hiss made with the tongue near the palate, **not** "sh" (sch). Nicht is not "nisht". Say it as a soft breathy "h" if a comparison is needed; ach-sound after a/o/u is the harsh "kh" (Bach, auch). | **M** |
| R11 | class 6 [24:00]; d06 | "Wochentage = Mo-Fr" | die Wochentage = all seven days (UB p.20 4a); Mo-Fr = **Arbeitstage/Werktage**; Samstag + Sonntag = Wochenende (UB p.20 4b). | **M-H** |
| R12 | class 7 [112:00], d06/d07 | "Never say ich bin frei" | Ich habe frei is the standard way to say "I am off work". Wann bist du frei? ("when are you available") is also normal German, just a different meaning. For A1: teach "haben frei" for days off, note that "frei sein" = available. | **M** |
| R13 | d04 warn; class 5 [136:00] | "Eva spricht Deutsch gut" is wrong | Both are grammatical; "gut Deutsch" is the order the book wants (UB p.20 3g item 5). Do not call the other order an error; say the book's order is the model. | **M-H** |
| R14 | d11 and class 11 | "object always Akkusativ no matter what" | See R2; also "Das ist ein Apfel" has a nominative noun after sein (d11 handles this correctly). | **H** |
| R15 | d12 examTip; class 12 [96:00] | "4-5 of the 15 listening questions involve time" | In the model test only one Hören item asks the time directly (Teil 1 item 2); several more involve numbers, prices or days. Replace with "time questions are common". | **M** |
| R16 | d12 table | informal :20 and :25 only as "N nach", :40 only "zwanzig vor" | Usual spoken forms also: 5:25 = **fünf vor halb sechs**, 5:35 = fünf nach halb sechs (given), 5:40 = **zwanzig vor sechs** (or zehn nach halb sechs, rare), 5:20 = zwanzig nach fünf. The Kursbuch p.56 map uses "fünf nach halb acht", "fünf vor halb acht". Teach both :25 forms; note that "dreiviertel" is regional and not needed. | **H** |
| R17 | d01 "Ich bin gut" | "means I am a good person; wrong" | Not "wrong" German but not the normal answer to "Wie geht's?"; use Es geht mir gut / Gut, danke. "Ich bin gut" can be heard colloquially (esp. when refusing an offer). Teach the exam-safe answer; avoid claiming it is impossible. | **M** |
| R18 | class 6 [60:00]-[64:00] (Kleinkinder up to 5) vs handout "< 6 Jahre" | Age of du with children | Handout: Kleinkinder (< 6) always du; Kinder up to ~14 usually du. Use the handout (consistent with d01). | **H** |
| R19 | d04 "Hobbies" claim | exam cards print "Hobbies" | UB p.45 shows the card **"Hobby?"** (singular). Do not claim "Hobbies". Plural = Hobbys (UB p.28 Lernwortschatz: das Hobby, -s). | **H** |
| R20 | teacher class 5 [16:00] | "Every verb ends with -en" | Infinitives end in **-en or -n** (wechseln, sammeln, tun); stem = infinitive minus -en/-n. | **H** |
| R21 | teacher class 12 [48:00] | "If I ask wann, the answer is a day or a month, not a time" | **Wann?** is also answered with a clock time (Um Viertel nach sieben; KB p.56 6 "Wann ...? - Um ..."; KB p.63 "Wann? Um zehn nach neun"). Wie viel Uhr ist es? / Wie spät ist es? asks what the time is; Um wie viel Uhr? asks at what time. | **H** |
---

# PART B - ONE SECTION PER DAY

Each section: (1) class + pages, (2) TAUGHT IN CLASS, (3) MUST COVER, (4) DO NOT TEACH HERE, (5) exam relevance, (6) visual opportunities. "Old file" = the current `dNN.ts`; "Re-cut" tells the writer what in the old file moves out or must be removed. Item numbers like "A3 row 6" point to the ownership table.

---

## Day 1 - Greetings, how are you, your name (class 08.09)

### 1. Class and book pages
- Chapter 1 "Guten Tag!". KB p.10 (2a, the dialogues "Hallo Nina! / Hallo Niklas, wie geht's? / Ganz gut, danke / Tschüss Julia, bis bald / Ciao") read aloud [96:00]-[104:00].
- UB p.6 2a (fill in "Wie geht's?" dialogues) and 2b (put dialogues in order: Valentin/Kilian "Entschuldigung, wie heißt du?"; Conny/Jakob "Wie geht's?") [108:00]-[128:00]. UB p.7 2c (fill in missing words, "Ich bin Clara / Ich heiße Emma") [124:00]-[132:00]. Handout Greetings.pdf (first page: greetings and farewells).
- Unclear: whether UB p.7 2d (order Ganz gut / Gut, danke / Sehr gut) and 3a (match greeting to picture) were done; the class on 10.09 did a picture-matching worksheet.

### 2. TAUGHT IN CLASS
- Opening: introductions in English (why you learn German), class rules (camera on), the three books (Kursbuch, Übungsbuch, Glossar), "the Kursbuch has 12 chapters" [04:00]-[28:00] (not lesson content).
- **Deutsch vs Deutschland**: the language is Deutsch, the country Deutschland; "I am learning German" not "Germany" [20:00].
- Pronunciation while reading: **Hallo** with "ah" not "hello" [28:00]; **Guten Morgen, Guten Tag, Guten Abend** (g always hard, a = "ah", the stress on Abend) [32:00]; **Gute Nacht** only as a farewell: at 21:00 or even midnight you still greet with Guten Abend [36:00]; **ch** after a/o/u is a harsh "kh" (Nacht), after i/e it is soft (nicht) [32:00]-[36:00]; **Auf Wiedersehen** with ie = "ee" and ei = "eye" [40:00]; **Tschüss** (tsch) and **Ciao** [44:00]. Each learner reads the whole list aloud [44:00]-[52:00]. Mistake corrected: "Guten Nacht" -> Gute Nacht [48:00].
- **Wie geht es dir? / Wie geht's?** is fixed and cannot be changed [48:00]-[52:00]. Answers: Danke, es geht mir gut / Mir geht es sehr gut (es and mir may swap) / Danke, gut / sehr gut / schlecht / sehr schlecht; "ganz gut" (quite good) [104:00]; "so lala" is heard from a learner [92:00]. Warning: "Ich bin gut" is not the answer [56:00]. Counter-question for "how are you": **Und dir?** [52:00]; for other questions: **Und du?** [132:00].
- **Names, three ways** [68:00]-[72:00]: Wer bist du? -> Ich bin ...; Wie heißt du? -> Ich heiße ... (ß sounds like "s", heißt); Wie ist dein Name? -> Mein Name ist ...; counter-question Und du?
- Pair practice in breakout rooms, then each pair presents [72:00]-[96:00]. The model dialogue given: Hallo, guten Abend / Wie geht es dir? / Mir geht es gut. Wie geht's? / Mir geht es auch gut, danke / Wie heißt du? Ich heiße ... und du? / Ich bin ... / Tschüss, auf Wiedersehen.
- Short classroom words: Alles klar? [64:00]; Entschuldigung, wie heißt du? (in the KB/UB dialogue) [104:00].
- End: every learner says "Ich heiße ..." [136:00].

### 3. MUST COVER (Day 1 owns it)
From class: A3 rows 1-5. Keep these as the whole of Day 1: greeting by time of day with Gute Nacht as farewell only; how are you with the five-step answer scale; three name questions and answers; Und du/Und dir; Deutsch vs Deutschland; the first pronunciation facts (a, g, ch, ie/ei, ß = s sound, tsch).
GAP items (book ch.1, assigned here):
- **KB pp.8-9, UB p.6 1** (1a-1c): "Deutsch international" - German words that look like words in other languages (die Nudeln, der Koffer, das Handtuch, die Flasche, das Butterbrot, der Kindergarten, die Autobahn, das Würstchen ...). Use as a short warm-up and as the "you already know German" hook; give each word with article.
- **KB p.17 summary box "grüßen / verabschieden"** (Hallo Nina! Hallo Niklas! Guten Tag! Guten Tag, Herr Hansen! Guten Morgen! Guten Abend! | Tschüs! Ciao! Auf Wiedersehen! Gute Nacht!) and **"nach dem Befinden fragen"** (Wie geht es Ihnen? / Wie geht's dir? / Wie geht's? | Danke, sehr gut. Danke, gut. Ganz gut. Und Ihnen? / Und dir?). Teach the du forms here; Ihnen as the formal twin is Day 2.
- **UB p.7 2d, 3a** (answer scale with smileys; match greeting to scene). Write the exercises yourself.
- Mention (do not teach) that in Austria/Switzerland people say Grüß Gott / Grüezi, as one line, then link "see Tag 8" (KB p.30 box "Gut gesagt: grüßen" owns it with Moin).
- Times for Guten Morgen/Tag/Abend are a rule of thumb (roughly until 10-11, until 17-18, after 18); the class gave no hours. Say "roughly" and never as an exam fact.

### 4. DO NOT TEACH HERE
- Alphabet, spelling, the 4 trap letters, sound pairs, Du/Sie rules, formal question set (Day 2, A3 rows 6-7). Only mention "Ihnen" as "the formal word you will meet tomorrow".
- Conjugation tables of heißen/sein/kommen (Day 5). On Day 1 show **ich heiße / du heißt / ich bin / du bist** as ready-made phrase pairs. No "regular endings" table, no -t after ß rule (Day 5), no "sein is not a helping verb" (Day 5).
- Numbers, countries, language names, Moin (Day 8), classroom phrases list (Day 4), mein/meine Kollege (Day 13+ possessives).
- Re-cut: remove from d01.ts the alphabet and sound tables, ß/ss and umlaut rules (Days 2-3), spelling section (Day 2), the Du/Sie section, "Die sechs Fragen", "heißen/sein" tables, sein warnings, "zu Hause/nach Hause" (Day 5), "Das ist mein Kollege", "Im Kurs - wichtige Sätze" (Day 4), vocab such as traurig, verheiratet, ledig, essen, buchstabieren, Dialog, Person (not taught).

### 5. Exam relevance
- **Sprechen Teil 1** opens with greeting + Name; **Hören Teil 1/3** often starts with a greeting; Lesen Teil 1 (a letter) uses Hallo/Liebe ... / Gruß formulas (Anrede, Gruß are needed in Schreiben Teil 2 - see later days).
- Typical task: understand a short exchange and pick the right greeting or name.

### 6. Visual opportunities
- A **day strip** (sun rising -> noon sun -> sunset -> moon): Guten Morgen, Guten Tag, Guten Abend arranged on it with fuzzy boundaries, and Gute Nacht pinned to a "going to bed" icon outside the strip as a farewell.
- A **formal vs informal ladder**: Hallo / Hi / Tschüss / Ciao on one rung, Guten Tag / Auf Wiedersehen on the other.
- **Sound cards**: ei = "eye", ie = "ee" with an arrow to the second letter; ch card with two faces (Nacht harsh vs nicht soft).
- A five-step **smiley scale** for the answers to "Wie geht's?" (Sehr gut ... Sehr schlecht) matching KB p.10/17.
- A two-speaker **dialogue comic** (Hallo / Wie geht's / Wie heißt du / Tschüss) with colour-coded question and answer bubbles.

---

## Day 2 - Du or Sie, the alphabet, spelling (class 09.09)

### 1. Class and book pages
- KB p.11 3a (Guten Tag! Auf Wiedersehen!; Nina Weber / Oliver Hansen / Frau Kowalski, formal dialogues A-C) read with audio [36:00]-[44:00].
- Worksheet (not in the scans): formal dialogue Lydia Richter / Mario Martinez with a box of words (heißen, kommen, Spanien, Wien, Madrid ...) [44:00]-[60:00].
- KB p.13 7a (alphabet) = the alphabet part [84:00]-[96:00]. Handouts Greetings.pdf (alphabet table and sound combinations) and Du oder Sie.pdf.
- Reading practice [108:00]-[124:00]: instructions of a listening exam ("Du hörst jetzt ... Markiere R für richtig und F für falsch"), classified ads and a text by a pupil. **Unclear source (exam-practice sheet), used for pronunciation only, the teacher said meaning does not matter.**

### 2. TAUGHT IN CLASS
- Revision questions [08:00]-[12:00].
- **Two kinds of "you" in Hindi (tu/aap)** -> du and Sie [12:00]-[20:00]. **du**: family and friends (also mother, father, grandmother), children up to about five with anyone; **Sie**: adults you do not know, people in authority (policeman, teacher, store clerk, principal), written with a capital S even in the middle of a sentence; colleagues: Sie unless offered du, du is allowed in many offices; when unsure use Sie; du = one person you face; do not use du with strangers [20:00]-[24:00]. Quiz: mom du, math teacher Sie, cashier Sie, cousins du, principal Sie, Frau X Sie, grandma du.
- **Formal question set** [24:00]-[32:00]: Wie geht es Ihnen? (answer unchanged); Wie heißen Sie? / Wie ist Ihr Name? / Wer sind Sie?; Wo wohnen Sie? -> Ich wohne in ...; Woher kommen Sie? -> Ich komme aus ... (India: Indien; from a state vs from a country).
- Countries read aloud for pronunciation (China with soft ch, Japan, Frankreich, Österreich, Schweiz, Niederlande) [32:00]. (Systematic country list is Day 3.)
- KB p.11 3a dialogues read in turns [36:00]-[44:00] (Frau Weber, Herr Hansen, "Auf Wiedersehen, Herr Hansen").
- Breakout: complete the Richter/Martinez formal dialogue ("Woher kommen Sie, Herr Martinez?" -> "Ich komme aus Spanien") and write your own formal dialogue, then present [44:00]-[84:00]. Teacher: speak with emotion ("Echt?").
- **Alphabet** [84:00]-[92:00]: letters aloud; the changes: a = ah, e = eh, j = "yot", **v = f** (Volkswagen = Volk + Wagen), **w = v**, z = "tsett", y = Ypsilon; names Anja/Sonja show j = y.
- **Spelling**: "Bitte, buchstabieren Sie Ihren Namen" and each learner spells their name with German letter names [92:00]-[100:00]; also Deutsch = D-E-U-T-S-C-H.
- **Sound rules**: -tion = "tsion" (Situation, Information) [96:00]; "computer": o is o, not English [100:00]; **-ig at the end = "ich"** [112:00]; long words are compounds: read them in parts (Deutsch + Unterricht = Deutschunterricht) [112:00]; ö and ü differ [108:00]. **das Gift = poison** [104:00]. Handynummer is mentioned [100:00].
- Closing: practise daily, listen to German audio (YouTube) [132:00].

### 3. MUST COVER (Day 2 owns it)
From class: A3 rows 6 and 7. Content list for the writer:
- **Du / ihr / Sie** decision (A3 row 6): who is addressed; Sie capital; Sie = one or many people; kids under 6 du always, children to about 14 usually du (handout Du oder Sie.pdf); Herr/Frau + surname = Sie; colleagues either.
- The **formal question set** with the informal twins side by side: Wie geht es dir/Ihnen?, Wie heißt du/heißen Sie?, Wie ist dein/Ihr Name?, Wer bist du/sind Sie?, Woher kommst du/kommen Sie?, Wo wohnst du/wohnen Sie? with the shared answers (handout Du oder Sie.pdf pages 3-4). Show verb forms as chunks, not a conjugation table (Day 5).
- **Formal self-introduction**: Guten Tag, mein Name ist ... / Woher kommen Sie? / Auf Wiedersehen, Frau Weber (title + surname).
- **Alphabet** with German letter names, the four trap letters, spelling aloud (Buchstabieren Sie bitte Ihren Namen / Wie schreibt man das?), sound pairs (ei/ie/eu/äu/au/ch/sch/st-sp/s+vowel/tsch/-tion/-ig) from the handout and KB p.13 7a.
- GAP items (book ch.1):
  - **KB p.12 4a-c and 5a-b** (Woher kommen Sie? Selina Lang listening; the Aussagesatz/W-Frage box; interviews "formell und informell"): use as the dialogue and exercise material; the box shows heißen/kommen/wohnen forms - present them only as phrases (A3 row 17).
  - **KB p.13 7a** (alphabet rap, read aloud), **UB p.13 7a-b** (alphabet, spell the names of four people you hear), **7d** (spell star names), and the spelling part of **UB p.13 7e** (name spelling only; the e-mail question is Day 4).
  - **UB p.8 3b-e** and **UB p.9 4a-b** (assign dialogues to pictures; decide formal Sie vs informal du; match questions and answers; Wer? Wie? Wo? Woher? gaps). The class did these on Day 3, but the topic belongs here: use the same exercise types here and link from Day 3. (UB p.9 4c-d, the ich/du/er/sie/Sie gaps and the heißen/wohnen/kommen/sein table, are Day 5.)
  - Note for exam: Sprechen Teil 1 ends with the examiner's "Buchstabieren Sie Ihren Namen" (UB p.44 box).

### 4. DO NOT TEACH HERE
- Numbers incl. phone numbers and e-mail (Day 4), country list and language names (Day 3), ß/ss rule and umlaut meaning (Day 3), sein/haben, conjugation tables (Day 5), W-Frage formula (Day 6), gender/plural (Days 6-7).
- Re-cut: d01.ts sections 1 (alphabet), 2 (spelling), 5 (Du oder Sie), 7 (die sechs Fragen), the capital-S rule, and the ß table move here; the ß rule itself goes to Day 3. d02.ts only keeps the formal-introduction block here ("Sich formell vorstellen").
- Do not reuse the "Kleinkinder under 6" line as exam fact; it is the teacher's handout rule.

### 5. Exam relevance
- **Sprechen Teil 1**: examiners say "Sie"; you give Name, Land, Wohnort; spell the name; **Hören Teil 1** (a name is spelled on tape); **Schreiben Teil 1** (form: Vorname, Nachname spelling must be exact).
- Typical task: write letters you hear; choose du or Sie.

### 6. Visual opportunities
- **Who do I address?** a ladder/decision card: baby/child/family/friends -> du; several friends -> ihr; stranger/teacher/police/shop -> Sie; colleague -> either; with the capital S highlighted.
- **Alphabet strip** (26 letters + ä ö ü ß) with the four trap letters V, W, J, Z colour-highlighted and a speaker label under each.
- **Sound-pair cards** (ei/ie, eu/äu, au, ch two ways, sch, st/sp at start, -tion, -ig).
- **Name tiles**: a spelled name as separate letter tiles (K-R-I-S-H) with "Wie schreibt man das?" bubble.
- **Formal introduction card**: Frau Weber / Herr Hansen name tags with the exchange as speech bubbles.

---

## Day 3 - Countries and languages (class 10.09)

### 1. Class and book pages
- UB p.14 8c (Aus der / Aus / Aus dem / Aus den) [60:00]-[68:00]; UB p.11 5f (chat Aylin, Sarah, Nils: wo? woher?) [64:00]-[76:00]; UB p.10 5a (listen: Mein Name ist Emma Reiter ... answer the three questions) [76:00]-[84:00]; UB p.9 4a (match questions and answers: Woher kommen Sie? - Aus Brasilien. Und du?) and UB p.10 4e (choose the correct verb form) [84:00]-[96:00]; UB p.8 3d, 3e (fill Wie heißen Sie / Wer sind Sie / meine Kollegin Frau Hernandez) [96:00]-[112:00].
- Worksheets (not in scans): complete "X kommt aus ... Er/Sie spricht ..." (Steffi/Deutschland, Kiril/Bulgarien, Lars/Dänemark, Aya/Japan, Marina/Russland, Franziska/Italien ...) [44:00]-[64:00]; match greeting to picture (formal in a shop, informal between friends) [128:00]-[136:00]; Kahoot quiz [112:00]-[128:00]. Handout BASIC NOTES, Sprache und Länder.pdf distributed [28:00].

### 2. TAUGHT IN CLASS
- Revision [12:00]-[28:00]: **umlaut sounds** (ä like e, ö, ü) [16:00]; **wie** is also the word for name, address, number (Wie ist deine Telefonnummer?) [16:00]; the earlier question set again.
- **Countries**: Frankreich, Japan, China, Indien, Pakistan, Spanien, Russland, Türkei, Italien, Ungarn, Bulgarien, Schweiz, Polen, Dänemark, Niederlande, Thailand, Deutschland; Europa, Asien; "Land" = country, Sprache = language [28:00]-[32:00].
- **Languages**: Russisch, Japanisch, Französisch, Türkisch, Italienisch, Ungarisch, Englisch, Spanisch, Bulgarisch, Deutsch, Chinesisch, Polnisch, Dänisch, Arabisch, Hindi; Switzerland has three (Deutsch, Französisch, Italienisch) [32:00].
- **Welche Sprachen sprichst du? / sprechen Sie?** (sprichst: i-sound; Sprache vs sprechen) -> Ich spreche Hindi, Englisch, Deutsch und Punjabi; Dialekt [32:00]-[44:00].
- Worksheet country/language [44:00]-[64:00].
- **aus + article** [60:00]-[68:00]: aus der Türkei / Schweiz / Ukraine / Slowakei; aus dem Irak / Iran / Libanon / Jemen; aus den USA / Niederlanden; every other country takes no article; drill with Japan, China, Indien, Spanien, Mexiko, Kolumbien, Ägypten, Australien, Bangladesch, Sri Lanka, Neuseeland = no article; Irak/USA = article.
- UB p.11 5f, UB p.10 5a, UB 4a/4e, UB p.8 3d-e as listed above; teacher: a question in Sie form is not always answered in Sie, but in these tasks pick the option with "und Sie" [88:00]; "Wie heißt du? - Ich heiße/Ich bin/Mein Name ist" all fine.
- Kahoot (Sie vs du, richtig, articles) and the greeting-picture worksheet; final reminder: the Q/A forms are fixed, memorise them [128:00]-[140:00].
- Announced: speaking test tomorrow.

### 3. MUST COVER (Day 3 owns it)
From class: A3 rows 8, 9, 10. Content list:
- **Country and language names** in one table (Land -> Sprache) with the pattern "Land + -isch" and the exceptions (Deutschland -> Deutsch, Frankreich -> Französisch, Niederlande -> Niederländisch, Thailand -> Thai, Brasilien -> Portugiesisch, USA/Großbritannien -> Englisch; Arabisch for several countries, Indien -> Hindi/Englisch). Use the 16 countries taught plus those in KB p.14-15 (Österreich, Brasilien, Algerien, Mexiko, USA, Portugal, Griechenland ...).
- **aus + country with article** (three groups + rule "all others no article"), each country given with its article (die Türkei, die Schweiz, die Ukraine, die Slowakei, der Irak, der Iran, der Libanon, der Jemen, die USA, die Niederlande) - exact list as taught.
- **Wo? vs Woher?** (in + town vs aus + country/town) and **Welche Sprachen sprichst du / sprechen Sie?** (with "sprichst" as a phrase, vowel-change group = Day 5).
- **Umlaut sounds and ß rule** (handout BASIC NOTES): ä = e, ö, ü; Mutter/Mütter; ae/oe/ue spelling; **ß after a long vowel or diphthong with a voiceless s** (heißen, Straße, groß), ss after a short vowel (Wasser, essen) - see R9, do not teach "ie/ei always ß".
- GAP items (book ch.1):
  - **KB pp.14-15 8a-e**: the six people (Olivia Miller, Gabriel Santos, Alessia Conti, Boris Walder, Saki Tanaka, Kateb Brahim): table "kommt aus / wohnt in / spricht / lernt", complete Land or Sprache, "Woher kommst du? aus ... aber aus der Schweiz, der Türkei, der Ukraine, den USA" box (p.15), write a short text about yourself (Name | Land | Stadt | Sprachen). Use as reading texts; show er/sie in texts (KB p.17 "Personalpronomen in Texten": Das ist Frau Lang. Sie kommt aus Deutschland. - one-line explanation er = Mann, sie = Frau; full pronoun set Day 5).
  - **UB p.13 8a** (map: countries 1-10), **UB p.14 8b-f** (languages for countries, Aus der/Aus/Aus dem/Aus den, five sentences, listening Lorena Steiner).
  - UB p.10 5e (put words into Aussagesatz / W-Frage columns): do as sentence building from fixed phrases, the formula itself is Day 6.

### 4. DO NOT TEACH HERE
- Numbers (Day 4), verb endings and sein/haben (Day 5), W-Frage formula (Day 6), gender (Day 6), plural (Day 7).
- Re-cut: d02.ts sections 4, 5 (aus/Länder/Sprachen, sprechen as a phrase) and 7 (KB persons) belong here; remove from d02.ts sections 1-3 (verbs, spelling changes, one present tense, W-Fragen, position 2) which belong to Days 5-6; "Sich formell vorstellen" goes to Day 2.

### 5. Exam relevance
- **Sprechen Teil 1** (Land, Wohnort, Sprachen cards), **Hören Teil 1** (Woher? vs Wo? trap), **Schreiben Teil 1** (form lines Land/Wohnort); Lesen Teil 1 (letter mentioning a city/country).
- Typical task: choose the correct answer for "Woher kommt ...?" with answers differing only in aus/in or the language.

### 6. Visual opportunities
- **Map of Germany-Austria-Switzerland + India** with speech bubbles of the languages, Switzerland labelled with three languages.
- **Country-article groups**: 4 colour boxes (no article / der -> dem / die -> der / plural -> den) with the country names inside.
- **Land -> Sprache table** with the "-isch" suffix highlighted and the exceptions circled.
- **Wo? / Woher?** two diagrams: a map pin (in Hamburg) and an arrow leaving a country (aus Indien).

---

## Day 4 - Numbers, phone, age, introducing yourself (class 11.09)

### 1. Class and book pages
- UB p.12 6c-d (listen and write numbers; Welche Nummer hören Sie? messages of Leo Mayer/Pia/Frau Schmidt/Frau Eckert) [80:00]-[92:00]; UB p.23 7e (numbers 984, 8.349, 7.532, 611, 52.351, 30.290, 1.024, 2.015, ...) [56:00]-[72:00]. KB p.13 6a (Zahlen 0-20) and KB p.27 box "Zahlen ab 20" are the book home of the content.
- Not in scans: R/F listening "Boris Walder" and "Hanover" [100:00]-[108:00]; fill-in question words [108:00]-[112:00]; reorder sentences (Sasaki: Land Japan, Stadt Berlin; Kateb Brahim: Paris, Arabisch, Französisch) [112:00]-[120:00]; telephone number listening [120:00]-[128:00]; three short profiles (Anna Thalmann ...) [128:00]-[136:00]; number-pattern puzzles [136:00]-[144:00] (a thinking game, not lesson).

### 2. TAUGHT IN CLASS
- **Stellen Sie sich kurz vor**: four sentences - Ich heiße/bin ..., Ich komme aus ..., Ich wohne in ..., Ich spreche ... ; each learner [20:00]-[32:00]. Teacher's clarification: sprichst (du) vs sprechen (Sie) [28:00]; "Vielen Dank".
- **Zahlen** [32:00]-[40:00]: null ... zwölf; 13-19 = digit + zehn (sechzehn, siebzehn spelled without s/-en); zwanzig; **21 = einundzwanzig, units before tens** (writing/reading); 30 dreißig, 40 vierzig ... 90 neunzig, hundert; learners read 21-100 in turns [44:00]-[52:00]; hundreds: 507 = fünfhundertsieben, 324, 543, 213; thousands: 3.789 = dreitausendsiebenhundertneunundachtzig; **dot = thousands, comma = decimal** and cents; Euro; 13.880 Euro [52:00]-[56:00].
- Breakout: write the number words of UB p.23 7e [56:00]-[72:00]; the answers are read out.
- **Wie alt bist du? / Wie alt sind Sie? -> Ich bin ... (Jahre alt optional)** [72:00]. **Wie ist deine/Ihre Telefonnummer?**: said digit by digit, with doppel for repeated digits, or in groups of two or three [72:00]-[80:00].
- UB p.12 6c-d listening [80:00]-[92:00].
- **Classroom phrases** [92:00]-[96:00]: Entschuldigung; Noch einmal, bitte; Das verstehe ich nicht; Bitte, ein bisschen langsamer; Alles klar?; teacher is addressed as Frau + surname.
- Exam-style listening and reading as listed above; teacher notes that the audio speed is the exam speed (A1) [124:00].
- Study advice: read the day's words daily, do not memorise lists blindly [140:00]-[148:00].

### 3. MUST COVER (Day 4 owns it)
From class: A3 rows 11-15. Content list:
- Numbers **0-20, 21-99, hundreds, thousands**, dot/comma, Euro and Cent as prices (leave reading prices like 1,09 for Day 10), **age**, **Telefon-/Handynummer** digit by digit, doppel, **Hausnummer, Postleitzahl** as vocabulary (the exam form and UB p.44 4 "Wie ist die Hausnummer?" 207/117/107).
- The **four-sentence self-introduction** = Sprechen Teil 1 core (Name, Land, Wohnort, Sprachen; add Alter now).
- **Classroom phrases** (row 15).
- GAP items:
  - **E-Mail-Adresse sagen und schreiben** (ch.1 Strategie): KB p.13 7b-c (listen and note e-mail addresses; vary the dialogue) and the box "E-Mail-Adresse sagen" (@ = at, . = Punkt, _ = Unterstrich, - = Bindestrich), UB p.13 7e (ask for e-mail address and surname). Not taught in class - add here, combined with spelling (Day 2).
  - **KB p.13 6a-c** (numbers, Handynummer notation, ask a partner), **UB p.12 6a-e** (numbers, write, listen, ask), **UB p.22 7b / UB p.23 7c-e** and the **KB p.27 box "Zahlen ab 20"**.
  - **Years and decimals**: KB p.36 12a (25, 1969-1972, 375, 1901, 3,5, 137, 1792) - optional extension; decimals 3,5 = drei Komma fünf.
  - **Plattform 1 UB pp.42-45**: Prüfungstraining Hören Teil 1 (UB p.43 items 0-3, p.44 4-6) and **Sprechen Teil 1** (UB p.45 5a-b: Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby? with frames like "Mein Name ist ...", "Ich bin ... Jahre alt", "Ich komme aus ...", "Ich wohne in ...", "Ich spreche ...", "Ich bin ... von Beruf", "Meine Hobbys sind ...") - use as the exam hook; Beruf/Hobby words come on Days 5 and 7.

### 4. DO NOT TEACH HERE
- Millionen / Milliarden (Day 5 [12:00]), verb endings (Day 5), Uhrzeit (Day 12) - use "Uhr" nowhere except as a word to avoid, W-Frage formula, gender.
- Re-cut: d03.ts = this Day, but delete "Numbers above 20 come on Tag 7", the "Große Zahlen" Million/70.000 paragraph (Day 5), and the "Polite requests = infinitive + Sie" tip (Day 9 owns the imperative; here keep only the chunks Buchstabieren Sie bitte / Noch einmal, bitte). d07.ts section 1-2 (numbers from 20) moves here. Also add d01.ts section 8 (Im Kurs - wichtige Sätze).
- Do not use mein/meine as a rule (d03 "deine/Ihre with feminine noun" is a possessive rule that belongs to Day 13+); present only fixed questions "Wie ist deine/Ihre Telefonnummer / E-Mail-Adresse?" as phrases.

### 5. Exam relevance
- **Hören Teil 1** (prices, room numbers, times) and **Teil 3** (phone numbers: model test 11833 / 11883 / 12833) - numbers differ by one digit; **Schreiben Teil 1** (form with phone, house number, PLZ); **Sprechen Teil 1** (Alter, spelling name, give phone number).
- Typical task: choose the right number from three look-alike options; write digits you hear.

### 6. Visual opportunities
- **Number tiles** 0-12 (irregular, each tile coloured) and 13-19 built from "digit + zehn" with the two spelling changes (sech-, sieb-) highlighted.
- **Units-before-tens flip**: 21 shown as 1 + und + 20 with an arrow reversing the English order.
- **Price tag / number tag** comparing German 3.789,50 with English 3,789.50.
- **Phone number bar** broken into chunks, "doppel" brackets over repeated digits.
- **Self-introduction card**: the four lines with an icon each (Name, Land, Wohnort, Sprachen).

---

## Day 5 - Verbs, sentences and hobbies (class 12.09)

### 1. Class and book pages
- KB p.18-19 (opener: fotografieren, singen, kochen, schwimmen, reisen, tanzen, joggen, Musik hören, ins Kino gehen, lesen; 1 listening Emily/Boris/Eva; 2a-b); KB p.20 3a-d (Meine Hobbys, meine Freunde); KB p.17 and KB p.27 grammar boxes. UB p.18-20 (class-used: 3g at [128:00]-[136:00]).
- Homework: UB p.18 1a, UB p.19 3a-d, UB p.20 3e-f (page 19 complete; 3g done in class). Handouts sent in class: Regelmäßige Verben.pdf [72:00] and Sein/haben/Irregular verbs [104:00].

### 2. TAUGHT IN CLASS
- Millionen (ein... zwei Millionen) [12:00]-[16:00].
- **Verbs**: infinitive always ends in -en (kommen, wohnen, gehen, lernen, suchen, singen); **conjugation** by subject; English has only -s for he/she/it [16:00]-[24:00].
- **Pronouns** [20:00]-[32:00]: ich, du (informal you), er/sie/es, Sie (formal you; capital S always), wir, ihr (you all, informal), sie (they). "There are four kinds of sie/Sie": she, they, formal singular you, formal plural you; a name = er/sie/es, two names = sie (they); wer = third person.
- **Stem + endings**: remove -en; -e, -st, -t, -en, -t, -en [24:00]-[44:00]; written tables for wohnen, gehen, lernen, singen, suchen.
- **Spelling rules** [44:00]-[48:00]: stem in ß/z/s/x -> du only -t (heißen, tanzen, faxen); stem in t/d -> -est/-et (arbeiten, reden); atmen/regnen e-insertion mentioned on Day 6 [112:00].
- **Irregular verbs** (change only du and er/sie/es) [48:00]-[60:00]: a->ä (fahren, schlafen), e->i (essen with the s-stem rule: du isst; geben; sprechen), e->ie (lesen, empfehlen); handout lists more.
- **Sentence structure** [60:00]-[72:00]: subject + verb + object/adjective; **verb always in position 2**, only the subject conjugates it, an object may come first but the verb stays second.
- **One present tense** [64:00]-[72:00], again [96:00]-[104:00]: Ich gehe = I go = I am going; never "ich bin gehe". **sein** (bin, bist, ist, seid, sind) and **haben** (habe/"hab", hast, hat, habt, haben); sein/haben are used only when no -ing verb follows [96:00]-[104:00]; **Ich bin zu Hause / Ich gehe nach Hause**.
- Hobbies with **gern / nicht so gern** (adverb, not a verb): Ich singe nicht so gern; Sachin singt gern; Wir fotografieren gern; Sita und Geeta kochen gern; Ich reise gern; Wir tanzen nicht so gern; Maya joggt nicht so gern; Ich höre gern Musik / Musik nicht so gern; Er geht gern ins Kino; Ihr lest gern [112:00]-[128:00]. Order of gern and the object is free; the verb stays second.
- Practice: UB p.20 3g (sentence building). Corrections: **Boris kocht nicht gern** (not "Boris nicht gern kocht"); **Eva spricht gut Deutsch**; Morgen (morning) vs morgen (tomorrow) [132:00]-[136:00]. The name is kept as subject, not turned into a pronoun.
- Homework: UB p.18 1a; p.19 3a-d; p.20 3e-f [136:00].

### 3. MUST COVER (Day 5 owns it)
From class: A3 rows 16-24. Content list:
- **Millionen**; verb = stem + ending; the full pronoun set (four meanings of sie/Sie; names as subject); endings table; spelling changes (-t after ß/s/z/x, -est/-et after t/d, atmen/regnen); irregular vowel changes; sentence order and position 2; one present tense; **sein, haben** and **zu Hause / nach Hause**; **gern**, hobby verbs; **nouns are capitalised; Morgen/morgen**.
- Vocabulary from the two handouts: verheiratet, ledig, Kinder, Bruder, Ingenieur, Student (Hilfsverben handout examples: "Ich bin verheiratet / Sie sind ledig / Arjun hat 2 Kinder / Jickson hat einen Bruder").
- GAP items:
  - **KB p.18 1** (Hören: Was machen die Leute gern? Emily schwimmen, Boris, Eva), **KB p.19 2a-b** (rate your hobbies with three smileys, partner questions "Hörst du gern Musik? - Ja, sehr gern. Und du?"), **KB p.20 3b-d** (ending exercises, groups practise "ihr singt"), **KB p.27 verb table** (kochen, arbeiten, lesen, sprechen, sein, haben) and **KB p.17**. Questions with gern are Day 6.
  - **KB pp.160-161 irregular verb list** (reference, not to be memorised).
  - UB p.18 1b-2b, UB p.19 3a-d (match; a or b; cross the right form; endings), UB p.20 3e-g.

### 4. DO NOT TEACH HERE
- W-Frage list and formula, Ja/Nein-Frage, "wer + 3rd person" (Day 6); der/die/das (Day 6); plural (Day 7); days/months (Day 6); numbers (Day 4); possessives and modal verbs (Day 13+).
- Re-cut: d02.ts sections 1-3 (verbs, spelling, one present tense, W-Fragen, position 2) -> here (W-Fragen -> Day 6). d04.ts sections 1-2, 4-6 (gern, word order, spelling table, irregular verbs, hobbies) -> here; its section 3 (Ja/Nein-Fragen) -> Day 6. d07.ts section 3 (haben und sein) -> here. d01.ts "heißen" and "sein" tables, sein warnings and "essen" vocab -> here.
- Remove the repeats (A4): the sein-no-helper rule, the ß and -e- tables appear **once**, here.

### 5. Exam relevance
- **Sprechen Teil 1** (Hobby, Wohnort: ready sentences with correct endings), **Sprechen Teil 2** (answer questions), **Schreiben Teil 2** (short message needs the right verb forms), **Lesen Teil 1** (understanding who does what).
- Typical task: choose the right verb form; read a short text about hobbies and judge statements.

### 6. Visual opportunities
- **Verb-ending card**: stem highlighted in one colour, six endings in another; same card for kommen/wohnen/lernen.
- **Vowel-change "boot" diagram**: the six forms in a table, with only the du and er/sie/es cells shaded and the changed vowel in red (fahren/essen/lesen).
- **Four sie/Sie badges**: sie (she), sie (they), Sie (you, one), Sie (you, many) with example verb endings.
- **Verb position-2 strips**: sentences as coloured blocks (position 1 / verb / rest) showing the verb stay second when a time word or object comes first.
- **Hobby icon grid**: the ten Kursbuch hobby verbs, each with its gern/nicht so gern example.

---

## Day 6 - Question words, Ja/Nein-Fragen, calendar words, der/die/das (class 16.09)

### 1. Class and book pages
- Homework check: UB p.18 1a, p.19 3a-d, p.20 3e-f [04:00]-[24:00]. KB p.21 4a (Wochentage) and p.35 10a (Monate und Jahreszeiten) referenced [28:00]. Homework: KB p.22 6a (the 12 words with articles: Auto, Buch, Geld, Straße, Glas, Stift, Computer, Medikament, Rechnung, Schlüssel, Spritze, Tablette) [132:00]-[136:00].
- A document "all questions and sentence framing" (8 pages, name unclear) read in class [100:00]. Handout BASIC NOTES (genders, spelling).

### 2. TAUGHT IN CLASS
- Homework review (verb forms, gern, "Sie" in an exam question capitalised, wer + er-form) [04:00]-[24:00]. Rule: **in German forms we cross (kreuzen) the correct answer, never tick** [12:00].
- **Wochentage** (Montag ... Freitag), **Wochenende** (Samstag, Sonntag), **Jahreszeiten** (Frühling, Sommer, Herbst, Winter), **Monate** with the German sorting (Mar-May spring, Jun-Aug summer, Sep-Nov autumn, Dec-Feb winter); no rainy season in Germany [24:00]-[32:00]; KB p.21 and p.35 hold them.
- **Sentence recap S-V-O** [28:00]; **questions with and without question word** [28:00]-[32:00]: question words was, wie, wo, wann, warum, welch-, wer, woher, wie lange, wie viele, wie oft (two-word words count as one); **formula Fragewort + Verb (conjugated) + Subjekt + Extra** [32:00]-[52:00]; **wer = third person singular** ("Wer singt gern?"); practice: Wo geht Harsh am Sonntag hin?, Wann spielst du Fußball?, Wie oft joggst du?, Warum lernen sie Deutsch?, Was kocht Maria am Montag? (names stay subject behind the verb, capital letters).
- **Ja-/Nein-Frage**: verb first, subject second, answer ja/nein + full sentence; a W-question is not answered with ja/nein [52:00]-[64:00]; partner questions with hobbies ("Tanzt du gern? / Gehst du gern ins Kino? / Joggst du gern?") [64:00]-[76:00]; translation task [76:00]-[100:00] (Spielst du Tennis? Wann ist dein Geburtstag? Wer ist sie? Was kocht sie? Joggen wir am Montag? Poonam und Ramesh sind traurig. Wir haben ein Auto.).
- **Genders** [112:00]-[136:00]: every noun is der/die/das even things; learn nouns with article; pronoun er/sie/es follows the article; hints: -chen -lein -ment -um -o -> das; -ung -heit -keit -schaft -ion -ität -ei -ie -anz -enz (and -e) -> die (a tendency "70-80%" for the list at [128:00]); -ist -ling -ismus -or -ant -> der; seasons/months/days always der; plural always die. Examples: das Mädchen, das Bäumchen, das Dokument, das Büro, die Zeitung, die Freiheit, der Schmetterling, der Tourist. Homework: KB p.22 6a with articles.
- Exam info: Goethe and telc are paper-based and similar; difficulty and format the same [136:00].

### 3. MUST COVER (Day 6 owns it)
From class: A3 rows 25-29. Content list:
- Calendar vocabulary (days, Wochenende, seasons, months with article der).
- **Question words** (all eleven listed) and the **four-block formula**; wer + er-form; **Ja/Nein-Frage**; the "do not answer a W-question with ja/nein" rule.
- **Gender**: der/die/das, the ending signals with honest percentages (only -ung/-heit/-keit/-schaft/-ion/-ität are close to 100%; the others "tendency"), the 12 words of KB p.22 6a with articles, "learn with article", er/sie/es for things; colour code **der = blau, das = grün, die = rot** (KB p.24 box "Merken Sie sich die Artikel mit Farben").
- GAP items:
  - **Satzmelodie** (ch.2 Aussprache; not taught): KB p.21 4c-5a (Ja/Nein-Frage and W-Frage/statement melody; Gehen wir ins Kino? ↗ / Wann gehen wir? ↘; the box "Gut gesagt: Nein! Nee/Nö/Na"), UB p.21 5c-e.
  - **KB p.21 4a-b** (Wochentage in your language, Arbeitstage vs Wochenende per UB p.20 4a-b) and **KB p.24 10a-b, 11a-b** (Strategie "Artikel lernen": dictionary entries show article and plural; Artikelbild; own Artikelbild), **UB p.25 10, 11a-c** (note: 11a words are Day 7), **UB p.20 4a-b**.
  - **KB p.35 10a-d** (Monate und Jahreszeiten in D-A-CH: months in German and in your language, which season do the photos show; what do people do when) and **UB p.38 10a-c** (word search; forum text; note "In A heißt der Januar auch Jänner").
  - KB p.27 boxes "Ja-/Nein-Frage" and "bestimmter Artikel".

### 4. DO NOT TEACH HERE
- Plural patterns (Day 7), ein/eine (Day 8), kein/nicht (Day 9), am/im/um as a rule (A3 rows 35, 49): use only the one-line "am Montag, im Sommer" as a pointer; verbs (Day 5); sich verabreden (Day 7); Termin/Verabredung with einen/eine (Akkusativ = Day 11).
- Re-cut: d05.ts sections 1-4 (article habit, capital letters except the noun-capital row owned by Day 5, genders, ending tables, er/sie/es) -> here; d05.ts sections 5-7 (plural, jobs, compound, word lists) -> Day 7. d06.ts sections 1-3 (days, montags, seasons, months) -> here, but "montags/dienstags", "Haben for days off", "von ... bis" -> Day 7. d04.ts section 3 (Ja/Nein-Fragen, Satzmelodie) and the W-Frage formula from d02.ts section 3 -> here.

### 5. Exam relevance
- **Sprechen Teil 2** (question cards "Wann? Wo? Was?" - you must build a W-Frage or a Ja/Nein-Frage), **Lesen Teil 1/3** (days, Öffnungszeiten), **Hören Teil 1** (weekday in a dialogue), **Schreiben Teil 1** (articles do not matter, spelling of weekdays does).
- Typical task: build the question for a keyword; read a sign with montags-freitags.

### 6. Visual opportunities
- **Week bar**: Montag-Freitag (Arbeitstage) and Samstag/Sonntag (Wochenende) in two colours.
- **Season wheel** with the 12 months placed in their season, "der" in the centre.
- **Formula blocks**: four coloured blocks (Fragewort | Verb | Subjekt | Extra) with a real sentence snapping into them, and the "wer" variant with the subject block missing.
- **Gender ending cards**: three colour-coded decks (blue der, green das, red die) with the endings on one side and examples on the other; a tendency-vs-rule flag.
- **Melody arrows**: ↗ on a Ja/Nein-Frage line, ↘ on a W-Frage line.

---

## Day 7 - Plural, jobs, arranging to meet, a form (class 17.09)

### 1. Class and book pages
- KB p.22 7a (four texts: Amina Mazin, Leon Schöpe, Fabian Höflinger, Magda Donat) read [100:00]-[120:00]; KB p.22-23 6-8 words with articles [16:00]; KB p.21 5a-b (Gehen wir ins Kino? ... role-play with ins Restaurant/Café/Schwimmbad/Stadion/Theater/Museum) [84:00]-[100:00].
- UB p.25 11a (articles for Ärztin, Kino, Tag, Stunde, Schwimmbad, Student, Architekt, Restaurant, Auto, Schule, Taxi, Jahr ...) [16:00]-[48:00]; UB p.24 8a-b (plural) [64:00]-[80:00]. A second word list ("question number six": Name, Stadt, Land, Wort, Text, Hobby, Beruf, Foto, Kino, Restaurant) is **unclear** (could be UB 11 or a worksheet).
- Next class: a spoken test on all of chapter 2 (announced [136:00]).

### 2. TAUGHT IN CLASS
- Words with article and meaning [16:00]: der Arzt, das Zimmer, die Studentin, das Wochenende, der Kurs, das Jahr, der Patient, der Tag, die Stunde, das Krankenhaus, die Woche, das Kino, das Restaurant, der Kilometer, das Seminar, der Krankenpfleger / die Krankenpflegerin; die Arbeit (work) is not a profession.
- Breakout research of article and meaning for words (Kino, Tag, Stunde, Schwimmbad, Architekt, Restaurant, Auto, Schule, Taxi, Hobby, Beruf, Foto ...) [16:00]-[48:00].
- **Plural** [52:00]-[56:00]: no change (der/die Schlüssel, Taxifahrer, Zimmer), -e (Beruf/Berufe, Arzt/Ärzte, Tag/Tage), -s (Kino, Café, Restaurant), -n/-en (Woche, Stunde, Tablette; mostly words ending in -e), -er (+ umlaut) (Wörter, Bücher, Häuser); **in the plural the article is always die**; with no-change nouns read the article and verb.
- Breakout: plural forms with the internet [64:00]-[80:00].
- **Sich verabreden** [84:00]-[100:00]: Gehen wir ins Kino? / Ja, gern. Am Samstag? / Nee, das geht leider nicht. Am Mittwoch? / Ja, super.; own dialogues with other places; learners present; "an diesem Sonntag" [96:00]; long sentences (Gehen wir ins Stadion, um Fußball zu spielen) are too difficult.
- **Four work texts** [100:00]-[120:00]: von ... bis (von Montag bis Freitag), **Ich habe frei** (haben, not sein; Wann hast du frei? -> Ich habe am Sonntag frei), **bei + company** (Ich arbeite bei German House / bei Amazon), Ich arbeite in einem Krankenhaus; numbers in context (24 Stunden, 25.000, 46 Stunden, 68.000, 100 Bücher, 480, 920, 1.250). Jobs: Ich bin Lehrerin / Physiotherapeut / Fullstack-Entwickler (not "Ich bin Arbeiter") [136:00].
- Writing your own work profile [120:00]-[140:00]: Ich bin ..., Ich bin ... Jahre alt, Ich arbeite bei ..., Ich arbeite von ... bis ..., Ich habe ... frei, Ich lerne Deutsch von ... bis ...
- Announcement: speaking test on chapter 2 tomorrow.

### 3. MUST COVER (Day 7 owns it)
From class: A3 rows 30-36 (compound-article rule and the form are GAPs). Content list:
- **Plural patterns and the die rule**; **the Berufe in male/female (-in, umlaut Ä/Köchin)** - no article after sein (Ich bin Lehrerin); **sich verabreden** (suggest/accept/refuse, "leider", ins + place - with a note that places are not all neuter, learn the article); **von ... bis**, **bei** vs **in**, **Ich habe frei**, **am + weekday** (and montags etc. as an optional extra if the writer wants it: not taught in class, it is the app's addition); **compound nouns take the article of the last word** (state it as the app's addition; evidence Krankenhaus, Schwimmbad, Telefonnummer).
- GAP items:
  - **Formular ausfüllen** (Schreiben Teil 1; Landeskunde "Neu im Club"): **KB p.25 12a-b** (match fields Nachname/Vorname/Geburtsdatum/Geburtsort/Adresse/Telefon/Handynummer; Sportclub-Anmeldung form with Vorname, Familienname, weiblich/männlich/keine Angabe, Geburtsdatum, E-Mail, Telefonnummer, Adresse Straße + Hausnummer + Postleitzahl + Wohnort, Schule/Firma, Kurs, Tag), **UB p.26 12a-c** (Welche Wörter passen zu den Fragen?; fill the form from a text; listening). Use the model-test form (books/modellsatz_text.txt, Anmeldung Busfahrt) as the exam pattern: five missing details, Straße then Hausnummer, PLZ then Ort.
  - **KB p.23 8a-c** (find plurals in the texts, mark endings, write Lernkarten with article + plural), **KB p.23 9a-c** (more jobs: Informatiker/in, Ingenieur/in, Lehrer/in, Verkäufer/in, Architekt/in, Friseur/in, Handwerker/in, Elektriker/in, Journalist/in, Mechaniker/in, Erzieher/in, Jurist/in; ask a partner; "Mein Beruf" text), **UB p.22 6, 7a-b**, **UB p.23 7f** (read the four texts and solve tasks), **UB p.24 8a-c, 9a-b**, **UB p.25 10, 11**, **UB p.26 12**, **UB p.27 R1-R3** ("Das kann ich" check-list), KB p.27 boxes (Nomen Singular und Plural; haben/sein conj. is Day 5).
  - KB p.23 7c-d (partner info from texts, present your person) as the speaking task.

### 4. DO NOT TEACH HERE
- Verb endings, haben/sein (Day 5), numbers (Day 4) - the texts use numbers, do not re-teach, link; weekday/month lists (Day 6); definite vs indefinite article (Day 8); kein (Day 9); Akkusativ (Day 11) - "einen Termin / eine Verabredung / keine Zeit" must not be taught as a rule; use only "Ich habe Zeit / Ich habe keine Zeit" as a fixed pair if needed.
- Re-cut: d05.ts sections 5-7 (plural, jobs, compound, word lists) -> here. d06.ts sections 2 (montags, haben frei, von ... bis), 4 (sich verabreden), 5 (plurals of today's nouns) -> here. d07.ts sections 4-7 (jobs, work and free time, four texts, form) -> here, minus the numbers (Day 4) and haben/sein (Day 5) sections; keep its "Kapitel 1-2 in one glance" table out (it lists the old topic order).
- Vocabulary duplicates (list in A4): keep each word on the **earliest Day whose class actually taught it** (e.g. das Kino, das Schwimmbad, das Museum, das Café are hobby/place words of Day 5-7 classes; das Krankenhaus, das Seminar, das Zimmer, der Architekt, der Kilometer, der Krankenpfleger, der Patient, die Studentin, der Kurs come with the Day 7 word list), delete it from the later Day's vocab, and still use it in examples.

### 5. Exam relevance
- **Schreiben Teil 1** (the form - the biggest exam link of this Day), **Lesen Teil 1** (short mail/letter with R/F on days, hours, places), **Sprechen Teil 1** (Beruf, Hobby) and **Teil 2** (Arbeitszeit/Beruf cards), **Hören Teil 1/3** (an appointment, days, prices).
- Typical task: write the five missing pieces of information into a form.

### 6. Visual opportunities
- **Five plural-type cards** (no change, -e ± umlaut, -er + umlaut, -s, -(e)n) each with three nouns; the plural article die in a fixed header.
- **Job cards** male | female with the -in and umlaut changes marked (Arzt -> Ärztin).
- **A filled form** with each field (Vorname ... Telefon) colour-linked to the sentence it comes from.
- **Week timeline** with a work bar "von Montag bis Freitag" and the free days "habe ... frei".
- **Invite/accept/decline flow** (Gehen wir ...? -> Ja, super / Nein, das geht leider nicht + new day).

---

## Day 8 - Places in the city, taxi dialogue, ein or der (class 18.09)

### 1. Class and book pages
- KB p.28 1b (Wörter den Texten zuordnen: der Bahnhof, der Hafen, das Konzerthaus, die Kirche, das Rathaus) [44:00]; KB p.30 2a-b (Die Taxifahrt, Hotel Michel, Alster, Michaeliskirche) [60:00]-[76:00]; KB p.31 4a-c (articles ein, eine, der, die) [120:00]-[128:00].
- UB p.31 2a (taxi to Hotel Weser, Bremen: order Rathaus, Kirche, Museum, Theater, Bahnhof) [76:00]-[88:00] and 2b (complete the dialogue; Theater 110 Jahre alt, Kino am Bahnhof) [88:00]-[104:00]. A third dialogue (München: Hotel Pollinger, Frauenkirche, Englischer Garten, Isar, Maria-Theresia-Straße) [108:00]-[120:00] has **unclear source** (not in KB/UB ch.3 scans).
- Before the chapter: speaking test on chapter 2 [08:00]-[28:00] and a quiz [28:00]-[44:00].

### 2. TAUGHT IN CLASS
- **Speaking test (one by one)**: Wie geht es dir? Und dir (the counter-question to wie geht's is always "und dir"); Wo wohnst du? Woher kommst du? Was ist dein Hobby? Was bist du von Beruf? Wann hast du frei? Was machst du in deiner Freizeit? -> **Ich lese gern** (not "Ich mache lesen") [08:00]-[28:00]; Wie alt bist du? Welche Sprachen sprichst du?
- Quiz on chapter 2 (hobbies, plural, Berufe) [28:00]-[44:00].
- **Hamburg**: a Hafenstadt (Hafen = seaport); KB words Bahnhof, Hafen, Konzerthaus, Kirche, Rathaus; breakout: five more places each - Krankenhaus, Hotel, Theater, Brücke, Fluss, Park, Bus, Markt, Straßenbahn, U-Bahn, S-Bahn, Bibliothek, Flughafen, Kunsthalle, Stadion, Museum, Bank, Kino, Universität, Polizei, Schießstand, Fabrik, Fitnessstudio, Schule [44:00]-[60:00]. **U-Bahn vs S-Bahn vs Straßenbahn** [56:00] (the teacher's remark that the U-Bahn goes "between cities" is wrong; the S-Bahn links suburbs - see R7).
- **Taxi dialogue** (listen, read, translate) [60:00]-[76:00]: Moin (northern hello); Kennen Sie Hamburg?; **der See = lake, die See = sea**; Fluss = river; **schön vs schon**; **Danke schön** = thank you very much; Rathaus, Kirche = Michel, Hotel; price 13,70 Euro.
- UB p.31 2a and 2b (Bremen), the München ordering, as above.
- **Definite vs indefinite article** [120:00]-[128:00]: a/an first mention, the second mention; ein (m), eine (f), ein (n), no plural form; der/die/das/die; Das ist eine Kirche. Die Kirche ist groß. Das ist ein Bus. Der Bus ist groß. Das sind Bücher. Corrected: der Bahnhof ist groß (not das). Homework: write sentences "Das ist ein ... Der ... ist ..." [HW checked on Day 9].
- At the end the teacher mentions "Guten Appetit" (said before a meal, answered by "Danke, gleichfalls" on Day 11) [132:00].

### 3. MUST COVER (Day 8 owns it)
From class: A3 rows 37-39. Content list:
- **Places and buildings** with article and plural (the full taught list), **public transport** U-Bahn/S-Bahn/Straßenbahn, **der See / die See**, Moin, schön/schon, Danke schön; **ein/eine/ein vs der/die/das**, the first-mention/second-mention idea, no plural indefinite; **sein + adjective** (Der Bus ist voll. Das Zimmer ist groß. Die Bibliothek ist ruhig.).
- Questions about places (KB p.37 box): Was ist das? - Das ist ein Hafen. Ist das eine Kirche? - Ja. / Nein, das ist das Rathaus.
- GAP items:
  - **KB p.28-29 1a, 1c-d**: listen to a city tour and match the photos; fill numbers about Hamburg (Rathaus over 120 Jahre alt and 111 m breit, Turm 112 m hoch; Elbphilharmonie 866 Millionen Euro; Hafen 12.000 Schiffe pro Jahr; Bahnhof 720 Züge pro Tag); collect facts about your own town (poster) - optional speaking task.
  - **KB p.30 2c, 3** (der, das oder die? find the nouns in 2b; collect nouns from chapters 1-3 in a group game by article), **KB p.31 4a-c** (full grammar box and exercises), **UB p.30 1a-d** (Bremen text; Wortschlange Rathaus; Nomen mit Artikel und Plural; your town), **UB p.31 2c** (article and plural for Hotel, See, Rathaus, Theater, Kirche, Konzerthaus, Fluss, Bahnhof, Museum), **UB p.32 3, 4a-c** (article table; ein/eine or -; Schiff Maria).
  - **Aussprache "lange und kurze Vokale"** (ch.3): **KB p.31 5a-b**, **UB p.32 5a-b**, **UB p.33 5c**: a/e/i/o/u long vs short with examples (Name, Sprache, Land, Mittwoch, Donnerstag, Samstag, gut, bitte, danke); rule from the Kursbuch box "Vor einem doppelten Konsonanten (ff, nn, ...) ist der Vokal immer kurz: Schiff, Fluss".
  - **Moin / Grüß Gott / Grüezi** (KB p.30 "Gut gesagt: grüßen") - links back to Day 1's greeting list.
  - **UB p.31 2b** dialogue completion as written practice; UB p.39 R1-R3 sections about places.

### 4. DO NOT TEACH HERE
- nicht vs kein/keine (Day 9) - the taxi dialogue contains "Das ist kein See, das ist ein Fluss": give it as a ready-made sentence and link "see Tag 9"; Imperativ mit Sie and directions (Day 9); addresses and Straße/Platz/Gasse (Day 10); Akkusativ (Day 11); Verkehrsmittel Bus/Zug/Fahrrad vocabulary (Day 9, KB p.32 6a).
- Re-cut: d08.ts is close to final. Remove from d08.ts the line "places like Krankenhaus, Schule ... were already in earlier days" (they were not all taught earlier; list them with article here); fix "kein See" as above; keep "Hamburg liegt nicht direkt an der See" only if it is true (Hamburg lies on the Elbe about 100 km from the sea: KB p.29 text) - use the Kursbuch fact.
- Remove "Hören Teil 2 often plays exactly this kind of scene" from the exam tip (R5).

### 5. Exam relevance
- **Hören Teil 1** (where is ...? short dialogue with three picture options) and **Teil 2** (a station or shop announcement), **Lesen Teil 2/3** (signs and website snippets with places), **Sprechen Teil 2** (Wo ist ...? questions from a keyword card).
- Typical task: choose the correct place from three pictures after a short conversation.

### 6. Visual opportunities
- **City map** with place cards colour-coded by article (der blue, die red, das green) and plural forms on the back.
- **First-mention / second-mention** two-panel picture: "Das ist ein Bus." then "Der Bus ist voll."
- **der See / die See** side-by-side illustration (lake with a boat vs open sea), with the article badges.
- **Transport icon row** (Bus, U-Bahn, S-Bahn, Straßenbahn) showing where each runs: a city ring and a larger commuter ring for the S-Bahn.
- **Taxi route** line with the stations (Bahnhof, Kunsthalle, Alster, Rathaus, Michel, Hotel) as numbered stops.

---

## Day 9 - Not a, no: nicht and kein; directions (class 21.09)

### 1. Class and book pages
- KB p.32 6a-b (Kein Glück?! picture story, Bus/Fahrrad/U-Bahn/zu Fuß gehen) [32:00]-[40:00]; KB p.32 6c box "Negationsartikel" [20:00]-[28:00]; UB p.32 4a-c (Das ist ein/eine ...; articles) [40:00]-[52:00]; UB p.34 6e, 6f, 6g (kein/keine/ein/eine, Das ist ... kein Restaurant, das ist ein Café) [52:00]-[80:00]; UB p.36 8b-c (Aufforderungen schreiben: Gehen Sie zur U-Bahn ...) [84:00]-[92:00]; UB p.35 8a (links / rechts / geradeaus) [92:00]-[104:00]. Homework from the day before (sentences "Das ist ein ... Der ... ist ...") checked [16:00]-[28:00].

### 2. TAUGHT IN CLASS
- Revision: zu Hause (at home) vs nach Hause (going home); Wohin gehst du? -> Ich gehe nach Hause; Was machst du am Wochenende? [08:00]-[16:00].
- Homework sentences (Bäckerei, Restaurant, Bibliothek, Supermarkt, Schule, Auto, Wohnung, Buch, Straße, Häuser) [16:00]-[28:00].
- **nicht vs kein** [20:00]-[44:00]: **nicht** negates a verb, an adjective, a name, a place (Das ist nicht Deutschland, Ich spiele nicht, Der Bus ist nicht voll, Das Zimmer ist nicht groß, Ich gehe nicht ins Kino); **kein/keine** negates "not a" (Das ist kein Bus, Das ist keine Kirche, kein Buch, keine Busse, Brille/Uhr, Zug/Züge). The table: m kein, f keine, n kein, plural keine.
- KB p.32 6a-b picture story: Fahrrad, Bus, U-Bahn, Fahrkarte, zu Fuß gehen; Oje/Ach nein/Oh nein; "So ein Glück!"; aber schnell.
- UB p.32 4a-c, UB p.34 6e-g: ein/eine/kein/keine in sentences, Auf dem Bild sind ... aber kein(e) ...
- **Directions** [80:00]-[100:00]: nach links / nach rechts / geradeaus (nach is optional); **Aufforderung = imperative with Sie: verb first, then Sie**: Gehen Sie nach links, Essen Sie das Brot, Nehmen Sie Bus Nummer neun, Trinken Sie Milch, Lernen Sie Deutsch, Kochen Sie Pizza, Gehen Sie rechts und dann links, Fahren Sie zum Bahnhof / zum Marktplatz, Gehen Sie einhundert Meter geradeaus; dialog "Entschuldigung, wo ist der Markt? Hier gleich links, dann geradeaus; dann gehen Sie rechts ... und Sie sind da"; pronunciation of rechts.
- UB p.36 8b-c and UB p.35 8a, then an internet breakdown ends the class [108:00]-[128:00].

### 3. MUST COVER (Day 9 owns it)
From class: A3 rows 40-42. Content list:
- **nicht vs kein**, with the **correct rule** (R4): kein negates a noun with ein/eine **or no article** (and the plural), nicht negates everything else (verbs, adjectives, nouns with the definite article, names, places). Table for kein/keine/kein/keine (Nominativ only here).
- **Verkehrsmittel**: der Bus, das Fahrrad, die U-Bahn, die Straßenbahn, der Zug, das Flugzeug, die S-Bahn, zu Fuß gehen, die Fahrkarte (KB p.32 6a, UB p.33 6a-d); Oje, kein Fahrrad!
- **Directions** and **Imperativ mit Sie** (verb in position 1, Sie after it): gehen, fahren, nehmen, trinken, essen, lernen, kochen, besuchen, zeigen, fragen; nach links / rechts / geradeaus; zu Fuß; "zum Bahnhof / zur U-Bahn" as ready phrases (zu + dem/der is a Dativ rule, not explained here); **Entschuldigung, wo ist ...?**
- GAP items:
  - **KB p.33 7c** (play the dialogue: Entschuldigung, wo ist bitte ...? Das ist ganz einfach. Gehen Sie rechts/links/geradeaus und dann ... Da ist ... Ja / Ja, genau. Bitte, gern), **KB p.33 8** (dice game Start/Ziel: describe the way on the map), **KB p.37 boxes** (Fragen zu Orten, nach Dingen fragen: Ist das ein Bus? - Nein, das ist kein Bus; Artikel table with Negationsartikel; Imperativ mit Sie: das Verb steht auf Position 1; Adjektiv mit sein).
  - **UB p.33 6a-d** (Verkehrsmittel zuordnen, Wortschlange, Artikel und Plural, ein-/kein- Ergänzen the dialog), **UB p.34 6h** (write about your town: In ... gibt es Hotels, aber kein ...), **UB p.35 7a-b** (listen: which way is 1, 2, 3 - Hören; the same pattern as Day 10's KB 7a), **UB p.36 8d-e** (Wo ist ...? Schreiben Sie die Antworten mit Pfeilen; Partnerdialog).
  - Adjective with sein can be a short section here too because the KB boxes sit with the negation/imperative boxes: only "Der Turm ist hoch / Der Hafen ist groß / Der Bus ist nicht voll".

### 4. DO NOT TEACH HERE
- Akkusativ and "keinen" (Day 11) - the Nominativ-only table has no "keinen"; du-imperative (later chapter); "mit dem Fahrrad" (Dativ, later); the direction-listening exercise KB p.33 7a-b is Day 10.
- Re-cut: d09.ts is close to final; (i) fix the kein rule (R4), (ii) delete "keinen" from the table title, (iii) delete the exam tip about "Hören clips play a Bildgeschichte" (R5), (iv) move "ins ___" and Hören strategy to Day 10.

### 5. Exam relevance
- **Hören Teil 1** (directions; "Wohin fährt Herr Albers?" style), **Sprechen Teil 3** (a request: Entschuldigung, wo ist ...? / Gehen Sie ...), **Lesen Teil 3** (signs with "kein/nicht": Rauchen verboten), **Hören Teil 2** (announcement with a negation: "Der Zug fährt nicht ...").
- Typical task: tell the apart "Das ist ein Hotel" from "Das ist kein Hotel" and follow a route.

### 6. Visual opportunities
- **nicht/kein decision card**: a short flowchart (Is there ein/eine/no article before the noun? -> kein-; otherwise -> nicht).
- **Direction map** with three paths drawn, each with its Sie-imperative sentence under it; arrows for links/rechts/geradeaus.
- **Verb-first strip**: Statement (Sie gehen) vs command (Gehen Sie) with the verb block swapping position.
- **Picture story** (own illustration): flat tyre -> no bus -> no ticket -> walk, with "kein/keine" in each caption.

---

## Day 10 - Hören practice, addresses, food and shopping (class 22.09)

### 1. Class and book pages
- KB p.33 7a-b (three direction dialogues: Hotel Europa, Café Delfino, Rathaus; which route 1, 2 or 3) [12:00]-[20:00]. KB p.44-45 (Frühstück, Mittagessen, Kaffee und Kuchen, Abendessen vocabulary; 2c Geschäfte) [60:00]-[96:00]. KB p.47 6a (supermarket dialogues 1-5) [96:00]-[112:00], 6b role-play variations [112:00]-[136:00].
- Exam-practice audio not in the scans: Hören "Nachricht" Philipp/Martha (Sommerkino, Telefonnummer 4879983) [20:00]-[36:00]; questions-with-answers audio ("Gehst du jetzt zu Fuß? 1. Entschuldigung, wo ist bitte die Kirche? ...") [32:00]-[40:00]; a worksheet on Sie-imperatives and kein/keine [40:00]-[56:00].

### 2. TAUGHT IN CLASS
- KB p.33 7a-b listening [12:00]-[20:00]; **Straße, Platz, Gasse** (Hauptstraße, Kaiserstraße, Rathausplatz, Stefansgasse) and how an address is said: the teacher said "Nummer 20 Hauptstraße" - **wrong, see R1** [12:00].
- Exam-style task: read the instruction ("Lesen Sie die Aufgabe gut durch. Sie haben 30 Sekunden Zeit ... hören Sie den Text zweimal"), predict the gap: "ins ___" must be a neuter noun; "wann" = a time or day; the voice message of Philipp (Gehen wir zusammen ins Kino? ... am Freitag habe ich frei ... Sommerkino im Park ... U-Bahn ... zu Fuß ... Telefonnummer in der Firma 4879983) [20:00]-[36:00]; questions-answers audio [32:00]-[40:00]. "One week of German is too early for natural speed - listen to songs, podcasts, films" [16:00].
- Worksheet: write commands (Besuchen Sie das Museum, Fahren Sie mit dem Fahrrad, Zeigen Sie die Fahrkarte), negation with kein/keine (keine Straßenbahn, kein Theater, kein Markt), See vs lake [40:00]-[56:00].
- **Food vocabulary** [60:00]-[72:00]: Frühstück (Banane, Orangensaft, Müsli, Joghurt, Tee, Milch, Käse, Marmelade, Ei, Brötchen), Mittagessen (Apfelsaft, Kartoffeln, Salz, Pfeffer, Gemüse, Wasser, Essig, Öl, Cola, Fleisch, Hähnchen, Schinken), Kaffee und Kuchen (Kaffee, Kuchen, Sahne, Schokolade, Keks, Zucker), Abendessen (Butter, Brot, Tomate, Gurke, Salat, Suppe, Wurst, Schinken); Saft compounds (Apfelsaft, Mangosaft, Ananassaft); culture notes (bread, cold dinner, vegetarian food).
- **Geschäfte** [72:00]-[96:00]: Bäckerei, Markt (Gemüse, Obst), Metzgerei, Supermarkt - sorting exercise.
- **Supermarket dialogues** [96:00]-[112:00]: (1) Entschuldigung, ich brauche einen Euro für den Einkaufswagen. Können Sie wechseln, bitte? (2) Was kostet der Apfelsaft? 99 Cent. Und der Orangensaft? 1,09 Euro. (3) Wer kommt dran? Ich möchte ein Stück Emmentaler, bitte. Sonst noch etwas? Ich nehme noch 150 Gramm Schinken. Ist das alles? (5) Ich brauche noch eine Tüte, bitte. Hier bitte, die kostet 35 Cent. Das ist aber teuer. Das macht dann 18,65 Euro. Brauchen Sie den Kassenzettel? Culture: shopping bags are bought, Stofftasche, trolley coin, prices of water vs beer (teacher's generalisations; omit from the notes unless verified).
- Role-play with variations (prices, fruit juices, Gramm/Kilo/Liter, Hähnchen) [112:00]-[136:00]; homework: watch food/transport videos.

### 3. MUST COVER (Day 10 owns it)
From class: A3 rows 43-45. Content list:
- **Wegbeschreibung hören** with Straße/Platz/Gasse; **address order street + number** (Hauptstraße 20, Rathausplatz 14; KB p.25 form; UB p.44 4 Hausnummer) - correct R1.
- **Meal and food vocabulary** with article and plural (the class lists above), **Geschäfte** and the "in der Bäckerei / auf dem Markt / in der Metzgerei / im Supermarkt" pairs (KB p.45 2c) as chunks, **supermarket dialogues** and their key phrases (Wer kommt dran? Ich möchte ... Sonst noch etwas? Ist das alles? Brauchen Sie ...? Können Sie wechseln? Das macht ...), **prices and quantities** (99 Cent, 1,09 Euro, 18,65 Euro; Gramm, Kilogramm, Liter; ein Stück, eine Tüte, ein Glas, eine Dose, ein Becher, eine Flasche, eine Packung).
- **Hören strategy 1**: read the task, mark what type of word each gap needs (name/day/place/number); the Goethe formats are in A2.
- GAP items:
  - **Close chapter 3**: **KB p.33 7b** (Welche Wegbeschreibung passt?), **KB p.34 9a-d** (Events in Hamburg; Strategie "Texte mit internationalen Wörtern verstehen": theater, festival, orchestra, choir, concert, film, audience in English/French/German with article), **KB p.35 10b-d** (what people do when; poster on seasons), **KB p.36 11-13** (Netzwerk-WG München; optional/no video), **UB p.37 9a-c** (international words; Anzeigen markieren; match ads to people), **UB p.38 10b-c**, **UB p.39 R1-R3**, **UB p.40-41 Lernwortschatz** (check bold words in KB Wortliste).
  - **Chapter 4 first half**: **KB p.44 1a-b** (Lebensmittel: connect words; words in your own language), **KB p.45 2a-c** (listen: which photo - Bäckerei, Markt, Metzgerei, Supermarkt; Welche Wörter hören Sie?; Wo kaufen Sie die Lebensmittel?), **KB p.47 6a-c** (dialogues and the **Preise sprechen** box: 0,99 € neunundneunzig Cent; 1,09 € ein Euro neun; 2,20 € zwei Euro zwanzig), **UB p.46 1a-b, 2** (Kühlschrank, Wörter mit Artikel, Geschäfte anagrams), **UB p.49 6a-b** (Kilian/Tamara shopping; hear prices), **UB p.50 6c-e** (what does it cost, Verpackungen und Maße: l, g, kg, Flasche, Becher, Dose, Glas, Packung; dialogues A-D), **UB p.56-57 Lernwortschatz**.
  - **Aussprache "Umlaute ä, ö, ü"** (ch.4; class touched Brötchen, Käse only): **KB p.46 5a-b**, **UB p.49 5a-b** (Apfel/Äpfel, Saft/Säfte, Brot/Brötchen, Wurst/Würstchen, Wort/Wörter, Koch/Köchin).

### 4. DO NOT TEACH HERE
- möchten/mögen conjugation (Day 11) - "Ich möchte ..." appears in dialogues as a ready phrase with the note "möchten explained on Tag 11"; Akkusativ explanation (Day 11): "einen Euro, den Einkaufswagen, den Kassenzettel" as ready phrases only; invitations and Einkaufszettel KB p.46 3a-c (Day 11); mögen (Day 11); time of day and "zum Frühstück" patterns (Day 11).
- Re-cut: d10.ts section 1 must be corrected (R1) and section 3 re-labelled: the exam does not have "Hören Teil 1 = voicemail with 5 gaps" (R5). Keep sections 4-6; add the chapter-3 closing material above. Replace "Ich wohne auf der Rathausplatz" (R1).
- Remove the culture claims that are generalisations (water vs beer prices, a beer at office lunch) - not verified.

### 5. Exam relevance
- **Hören Teil 1** (prices, "Was kostet der Pullover?" 19,95), **Teil 3** (mailbox message with numbers and days), **Lesen Teil 2/3** (ads, Öffnungszeiten, ticket info), **Sprechen Teil 2** (keyword cards like "Preis? / Geschäft? / Essen?"), **Teil 3** (Ich möchte ..., bitte / Können Sie ...?).
- Typical task: write or choose the price/number you heard; read an address.

### 6. Visual opportunities
- **Meal boards**: four plates/trays (Frühstück, Mittagessen, Kaffee und Kuchen, Abendessen) with the food words and articles colour-coded.
- **Four shops** (Bäckerei, Metzgerei, Markt, Supermarkt) as drag-targets with the foods.
- **Address sign**: a street sign "Hauptstraße 20, 80331 München" with arrows labelling street / number / PLZ / city.
- **Receipt** (18,65 €) with each price read out in words beside it; **price-tag decoder** for 0,99 / 1,09 / 2,20.
- **Shopping dialogue** speech bubbles with colour for customer vs seller.

---

## Day 11 - Subject and object, möchten and mögen (class 23.09)

### 1. Class and book pages
- KB p.48 7a (Die Grillparty: Guten Appetit! Danke, gleichfalls! Schmeckt's? Möchtet ihr noch Würstchen? ... ich bin satt) [92:00]-[100:00]; KB p.48 8a (Hören: Wer möchte was? Der Mann möchte ein Cola und ein Eis; Die Frau trinkt gern Orangensaft; Der Mann möchte keine Schokolade) [108:00]-[116:00]; KB p.46 3d (Akkusativ table) mentioned.
- UB p.47 3d (email: Leon macht den Salat ...), UB p.48 3e (choose einen/ein/eine), 4a (Nominativ oder Akkusativ?) [56:00]-[76:00]; UB p.51 7 (Guten Appetit ... match), 8a (möchten forms in the restaurant dialogue), 9a (mögen forms: Timo mag gern Eis, aber keine Schokolade; Sandra und Sarah mögen Pizza ...) [120:00]-[132:00]. First: articles quiz [08:00]-[16:00]; a test on articles announced for next time [132:00].

### 2. TAUGHT IN CLASS
- Revision of articles (bestimmt/unbestimmt, negative, plural) [04:00]-[16:00].
- **Nominativ and Akkusativ** [16:00]-[32:00]: every sentence has subject-verb-object; the subject is Nominativ; the object after a verb is Akkusativ; with sein the sentence is complete without an object; **only masculine changes: der -> den, ein -> einen, kein -> keinen**; die, das, eine, ein, keine unchanged (also plural); "learn der die das die / den die das die"; examples: Der Mann isst den Kuchen; Die Frau isst eine Schokolade; Ich brauche den Kuli; Ich habe die Tasche; Ich nehme das Buch; Der Mann braucht den Kuli; Die Vögel bauen das Haus; Die Mutter hat das Geschenk / ein Geschenk; Das Kind hat eine Gitarre. The statement "all verbs except sein need an object" is wrong - see R2.
- Exercises [32:00]-[76:00]: Wir brauchen das Brot; Ich mag die Hausaufgabe; Er kocht die Nudeln; Julia kauft den Käse; Hans trinkt den Kaffee; Hast du die Zeitung?; Familie Meyer bringt das Gemüse mit; Der Vater hat den Schirm; Lest ihr das Buch?; Sie kauft die Schuhe; Die Mutter packt den Koffer; Das Mädchen trägt einen Rock; Die Kinder lieben die Oma; ... einen Salat und ein Brot; Ist das ein Apfel? - Nein, das ist eine Birne (**subject, so ein not einen**).
- **möchten** (ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, sie/Sie möchten) = would like; **mögen** (mag, magst, mag, mögen, mögt, mögen) = to like [88:00]-[92:00]; **gern** is not a verb, cannot be combined... the teacher's claim "mögen never with gern" is wrong (R3); **Nouns always have a capital letter**; Was möchtest du? (du) / Was möchten Sie?
- **KB p.48 7a** [92:00]-[100:00]: Guten Appetit! - Danke, gleichfalls. Schmeckt's? - Das Fleisch schmeckt sehr gut. Möchtet ihr noch ein Würstchen? - Ja, gerne. Die Würstchen sind wirklich lecker. Und du, Lukas? - Nein, danke, ich bin satt (satt = full; a bus is voll). Möchtest du Salat? - Ja, danke. / Nein, danke. Ich esse keinen Salat.
- **zum Frühstück / zum Mittagessen (zum Mittag) / zum Abendessen (zu Abend)** [100:00]-[108:00]: Ich esse Müsli zum Frühstück; Was trinken Sie zum Mittagessen? Sie isst Reis zum Mittag; Er isst Suppe zum Abendessen; Wir möchten Reis zum Abend (ASR "müssen" = möchten).
- Hören KB p.48 8a [108:00]-[116:00]; teacher: "read the words every day".
- Restaurant dialogue (UB p.51 8a): Guten Tag, was möchten Sie? - Ich möchte bitte ein Hähnchen mit Kartoffelsalat und er möchte eine Pizza. Was möchten Sie trinken? - Ich nehme ein Wasser, sie möchte einen Apfelsaft. ... Wir möchten gerne bezahlen. UB p.51 9a mögen forms. Closing: surprise articles test announced.

### 3. MUST COVER (Day 11 owns it)
From class: A3 rows 46-47. Content list:
- **Nominativ/Akkusativ** with the **correct description** (R2): verbs like haben, brauchen, essen, trinken, kaufen, nehmen, machen, kochen, mögen, möchten, suchen take an Akkusativ object; sein stays Nominativ; wohnen/gehen/kommen have none; only the masculine changes (table m/f/n/pl for bestimmt, unbestimmt, kein); "Ist das ein Apfel?" stays ein.
- **möchten / mögen** conjugation, meaning, and the **real difference**: möchten = would like (polite request, can be followed by another verb's infinitive: Wir möchten bezahlen), mögen = like (+ noun; "Ich mag ... gern" is possible); and "Ich esse gern Kuchen" for liking an activity (as Day 5).
- **zum Frühstück/Mittagessen/Abendessen**, **at-table phrases** and ordering, **Wer möchte was?**
- GAP items:
  - **KB p.46 3a-d** (Eine Einladung, listen: Mario and Elena plan a Grillparty; Einkaufszettel; Akkusativ box - Nominativ vs Akkusativ table to complete: den, einen, keinen), **KB p.46 4** (Zusammen essen - who does what, ask in groups), **KB p.48 7b, 8b** (play the dialogues; interview with partner: Essen/Trinken Sie gern ...?), **KB p.49 9a-c** (reading Was essen Sie?; the grammar box "möchten" and "mögen"; **Positionen im Satz**: Lina isst morgens Müsli / Morgens isst Lina Müsli = verb position 2, subject before or after it), **KB p.53 grammar boxes** (unregelmäßige Verben essen/mögen/möchten; Artikel Nominativ/Akkusativ; Verben mit Akkusativ: brauchen, haben, machen, kochen, essen, kaufen, nehmen, mögen, möchten), **UB p.47 3d, UB p.48 3e and 4a-c, UB p.49 4d** (email gaps with den/die/das; Nominativ or Akkusativ with ein-; der/das/die/ein/eine/kein/keine; a game with ten nouns), **UB p.51 7, 8a-b, 9a**, **UB p.52 9b-d** (Sätze mit markierten Wörtern beginnen: Zum Frühstück esse ich ...; würfeln; Was mögen Sie zum Frühstück?), UB p.55 R1-R3.
  - **Strategien (ch.4)**: **KB p.50 10a-c and UB p.53 10a-d** (Wörter ordnen und lernen: mindmap, word pairs, word groups; Obst/Gemüse/Milchprodukte/Backwaren), **KB p.51 11 and UB p.54 11a-b** (mit W-Fragen Texte verstehen: Berufe rund ums Essen; Wer? Was? Wo? Wie? Wann?).
  - KB p.52 12-13 (WG scenes) optional.

### 4. DO NOT TEACH HERE
- Dativ, accusative of persons (Ich besuche meinen Opa - Day 13 possessive), accusative personal pronouns (ch.6), modal verbs können/müssen/wollen and Satzklammer (Day 13+), prices and Mengen (Day 10), Uhrzeit (Day 12).
- Re-cut: d11.ts is close; fix the "any verb except sein" statement (R2), the mögen/gern statement and its contradiction (R3), remove "Sprechen Teil 2 often asks you to order food" (R5), keep the "ein = subject" warning.

### 5. Exam relevance
- **Sprechen Teil 3** (request: Ich möchte einen Kaffee, bitte / Haben Sie ...?), **Schreiben Teil 2** (a note with a shopping list or invitation: Ich kaufe einen Salat und ein Brot), **Hören Teil 1** (restaurant order: "Was isst die Frau im Restaurant?" model item 3), **Lesen Teil 1/2**.
- Typical task: choose what the person orders; write a short message with correct articles.

### 6. Visual opportunities
- **Case table** with the masculine column highlighted and an arrow der -> den, ein -> einen, kein -> keinen; the other three columns greyed with "no change".
- **Who does what**: subject -> verb -> object arrow diagram on four sentences, with the object block turning colour when masculine.
- **möchten vs mögen** comparison ladder (wish/polite order vs general liking) with a menu card.
- **Café order slip** with Was möchten Sie? / Ich möchte ... and the bill (Wir möchten bezahlen).
- **Plate scene** for Guten Appetit / Danke, gleichfalls / Schmeckt's? / lecker / satt.

---

## Day 12 - Daily routine and telling the time (class 24.09)

### 1. Class and book pages
- KB p.54 1a-b (Was macht Kaan? Fotos den Sätzen zuordnen; Wann macht Kaan was?) [12:00]-[20:00]; KB p.54 2a (Was macht Kaan am Sonntag? Hören; Zeitung lesen, mit der Familie zu Mittag essen, lange schlafen, Fußball spielen, Freunde treffen, lernen, Oma besuchen, Pizza essen, Marie treffen, in den Supermarkt gehen, ins Kino gehen, am Computer arbeiten) [20:00]-[44:00]; KB p.56 4a-b, 5a-b, 6 (clocks) and the time exercises [44:00]-[124:00] (the matching sheets "halb vier / Viertel vor vier ..." are **unclear** - probably UB p.59 4b, 5a-b and a worksheet); UB p.60 7a (am / um) [128:00]-[136:00].
- A test announced for the next class [04:00]. A discussion about an A2 batch (27 October) and holidays [20:00]-[40:00] is not lesson content.

### 2. TAUGHT IN CLASS
- Chapter 5 **Alltag und Familie** = routine and family [12:00]. KB p.54 1a: Kaan geht in die Mensa; trifft Marie; fährt in die Uni; duscht; lernt in der Bibliothek; besucht seine Oma; frühstückt und liest Nachrichten; fahren: a->ä (fährt), treffen: e->i (trifft) [16:00].
- Hören 2a (Tobi calls Kaan; Sunday: ausschlafen, mit der Familie zu Mittag essen, Fußball im Park, um drei Felix und Sarah im Café Centro, spazieren mit Marie, vielleicht Kino) [40:00]-[44:00].
- **Formal time** [44:00]-[52:00]: 24-hour clock; Stunde + Uhr + Minuten (17:15 = siebzehn Uhr fünfzehn; 12:00 = zwölf Uhr; 21:20 = einundzwanzig Uhr zwanzig); Wie viel Uhr ist es? / Wie spät ist es?; the teacher also said "wann = a day or a month, not a time" - too narrow, see R21.
- **Informal time** [52:00]-[76:00]: 12-hour clock; **halb** points to the **next** hour (5:30 = halb sechs); **vor** (before), **nach** (past), **Viertel** (quarter); minutes 1-25 with **nach** (10 after 5 = zehn nach fünf; 6:15 = Viertel nach sechs; 6:20 = zwanzig nach sechs); about 26-29 with **vor halb** (5:28 = zwei vor halb sechs); 30 = halb; 31-39 with **nach halb** (5:35 = fünf nach halb sechs; 5:38 = acht nach halb sechs); 40-60 with **vor** (5:42 = achtzehn vor sechs; 8:45 = Viertel vor neun); trick: break the sentence down, e.g. zehn vor halb fünf = 10 minutes before 4:30 = 4:20; fünf nach drei = 3:05.
- Matching exercises [80:00]-[110:00] with all forms (halb vier, Viertel vor vier, zwanzig nach zehn, fünf nach halb acht, Viertel nach zwölf, zehn vor halb fünf, fünf nach drei, ...). Teacher: Germans themselves use the easy version; exams use both; **the exam is only for the visa - conversation is what matters** (not a lesson item). **Listening trick**: write down every word you hear and decode later [68:00].
- **Prepositions with time** [124:00]: **um** + clock time, **am** + day, **im** + month/season, **von ... bis** + time span (von fünf bis sechs), am Nachmittag; UB p.60 7a (um or am) [128:00]-[136:00].

### 3. MUST COVER (Day 12 owns it)
From class: A3 rows 48-49. Content list:
- **Kaans Tag** vocabulary and the daily routine verbs (Tagesablauf), **fahren/treffen** forms (link to Day 5), the Sunday dialogue.
- **Formal and informal time** with the full pattern table including **:25 (fünf vor halb ...)**, **:35 (fünf nach halb ...)**, **:20 / :40** and the "write what you hear" strategy (strategy 2); **um / am / im / von ... bis** summary with one clear example each.
- GAP items (book ch.5, KB pp.54-57, UB pp.58-60):
  - **KB p.54 2b** (partner: Am Sonntag schläft Kaan lange. Er ...), **KB p.55 3a-b** (Und Ihr Tag? - tell your day, the others guess weekend or not; Mein Tag: five sentences with photos), **KB p.56 4a-b** (match times to pictures: fünf vor zwei, halb sieben, zwanzig vor acht, zehn nach neun), **5a** (clock with kurz vor sieben ... Viertel nach sieben, zwanzig nach sieben, fünf vor halb acht, halb acht, fünf nach halb acht, Viertel vor acht) and the **Wie spät ist es? / Wie viel Uhr ist es? and Um wie viel Uhr? box** (inoffiziell: Es ist Viertel vor drei. offiziell: Es ist vierzehn Uhr fünfundvierzig; Wann? Um Viertel vor drei. Um vierzehn Uhr fünfundvierzig), **5b** (offizielle Uhrzeit hören), **5c** (time in your language), **6** (five Q&A: Wann frühstückst du? Um Viertel nach sieben. Wann fährst du ins Büro?), **KB p.57 7a-b** (Familie Dobart's calendar: Wann? am Montag, am Vormittag; um Viertel nach vier; Wie lange? von Sonntag bis Dienstag; von 9 bis 17 Uhr) and the **Zeitangaben box on KB p.63**.
  - **Tageszeiten** (UB p.58 1a, p.59 4a): der Morgen / Vormittag / Mittag / Nachmittag / Abend / die Nacht, morgens / vormittags / mittags / nachmittags / abends / nachts with the ranges 6-9, 9-12, 12-14, 14-18, 18-22, 22-6 (UB p.59 4a), am Morgen vs morgens.
  - **UB p.58 1a-d, 2a-d** (Leas Tag; time-of-day table), **UB p.59 3, 4a-b, 5a-b, 6** (clock tasks, listening Welche Uhrzeit hören Sie?; Von morgens bis abends: inoffiziell/offiziell; Was macht Eva wann?), **UB p.60 7a-d** (am/um; am/um/von ... bis; Lea's Wochenkalender; your own appointments).
- Everything else in chapter 5 is **outside Days 1-12** (Day 13+): KB p.57 8-9 Familie and Possessivartikel, p.58 10, p.59 11-12 Modalverben, p.60 13-14 Termin telefonisch, p.61 15 Pünktlichkeit, p.62 WG, p.63 summary beyond the time boxes, UB pp.61-69.

### 4. DO NOT TEACH HERE
- Possessive articles (mein Opa, meine Eltern ...), modal verbs (können, müssen, wollen), a telephone appointment, excuses for being late, Familienwörter (Day 13+); informal talk about "dreiviertel" (not A1); Datum/Ordinalzahlen (ch.6).
- Re-cut: d12.ts is close; (i) complete the informal-time table with the :25 and :35 forms (R16), (ii) remove "teacher's 4-5 of 15" (R15), (iii) the "ALL_INFORMAL_TIMES" explorer in `src/lib/uhrzeit` must offer **fünf vor halb** variants for :25, and "Viertel nach/vor" for :15/:45 only, (iv) the "um/am/im" block: the old d06 also teaches am and im - after the re-cut this Day owns the three-way summary, and Day 6/7 only point to it.

### 5. Exam relevance
- **Hören Teil 1** (model item 2: "Wie spät ist es?" - 15 Uhr / Halb 5 Uhr / Gleich 5 Uhr) and **Teil 2** (announcements with times, e.g. "Der Zug ... fährt um ..."), **Lesen Teil 3** (opening hours, bus every 30 minutes), **Lesen Teil 1** (a mail: "Dein Zug kommt um 12.36 Uhr an"), **Sprechen Teil 2** (Uhrzeit/Termin cards), **Schreiben Teil 2** (give a time for a meeting).
- Typical task: decode the time said in the spoken form and tick the matching digits.

### 6. Visual opportunities
- **Two-clock panel**: a 24-hour digital display (17:15) beside an analogue face with the spoken forms (siebzehn Uhr fünfzehn | Viertel nach fünf).
- **halb diagram**: the clock face with the half-hour mark and an arrow pointing to the next hour number (halb sechs = 5:30 shaded).
- **Minute zones**: a ring in four colours (nach, vor halb, nach halb, vor) with the minute ranges.
- **Kaan's day timeline** (Frühstück, Mensa, Uni, Bibliothek, Oma) with time stamps.
- **Tageszeiten band** (morgens 6-9 ... nachts 22-6) and an **um / am / im chooser** (three boxes).

---

# APPENDIX

## Übungsbuch exercises used in class (quick lookup)
Day 1: UB 6 2a-b, 7 2c. Day 3: UB 8 3d-e, 9 4a, 10 4e + 5a, 11 5f, 14 8c. Day 4: UB 12 6c-d, 23 7e. Day 5: UB 18 1a, 19 3a-d, 20 3e-g (3g in class). Day 7: UB 24 8a-b, 25 11a. Day 8: UB 31 2a-b. Day 9: UB 32 4a-c, 34 6e-g, 35 8a, 36 8b-c. Day 11: UB 47 3d, 48 3e + 4a, 51 7, 8a, 9a. Day 12: UB 60 7a.

## Teacher handouts and what they cover
- `classes/Greetings.pdf`: greetings/farewells, alphabet table, letter combinations (Day 1-2). Its table says ch = "like k in Bach" for "ich" - inaccurate (R10); ö "like u in fur" - only approximately.
- `classes/Du oder Sie.pdf`: du/Sie contexts, Kleinkinder <6, Kinder to ~14, the six questions (Day 2).
- `classes/Sprache Und Länder.pdf`: Welche Sprachen sprichst du / sprechen Sie; numbers 0-20 table (Days 3-4).
- `books/_extract_BASIC_NOTES.txt`: capital nouns, ß, umlauts, three genders, verb endings, spelling variations, irregular verbs, one present tense (Days 3, 5, 6).
- `books/_extract_Regelmäßige_Verben_1.txt`: endings, -t/-d, -s/-ß/-z/-x (Day 5). `books/_extract_Sein___haben___Irregular_verbs.txt`: sein/haben, a->ä, e->ie, e->i (Day 5).
- `books/modellsatz_text.txt`: Goethe A1 model test (exam format, A2).
- Not provided: the "8 page" question/sentence document (Day 6) and the ch.2 worksheets named above.
