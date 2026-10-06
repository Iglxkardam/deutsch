/** Core data model. The 30-day curriculum is pure data conforming to this. */

export type Gender = 'm' | 'f' | 'n' | 'pl' | null

export type WordType = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'num' | 'prep' | 'pron' | 'other'

export interface Vocab {
  /** Full German form incl. article for nouns: "der Tisch" */
  de: string
  /** Hindi meaning (Devanagari) */
  hi: string
  /** English meaning */
  en: string
  type: WordType
  gender?: Gender
  /** Plural form for nouns: "die Tische" */
  pl?: string
  /**
   * Key forms of an irregular verb, e.g. "ich bin · du bist · er ist".
   * The Kursbuch prints these too, because a conjugated form like "bin" is
   * unrecognisable from the infinitive "sein".
   */
  forms?: string
  /** Example sentence in German */
  ex?: string
  /** Hindi translation of the example */
  exHi?: string
}

/** Names of the inline SVG icons in components/notes/visuals.tsx */
export type IconName =
  | 'bulb' | 'alert' | 'clock' | 'calendar' | 'sun' | 'utensils' | 'users'
  | 'building' | 'drop' | 'book' | 'home' | 'newspaper' | 'target' | 'arrow'
  | 'globe' | 'phone' | 'mail' | 'user' | 'briefcase' | 'chat' | 'map' | 'cart'
  | 'cup' | 'question' | 'check' | 'cross' | 'ear' | 'pencil' | 'hash'

/** Colour roles for the sentence builder. */
export type SentenceRole = 'subj' | 'verb' | 'obj' | 'time' | 'place' | 'neg' | 'other'

export type NoteBlock =
  | { t: 'h'; text: string }
  | { t: 'p'; text: string }
  | { t: 'rule'; title: string; body: string }
  | { t: 'table'; caption: string; head: string[]; rows: string[][]; say?: string[] }
  | { t: 'ex'; items: { de: string; hi: string }[] }
  | { t: 'tip'; text: string }
  | { t: 'warn'; text: string }
  | { t: 'sticky'; text: string }
  /* ── visual blocks: only drawn by the rich layout (Day.look === 'rich') ── */
  | { t: 'figure'; art: string; alt: string; caption?: string }
  | { t: 'timeline'; steps: { icon: IconName; de: string; en: string }[] }
  | { t: 'clock'; mode: 'formal'; items: { h: number; m: number; de: string }[] }
  | { t: 'clock'; mode: 'explorer'; say: string[] }
  | { t: 'preps'; items: { word: string; icon: IconName; use: string; de: string; en: string }[] }
  /** colour-coded sentence parts, e.g. subject / verb / object, so word order and case are SEEN */
  | { t: 'sentence'; items: { parts: { text: string; role: SentenceRole }[]; en: string }[] }
  /** one verb conjugated: stem muted, ending highlighted. stem + ending must equal the written form. */
  | { t: 'conj'; verb: string; en: string; rows: { pron: string; stem: string; ending: string }[]; note?: string }
  /** common mistakes: wrong form struck through, right form beside it, and why */
  | { t: 'compare'; rows: { wrong: string; right: string; why: string }[] }
  /** gender cards: der blue, die pink, das green. Must agree with the vocabulary list. */
  | { t: 'nouns'; items: { art: 'der' | 'die' | 'das'; noun: string; pl?: string; en: string }[] }
  /** number tiles. The German word is machine-checked against the digits. */
  | { t: 'numbers'; items: { n: number; de: string }[] }
  /** generic grid of big-glyph tiles (letters, weekdays, months …) */
  | { t: 'tiles'; cols?: 3 | 4 | 6; items: { big: string; small?: string; sub?: string; say?: string }[] }

export type Exercise =
  | { k: 'mcq'; q: string; options: string[]; a: number; why: string }
  | { k: 'fill'; q: string; a: string[]; why: string }
  | { k: 'order'; hi: string; words: string[]; a: string; why: string }
  | { k: 'artikel'; noun: string; a: 'der' | 'die' | 'das'; why: string }
  | { k: 'listen'; text: string; a: string[]; why: string }

export interface Dialogue {
  title: string
  situation: string
  lines: { who: string; de: string; hi: string }[]
}

export interface Day {
  id: number
  /** Netzwerk neu A1 chapter this maps to */
  kapitel: number
  /** German title, shown big */
  title: string
  /** Hinglish subtitle — what you'll actually be able to do */
  goal: string
  /** Grammar headline for the day */
  focus: string
  /** Minutes of focused study */
  minutes: number
  /** Which Goethe A1 module today's drill feeds */
  examSkill: 'Hören' | 'Lesen' | 'Schreiben' | 'Sprechen'
  notes: NoteBlock[]
  /** 'rich' = illustrated, colour-coded cards instead of ruled notebook paper */
  look?: 'rich'
  /** name of the hero illustration in public/art (without extension) */
  hero?: string
  vocab: Vocab[]
  dialogue?: Dialogue
  exercises: Exercise[]
  /** One concrete Goethe A1 exam tactic */
  examTip: string
}

export interface Week {
  n: number
  title: string
  subtitle: string
  days: number[]
  color: string
}

/* ── progress / gamification ─────────────────────────────────────────── */

export interface SrsCard {
  /** vocab key = de */
  key: string
  /** SM-2 style box 0..5 */
  box: number
  due: number
  seen: number
  correct: number
  lapses: number
}

export interface DayProgress {
  notesRead: boolean
  vocabDone: boolean
  quizScore: number
  quizTotal: number
  completedAt?: number
}

export interface Badge {
  id: string
  name: string
  desc: string
  icon: string
}
