import type { Gloss } from '@/lib/glossary'

/**
 * Hover meanings for German words that appear in Tag 17 but are not vocabulary
 * entries: inflected verb forms, declined adjectives, compounds, plurals.
 * Keys are lower-case. Only add a word when you are certain of its meaning.
 */
export const g17: Record<string, Gloss> = {
  dativ: { en: 'dative', note: 'the case for “to / for whom?” (Wem?)' },
  nominativ: { en: 'nominative', note: 'the case of the subject' },
  akkusativ: { en: 'accusative', note: 'the case of the direct object' },
  dritter: { en: 'third', note: 'dritt-, declined' },
  fall: { en: 'case (grammar); fall', note: 'der Fall' },
  präpositionen: { en: 'prepositions', note: 'plural of die Präposition' },
  notizen: { en: 'notes', note: 'plural of die Notiz' },
  notizblatt: { en: 'note sheet', note: 'das Notizblatt' },
  meinem: { en: 'my', note: 'possessive · dative masculine / neuter' },
  seiner: { en: 'his', note: 'possessive · dative feminine' },
  unserem: { en: 'our', note: 'possessive · dative masculine / neuter' },
  ihrem: { en: 'her', note: 'possessive · dative masculine / neuter' },
  deinen: { en: 'your', note: 'possessive · dative plural here (mit deinen Kollegen)' },
  gehört: { en: 'belongs', note: 'gehören · er / sie / es' },
  schmeckt: { en: 'tastes', note: 'schmecken · er / sie / es' },
  antworte: { en: 'answer', note: 'antworten · ich' },
  antwortest: { en: 'answer', note: 'antworten · du' },
  sprich: { en: 'speak', note: 'sprechen · imperative (du)' },
  schwester: { en: 'sister', note: 'die Schwester · plural: die Schwestern' },
  leuten: { en: 'people', note: 'dative plural of die Leute' },
  kindern: { en: 'children', note: 'dative plural of das Kind' },
  jahren: { en: 'years', note: 'dative plural of das Jahr' },
  monaten: { en: 'months', note: 'dative plural of der Monat' },
  vom: { en: 'from the, of the', note: 'von + dem' },
  chefin: { en: 'boss (female)', note: 'die Chefin' },
  tanzkurs: { en: 'dance course', note: 'der Tanzkurs' },
  geburtstagsparty: { en: 'birthday party', note: 'die Geburtstagsparty' },
  denn: { en: 'then, actually', note: 'a particle that softens a question' },
  nächste: { en: 'next', note: 'nächst-, declined' },
  herrn: { en: 'Mr, gentleman', note: 'accusative / dative of der Herr' },
  assistentin: { en: 'assistant (female)', note: 'die Assistentin' },
  echt: { en: 'really, genuine' },
  allen: { en: 'all', note: 'dative plural, e.g. mit allen Mitarbeitern' },
  mitarbeitern: { en: 'employees, colleagues', note: 'dative plural of der Mitarbeiter' },
  schokoladenkuchen: { en: 'chocolate cake', note: 'der Schokoladenkuchen' },
  rufst: { en: 'call', note: 'rufen · du' },
  freundin: { en: 'friend (female), girlfriend', note: 'die Freundin' },
  freund: { en: 'friend (male), boyfriend', note: 'der Freund' },
}
