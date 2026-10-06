import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 1 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g01: Record<string, Gloss> = {
  abschied: { en: 'farewell, goodbye', note: 'der Abschied' },
  herr: { en: 'Mr, sir', note: 'der Herr · used before a surname' },
  laute: { en: 'sounds', note: 'plural of der Laut' },
  leer: { en: 'empty', note: 'adjective' },
  heiß: { en: 'hot', note: 'adjective' },
}
