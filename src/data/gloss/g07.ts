import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 7 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g07: Record<string, Gloss> = {
  'plural': { en: 'plural (more than one)' },
  'nen': { en: 'plural ending -nen', note: 'added to -in job words: Ärztin → Ärztinnen' },
  'innen': { en: 'plural ending -innen', note: 'of female -in words: Köchin → Köchinnen' },
  'medizin': { en: 'medicine (the subject)' },
  'taxifahrerin': { en: 'female taxi driver' },
  'polizistin': { en: 'female police officer' },
  'informatikerin': { en: 'female IT specialist' },
  'friseurin': { en: 'female hairdresser' },
  'handwerkerin': { en: 'female craftsperson' },
  'elektrikerin': { en: 'female electrician' },
  'mechanikerin': { en: 'female mechanic' },
  'journalistin': { en: 'female journalist' },
  'juristin': { en: 'female lawyer (person with a law degree)' },
  'erzieherin': { en: 'female childcare worker' },
  'entwicklerin': { en: 'female developer' },
  'felder': { en: 'fields', note: 'plural of das Feld' },
  'geboren': { en: 'born' },
  'davon': { en: 'of these, of which' },
  'urlaubsort': { en: 'holiday town' },
  'zahlungsweise': { en: 'way of paying' },
  'prima': { en: 'great, fine' },
  'studierst': { en: 'you study', note: 'du-form of studieren' },
  'fehlen': { en: 'to be missing' },
  'bezahle': { en: 'I pay', note: 'ich-form of bezahlen' },
  'berichte': { en: 'I report', note: 'ich-form of berichten' },
  'berichtest': { en: 'you report', note: 'du-form of berichten' },
  'berichtet': { en: 'reports', note: 'er/sie/es-form of berichten' },
  'singular': { en: 'singular (one)', note: 'der Singular · grammar term' },
}
