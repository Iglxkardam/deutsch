import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 15 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g15: Record<string, Gloss> = {
  arbeitsalltag: { en: 'everyday working life', note: 'die Arbeit + der Alltag' },
  ticketkauf: { en: 'buying a ticket', note: 'der Ticketkauf' },
  tagesticket: { en: 'day ticket', note: 'das Tagesticket' },
  grüßt: { en: 'greets', note: 'grüßen · er / sie / es' },
  kleine: { en: 'small', note: 'klein, declined (plural)' },
  gespräche: { en: 'conversations', note: 'plural of das Gespräch' },
  beispiele: { en: 'examples', note: 'plural of das Beispiel' },
  sätze: { en: 'sentences', note: 'plural of der Satz' },
  verbinden: { en: 'to connect, to join' },
  los: { en: 'going on, loose', note: 'viel los = a lot going on; Was ist los? = What is the matter?' },
  tasse: { en: 'cup', note: 'die Tasse' },
  schere: { en: 'scissors', note: 'die Schere' },
  heft: { en: 'notebook, exercise book', note: 'das Heft' },
  zuverlässig: { en: 'reliable' },
  leben: { en: 'life', note: 'das Leben' },
  wetter: { en: 'weather', note: 'das Wetter' },
  lieder: { en: 'songs', note: 'plural of das Lied' },
  bleibe: { en: 'stay', note: 'bleiben · ich' },
  bleibst: { en: 'stay', note: 'bleiben · du' },
  still: { en: 'quiet, silent' },
  möchtest: { en: 'would like to', note: 'möchten · du' },
  freund: { en: 'friend (male), boyfriend', note: 'der Freund' },
  lustig: { en: 'funny, amusing' },
}
