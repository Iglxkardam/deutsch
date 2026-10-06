import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 12 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g12: Record<string, Gloss> = {
  duscht: { en: 'showers, takes a shower', note: 'duschen · er / sie / es' },
  duschst: { en: 'shower', note: 'duschen · du' },
  besucht: { en: 'visits', note: 'besuchen · er / sie / es' },
  frühstückt: { en: 'has breakfast', note: 'frühstücken · er / sie / es' },
  frühstückst: { en: 'have breakfast', note: 'frühstücken · du' },
  spazieren: { en: 'to stroll, to walk', note: 'spazieren gehen = to go for a walk' },
  zeit: { en: 'time', note: 'die Zeit' },
  nächstes: { en: 'next', note: 'nächstes Wochenende = next weekend' },
  tageszeiten: { en: 'parts of the day', note: 'plural of die Tageszeit' },
  uhrzeit: { en: 'time of day, clock time', note: 'die Uhrzeit' },
  uhrzeiten: { en: 'clock times', note: 'plural of die Uhrzeit' },
  stunden: { en: 'hours', note: 'plural of die Stunde' },
  '-stunden-uhr': { en: 'hour clock', note: '24-Stunden-Uhr = 24-hour clock' },
  informelle: { en: 'informal, everyday', note: 'informell, declined' },
  übersicht: { en: 'overview', note: 'die Übersicht' },
  rechnen: { en: 'to calculate', note: 'rechnen' },
  schritt: { en: 'step', note: 'der Schritt · Schritt für Schritt = step by step' },
  modellprüfung: { en: 'model exam, practice test', note: 'das Modell + die Prüfung' },
  super: { en: 'great, super' },
  halbe: { en: 'half', note: 'halb, declined: eine halbe Stunde' },
  morgens: { en: 'in the morning(s)', note: 'habit; am Morgen = in the morning' },
  vormittags: { en: 'in the late morning(s), before noon', note: 'habit; am Vormittag' },
  mittags: { en: 'at midday', note: 'habit; am Mittag' },
  nachmittags: { en: 'in the afternoon(s)', note: 'habit; am Nachmittag' },
}
