import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 6 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g06: Record<string, Gloss> = {
  'artikel': { en: 'article (der, die, das)' },
  'wörterbuch': { en: 'dictionary', note: 'das Wörterbuch' },
  'musik': { en: 'music' },
  'tennis': { en: 'tennis' },
  'joggen': { en: 'to jog' },
  'tag': { en: 'day', note: 'der Tag, die Tage' },
  'mitte': { en: 'middle, centre', note: 'die Mitte' },
  'letzte': { en: 'last', note: 'letzt-, declined' },
  'fotografiere': { en: 'I take photos', note: 'ich-form of fotografieren' },
  'steigt': { en: 'rises, goes up', note: 'er-form of steigen' },
  'welch': { en: 'which', note: 'welcher, welche, welches' },
  'welch-': { en: 'which', note: 'welcher, welche, welches' },
  'kreuzen': { en: 'to cross, to mark with a cross', note: 'ankreuzen' },
  'kreuze': { en: 'I mark with a cross', note: 'ich-form of kreuzen / ankreuzen' },
  'kreuzt': { en: 'mark(s) with a cross', note: 'du- and er/sie/es-form of kreuzen / ankreuzen' },
  'satztypen': { en: 'sentence types', note: 'der Satztyp, plural' },
  'endungen': { en: 'endings', note: 'die Endung, plural' },
  'verraten': { en: 'reveal, give away', note: 'verraten' },
  'frühjahr': { en: 'spring (season)', note: 'das Frühjahr = der Frühling' },
  'baum': { en: 'tree', note: 'der Baum, die Bäume' },
  'raum': { en: 'room, space', note: 'der Raum, die Räume' },
  'espresso': { en: 'espresso', note: 'der Espresso' },
  'cappuccino': { en: 'cappuccino', note: 'der Cappuccino' },
  'zoo': { en: 'zoo', note: 'der Zoo' },
  'merken': { en: 'to remember, to note (sich etwas merken)', note: 'sich merken' },
  'merke': { en: 'remember', note: 'ich-form of merken: ich merke mir' },
  'merkst': { en: 'remember', note: 'du-form of merken: du merkst dir' },
  'merkt': { en: 'remembers', note: 'er/sie/es-form of merken: er merkt sich' },
  'lieferant': { en: 'supplier, delivery firm', note: 'der Lieferant · -ant → der' },
}
