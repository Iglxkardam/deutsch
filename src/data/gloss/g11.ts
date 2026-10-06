import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 11 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g11: Record<string, Gloss> = {
  'ändert': { en: 'changes', note: 'ändern, er/sie/es form' },
  'mutter': { en: 'mother', note: 'die Mutter' },
  'packt': { en: 'packs', note: 'packen, er/sie/es form' },
  'möchtet': { en: 'would like', note: 'möchten, ihr form' },
  'magst': { en: 'like', note: 'mögen, du form' },
  'mögt': { en: 'like', note: 'mögen, ihr form' },
  'eis': { en: 'ice cream', note: 'das Eis' },
  'appetit': { en: 'appetite', note: 'Guten Appetit! = enjoy your meal' },
  'moment': { en: 'moment', note: 'der Moment; Einen Moment, bitte. = One moment, please.' },
  'obst': { en: 'fruit', note: 'das Obst' },
  'einkaufszettel': { en: 'shopping list', note: 'der Einkaufszettel' },
  'öl': { en: 'oil', note: 'das Öl' },
  'grille': { en: 'grill', note: 'grillen, ich form' },
  'garten': { en: 'garden', note: 'der Garten' },
  'strategien': { en: 'strategies', note: 'die Strategie, plural' },
  'wortgruppen': { en: 'word groups', note: 'die Wortgruppe, plural' },
  'wirklich': { en: 'really', note: 'adverb' },
  'gleichfalls': { en: 'same to you, likewise', note: 'Danke, gleichfalls!' },
  'prost': { en: 'cheers', note: 'said when drinking together' },
  'wohl': { en: 'well-being', note: 'Zum Wohl! = cheers, to your health' },
  'maskulinum': { en: 'masculine (gender)', note: 'das Maskulinum' },
  'frischen': { en: 'fresh', note: 'frisch, declined (Akkusativ masculine)' },
  'doch': { en: 'yes (after a negative question)', note: 'Du magst keine Schokolade? — Doch!' },
  'diät': { en: 'diet', note: 'die Diät' },
  'gerade': { en: 'at the moment, right now', note: 'adverb' },
  'stück': { en: 'piece', note: 'das Stück' },
  'probiere': { en: 'I try, I taste', note: 'ich-form of probieren' },
  'schneide': { en: 'I cut', note: 'ich-form of schneiden' },
  'schneidest': { en: 'you cut', note: 'du-form of schneiden' },
  'schneidet': { en: 'cuts', note: 'er/sie/es-form of schneiden' },
  'grillparty': { en: 'barbecue party', note: 'die Grillparty' },
  'opa': { en: 'grandpa', note: 'der Opa · informal' },
  'erzählt': { en: 'tells', note: 'er/sie/es-form of erzählen' },
  'beantworte': { en: 'I answer', note: 'ich-form of beantworten' },
  'beantwortest': { en: 'you answer', note: 'du-form of beantworten' },
  'beantwortet': { en: 'answers', note: 'er/sie/es-form of beantworten' },
}
