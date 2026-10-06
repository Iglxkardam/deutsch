import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 16 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g16: Record<string, Gloss> = {
  üben: { en: 'to practise' },
  einfach: { en: 'simple, easy', note: 'also: simply' },
  beschreiben: { en: 'to describe' },
  turm: { en: 'tower', note: 'der Turm · plural: die Türme' },
  guter: { en: 'good', note: 'gut, declined · masculine, e.g. ein guter Vorschlag' },
  schlage: { en: 'suggest', note: 'vorschlagen · ich: ich schlage … vor' },
  schlägst: { en: 'suggest', note: 'vorschlagen · du' },
  schlägt: { en: 'suggests', note: 'vorschlagen · er / sie / es' },
  her: { en: '(to) here, towards the speaker', note: 'with movement: Kommen Sie her!' },
  hierher: { en: '(to) here, over here', note: 'with movement: Kommen Sie hierher!' },
}
