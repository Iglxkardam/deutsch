import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Day, NoteBlock } from '@/types'
import { Gloss } from '@/components/Gloss'
import { Pill, ProgressRing, SpeakButton } from '@/components/ui'
import { ClockExplorer, FormalClocks, Icon, PrepCards, Timeline } from './visuals'

/** **bold** segments become the highlighted German term; everything is glossable. */
function rich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={i} className="rc-hl">
        <Gloss strict>{part.slice(2, -2)}</Gloss>
      </span>
    ) : (
      <Gloss key={i} strict>{part}</Gloss>
    ),
  )
}

/** "Regel — the stem can grow an extra -e-" → label "Regel", title "the stem …" */
function splitTitle(title: string): [string, string] {
  const i = title.indexOf(' — ')
  return i > 0 ? [title.slice(0, i), title.slice(i + 3)] : ['Rule', title]
}

function Block({ b }: { b: NoteBlock }) {
  switch (b.t) {
    case 'p':
      return <p className="rc-p">{rich(b.text)}</p>

    case 'rule': {
      const [label, title] = splitTitle(b.title)
      return (
        <div className="rc-rule">
          <div className="rc-rule-label">
            <Icon name="target" size={15} /> {label}
          </div>
          <div className="rc-rule-title">
            <Gloss strict>{title}</Gloss>
          </div>
          <div className="rc-rule-body">{rich(b.body)}</div>
        </div>
      )
    }

    case 'table':
      return (
        <div className="rc-tablewrap">
          <div className="rc-tablecap">
            <Gloss strict>{b.caption}</Gloss>
          </div>
          <div className="rc-tablescroll">
            <table className="rc-table">
              <thead>
                <tr>
                  {b.head.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                  {b.say && <th aria-label="Listen" />}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <Gloss strict>{cell}</Gloss>
                      </td>
                    ))}
                    {b.say && <td className="rc-say">{b.say[i] ? <SpeakButton text={b.say[i]} /> : null}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'ex':
      return (
        <div className="rc-ex">
          {b.items.map((it, i) => (
            <div className="rc-ex-row" key={i}>
              <div className="rc-ex-text">
                <div className="rc-ex-de">
                  <Gloss>{it.de}</Gloss>
                </div>
                <div className="rc-ex-en">{it.hi}</div>
              </div>
              <SpeakButton text={it.de.split('(')[0].trim()} />
            </div>
          ))}
        </div>
      )

    case 'tip':
    case 'warn':
      return (
        <div className={`rc-call rc-call-${b.t}`}>
          <span className="rc-call-icon">
            <Icon name={b.t === 'tip' ? 'bulb' : 'alert'} size={18} />
          </span>
          <div>
            <div className="rc-call-label">{b.t === 'tip' ? 'Tip' : 'Watch out'}</div>
            <div className="rc-call-body">{rich(b.text)}</div>
          </div>
        </div>
      )

    case 'sticky':
      return (
        <div className="rc-try">
          <div className="rc-try-label">Your turn</div>
          <p>
            <Gloss strict>{b.text}</Gloss>
          </p>
        </div>
      )

    case 'figure':
      return (
        <figure className="rc-figure">
          <img src={`/art/${b.art}.jpg`} alt={b.alt} loading="lazy" />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )

    case 'timeline':
      return <Timeline steps={b.steps} />

    case 'clock':
      return b.mode === 'formal' ? <FormalClocks items={b.items} /> : <ClockExplorer />

    case 'preps':
      return <PrepCards items={b.items} />

    default:
      return null
  }
}

interface Section {
  num: string | null
  title: string | null
  blocks: NoteBlock[]
}

function toSections(blocks: NoteBlock[]): Section[] {
  const out: Section[] = []
  let cur: Section = { num: null, title: null, blocks: [] }
  for (const b of blocks) {
    if (b.t === 'h') {
      if (cur.title !== null || cur.blocks.length) out.push(cur)
      const m = /^(\d+)\s*·\s*(.+)$/.exec(b.text)
      cur = { num: m ? m[1] : null, title: m ? m[2] : b.text, blocks: [] }
    } else {
      cur.blocks.push(b)
    }
  }
  if (cur.title !== null || cur.blocks.length) out.push(cur)
  return out
}

/** Colour-coded section cards — one accent per section, used sparingly. */
export function RichNotes({ blocks }: { blocks: NoteBlock[] }) {
  const sections = toSections(blocks)
  return (
    <div className="rc">
      {sections.map((s, i) => (
        <motion.section
          key={i}
          className={`rc-section rc-acc-${i % 5}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {s.title && (
            <header className="rc-section-head">
              {s.num && <span className="rc-num">{s.num}</span>}
              <h3 className="rc-section-title">
                <Gloss strict>{s.title}</Gloss>
              </h3>
            </header>
          )}
          <div className="rc-section-body">
            {s.blocks.map((b, j) => (
              <Block key={j} b={b} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}

/** Illustrated lesson header used instead of the plain title block. */
export function RichHero({ day, progress, color }: { day: Day; progress: number; color: string }) {
  return (
    <header className="rc-hero">
      <div className="rc-hero-text">
        <Link to="/kurs" className="small dim rc-hero-back">
          ← Course plan
        </Link>
        <div className="row wrap" style={{ gap: 6 }}>
          <Pill solid color={color}>Day {day.id}</Pill>
          <Pill>Netzwerk chapter {day.kapitel}</Pill>
          <Pill>{day.minutes} min</Pill>
          <Pill color="var(--purple)">{day.examSkill}</Pill>
        </div>
        <h1 className="rc-hero-title">
          <Gloss strict>{day.title}</Gloss>
        </h1>
        <p className="rc-hero-goal">{day.goal}</p>
        <p className="rc-hero-focus">
          <Gloss strict>{day.focus}</Gloss>
        </p>
        <div className="rc-hero-progress">
          <ProgressRing value={progress} size={52} stroke={5} color={color}>
            <span className="mono small" style={{ fontWeight: 800 }}>{Math.round(progress * 3)}/3</span>
          </ProgressRing>
          <span className="small muted">Notes · Words · Exercises</span>
        </div>
      </div>
      {day.hero && (
        <div className="rc-hero-art">
          <img src={`/art/${day.hero}.jpg`} alt="" />
        </div>
      )}
    </header>
  )
}
