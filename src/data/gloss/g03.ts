import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 3 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g03: Record<string, Gloss> = {
  'vergleich': { en: 'comparison', note: 'im Vergleich = in comparison' },
  'ss': { en: 'double s', note: 'spelling: ss after a short vowel' },
  'irland': { en: 'Ireland', note: 'country' },
  'chat': { en: 'chat', note: 'online chat' },
  'umlaut-taste': { en: 'umlaut key', note: 'key on a keyboard' },
  'lebe': { en: 'live', note: 'ich form of leben' },
}
