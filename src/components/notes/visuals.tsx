import { useState } from 'react'
import { Gloss } from '@/components/Gloss'
import { SpeakButton } from '@/components/ui'
import type { IconName } from '@/types'
import { informalTime, MINUTE_STEPS } from '@/lib/uhrzeit'

/* ── Icons: small stroke set, drawn here so there is no emoji anywhere ─── */
const PATHS: Record<IconName, string> = {
  bulb: 'M9 18h6|M10 21h4|M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z',
  alert: 'M12 3 2.5 20h19L12 3z|M12 10v4.5|M12 17.5v.01',
  clock: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z|M12 7v5l3.2 2',
  calendar: 'M4 5.5h16V20H4z|M4 10h16|M8 3v4|M16 3v4',
  sun: 'M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z|M12 2v2.2|M12 19.8V22|M2 12h2.2|M19.8 12H22|M4.9 4.9l1.6 1.6|M17.5 17.5l1.6 1.6|M4.9 19.1l1.6-1.6|M17.5 6.5l1.6-1.6',
  utensils: 'M7 3v7|M4 3v5a3 3 0 0 0 6 0V3|M7 11v10|M17 21V3c-2.2 1.4-3.3 4-3.3 7.2H17',
  users: 'M9 5a3 3 0 1 0 0 6a3 3 0 1 0 0-6z|M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5|M17 8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z|M16.5 14.6c2.6.3 4.5 2.1 4.5 5.4',
  building: 'M3 21h18|M5 21V9.5L12 4l7 5.5V21|M9.5 21v-5.5h5V21|M9 11.5h.01|M15 11.5h.01',
  drop: 'M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H19v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5z|M4 19.5A2.5 2.5 0 0 0 6.5 22H19v-5|M8.5 7H15',
  home: 'M3 11l9-8 9 8|M5 9.5V21h14V9.5|M10 21v-6h4v6',
  newspaper: 'M4 5h13v14H6a2 2 0 0 1-2-2V5z|M17 9h3v8a2 2 0 0 1-2 2|M7 9h7|M7 12.5h7|M7 16h4',
  target: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z|M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z|M12 12v.01',
  arrow: 'M5 12h14|M13 6l6 6-6 6',
  globe: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z|M3 12h18|M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  phone: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z|M11 18h2',
  mail: 'M3 6h18v12H3z|M3 7l9 6 9-6',
  user: 'M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8z|M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5',
  briefcase: 'M3 8h18v12H3z|M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8|M3 13h18',
  chat: 'M4 5h16v11H9l-4 4v-4H4z',
  map: 'M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5z|M9 4v13.5|M15 6.5V20',
  cart: 'M3 4h2.5l2.2 10.5h10.3L20 7H6.5|M9.5 19.5h.01|M17 19.5h.01',
  cup: 'M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V8z|M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16|M8 3v2|M12 3v2',
  question: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z|M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.8.5-1.3 1-1.3 1.9|M12 17v.01',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  cross: 'M6 6l12 12|M18 6 6 18',
  ear: 'M8 9a4 4 0 1 1 8 0c0 2-2 3-2 5a2.5 2.5 0 0 1-5 0|M5 12v2',
  pencil: 'M4 20l1-4L16 5l3 3L8 19z|M14 7l3 3',
  hash: 'M5 9h14|M5 15h14|M10 4 8 20|M16 4l-2 16',
}

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name].split('|').map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

/* ── Analog clock ─────────────────────────────────────────────────────── */
const pt = (deg: number, r: number): [number, number] => {
  const a = (deg * Math.PI) / 180
  return [100 + r * Math.sin(a), 100 - r * Math.cos(a)]
}

export interface ClockSector {
  from: number
  to: number
  label?: string
}

export function ClockFace({
  hour,
  minute,
  size = 220,
  sector,
  mark,
}: {
  /** 0–23 or 1–12, the dial shows it on 12 hours */
  hour: number
  minute: number
  size?: number
  sector?: ClockSector
  /** numeral (1–12) to circle, e.g. the hour a "halb" phrase points to */
  mark?: number
}) {
  const hourDeg = (hour % 12) * 30 + minute * 0.5
  const minuteDeg = minute * 6
  const small = size < 150

  let sectorEl: JSX.Element | null = null
  if (sector) {
    const [x1, y1] = pt(sector.from, 84)
    const [x2, y2] = pt(sector.to, 84)
    const large = sector.to - sector.from > 180 ? 1 : 0
    // keep the label inside the shaded area, clear of the numerals; skip it when the wedge is too thin
    const [lx, ly] = pt((sector.from + sector.to) / 2, 44)
    const roomForLabel = sector.to - sector.from >= 60
    sectorEl = (
      <g>
        <path d={`M100 100 L${x1} ${y1} A84 84 0 ${large} 1 ${x2} ${y2} Z`} fill="var(--rc-accent)" opacity={0.17} />
        {sector.label && roomForLabel && (
          <text
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={11}
            fontWeight={750}
            letterSpacing="0.06em"
            fill="var(--rc-accent)"
            style={{ textTransform: 'uppercase' }}
          >
            {sector.label}
          </text>
        )}
      </g>
    )
  }

  const spin = (deg: number): React.CSSProperties => ({
    transform: `rotate(${deg}deg)`,
    transformOrigin: '100px 100px',
    transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
  })

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label={`Clock showing ${hour % 12 || 12}:${String(minute).padStart(2, '0')}`}>
      <circle cx={100} cy={100} r={95} fill="var(--paper)" stroke="var(--line-strong)" strokeWidth={2} />
      <circle cx={100} cy={100} r={89} fill="none" stroke="var(--line)" />
      {sectorEl}
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0
        const [a, b] = pt(i * 6, major ? 82 : 86)
        const [c, d] = pt(i * 6, 89)
        return <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={major ? 'var(--ink-3)' : 'var(--line-strong)'} strokeWidth={major ? 2 : 1} strokeLinecap="round" />
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const n = i + 1
        const [x, y] = pt(n * 30, 71)
        const on = mark === n
        return (
          <g key={n}>
            {on && <circle cx={x} cy={y} r={13} fill="var(--rc-accent)" />}
            {(!small || n % 3 === 0) && (
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={small ? 17 : 15} fontWeight={650} fill={on ? '#fff' : 'var(--ink-2)'}>
                {n}
              </text>
            )}
          </g>
        )
      })}
      <g style={spin(hourDeg)}>
        <line x1={100} y1={106} x2={100} y2={62} stroke="var(--ink)" strokeWidth={6} strokeLinecap="round" />
      </g>
      <g style={spin(minuteDeg)}>
        <line x1={100} y1={110} x2={100} y2={44} stroke="var(--rc-accent)" strokeWidth={3.5} strokeLinecap="round" />
      </g>
      <circle cx={100} cy={100} r={6} fill="var(--rc-accent)" stroke="var(--paper)" strokeWidth={2} />
    </svg>
  )
}

/* ── Formal time: 24h reading, shown on a clock ───────────────────────── */
export function FormalClocks({ items }: { items: { h: number; m: number; de: string }[] }) {
  return (
    <div className="rc-formal">
      {items.map((it) => (
        <div className="rc-formal-card" key={`${it.h}:${it.m}`}>
          <ClockFace hour={it.h} minute={it.m} size={124} />
          <div className="rc-formal-digital">
            {String(it.h).padStart(2, '0')}:{String(it.m).padStart(2, '0')}
          </div>
          <div className="rc-formal-de">
            <Gloss>{it.de}</Gloss>
            <SpeakButton text={it.de} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Informal time explorer: the diagram that makes halb/vor/nach click ── */
export function ClockExplorer() {
  const [h, setH] = useState(5)
  const [m, setM] = useState(30)
  const t = informalTime(h, m)

  const sector: ClockSector | undefined =
    t.kind === 'nach'
      ? { from: 0, to: m * 6, label: 'nach' }
      : t.kind === 'halb'
        ? { from: 0, to: 180, label: 'halb' }
        : t.kind === 'vorhalb'
          ? { from: m * 6, to: 180, label: 'vor halb' }
        : t.kind === 'nachhalb'
          ? { from: 180, to: m * 6, label: 'nach halb' }
          : t.kind === 'vor'
            ? { from: m * 6, to: 360, label: 'vor' }
            : undefined

  const surprise = () => {
    setH(1 + Math.floor(Math.random() * 12))
    setM(MINUTE_STEPS[Math.floor(Math.random() * MINUTE_STEPS.length)])
  }

  return (
    <div className="rc-explorer">
      <div className="rc-explorer-dial">
        <ClockFace hour={h} minute={m} size={252} sector={sector} mark={t.target} />
        <div className="rc-legend">
          <span>
            <i className="rc-dot rc-dot-a" /> shaded = the minutes the phrase counts
          </span>
          <span>
            <i className="rc-dot rc-dot-c" /> circled = the hour the phrase names
          </span>
        </div>
      </div>

      <div className="rc-explorer-panel">
        <div className="rc-explorer-read">
          <div className="rc-explorer-digital">
            {h}:{String(m).padStart(2, '0')}
          </div>
          <div className="rc-explorer-phrase" aria-live="polite">
            {t.parts.map((p, i) => (
              <span key={i} className={`rc-part rc-part-${p.role}`}>
                <Gloss>{p.text}</Gloss>
              </span>
            ))}
            <SpeakButton text={t.phrase} className="rc-explorer-speak" />
          </div>
          <p className="rc-explorer-why">{t.why}</p>
        </div>

        <div className="rc-chipbox">
          <div className="rc-chiplabel">Hour</div>
          <div className="rc-chips rc-chips-12">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <button key={n} className={`rc-chip ${n === h ? 'on' : ''}`} onClick={() => setH(n)}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div className="rc-chipbox">
          <div className="rc-chiplabel">Minutes</div>
          <div className="rc-chips rc-chips-12">
            {MINUTE_STEPS.map((n) => (
              <button key={n} className={`rc-chip ${n === m ? 'on' : ''}`} onClick={() => setM(n)}>
                :{String(n).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
        <button className="rc-surprise" onClick={surprise}>
          Surprise me
        </button>
      </div>
    </div>
  )
}

/* ── A day as a vertical timeline ─────────────────────────────────────── */
export function Timeline({ steps }: { steps: { icon: IconName; de: string; en: string }[] }) {
  return (
    <ol className="rc-timeline">
      {steps.map((s, i) => (
        <li key={i} className="rc-tl-item">
          <span className="rc-tl-node">
            <Icon name={s.icon} size={21} />
          </span>
          <div className="rc-tl-body">
            <div className="rc-tl-de">
              <Gloss>{s.de}</Gloss>
              <SpeakButton text={s.de} />
            </div>
            <div className="rc-tl-en">{s.en}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ── um / am / im / von…bis ───────────────────────────────────────────── */
export function PrepCards({ items }: { items: { word: string; icon: IconName; use: string; de: string; en: string }[] }) {
  return (
    <div className="rc-preps">
      {items.map((p) => (
        <div className="rc-prep" key={p.word}>
          <div className="rc-prep-top">
            <span className="rc-prep-word">{p.word}</span>
            <span className="rc-prep-icon">
              <Icon name={p.icon} size={20} />
            </span>
          </div>
          <div className="rc-prep-use">{p.use}</div>
          <div className="rc-prep-ex">
            <div className="rc-prep-de">
              <Gloss>{p.de}</Gloss>
              <SpeakButton text={p.de} />
            </div>
            <div className="rc-prep-en">{p.en}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
