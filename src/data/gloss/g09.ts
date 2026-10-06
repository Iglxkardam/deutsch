import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 9 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g09: Record<string, Gloss> = {
  entscheidung: { en: 'decision', note: 'die Entscheidung' },
  negationsartikel: { en: 'negation article (kein, keine)', note: 'der Negationsartikel' },
  brille: { en: 'glasses, pair of spectacles', note: 'die Brille · plural: die Brillen' },
  dingen: { en: 'things', note: 'das Ding · plural: die Dinge (here in "zu Dingen")' },
  orten: { en: 'places', note: 'der Ort · plural: die Orte (here in "zu Orten")' },
  bild: { en: 'picture, image', note: 'das Bild · plural: die Bilder' },
  menschen: { en: 'people, human beings', note: 'der Mensch · plural: die Menschen' },
  verkehrsmittel: { en: 'means of transport', note: 'das Verkehrsmittel · plural: die Verkehrsmittel' },
  bildgeschichte: { en: 'picture story', note: 'die Bildgeschichte' },
  nee: { en: 'no (casual, spoken)', note: 'informal for nein' },
  oh: { en: 'oh' },
  fuß: { en: 'foot', note: 'der Fuß · plural: die Füße' },
  reis: { en: 'rice', note: 'der Reis' },
  fertige: { en: 'ready-made, fixed', note: 'fertig, declined' },
  wendungen: { en: 'phrases, expressions', note: 'die Wendung · plural: die Wendungen' },
  prüfung: { en: 'exam', note: 'die Prüfung' },
  aufzug: { en: 'lift, elevator', note: 'der Aufzug · plural: die Aufzüge' },
  handy: { en: 'mobile phone', note: 'das Handy · plural: die Handys' },
  zeit: { en: 'time', note: 'die Zeit' },
  zeichne: { en: 'I draw', note: 'ich-form of zeichnen' },
  zeichnest: { en: 'you draw', note: 'du-form of zeichnen' },
  zeichnet: { en: 'draws', note: 'er/sie/es-form of zeichnen' },
}
