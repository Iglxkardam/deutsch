/**
 * Informal German clock time (halb / vor / nach / Viertel), generated from rules.
 * Shared by the interactive clock and by the lesson data, so every phrase the
 * widget can say is also in the audio build.
 */

const HOUR = ['', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf']

export const MINUTE_STEPS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as const

export type PartRole = 'min' | 'link' | 'hour'
export type TimeKind = 'full' | 'nach' | 'halb' | 'nachhalb' | 'vor'

export interface InformalTime {
  phrase: string
  parts: { text: string; role: PartRole }[]
  kind: TimeKind
  /** the hour (1–12) the phrase actually names — for halb/vor it is the NEXT hour */
  target: number
  /** one-line English explanation of how the phrase is built */
  why: string
}

const next = (h: number) => (h % 12) + 1

/** h is the hour on a 12-hour dial (1–12), m one of MINUTE_STEPS. */
export function informalTime(h: number, m: number): InformalTime {
  const n = next(h)
  const hw = HOUR[h]
  const nw = HOUR[n]
  const p = (text: string, role: PartRole) => ({ text, role })
  const build = (kind: TimeKind, target: number, parts: InformalTime['parts'], why: string): InformalTime => ({
    phrase: parts.map((x) => x.text).join(' '),
    parts,
    kind,
    target,
    why,
  })

  switch (m) {
    case 0:
      return build('full', h, [p(h === 1 ? 'ein' : hw, 'hour'), p('Uhr', 'link')], 'On the hour: just the number plus Uhr.')
    case 5:
      return build('nach', h, [p('fünf', 'min'), p('nach', 'link'), p(hw, 'hour')], `5 minutes past ${h}.`)
    case 10:
      return build('nach', h, [p('zehn', 'min'), p('nach', 'link'), p(hw, 'hour')], `10 minutes past ${h}.`)
    case 15:
      return build('nach', h, [p('Viertel', 'min'), p('nach', 'link'), p(hw, 'hour')], `A quarter past ${h}.`)
    case 20:
      return build('nach', h, [p('zwanzig', 'min'), p('nach', 'link'), p(hw, 'hour')], `20 minutes past ${h}.`)
    case 25:
      return build('nach', h, [p('fünfundzwanzig', 'min'), p('nach', 'link'), p(hw, 'hour')], `25 minutes past ${h}.`)
    case 30:
      return build('halb', n, [p('halb', 'link'), p(nw, 'hour')], `Half-way TO ${n} — so it is ${h}:30, not ${n}:30.`)
    case 35:
      return build('nachhalb', n, [p('fünf', 'min'), p('nach', 'link'), p('halb', 'link'), p(nw, 'hour')], `5 minutes past half-way to ${n} (${h}:35).`)
    case 40:
      return build('vor', n, [p('zwanzig', 'min'), p('vor', 'link'), p(nw, 'hour')], `20 minutes before ${n}.`)
    case 45:
      return build('vor', n, [p('Viertel', 'min'), p('vor', 'link'), p(nw, 'hour')], `A quarter before ${n}.`)
    case 50:
      return build('vor', n, [p('zehn', 'min'), p('vor', 'link'), p(nw, 'hour')], `10 minutes before ${n}.`)
    default:
      return build('vor', n, [p('fünf', 'min'), p('vor', 'link'), p(nw, 'hour')], `5 minutes before ${n}.`)
  }
}

/** Every phrase the explorer can produce — fed to the audio build. */
export const ALL_INFORMAL_TIMES: string[] = Array.from(
  new Set(
    Array.from({ length: 12 }, (_, i) => i + 1).flatMap((h) => MINUTE_STEPS.map((m) => informalTime(h, m).phrase)),
  ),
)
