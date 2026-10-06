import { motion } from 'framer-motion'
import type { Dialogue } from '@/types'
import { Gloss } from '@/components/Gloss'
import { SpeakButton } from '@/components/ui'
import { speak } from '@/lib/audio'

/** A conversation as chat bubbles: one colour and side per speaker, German first, English underneath. */
export function DialogueView({ dialogue }: { dialogue: Dialogue }) {
  const speakers = Array.from(new Set(dialogue.lines.map((l) => l.who)))
  const tone = (who: string) => speakers.indexOf(who) % 4

  return (
    <div className="dlg">
      <header className="dlg-head">
        <div className="dlg-intro">
          <h2 className="dlg-title">
            <Gloss strict>{dialogue.title}</Gloss>
          </h2>
          <p className="dlg-sit">{dialogue.situation}</p>
          <div className="dlg-cast">
            {speakers.map((s) => (
              <span key={s} className={`dlg-chip dlg-s${tone(s)}`}>
                <i>{s.charAt(0)}</i>
                {s}
              </span>
            ))}
          </div>
        </div>
        <button className="btn btn-sm" onClick={() => speak(dialogue.lines.map((l) => l.de).join(' … '), 0.95)}>
          ▶ Play whole dialogue
        </button>
      </header>

      <div className="dlg-thread">
        {dialogue.lines.map((l, i) => {
          const right = speakers.indexOf(l.who) % 2 === 1
          return (
            <motion.div
              key={i}
              className={`dlg-row dlg-s${tone(l.who)}${right ? ' dlg-right' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.2) }}
            >
              <span className="dlg-av" aria-hidden="true">
                {l.who.charAt(0)}
              </span>
              <div className="dlg-bubble">
                <div className="dlg-who">{l.who}</div>
                <div className="dlg-de">
                  <Gloss>{l.de}</Gloss>
                </div>
                <div className="dlg-en">{l.hi}</div>
              </div>
              <SpeakButton text={l.de} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
