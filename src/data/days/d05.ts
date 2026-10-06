import type { Day } from '@/types'

export const d05: Day = {
  id: 5,
  kapitel: 2,
  title: 'Verben und Hobbys',
  goal: 'Conjugate regular and irregular verbs, build correct sentences with the verb in position 2, use sein and haben, and say what you like doing',
  focus: 'Verb: Stamm + Endung · Personalpronomen · unregelmäßige Verben · Position 2 · sein und haben · gern · Millionen',
  minutes: 60,
  examSkill: 'Sprechen',
  look: 'rich',
  hero: 'd05-hero',
  notes: [
    /* ───────────── 1 ───────────── */
    { t: 'h', text: '1 · Millionen' },
    {
      t: 'p',
      text: 'A million is a **noun**: **die Million**, plural **die Millionen**.\n\n- It is written as a separate word with a capital letter.\n- It takes the plural like any noun: **eine Million**, **zwei Millionen**.\n- Everything below a million is still one long word, written the way you say it.',
    },
    {
      t: 'numbers',
      items: [
        { n: 100000, de: 'hunderttausend' },
        { n: 1000000, de: 'eine Million' },
        { n: 2000000, de: 'zwei Millionen' },
        { n: 9070000, de: 'neun Millionen siebzigtausend' },
        { n: 10000000, de: 'zehn Millionen' },
      ],
    },
    {
      t: 'tip',
      text: 'For Indian numbers:\n\n- **ein Lakh** = 100.000 = **hunderttausend**\n- **Zehn Lakh** = 1.000.000 = **eine Million**\n- **Ein Crore** = 10.000.000 = **zehn Millionen**\n- 1.000.000.000 is **eine Milliarde** (plural **Milliarden**), printed in the Kursbuch number list on p. 27.',
    },
    {
      t: 'warn',
      text: 'German **Billion** is **not** the English "billion": the English billion is the German **Milliarde** (10⁹). German Billion is a million millions (10¹²). You will not need it for A1.',
    },

    /* ───────────── 2 ───────────── */
    { t: 'h', text: '2 · Verben und Personalpronomen' },
    {
      t: 'p',
      text: 'A **Verb** is an action word: kommen, wohnen, lernen.\n\n- The dictionary form is the **Infinitiv**, and it ends in **-en** (a few end in just **-n**, e.g. wandern).\n- In English only "he/she/it" changes (go → goes).\n- In German **every person has its own ending**, so the verb is always **conjugated** to match the subject.',
    },
    {
      t: 'rule',
      title: 'Regel — Stamm + Endung',
      body: 'Remove **-en** (or **-n**) from the infinitive: that is the **Stamm**. Then add the ending for the person.\n\n- Examples: kommen → **komm**, wohnen → **wohn**, lernen → **lern**, singen → **sing**.\n- The basic endings are the same for every regular verb: **-e, -st, -t, -en, -t, -en** (section 3 shows small spelling changes, e.g. du arbeitest, du tanzt).\n- Verbs whose infinitive ends in just **-n** take only **-n** for wir and sie/Sie: **wir wandern**.',
    },
    {
      t: 'conj',
      verb: 'kommen',
      en: 'to come',
      rows: [
        { pron: 'ich', stem: 'komm', ending: 'e' },
        { pron: 'du', stem: 'komm', ending: 'st' },
        { pron: 'er / sie / es', stem: 'komm', ending: 't' },
        { pron: 'wir', stem: 'komm', ending: 'en' },
        { pron: 'ihr', stem: 'komm', ending: 't' },
        { pron: 'sie / Sie', stem: 'komm', ending: 'en' },
      ],
      note: 'In regular verbs, wir and sie / Sie look like the infinitive, and er/sie/es and ihr look the same. Careful: not with sein (wir sind) or the vowel-change verbs in section 4 (er fährt, but ihr fahrt).',
    },
    {
      t: 'table',
      caption: 'Fünf Verben nach dem gleichen Muster',
      head: ['Person', 'wohnen', 'gehen', 'lernen', 'singen', 'suchen'],
      rows: [
        ['ich', 'wohne', 'gehe', 'lerne', 'singe', 'suche'],
        ['du', 'wohnst', 'gehst', 'lernst', 'singst', 'suchst'],
        ['er / sie / es', 'wohnt', 'geht', 'lernt', 'singt', 'sucht'],
        ['wir', 'wohnen', 'gehen', 'lernen', 'singen', 'suchen'],
        ['ihr', 'wohnt', 'geht', 'lernt', 'singt', 'sucht'],
        ['sie / Sie', 'wohnen', 'gehen', 'lernen', 'singen', 'suchen'],
      ],
      say: ['ich wohne', 'du gehst', 'er lernt', 'wir singen', 'ihr sucht', 'sie wohnen'],
    },
    {
      t: 'table',
      caption: 'Die Personalpronomen',
      head: ['Pronomen', 'Bedeutung', 'Beispiel'],
      rows: [
        ['ich', 'I', 'Ich wohne in Köln.'],
        ['du', 'you (one friend, informal)', 'Du lernst Deutsch.'],
        ['er / sie / es', 'he / she / it', 'Er arbeitet heute.'],
        ['wir', 'we', 'Wir gehen nach Hause.'],
        ['ihr', 'you all (friends, informal)', 'Ihr singt gern.'],
        ['sie', 'they', 'Sie wohnen in Bonn.'],
        ['Sie', 'you (formal)', 'Sie sprechen gut Deutsch, Herr Maier.'],
      ],
      say: ['Ich wohne in Köln.', 'Du lernst Deutsch.', 'Er arbeitet heute.', 'Wir gehen nach Hause.', 'Ihr singt gern.', 'Sie wohnen in Bonn.', 'Sie sprechen gut Deutsch, Herr Maier.'],
    },
    {
      t: 'p',
      text: 'Which of **du**, **ihr** and **Sie** to use for whom (friend, classmate, teacher, stranger) is explained on **Tag 2**. Here the point is the four faces of **sie / Sie**:',
    },
    {
      t: 'table',
      caption: 'sie oder Sie? Vier Bedeutungen',
      head: ['Geschrieben', 'Bedeutung', 'Endung', 'Beispiel'],
      rows: [
        ['sie (small s)', 'she, one woman', '-t', 'Das ist Frau Lang. Sie kommt aus Deutschland.'],
        ['sie (small s)', 'they, several people', '-en', 'Das sind Tim und Eva. Sie wohnen in Bonn.'],
        ['Sie (capital S)', 'you, formal, one person', '-en', 'Herr Maier, Sie sprechen gut Deutsch.'],
        ['Sie (capital S)', 'you, formal, several people', '-en', 'Herr Maier, Frau Lang, Sie sprechen gut Deutsch.'],
      ],
      say: ['Sie kommt aus Deutschland.', 'Sie wohnen in Bonn.', 'Herr Maier, Sie sprechen gut Deutsch.', 'Herr Maier, Frau Lang, Sie sprechen gut Deutsch.'],
    },
    {
      t: 'tip',
      text: 'Inside a sentence the **capital S** shows formal "you". The **first word** of a sentence is always capitalised, so there you must read the ending:\n\n- **Sie kommt** can only be "she" (-t).\n- **Sie kommen** is "they" or formal "you", and the situation tells you which.',
    },
    {
      t: 'rule',
      title: 'Regel — a name is er/sie/es, two names are sie',
      body: 'A single name (or a single thing) counts as **er / sie / es**; two names, or several things, count as **sie (they)**.\n\n- one name: the ending is **-t**: **Jonas lernt** Chinesisch.\n- one thing: the ending is **-t**: **Der Kurs kostet** 50 Euro.\n- two names: the ending is **-en**: **Eva und Nina reisen** gern.\n- several things: the ending is **-en**: **Die Kurse kosten** 50 Euro.\n- **du, ihr** and **Sie** are only for the person or people you are speaking **to**; **ihr** never means "they".',
    },
    {
      t: 'compare',
      rows: [
        { wrong: 'Jonas lernst Chinesisch.', right: 'Jonas lernt Chinesisch.', why: 'Jonas is not "you": a name takes the er/sie/es ending -t.' },
        { wrong: 'Eva und Nina lernt Deutsch.', right: 'Eva und Nina lernen Deutsch.', why: 'Two names = they: -en.' },
        { wrong: 'Eva und Nina, ihr lernen Deutsch.', right: 'Eva und Nina, ihr lernt Deutsch.', why: 'ihr always takes -t. (ihr = speaking to them directly.)' },
      ],
    },
    {
      t: 'ex',
      items: [
        { de: 'Das ist Frau Lang. Sie kommt aus Deutschland. Sie wohnt in Frankfurt.', hi: 'This is Mrs Lang. She is from Germany. She lives in Frankfurt.' },
        { de: 'Das ist Jan. Er kommt aus Frankfurt. Er wohnt in Zürich.', hi: 'This is Jan. He is from Frankfurt. He lives in Zurich.' },
      ],
    },
    {
      t: 'tip',
      text: 'The two texts above follow the grammar box on Kursbuch p. 17: once a name has been introduced, the next sentences use **Er** / **Sie** to avoid repeating it.\n\nWhen an exercise gives you a name as the subject, keep the name; only change it to a pronoun when the task asks you to.',
    },

    /* ───────────── 3 ───────────── */
    { t: 'h', text: '3 · Endungen und Rechtschreibung' },
    {
      t: 'rule',
      title: 'Regel — stem ends in s, ß, z, x: du takes only -t',
      body: 'The ending **-st** would put too many s-sounds together, so **du** gets only **-t**.\n\n- All other persons are normal (ich tanze, wir tanzen).\n- Notice that du and er/sie/es then look identical: du tanzt, er tanzt.',
    },
    {
      t: 'table',
      caption: 'Stamm auf s, ß, z oder x',
      head: ['Infinitiv', 'du', 'er / sie / es'],
      rows: [
        ['heißen', 'heißt', 'heißt'],
        ['tanzen', 'tanzt', 'tanzt'],
        ['reisen', 'reist', 'reist'],
        ['faxen (to fax)', 'faxt', 'faxt'],
      ],
    },
    {
      t: 'rule',
      title: 'Regel — stem ends in t or d: extra -e-',
      body: 'After a stem in **-t** or **-d**, an **-e-** is inserted in **du, er/sie/es and ihr**, so the ending can be pronounced.\n\n- arbeiten → du **arbeitest**, er **arbeitet**, ihr **arbeitet**\n- reden → du **redest**, er **redet**\n- ich, wir and sie/Sie stay normal: ich arbeite, wir arbeiten.\n- Exception: vowel-change verbs like halten, see section 4.',
    },
    {
      t: 'rule',
      title: 'Regel — consonant + m or n: extra -e- too',
      body: 'The same extra **-e-** appears after a stem in a consonant + **m / n**, such as **atm|en** and **regn|en**.\n\n- du **atmest**, er **atmet**; es **regnet**\n- It does **not** appear after **l, r, h**: lernen → du **lernst**, wohnen → du **wohnst**.\n- It does **not** appear after a doubled **mm / nn**: kommen → du **kommst**, schwimmen → du **schwimmst**.',
    },
    {
      t: 'table',
      caption: 'Rechtschreibung der Endungen im Vergleich',
      head: ['Person', 'machen (normal)', 'arbeiten (-t)', 'tanzen (z)', 'atmen (-m)'],
      rows: [
        ['ich', 'mache', 'arbeite', 'tanze', 'atme'],
        ['du', 'machst', 'arbeitest', 'tanzt', 'atmest'],
        ['er / sie / es', 'macht', 'arbeitet', 'tanzt', 'atmet'],
        ['wir', 'machen', 'arbeiten', 'tanzen', 'atmen'],
        ['ihr', 'macht', 'arbeitet', 'tanzt', 'atmet'],
        ['sie / Sie', 'machen', 'arbeiten', 'tanzen', 'atmen'],
      ],
      say: ['ich mache', 'du arbeitest', 'er tanzt', 'wir atmen', 'ihr arbeitet', 'sie machen'],
    },
    {
      t: 'tip',
      text: 'A stem ending in **-sch** or **-ch** takes the normal **-st**: suchen → du **suchst**, waschen → du **wäschst**. Only s, ß, z and x are shortened.',
    },
    {
      t: 'ex',
      items: [
        { de: 'Du heißt Tom.', hi: 'Your name is Tom.' },
        { de: 'Wir tanzen, aber du tanzt nicht.', hi: 'We are dancing, but you are not.' },
        { de: 'Ihr arbeitet heute.', hi: 'You are working today.' },
        { de: 'Es regnet.', hi: 'It is raining.' },
        { de: 'Du redest viel.', hi: 'You talk a lot.' },
      ],
    },
    {
      t: 'rule',
      title: 'Regel — alle Nomen groß',
      body: 'Every **noun** is written with a capital letter, also in the middle of a sentence: der **Mann**, die **Musik**, das **Hobby**.\n\n- The pronoun **ich** is **not** capitalised, but formal **Sie** is.\n- An infinitive used as a noun is capitalised too: Mein Hobby ist **Fotografieren**.',
    },
    {
      t: 'compare',
      rows: [
        { wrong: 'Nina arbeitet Morgen.', right: 'Nina arbeitet morgen.', why: 'small m: morgen = tomorrow (an adverb).' },
        { wrong: 'Guten morgen!', right: 'Guten Morgen!', why: 'capital M: der Morgen = the morning (a noun).' },
        { wrong: 'ich höre gern musik', right: 'Ich höre gern Musik.', why: 'A sentence starts with a capital, and every noun is capitalised: Musik. ich is capitalised only at the start of a sentence.' },
      ],
    },

    /* ───────────── 4 ───────────── */
    { t: 'h', text: '4 · Unregelmäßige Verben' },
    {
      t: 'p',
      text: 'A group of very common verbs **changes the stem vowel**, but **only in du and er/sie/es**. ich, wir, ihr and sie/Sie keep the normal stem.\n\nThese verbs are fixed, so you cannot work them out: learn them from the lists below.\n\nThe three main patterns are:\n\n- **a → ä**\n- **e → i**\n- **e → ie**\n\nA rarer one is au → äu: laufen → er läuft.',
    },
    {
      t: 'conj',
      verb: 'fahren',
      en: 'to drive, to travel — a → ä',
      rows: [
        { pron: 'ich', stem: 'fahr', ending: 'e' },
        { pron: 'du', stem: 'fähr', ending: 'st' },
        { pron: 'er / sie / es', stem: 'fähr', ending: 't' },
        { pron: 'wir', stem: 'fahr', ending: 'en' },
        { pron: 'ihr', stem: 'fahr', ending: 't' },
        { pron: 'sie / Sie', stem: 'fahr', ending: 'en' },
      ],
      note: 'Only the du and er/sie/es rows have ä.',
    },
    {
      t: 'conj',
      verb: 'essen',
      en: 'to eat — e → i, and du takes only -t',
      rows: [
        { pron: 'ich', stem: 'ess', ending: 'e' },
        { pron: 'du', stem: 'iss', ending: 't' },
        { pron: 'er / sie / es', stem: 'iss', ending: 't' },
        { pron: 'wir', stem: 'ess', ending: 'en' },
        { pron: 'ihr', stem: 'ess', ending: 't' },
        { pron: 'sie / Sie', stem: 'ess', ending: 'en' },
      ],
      note: 'The stem ends in s, so the s-rule from section 3 also applies: du isst (not "issst").',
    },
    {
      t: 'table',
      caption: 'Die wichtigsten Verben mit Vokalwechsel',
      head: ['Muster', 'Infinitiv', 'du', 'er / sie / es', 'English'],
      rows: [
        ['a → ä', 'fahren', 'fährst', 'fährt', 'to drive, to travel'],
        ['a → ä', 'schlafen', 'schläfst', 'schläft', 'to sleep'],
        ['a → ä', 'raten', 'rätst', 'rät', 'to guess, to advise'],
        ['a → ä', 'tragen', 'trägst', 'trägt', 'to carry, to wear'],
        ['a → ä', 'waschen', 'wäschst', 'wäscht', 'to wash'],
        ['a → ä', 'halten', 'hältst', 'hält', 'to hold, to stop'],
        ['e → i', 'sprechen', 'sprichst', 'spricht', 'to speak'],
        ['e → i', 'essen', 'isst', 'isst', 'to eat'],
        ['e → i', 'geben', 'gibst', 'gibt', 'to give'],
        ['e → i', 'helfen', 'hilfst', 'hilft', 'to help'],
        ['e → i', 'treffen', 'triffst', 'trifft', 'to meet'],
        ['e → i', 'werfen', 'wirfst', 'wirft', 'to throw'],
        ['e → i', 'nehmen', 'nimmst', 'nimmt', 'to take (h becomes mm)'],
        ['e → ie', 'lesen', 'liest', 'liest', 'to read'],
        ['e → ie', 'sehen', 'siehst', 'sieht', 'to see'],
        ['e → ie', 'empfehlen', 'empfiehlst', 'empfiehlt', 'to recommend'],
      ],
      say: ['du fährst', 'du schläfst', 'du rätst', 'du trägst', 'du wäschst', 'du hältst', 'du sprichst', 'du isst', 'du gibst', 'du hilfst', 'du triffst', 'du wirfst', 'du nimmst', 'du liest', 'du siehst', 'du empfiehlst'],
    },
    {
      t: 'table',
      caption: 'Vier Verben im Überblick',
      head: ['Person', 'kochen', 'arbeiten', 'lesen', 'sprechen'],
      rows: [
        ['ich', 'koche', 'arbeite', 'lese', 'spreche'],
        ['du', 'kochst', 'arbeitest', 'liest', 'sprichst'],
        ['er / sie / es', 'kocht', 'arbeitet', 'liest', 'spricht'],
        ['wir', 'kochen', 'arbeiten', 'lesen', 'sprechen'],
        ['ihr', 'kocht', 'arbeitet', 'lest', 'sprecht'],
        ['sie / Sie', 'kochen', 'arbeiten', 'lesen', 'sprechen'],
      ],
      say: ['ich koche', 'du arbeitest', 'er liest', 'wir sprechen', 'ihr lest', 'sie kochen'],
    },
    {
      t: 'warn',
      text: 'The vowel changes **only** for **du** and **er/sie/es**.\n\n- Say **ich lese**, **wir lesen**, **ihr lest**, **ihr fahrt**, **ihr sprecht**.\n- Not every verb with an a or e changes: **tanzen** stays **du tanzt**, **gehen** stays **du gehst**, and machen, spielen, lernen have no vowel change either.',
    },
    {
      t: 'tip',
      text: 'When the stem ends in **-t** (halten, raten), the vowel-change forms get neither the extra -e- of section 3 nor a second t:\n\n- du **hältst**, er **hält**\n- du **rätst**, er **rät**\n- but ihr **haltet**, ihr **ratet**',
    },
    {
      t: 'ex',
      items: [
        { de: 'Er fährt nach Deutschland.', hi: 'He is travelling to Germany.' },
        { de: 'Du isst gern Pizza.', hi: 'You like eating pizza.' },
        { de: 'Sie spricht gut Deutsch.', hi: 'She speaks German well.' },
        { de: 'Maria empfiehlt ein Restaurant.', hi: 'Maria recommends a restaurant.' },
        { de: 'Er schläft um zehn Uhr.', hi: 'He sleeps at ten o’clock.' },
        { de: 'Du liest ein Buch.', hi: 'You are reading a book.' },
      ],
    },
    {
      t: 'tip',
      text: 'The Kursbuch lists all irregular verbs on pp. 160–161 (for example essen, fahren, geben, lesen, nehmen, schlafen, sehen, sprechen, treffen, waschen, empfehlen).\n\n- That list is for looking things up, not for learning in one go: the verbs above are the ones you need first.\n- It also contains verbs such as gehen, kommen, singen and schwimmen: they are regular in the present tense and are "irregular" only in their past forms (later).',
    },

    /* ───────────── 5 ───────────── */
    { t: 'h', text: '5 · Satzbau und nur ein Präsens' },
    {
      t: 'rule',
      title: 'Regel — das Verb steht auf Position 2',
      body: 'A statement needs a **subject**, a **verb** and often an **object** or an adjective. The **conjugated verb is always the second element** of the sentence.\n\n- Only the **subject** decides the verb ending; an object never does.\n- The first position can be the subject, but also an object or a time word. Then the verb still stays second, and the subject moves behind it.',
    },
    {
      t: 'sentence',
      items: [
        { parts: [{ text: 'Ich', role: 'subj' }, { text: 'lerne', role: 'verb' }, { text: 'Deutsch', role: 'obj' }, { text: '.', role: 'other' }], en: 'I am learning German.' },
        { parts: [{ text: 'Heute', role: 'time' }, { text: 'lerne', role: 'verb' }, { text: 'ich', role: 'subj' }, { text: 'Deutsch', role: 'obj' }, { text: '.', role: 'other' }], en: 'Today I am learning German. (the verb stays second)' },
        { parts: [{ text: 'Musik', role: 'obj' }, { text: 'höre', role: 'verb' }, { text: 'ich', role: 'subj' }, { text: 'gern', role: 'other' }, { text: '.', role: 'other' }], en: 'Music, I like listening to. (the verb stays second)' },
        { parts: [{ text: 'Aman und Sachin', role: 'subj' }, { text: 'lernen', role: 'verb' }, { text: 'Deutsch', role: 'obj' }, { text: '.', role: 'other' }], en: 'Aman and Sachin are learning German. (position 1 can be several words)' },
        { parts: [{ text: 'Boris', role: 'subj' }, { text: 'kocht', role: 'verb' }, { text: 'nicht so gern', role: 'neg' }, { text: '.', role: 'other' }], en: 'Boris does not like cooking that much.' },
        { parts: [{ text: 'Ich', role: 'subj' }, { text: 'lerne', role: 'verb' }, { text: 'Deutsch', role: 'obj' }, { text: 'und', role: 'other' }, { text: 'er', role: 'subj' }, { text: 'lernt', role: 'verb' }, { text: 'Chinesisch', role: 'obj' }, { text: '.', role: 'other' }], en: 'I am learning German and he is learning Chinese. (und joins two sentences; each has its own subject and verb)' },
      ],
    },
    {
      t: 'compare',
      rows: [
        { wrong: 'Boris nicht gern kocht.', right: 'Boris kocht nicht gern.', why: 'The verb must be in position 2, not at the end.' },
        { wrong: 'Heute ich lerne Deutsch.', right: 'Heute lerne ich Deutsch.', why: 'After a time word the verb comes next, then the subject.' },
        { wrong: 'Ich gern höre Musik.', right: 'Ich höre gern Musik.', why: 'The verb must be in position 2, so after the subject comes the verb, then gern.' },
      ],
    },
    {
      t: 'rule',
      title: 'Regel — German has only one present tense',
      body: 'English has two ("I go" and "I am going"); German has **one**, and it covers both.\n\n- **Ich gehe** = I go = I am going.\n- **Ich lerne Deutsch** = I learn German = I am learning German.\n- **Aman und Sachin lernen Deutsch** = they learn / they are learning.\n- There is **no -ing form**, so never translate "am / is / are + -ing" word by word.',
    },
    {
      t: 'compare',
      rows: [
        { wrong: 'Ich bin gehe.', right: 'Ich gehe.', why: 'No sein before another verb: one present tense.' },
        { wrong: 'Wir sind essen Pizza.', right: 'Wir essen Pizza.', why: '"We are eating" = wir essen.' },
        { wrong: 'Er ist trinkt Kaffee.', right: 'Er trinkt Kaffee.', why: '"He is drinking" = er trinkt.' },
        { wrong: 'Ich bin lerne Deutsch.', right: 'Ich lerne Deutsch.', why: 'Same rule: the one verb carries the whole meaning.' },
      ],
    },

    /* ───────────── 6 ───────────── */
    { t: 'h', text: '6 · sein und haben' },
    {
      t: 'table',
      caption: 'sein und haben',
      head: ['Person', 'sein (to be)', 'haben (to have)'],
      rows: [
        ['ich', 'bin', 'habe'],
        ['du', 'bist', 'hast'],
        ['er / sie / es', 'ist', 'hat'],
        ['wir', 'sind', 'haben'],
        ['ihr', 'seid', 'habt'],
        ['sie / Sie', 'sind', 'haben'],
      ],
      say: ['ich bin', 'du bist', 'er ist', 'wir sind', 'ihr seid', 'sie sind'],
    },
    {
      t: 'p',
      text: '**sein** is irregular in every person; **haben** only in **du hast** and **er/sie/es hat** (the b disappears). Learn the table as it is.\n\nIn speech people often shorten **ich habe** to **ich hab’**.\n\nBoth verbs are **main verbs** here:\n\n- **sein** says what someone or something is (a state, a job, a place)\n- **haben** says what someone has',
    },
    {
      t: 'ex',
      items: [
        { de: 'Ich bin verheiratet.', hi: 'I am married.' },
        { de: 'Er ist ledig.', hi: 'He is single.' },
        { de: 'Ich bin Student.', hi: 'I am a student.' },
        { de: 'Jonas ist Ingenieur.', hi: 'Jonas is an engineer.' },
        { de: 'Tom hat zwei Kinder.', hi: 'Tom has two children.' },
        { de: 'Ich habe einen Bruder.', hi: 'I have a brother.' },
      ],
    },
    {
      t: 'tip',
      text: 'Learn both as they stand for now:\n\n- There is no **ein** before the job in **Ich bin Student** (details on **Tag 7**).\n- **einen Bruder** has an ending because the object is masculine (details on **Tag 11**).',
    },
    {
      t: 'rule',
      title: 'Regel — zu Hause oder nach Hause',
      body: 'Two fixed phrases, and only the second one shows direction.\n\n- Being at home is **zu Hause** (with **sein**): **Ich bin zu Hause.**\n- Going home is **nach Hause** (with **gehen** or **fahren**): **Ich gehe nach Hause.**',
    },
    {
      t: 'compare',
      rows: [
        { wrong: 'Ich bin nach Hause.', right: 'Ich bin zu Hause.', why: 'No movement: zu Hause.' },
        { wrong: 'Ich gehe zu Hause.', right: 'Ich gehe nach Hause.', why: 'Movement towards home: nach Hause.' },
      ],
    },

    /* ───────────── 7 ───────────── */
    { t: 'h', text: '7 · Hobbys und gern' },
    { t: 'figure', art: 'd05-hobbys', alt: 'A cutaway house: one person cooking in the kitchen, another reading with headphones, a third singing', caption: 'Was machen die Leute gern?' },
    {
      t: 'tiles',
      cols: 3,
      items: [
        { big: 'fotografieren', small: 'to take photos', sub: 'Wir fotografieren gern.', say: 'Wir fotografieren gern.' },
        { big: 'singen', small: 'to sing', sub: 'Ich singe nicht so gern.', say: 'Ich singe nicht so gern.' },
        { big: 'tanzen', small: 'to dance', sub: 'Wir tanzen nicht so gern.', say: 'Wir tanzen nicht so gern.' },
        { big: 'joggen', small: 'to jog', sub: 'Maya joggt nicht so gern.', say: 'Maya joggt nicht so gern.' },
        { big: 'Musik hören', small: 'to listen to music', sub: 'Ich höre gern Musik.', say: 'Ich höre gern Musik.' },
        { big: 'kochen', small: 'to cook', sub: 'Sita und Geeta kochen gern.', say: 'Sita und Geeta kochen gern.' },
        { big: 'schwimmen', small: 'to swim', sub: 'Ihr schwimmt gern.', say: 'Ihr schwimmt gern.' },
        { big: 'reisen', small: 'to travel', sub: 'Ich reise gern.', say: 'Ich reise gern.' },
        { big: 'ins Kino gehen', small: 'to go to the cinema', sub: 'Er geht gern ins Kino.', say: 'Er geht gern ins Kino.' },
        { big: 'lesen', small: 'to read', sub: 'Ihr lest gern.', say: 'Ihr lest gern.' },
      ],
    },
    {
      t: 'rule',
      title: 'Regel — Verb + gern',
      body: 'To say you like doing something, German normally uses no "like" verb. You conjugate the verb and add **gern**: **Ich koche gern** = I like cooking.\n\n- Not liking it is **nicht gern**, or the softer **nicht so gern**.\n- **gern** is an **adverb**: it takes no ending for the person and it cannot replace the verb.\n- **gerne** means the same; the Kursbuch uses **gern**.',
    },
    {
      t: 'tiles',
      cols: 4,
      items: [
        { big: 'sehr gern', small: 'very much', sub: 'Ich reise sehr gern.', say: 'Ich reise sehr gern.' },
        { big: 'gern', small: 'like doing', sub: 'Ich singe gern.', say: 'Ich singe gern.' },
        { big: 'Es geht so.', small: 'so-so', sub: 'a short answer', say: 'Es geht so.' },
        { big: 'nicht so gern', small: 'not that much', sub: 'Wir tanzen nicht so gern.', say: 'Wir tanzen nicht so gern.' },
      ],
    },
    {
      t: 'tip',
      text: 'With an object, **gern** can stand before or after it, because only the verb position is fixed.\n\n- **Ich höre gern Musik** = **Ich höre Musik gern**\n- With **sprechen** and **gut**, both orders are correct too: **Eva spricht gut Deutsch** (the order of the Übungsbuch exercise, p. 20, 3g) = **Eva spricht Deutsch gut**\n- Keep the name as the subject: **Maya joggt nicht so gern.**',
    },
    {
      t: 'ex',
      items: [
        { de: 'Sachin singt gern.', hi: 'Sachin likes singing.' },
        { de: 'Ich höre Musik nicht so gern.', hi: 'I do not like listening to music that much.' },
        { de: 'Eva und Nina reisen gern.', hi: 'Eva and Nina like travelling.' },
        { de: 'Boris tanzt gern.', hi: 'Boris likes dancing.' },
        { de: 'Nina arbeitet morgen.', hi: 'Nina is working tomorrow. (start with the name)' },
        { de: 'Ihr lest gern.', hi: 'You all like reading.' },
      ],
    },
    {
      t: 'p',
      text: 'Questions with gern (**Hörst du gern Musik?**) and the answers to them follow on **Tag 6**.',
    },
    {
      t: 'rule',
      title: 'Strategie — Sprechen Teil 1: Hobby?',
      body: 'In the speaking exam Part 1 you introduce yourself from keyword cards. The Übungsbuch shows the cards **Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?** (UB p. 45).\n\nFor **Hobby?** prepare two sentences:\n\n- **Mein Hobby ist Fotografieren.** (the infinitive is a noun here, so it is capitalised)\n- **Meine Hobbys sind Lesen und Kochen.** (plural: **Hobbys**)\n\nThen add a sentence with gern: **Ich koche gern.**',
    },
    {
      t: 'p',
      text: 'Short text for reading practice (exam-style):',
    },
    {
      t: 'ex',
      items: [
        { de: 'Ich bin Lena. Ich wohne in Köln. Ich lese gern und ich koche gern.', hi: 'I am Lena. I live in Cologne. I like reading and I like cooking.' },
        { de: 'Tim und ich reisen sehr gern. Tim tanzt gern, aber er singt nicht so gern.', hi: 'Tim and I like travelling very much. Tim likes dancing, but he does not like singing that much.' },
        { de: 'Er joggt auch nicht gern. Ich jogge sehr gern.', hi: 'He does not like jogging either. I like jogging very much.' },
      ],
    },
    {
      t: 'tip',
      text: '**Tim und ich** = **wir**, so the verb is **reisen** (not reise, not reist).',
    },
    {
      t: 'sticky',
      text: 'Choose five hobbies from the tiles. Say one sentence about yourself with ich (sehr gern, gern or nicht so gern), then change the same sentence for du, er, wir and ihr. Say each verb ending out loud. Then do the Kursbuch partner task (p. 20, 3c): one person says an infinitive, the next a pronoun, the third the correct form, for example: singen, ihr, ihr singt.',
    },
  ],
  vocab: [
    { de: 'gehen', hi: 'जाना', en: 'to go', type: 'verb', forms: 'ich gehe · du gehst · er geht', ex: 'Wir gehen nach Hause.', exHi: 'We are going home.' },
    { de: 'suchen', hi: 'ढूँढना', en: 'to look for, to search', type: 'verb', ex: 'Sie sucht ein Buch.', exHi: 'She is looking for a book.' },
    { de: 'singen', hi: 'गाना', en: 'to sing', type: 'verb', ex: 'Sachin singt gern.', exHi: 'Sachin likes singing.' },
    { de: 'tanzen', hi: 'नाचना', en: 'to dance', type: 'verb', forms: 'ich tanze · du tanzt · er tanzt', ex: 'Boris tanzt gern.', exHi: 'Boris likes dancing.' },
    { de: 'arbeiten', hi: 'काम करना', en: 'to work', type: 'verb', forms: 'ich arbeite · du arbeitest · er arbeitet', ex: 'Nina arbeitet morgen.', exHi: 'Nina is working tomorrow.' },
    { de: 'reden', hi: 'बात करना', en: 'to talk', type: 'verb', forms: 'ich rede · du redest · er redet', ex: 'Du redest viel.', exHi: 'You talk a lot.' },
    { de: 'atmen', hi: 'साँस लेना', en: 'to breathe', type: 'verb', forms: 'ich atme · du atmest · er atmet', ex: 'Er atmet langsam.', exHi: 'He breathes slowly.' },
    { de: 'schwimmen', hi: 'तैरना', en: 'to swim', type: 'verb', ex: 'Ihr schwimmt gern.', exHi: 'You all like swimming.' },
    { de: 'joggen', hi: 'दौड़ना (जॉगिंग करना)', en: 'to jog', type: 'verb', ex: 'Maya joggt nicht so gern.', exHi: 'Maya does not like jogging that much.' },
    { de: 'kochen', hi: 'खाना पकाना', en: 'to cook', type: 'verb', ex: 'Boris kocht nicht gern.', exHi: 'Boris does not like cooking.' },
    { de: 'reisen', hi: 'यात्रा करना', en: 'to travel', type: 'verb', forms: 'ich reise · du reist · er reist', ex: 'Ich reise gern.', exHi: 'I like travelling.' },
    { de: 'fotografieren', hi: 'फ़ोटो खींचना', en: 'to take photos', type: 'verb', ex: 'Wir fotografieren gern.', exHi: 'We like taking photos.' },
    { de: 'hören', hi: 'सुनना', en: 'to hear, to listen', type: 'verb', ex: 'Ich höre gern Musik.', exHi: 'I like listening to music.' },
    { de: 'spielen', hi: 'खेलना', en: 'to play', type: 'verb', ex: 'Peter spielt gern Fußball.', exHi: 'Peter likes playing football.' },
    { de: 'machen', hi: 'करना, बनाना', en: 'to do, to make', type: 'verb', ex: 'Was machst du gern?', exHi: 'What do you like doing?' },
    { de: 'lieben', hi: 'प्यार करना, बहुत पसंद करना', en: 'to love', type: 'verb', ex: 'Ich liebe Musik.', exHi: 'I love music.' },
    { de: 'nennen', hi: 'नाम बताना, गिनाना', en: 'to name, to list', type: 'verb', ex: 'Nennen Sie drei Hobbys.', exHi: 'Name three hobbies.' },
    { de: 'stehen', hi: 'खड़ा होना; (कहीं) होना या लिखा होना', en: 'to stand; to be (placed or written somewhere)', type: 'verb', ex: 'Wo steht das Verb? — Auf Position 2.', exHi: 'Where is the verb? — In position 2.' },
    { de: 'lesen', hi: 'पढ़ना', en: 'to read', type: 'verb', forms: 'ich lese · du liest · er liest', ex: 'Du liest ein Buch.', exHi: 'You are reading a book.' },
    { de: 'fahren', hi: 'गाड़ी चलाना, (वाहन से) जाना', en: 'to drive, to travel', type: 'verb', forms: 'ich fahre · du fährst · er fährt', ex: 'Er fährt nach Deutschland.', exHi: 'He is travelling to Germany.' },
    { de: 'schlafen', hi: 'सोना', en: 'to sleep', type: 'verb', forms: 'ich schlafe · du schläfst · er schläft', ex: 'Er schläft um zehn Uhr.', exHi: 'He sleeps at ten o’clock.' },
    { de: 'raten', hi: 'अंदाज़ा लगाना; सलाह देना', en: 'to guess; to advise', type: 'verb', forms: 'ich rate · du rätst · er rät', ex: 'Sie rät die Zahl.', exHi: 'She guesses the number.' },
    { de: 'halten', hi: 'पकड़ना, थामना; रुकना', en: 'to hold; to stop', type: 'verb', forms: 'ich halte · du hältst · er hält', ex: 'Er hält die Flasche.', exHi: 'He is holding the bottle.' },
    { de: 'waschen', hi: 'धोना', en: 'to wash', type: 'verb', forms: 'ich wasche · du wäschst · er wäscht', ex: 'Er wäscht das Handtuch.', exHi: 'He is washing the towel.' },
    { de: 'essen', hi: 'खाना', en: 'to eat', type: 'verb', forms: 'ich esse · du isst · er isst', ex: 'Du isst gern Pizza.', exHi: 'You like eating pizza.' },
    { de: 'geben', hi: 'देना', en: 'to give', type: 'verb', forms: 'ich gebe · du gibst · er gibt', ex: 'Er gibt Tom ein Buch.', exHi: 'He gives Tom a book.' },
    { de: 'helfen', hi: 'मदद करना', en: 'to help', type: 'verb', forms: 'ich helfe · du hilfst · er hilft', ex: 'Er hilft gern.', exHi: 'He likes helping.' },
    { de: 'nehmen', hi: 'लेना', en: 'to take', type: 'verb', forms: 'ich nehme · du nimmst · er nimmt', ex: 'Sie nimmt die Flasche.', exHi: 'She takes the bottle.' },
    { de: 'werfen', hi: 'फेंकना', en: 'to throw', type: 'verb', forms: 'ich werfe · du wirfst · er wirft', ex: 'Das Kind wirft den Ball.', exHi: 'The child throws the ball.' },
    { de: 'sehen', hi: 'देखना', en: 'to see', type: 'verb', forms: 'ich sehe · du siehst · er sieht', ex: 'Du siehst einen Film.', exHi: 'You are watching a film.' },
    { de: 'empfehlen', hi: 'सुझाव देना, सिफ़ारिश करना', en: 'to recommend', type: 'verb', forms: 'ich empfehle · du empfiehlst · er empfiehlt', ex: 'Maria empfiehlt ein Restaurant.', exHi: 'Maria recommends a restaurant.' },
    { de: 'haben', hi: 'पास होना, रखना', en: 'to have', type: 'verb', forms: 'ich habe · du hast · er hat · wir haben · ihr habt', ex: 'Tom hat zwei Kinder.', exHi: 'Tom has two children.' },
    { de: 'gern', hi: 'ख़ुशी से, शौक़ से', en: 'gladly, like doing', type: 'adv', ex: 'Ich koche gern.', exHi: 'I like cooking.' },
    { de: 'nicht so gern', hi: 'ज़्यादा पसंद नहीं', en: 'not that much', type: 'phrase', ex: 'Wir tanzen nicht so gern.', exHi: 'We do not like dancing that much.' },
    { de: 'Es geht so.', hi: 'बस ठीक-ठाक', en: 'So-so.', type: 'phrase', ex: 'Es geht so.', exHi: 'It is so-so.' },
    { de: 'toll', hi: 'बढ़िया, शानदार', en: 'great, fantastic', type: 'adj', ex: 'Tanzen ist toll!', exHi: 'Dancing is great!' },
    { de: 'lustig', hi: 'मज़ेदार, हँसमुख', en: 'funny, fun', type: 'adj', ex: 'Tim ist lustig.', exHi: 'Tim is funny.' },
    { de: 'wirklich', hi: 'सच में, वाक़ई', en: 'really', type: 'adv', ex: 'Er kocht wirklich gern.', exHi: 'He really likes cooking.' },
    { de: 'das Hobby', hi: 'शौक़', en: 'hobby', type: 'noun', gender: 'n', pl: 'die Hobbys', ex: 'Mein Hobby ist Fotografieren.', exHi: 'My hobby is taking photos.' },
    { de: 'Musik hören', hi: 'संगीत सुनना', en: 'to listen to music', type: 'phrase', ex: 'Ich höre gern Musik.', exHi: 'I like listening to music.' },
    { de: 'ins Kino gehen', hi: 'सिनेमा जाना', en: 'to go to the cinema', type: 'phrase', ex: 'Er geht gern ins Kino.', exHi: 'He likes going to the cinema.' },
    { de: 'das Kino', hi: 'सिनेमा हॉल', en: 'cinema', type: 'noun', gender: 'n', pl: 'die Kinos', ex: 'Das Kino ist groß.', exHi: 'The cinema is big.' },
    { de: 'die Musik', hi: 'संगीत', en: 'music', type: 'noun', gender: 'f', ex: 'Die Musik ist toll.', exHi: 'The music is great.' },
    { de: 'der Fußball', hi: 'फ़ुटबॉल', en: 'football', type: 'noun', gender: 'm', ex: 'Peter spielt gern Fußball.', exHi: 'Peter likes playing football.' },
    { de: 'zu Hause', hi: 'घर पर', en: 'at home', type: 'phrase', ex: 'Ich bin zu Hause.', exHi: 'I am at home.' },
    { de: 'nach Hause', hi: 'घर की ओर', en: 'home (direction)', type: 'phrase', ex: 'Ich gehe nach Hause.', exHi: 'I am going home.' },
    { de: 'verheiratet', hi: 'शादीशुदा', en: 'married', type: 'adj', ex: 'Ich bin verheiratet.', exHi: 'I am married.' },
    { de: 'ledig', hi: 'अविवाहित', en: 'single, unmarried', type: 'adj', ex: 'Er ist ledig.', exHi: 'He is single.' },
    { de: 'das Kind', hi: 'बच्चा', en: 'child', type: 'noun', gender: 'n', pl: 'die Kinder', ex: 'Tom hat zwei Kinder.', exHi: 'Tom has two children.' },
    { de: 'der Bruder', hi: 'भाई', en: 'brother', type: 'noun', gender: 'm', pl: 'die Brüder', ex: 'Ich habe einen Bruder.', exHi: 'I have a brother.' },
    { de: 'der Freund', hi: 'दोस्त (पुरुष)', en: 'friend (male); also boyfriend', type: 'noun', gender: 'm', pl: 'die Freunde', ex: 'Tim und Ben sind Freunde.', exHi: 'Tim and Ben are friends.' },
    { de: 'die Freundin', hi: 'दोस्त (महिला), सहेली', en: 'friend (female); also girlfriend', type: 'noun', gender: 'f', pl: 'die Freundinnen', ex: 'Anna und Lisa sind Freundinnen.', exHi: 'Anna and Lisa are friends.' },
    { de: 'der Kollege', hi: 'सहकर्मी (पुरुष)', en: 'colleague (male)', type: 'noun', gender: 'm', pl: 'die Kollegen', ex: 'Tim und Ben sind Kollegen.', exHi: 'Tim and Ben are colleagues.' },
    { de: 'die Kollegin', hi: 'सहकर्मी (महिला)', en: 'colleague (female)', type: 'noun', gender: 'f', pl: 'die Kolleginnen', ex: 'Anna und Lisa sind Kolleginnen.', exHi: 'Anna and Lisa are colleagues.' },
    { de: 'der Ingenieur', hi: 'इंजीनियर', en: 'engineer', type: 'noun', gender: 'm', pl: 'die Ingenieure', ex: 'Jonas ist Ingenieur.', exHi: 'Jonas is an engineer.' },
    { de: 'der Student', hi: 'छात्र', en: 'student (male)', type: 'noun', gender: 'm', pl: 'die Studenten', ex: 'Ich bin Student.', exHi: 'I am a student.' },
    { de: 'die Million', hi: 'दस लाख', en: 'million', type: 'noun', gender: 'f', pl: 'die Millionen', ex: 'Das ist eine Million.', exHi: 'That is one million.' },
    { de: 'die Milliarde', hi: 'अरब', en: 'billion (10⁹)', type: 'noun', gender: 'f', pl: 'die Milliarden', ex: 'Das sind zwei Milliarden.', exHi: 'That is two billion.' },
    { de: 'morgen', hi: 'कल (आने वाला)', en: 'tomorrow', type: 'adv', ex: 'Nina arbeitet morgen.', exHi: 'Nina is working tomorrow.' },
    { de: 'heute', hi: 'आज', en: 'today', type: 'adv', ex: 'Heute arbeite ich nicht.', exHi: 'Today I am not working.' },
    { de: 'der Moment', hi: 'पल, क्षण', en: 'moment; im Moment = at the moment', type: 'noun', gender: 'm', pl: 'die Momente', ex: 'Im Moment lerne ich Deutsch.', exHi: 'At the moment I am learning German.' },
    { de: 'der Morgen', hi: 'सुबह', en: 'morning', type: 'noun', gender: 'm', pl: 'die Morgen', ex: 'Der Morgen ist schön.', exHi: 'The morning is lovely.' },
    { de: 'das Verb', hi: 'क्रिया', en: 'verb', type: 'noun', gender: 'n', pl: 'die Verben', ex: 'Das Verb steht auf Position 2.', exHi: 'The verb is in position 2.' },
    { de: 'der Infinitiv', hi: 'क्रिया का मूल रूप', en: 'infinitive', type: 'noun', gender: 'm', pl: 'die Infinitive', ex: 'Kommen ist der Infinitiv.', exHi: 'Kommen is the infinitive.' },
    { de: 'der Stamm', hi: 'क्रिया का मूल भाग', en: 'stem', type: 'noun', gender: 'm', pl: 'die Stämme', ex: 'Der Stamm von kommen ist komm.', exHi: 'The stem of kommen is komm.' },
    { de: 'die Endung', hi: 'अंत, प्रत्यय', en: 'ending', type: 'noun', gender: 'f', pl: 'die Endungen', ex: 'Die Endung steht am Ende des Verbs.', exHi: 'The ending is at the end of the verb.' },
  ],
  exercises: [
    /* Millionen */
    { k: 'mcq', q: 'How do you write 2.000.000?', options: ['zwei Million', 'zwei Millionen', 'zweimillionen', 'zwei Milliarden'], a: 1, why: 'Million is a noun with a plural: eine Million, zwei Millionen (two words, capital M). Milliarden would be 2.000.000.000.' },
    { k: 'mcq', q: 'Which number is 100.000 (one lakh)?', options: ['hunderttausend', 'eine Million', 'zehntausend', 'tausend hundert'], a: 0, why: '100.000 = hunderttausend. A million has six zeros.' },
    { k: 'fill', q: '1.000.000 = ___ Million.', a: ['eine', 'Eine'], why: 'Million is feminine: eine Million (not "ein Million").' },

    /* Stamm + Endung */
    { k: 'fill', q: 'Ich ___ Deutsch.  (lernen)', a: ['lerne'], why: 'Stem lern + -e for ich.' },
    { k: 'fill', q: 'Du ___ gern Musik.  (hören)', a: ['hörst'], why: 'Stem hör + -st for du.' },
    { k: 'fill', q: 'Das ist Frau Lang. Sie ___ aus Deutschland.  (kommen)', a: ['kommt'], why: 'Sie = she here (one woman), so the ending is -t.' },
    { k: 'fill', q: 'Maya und Sophie ___ gern.  (singen)', a: ['singen'], why: 'Two names = sie (they): -en.' },
    { k: 'fill', q: 'Jonas ___ Chinesisch.  (lernen)', a: ['lernt'], why: 'One name = er/sie/es: -t.' },
    { k: 'mcq', q: 'Which is the stem of "suchen"?', options: ['such', 'suche', 'suchn', 'suchen'], a: 0, why: 'Stem = infinitive minus -en: such.' },
    { k: 'mcq', q: 'Herr Maier, Sie wohnen in Berlin.  Who is "Sie" here?', options: ['she', 'they', 'you (formal)', 'we'], a: 2, why: 'Capital S inside the sentence = formal "you".' },
    { k: 'mcq', q: 'Sie lernt Spanisch.  Who learns Spanish?', options: ['one woman', 'several people', 'you (formal)', 'you all'], a: 0, why: 'The ending -t belongs to er/sie/es: she. They and formal Sie would be lernen.' },
    { k: 'mcq', q: 'Aman und Sachin ___ Deutsch.', options: ['lernt', 'lernen', 'lernst', 'lerne'], a: 1, why: 'Two names = they: lernen.' },
    { k: 'mcq', q: 'You are talking ABOUT Sita and Geeta (two names). Which pronoun replaces them?', options: ['ihr', 'sie', 'Sie', 'er'], a: 1, why: 'Speaking about two people = sie (they). ihr and Sie are only for people you are talking TO.' },

    /* Rechtschreibung */
    { k: 'fill', q: 'Du ___ Tom.  (heißen)', a: ['heißt', 'heisst'], why: 'The stem ends in ß, so du takes only -t.' },
    { k: 'fill', q: 'Du ___ sehr gut.  (tanzen)', a: ['tanzt'], why: 'The stem ends in z: du takes only -t.' },
    { k: 'fill', q: 'Ihr ___ gern.  (reisen)', a: ['reist'], why: 'ihr always takes -t: reis + t.' },
    { k: 'fill', q: 'Du ___ heute.  (arbeiten)', a: ['arbeitest'], why: 'The stem ends in t, so an extra -e- is inserted: arbeitest.' },
    { k: 'mcq', q: 'What is the du form of "atmen" (to breathe)?', options: ['du atmest', 'du atmst', 'du atmt', 'du atmet'], a: 0, why: 'The stem atm ends in consonant + m: extra -e-.' },
    { k: 'mcq', q: 'What is the du form of "wohnen"?', options: ['du wohnest', 'du wohnst', 'du wohnt', 'du wohnn'], a: 1, why: 'After h there is no extra -e-: du wohnst.' },
    { k: 'mcq', q: 'Which sentence is spelled correctly?', options: ['Wir fahren morgen nach Berlin.', 'wir fahren Morgen nach Berlin.', 'Wir Fahren morgen nach Berlin.', 'Wir fahren morgen nach berlin.'], a: 0, why: 'Sentence start and nouns/names are capitalised; morgen (tomorrow) is small. Berlin is a name, so capital B.' },

    /* unregelmäßige Verben */
    { k: 'fill', q: 'Er ___ nach Köln.  (fahren)', a: ['fährt'], why: 'a becomes ä in er/sie/es: er fährt.' },
    { k: 'fill', q: 'Du ___ gern Pizza.  (essen)', a: ['isst'], why: 'e becomes i, and the stem ends in s, so du takes only -t: du isst.' },
    { k: 'fill', q: 'Das ist Eva. Sie ___ gut Deutsch.  (sprechen)', a: ['spricht'], why: 'Sie = she (Eva), and sprechen changes e to i in er/sie/es: spricht.' },
    { k: 'fill', q: 'Ihr ___ viel.  (lesen)', a: ['lest'], why: 'ihr is regular: les + t.' },
    { k: 'fill', q: 'Er ___ um zehn Uhr.  (schlafen)', a: ['schläft'], why: 'a becomes ä: er schläft.' },
    { k: 'fill', q: 'Du ___ einen Film.  (sehen)', a: ['siehst'], why: 'sehen: e becomes ie in du: siehst.' },
    { k: 'fill', q: 'Maria ___ ein Restaurant.  (empfehlen)', a: ['empfiehlt'], why: 'empfehlen: e becomes ie in er/sie/es.' },
    { k: 'mcq', q: 'Which verb does NOT change its vowel in the du form?', options: ['fahren', 'essen', 'tanzen', 'sehen'], a: 2, why: 'fahren → fährst, essen → isst, sehen → siehst, but tanzen stays du tanzt.' },

    /* Satzbau */
    { k: 'order', hi: 'Today I am cooking spaghetti. (start with Heute)', words: ['Heute', 'koche', 'ich', 'Spaghetti', '.'], a: 'Heute koche ich Spaghetti .', why: 'After the time word the verb is second, then the subject.' },
    { k: 'order', hi: 'Boris does not like cooking.', words: ['Boris', 'kocht', 'nicht', 'gern', '.'], a: 'Boris kocht nicht gern .', why: 'Subject, verb in position 2, then nicht gern.' },
    { k: 'order', hi: 'Eva speaks German well. (put gut before Deutsch, as in the Übungsbuch)', words: ['Eva', 'spricht', 'gut', 'Deutsch', '.'], a: 'Eva spricht gut Deutsch .', why: 'Verb in position 2. Eva spricht Deutsch gut is also correct; the task asked for gut first.' },
    { k: 'order', hi: 'Eva and Nina like travelling.', words: ['Eva', 'und', 'Nina', 'reisen', 'gern', '.'], a: 'Eva und Nina reisen gern .', why: 'Position 1 is "Eva und Nina"; two names = they, so reisen.' },
    { k: 'order', hi: 'Nina is working tomorrow. (start with the name)', words: ['Nina', 'arbeitet', 'morgen', '.'], a: 'Nina arbeitet morgen .', why: 'A name takes the -et form (stem arbeit); morgen is small.' },
    { k: 'order', hi: 'I do not like cooking that much.', words: ['Ich', 'koche', 'nicht', 'so', 'gern', '.'], a: 'Ich koche nicht so gern .', why: 'The verb koche is second; nicht so gern follows.' },
    { k: 'mcq', q: 'Which sentence about Maya is correct?', options: ['Maya nicht gern joggt.', 'Maya joggt nicht gern.', 'Maya nicht joggt gern.', 'Maya gern nicht joggt.'], a: 1, why: 'Subject, verb in position 2, then nicht gern.' },

    /* ein Präsens, sein, haben */
    { k: 'mcq', q: 'How do you say "They are learning German"?', options: ['Sie sind lernen Deutsch.', 'Sie lernen Deutsch.', 'Sie haben lernen Deutsch.', 'Sie sind Deutsch lernen.'], a: 1, why: 'One present tense: lernen alone covers "learn" and "are learning".' },
    { k: 'mcq', q: 'How do you say "I am going home"?', options: ['Ich bin gehe nach Hause.', 'Ich gehe zu Hause.', 'Ich gehe nach Hause.', 'Ich bin nach Hause.'], a: 2, why: 'gehen (no sein) + nach Hause for direction.' },
    { k: 'fill', q: 'Ich bin ___ Hause.  (I am at home.)', a: ['zu', 'Zu'], why: 'Being at home = zu Hause.' },
    { k: 'fill', q: 'Ich gehe ___ Hause.  (I am going home.)', a: ['nach', 'Nach'], why: 'Going home = nach Hause.' },
    { k: 'fill', q: 'Ihr ___ zu Hause.  (sein)', a: ['seid'], why: 'sein: ihr seid.' },
    { k: 'fill', q: 'Tom ___ zwei Kinder.  (haben)', a: ['hat'], why: 'haben: er/sie/es hat.' },

    /* Hobbys, gern */
    { k: 'mcq', q: 'How do you say "I like cooking"?', options: ['Ich kochen gern.', 'Ich koche gern.', 'Ich gern koche.', 'Ich bin gern kochen.'], a: 1, why: 'Conjugated verb (koche) + gern.' },
    { k: 'mcq', q: 'Which sentence means "I do not like singing that much"?', options: ['Ich singe nicht so gern.', 'Ich singe sehr gern.', 'Ich nicht so gern singe.', 'Ich singe gern nicht.'], a: 0, why: 'nicht so gern = not that much.' },

    /* Lesetext (exam-style practice) */
    { k: 'mcq', q: 'Text: „Ich bin Lena. Ich wohne in Köln. Ich lese gern und ich koche gern. Tim und ich reisen sehr gern. Tim tanzt gern, aber er singt nicht so gern.“  Lena kocht gern.', options: ['Richtig', 'Falsch'], a: 0, why: '"ich koche gern" is in the text.' },
    { k: 'mcq', q: 'Same text.  Tim singt gern.', options: ['Richtig', 'Falsch'], a: 1, why: 'The text says er singt nicht so gern.' },
    { k: 'mcq', q: 'Same text.  Lena und Tim reisen nicht gern.', options: ['Richtig', 'Falsch'], a: 1, why: '"Tim und ich reisen sehr gern" = Tim and Lena like travelling very much.' },

    /* Artikel (vocabulary) */
    { k: 'artikel', noun: 'Hobby', a: 'das', why: 'das Hobby, plural die Hobbys.' },
    { k: 'artikel', noun: 'Million', a: 'die', why: 'die Million, plural die Millionen.' },

    /* listen */
    { k: 'listen', text: 'Ich wohne in Hamburg.', a: ['Ich wohne in Hamburg.', 'Ich wohne in Hamburg'], why: 'ich + stem wohn + -e.' },
    { k: 'listen', text: 'Wir tanzen nicht so gern.', a: ['Wir tanzen nicht so gern.', 'Wir tanzen nicht so gern'], why: 'wir takes the infinitive form; nicht so gern follows the verb.' },
  ],
  examTip:
    'Sprechen Teil 1 (sich vorstellen) uses keyword cards; the Übungsbuch shows Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby? (UB p. 45). Prepare complete sentences for each card and check every verb: with ich a regular verb ends in -e (Ich wohne, Ich koche gern; but Ich bin), and the verb stays in position 2. Two ready hobby sentences are enough: Mein Hobby ist Fotografieren. Ich koche gern.',
}
