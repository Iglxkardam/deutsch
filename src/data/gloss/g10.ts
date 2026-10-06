import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 10 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g10: Record<string, Gloss> = {
  'hundertsiebzehn': { en: 'one hundred seventeen' },
  'erst': { en: 'first, only', note: 'here: "first (before anything else)"' },
  'fehlt': { en: 'is missing', note: 'fehlen' },
  'kontrollieren': { en: 'to check' },
  'sommerkino': { en: 'outdoor summer cinema', note: 'Sommer + Kino' },
  'internationale': { en: 'international', note: 'declined form' },
  'theater-festival': { en: 'theatre festival' },
  'okt': { en: 'Oct.', note: 'short for Oktober' },
  'aller': { en: 'of all', note: 'aus aller Welt = from all over the world' },
  'lebensmittel': { en: 'food, groceries', note: 'plural: foodstuffs' },
  'umlaut-paare': { en: 'umlaut pairs' },
  'säfte': { en: 'juices', note: 'plural of der Saft' },
  'öffnungszeiten': { en: 'opening hours' },
  'montags': { en: 'on Mondays, every Monday' },
  'geschlossen': { en: 'closed' },
  'mengen': { en: 'quantities', note: 'plural of die Menge' },
  'dran': { en: 'next, having one’s turn', note: 'in "Wer kommt dran?" = Who is next?' },
  'sonst': { en: 'otherwise, else', note: 'Sonst noch etwas? = Anything else?' },
  'bitten': { en: 'requests', note: 'plural of die Bitte' },
  'stadtplan': { en: 'city map' },
  'bekommen': { en: 'to get, to receive' },
  'bekommt': { en: 'gets, receives', note: 'bekommen' },
  'gelb': { en: 'yellow' },
  'pommes': { en: 'chips, fries', note: 'Pommes frites' },
  'frites': { en: 'fries', note: 'Pommes frites' },
  'fast': { en: 'almost' },
  'findest': { en: 'you find', note: 'finden, du-form' },
  'wechsle': { en: 'I give change, I exchange', note: 'wechseln' },
  'wechselst': { en: 'you give change, you exchange', note: 'wechseln' },
  'wechselt': { en: 'gives change, exchanges', note: 'wechseln' },
  'schmal': { en: 'narrow' },
  'ziffern': { en: 'digits', note: 'plural of die Ziffer' },
  'klatscht': { en: 'claps, applauds', note: 'klatschen' },
  'dialog': { en: 'dialogue', note: 'der Dialog' },
  'beschreibung': { en: 'description', note: 'die Beschreibung' },
  'kassierer': { en: 'cashier', note: 'der Kassierer' },
}
