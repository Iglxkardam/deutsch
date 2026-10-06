import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 8 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g08: Record<string, Gloss> = {
  'sprechtest': { en: 'speaking test', note: 'sprechen + Test' },
  'kapitel': { en: 'chapter' },
  'circa': { en: 'about, approximately' },
  'symbol': { en: 'symbol' },
  'gebäude': { en: 'building, buildings', note: 'das Gebäude' },
  'taxifahrt': { en: 'taxi ride', note: 'das Taxi + die Fahrt' },
  'd-a-ch': { en: 'Germany, Austria, Switzerland', note: 'Deutschland, Österreich, Schweiz' },
  'vorne': { en: 'at the front, up ahead' },
  'adjektiv': { en: 'adjective' },
  'maße': { en: 'measurements', note: 'das Maß, plural' },
  'angeben': { en: 'to give, to state' },
  'kurze': { en: 'short', note: 'kurz, declined' },
  'vokale': { en: 'vowels', note: 'der Vokal, plural' },
  'nennt': { en: 'names, mentions', note: 'nennen, er/sie nennt' },
  'vororte': { en: 'suburbs', note: 'der Vorort, plural' },
}
