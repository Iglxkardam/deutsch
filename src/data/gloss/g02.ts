import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 2 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g02: Record<string, Gloss> = {
  'unsicher': { en: 'unsure, uncertain', note: 'adjective' },
  'formellen': { en: 'formal', note: 'formell, declined' },
  'ball': { en: 'ball', note: 'der Ball' },
  'äpfel': { en: 'apples', note: 'plural of der Apfel' },
  'schwierigen': { en: 'difficult', note: 'schwierig, declined' },
  'buchstabiert': { en: 'spells', note: 'buchstabieren · er/sie/es, man' },
  'buchstabenpaare': { en: 'letter pairs', note: 'plural of das Buchstabenpaar' },
  'aufgabenwörter': { en: 'task words, instruction words', note: 'plural' },
  'ordnen': { en: 'to put in order, to arrange', note: 'Ordnen Sie zu = match them up' },
  'ergänzen': { en: 'to complete, to fill in', note: 'verb' },
  'stichwörter': { en: 'keywords', note: 'plural of das Stichwort' },
  'duze': { en: 'address with du', note: 'duzen · ich' },
  'sieze': { en: 'address with Sie', note: 'siezen · ich' },
  'gefährlich': { en: 'dangerous', note: 'adjective' },
  'vokal': { en: 'vowel', note: 'der Vokal' },
  'eu': { en: 'letter pair eu', note: 'sounds like "oy"' },
  'äu': { en: 'letter pair äu', note: 'sounds like "oy"' },
  'au': { en: 'letter pair au', note: 'sounds like "ow" in cow' },
  'sch': { en: 'letter group sch', note: 'sounds like "sh"' },
  'st': { en: 'letters st', note: 'at the start of a word sounds like "sht"' },
  'sp': { en: 'letters sp', note: 'at the start of a word sounds like "shp"' },
  'tion': { en: 'ending -tion', note: 'sounds like "tsyohn"' },
  'ig': { en: 'ending -ig', note: 'at the end of a word sounds like "ich"' },
  'qu': { en: 'letter pair qu', note: 'sounds like "kv"' },
}
