import { Gloss } from '@/components/Gloss'
import { SpeakButton } from '@/components/ui'
import type { SentenceRole } from '@/types'
import { Icon } from './visuals'

/* ── Sentence builder: word order and case, seen as colour ────────────── */
const ROLE_LABEL: Record<SentenceRole, string> = {
  subj: 'subject',
  verb: 'verb',
  obj: 'object',
  time: 'time',
  place: 'place',
  neg: 'negation',
  other: 'other',
}

export function SentenceBuilder({
  items,
}: {
  items: { parts: { text: string; role: SentenceRole }[]; en: string }[]
}) {
  const used = Array.from(new Set(items.flatMap((i) => i.parts.map((p) => p.role)))).filter((r) => r !== 'other')
  return (
    <div className="rc-sent">
      {used.length > 0 && (
        <div className="rc-sent-legend">
          {used.map((r) => (
            <span key={r} className={`rc-role rc-role-${r}`}>
              {ROLE_LABEL[r]}
            </span>
          ))}
        </div>
      )}
      {items.map((it, i) => (
        <div className="rc-sent-row" key={i}>
          <div className="rc-sent-main">
            <div className="rc-sent-parts">
              {it.parts.map((p, j) => (
                <span key={j} className={`rc-role rc-role-${p.role}`}>
                  <Gloss>{p.text}</Gloss>
                </span>
              ))}
            </div>
            <div className="rc-sent-en">{it.en}</div>
          </div>
          <SpeakButton text={sentenceText(it.parts)} />
        </div>
      ))}
    </div>
  )
}

/** "Der Mann" + "isst" + "den Kuchen" + "." → "Der Mann isst den Kuchen." (punctuation attaches left) */
export const sentenceText = (parts: { text: string }[]) =>
  parts
    .map((p) => p.text)
    .join(' ')
    .replace(/\s+([.,?!])/g, '$1')

/* ── One verb, conjugated: stem muted, ending highlighted ─────────────── */
export const conjSpeak = (pron: string, stem: string, ending: string) => `${pron.split('/')[0].trim()} ${stem}${ending}`

export function ConjCard({
  verb,
  en,
  rows,
  note,
}: {
  verb: string
  en: string
  rows: { pron: string; stem: string; ending: string }[]
  note?: string
}) {
  return (
    <div className="rc-conj">
      <div className="rc-conj-head">
        <span className="rc-conj-verb">
          <Gloss>{verb}</Gloss>
        </span>
        <span className="rc-conj-en">{en}</span>
      </div>
      <div className="rc-conj-grid">
        {rows.map((r) => (
          <div className="rc-conj-row" key={r.pron}>
            <span className="rc-conj-pron">{r.pron}</span>
            <span className="rc-conj-form">
              <span className="rc-conj-stem">{r.stem}</span>
              <span className="rc-conj-end">{r.ending}</span>
            </span>
            <SpeakButton text={conjSpeak(r.pron, r.stem, r.ending)} />
          </div>
        ))}
      </div>
      {note && <p className="rc-conj-note">{note}</p>}
    </div>
  )
}

/* ── Common mistakes: wrong / right / why ─────────────────────────────── */
export function CompareList({ rows }: { rows: { wrong: string; right: string; why: string }[] }) {
  return (
    <div className="rc-cmp">
      {rows.map((r, i) => (
        <div className="rc-cmp-row" key={i}>
          <div className="rc-cmp-cell rc-cmp-wrong">
            <span className="rc-cmp-mark">
              <Icon name="cross" size={15} />
            </span>
            <span className="rc-cmp-text">{r.wrong}</span>
          </div>
          <div className="rc-cmp-cell rc-cmp-right">
            <span className="rc-cmp-mark">
              <Icon name="check" size={15} />
            </span>
            <span className="rc-cmp-text">
              <Gloss>{r.right}</Gloss>
            </span>
            <SpeakButton text={r.right} />
          </div>
          <div className="rc-cmp-why">{r.why}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Gender cards ─────────────────────────────────────────────────────── */
export function NounCards({ items }: { items: { art: 'der' | 'die' | 'das'; noun: string; pl?: string; en: string }[] }) {
  return (
    <div className="rc-nouns">
      {items.map((n) => (
        <div className={`rc-noun rc-noun-${n.art}`} key={`${n.art} ${n.noun}`}>
          <div className="rc-noun-top">
            <span className="rc-noun-art">{n.art}</span>
            <SpeakButton text={`${n.art} ${n.noun}`} />
          </div>
          <div className="rc-noun-word">
            <Gloss>{n.noun}</Gloss>
          </div>
          <div className="rc-noun-en">{n.en}</div>
          {n.pl && <div className="rc-noun-pl">pl. {n.pl}</div>}
        </div>
      ))}
    </div>
  )
}

/* ── Number tiles ─────────────────────────────────────────────────────── */
export function NumberTiles({ items }: { items: { n: number; de: string }[] }) {
  return (
    <div className="rc-numbers">
      {items.map((it) => (
        <div className="rc-num-tile" key={it.n}>
          <span className="rc-num-digit">{it.n.toLocaleString('de-DE')}</span>
          <span className="rc-num-de">
            <Gloss>{it.de}</Gloss>
          </span>
          <SpeakButton text={it.de} />
        </div>
      ))}
    </div>
  )
}

/* ── Generic big-glyph tiles ──────────────────────────────────────────── */
export function Tiles({
  items,
  cols = 4,
}: {
  items: { big: string; small?: string; sub?: string; say?: string }[]
  cols?: 3 | 4 | 6
}) {
  return (
    <div className={`rc-tiles rc-tiles-${cols}`}>
      {items.map((t, i) => (
        <div className="rc-tile" key={i}>
          <div className="rc-tile-big">
            <Gloss>{t.big}</Gloss>
          </div>
          {t.small && <div className="rc-tile-small">{t.small}</div>}
          {t.sub && <div className="rc-tile-sub">{t.sub}</div>}
          {t.say && <SpeakButton text={t.say} className="rc-tile-say" />}
        </div>
      ))}
    </div>
  )
}
