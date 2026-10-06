import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 4 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g04: Record<string, Gloss> = {
  'verwechseln': { en: 'to mix up, to confuse' },
  'ähnlich': { en: 'similar' },
  'baut': { en: 'builds', note: 'bauen, to build' },
  'arten': { en: 'kinds, ways', note: 'plural of die Art' },
  'zeichen': { en: 'sign, symbol', note: 'das Zeichen' },
  'ät': { en: 'at (the @ sign, as spoken)' },
  'minus': { en: 'minus; spoken for the - sign in an address' },
  'mail': { en: 'mail (as in the address mail.de)' },
  'de': { en: 'the letter D, as in "Punkt de" (.de)' },
  'buchstabieren': { en: 'to spell' },
  'entschuldigung': { en: 'excuse me, sorry' },
  'goethe-zertifikat': { en: 'Goethe certificate (the exam)' },
  'teile': { en: 'parts', note: 'plural of der Teil' },
  'genug': { en: 'enough' },
  'plus': { en: 'plus' },
  'vater': { en: 'father' },
  'stellen': { en: 'to put, to place', note: 'part of sich vorstellen: Stellen Sie sich vor' },
  'handy': { en: 'mobile phone' },
  'zweimal': { en: 'twice' },
  'stichworte': { en: 'keywords', note: 'plural of das Stichwort' },
  'stichwort': { en: 'keyword', note: 'das Stichwort' },
  'doppel': { en: 'double (English-style for a repeated digit; not usual in German)' },
  'sage': { en: 'I say', note: 'ich-form of sagen' },
  'jeder': { en: 'every, each; everyone', note: 'masculine; jede (f), jedes (n)' },
  'einhundert': { en: 'one hundred', note: '= hundert' },
  'eintausend': { en: 'one thousand', note: '= tausend' },
}
