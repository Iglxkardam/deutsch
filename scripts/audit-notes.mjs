/**
 * Notes audit — the machine-checkable half of "no wrong German, no duplicates".
 *
 *   npm run audit
 *
 * ERRORS (exit code 1) are things that are provably wrong:
 *   - a `numbers` tile whose German word does not match its digits
 *   - a `nouns` card whose article / plural contradicts the vocabulary lists
 *   - an exercise whose answer key cannot be right (mcq index, order words, artikel)
 *   - the same vocabulary entry taught on two different days
 *   - a `conj` row whose ending is not a normal present-tense ending (unless the verb is irregular)
 * WARNINGS are things a human reviewer should look at:
 *   - near-duplicate note blocks (rule / tip / warn / paragraph / table) across or within days
 *   - the same example sentence or exercise question repeated
 *   - noun cards for nouns that are not in any vocabulary list (so they cannot be cross-checked)
 *
 * It cannot prove German is correct — that is what the verifier pass is for — but it
 * catches the mistakes that do not need judgement.
 */
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import * as esbuild from 'esbuild'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const tmp = path.join(ROOT, 'node_modules', '.cache-audit.mjs')
await esbuild.build({
  entryPoints: [path.join(ROOT, 'src', 'data', 'curriculum.ts')],
  bundle: true, format: 'esm', platform: 'node', outfile: tmp,
  alias: { '@': path.join(ROOT, 'src') }, logLevel: 'silent',
})
const { DAYS } = await import('file://' + tmp.replace(/\\/g, '/'))

const errors = []
const warnings = []
const err = (day, kind, msg) => errors.push({ day, kind, msg })
const warn = (day, kind, msg) => warnings.push({ day, kind, msg })
const D = (d) => `Tag ${d.id}`

const norm = (s) =>
  String(s).toLowerCase().trim()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[.,!?;:"'’()]/g, '').replace(/\s+/g, ' ')
const bare = (de) => de.replace(/^(der|die|das)\s+/i, '')

/* ── German number words ─────────────────────────────────────────────── */
const ONES = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf',
  'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn']
const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig']

function below100(n, last) {
  if (n < 20) return n === 1 && !last ? 'ein' : ONES[n]
  if (n % 10 === 0) return TENS[n / 10]
  return (n % 10 === 1 ? 'ein' : ONES[n % 10]) + 'und' + TENS[Math.floor(n / 10)]
}
function below1000(n, last) {
  const h = Math.floor(n / 100)
  const r = n % 100
  let s = ''
  if (h) s += (h === 1 ? 'ein' : ONES[h]) + 'hundert'
  if (r) s += below100(r, last)
  return s
}
export function numberDe(n) {
  if (n === 0) return 'null'
  const parts = []
  const m = Math.floor(n / 1_000_000)
  const t = Math.floor((n % 1_000_000) / 1000)
  const r = n % 1000
  if (m) parts.push(m === 1 ? 'eine Million' : below1000(m, false) + ' Millionen')
  let rest = ''
  if (t) rest += (t === 1 ? 'ein' : below1000(t, false)) + 'tausend'
  if (r) rest += below1000(r, true)
  if (rest) parts.push(rest)
  return parts.join(' ')
}
// "hundert" == "einhundert" and "tausend" == "eintausend" at the start of a number
const numVariants = (s) => {
  const base = s.toLowerCase().replace(/ß/g, 'ss')
  const out = new Set([base])
  out.add(base.replace(/^einhundert/, 'hundert').replace(/^eintausend/, 'tausend'))
  out.add(base.replace(/^hundert/, 'einhundert').replace(/^tausend/, 'eintausend'))
  return out
}

/* ── vocabulary index: article + plural per noun, across all days ────── */
const vocabByKey = new Map() // norm(bare noun) -> [{art, pl, day, de}]
const vocabByDe = new Map() //  norm(de) -> [day ids]
for (const d of DAYS) {
  for (const v of d.vocab) {
    const k = v.de.trim()
    vocabByDe.set(k, [...(vocabByDe.get(k) ?? []), d.id])
    const art = v.de.match(/^(der|die|das)\s/i)?.[1]?.toLowerCase()
    if (art) {
      const bk = norm(bare(v.de))
      vocabByKey.set(bk, [...(vocabByKey.get(bk) ?? []), { art, pl: v.pl, day: d.id, de: v.de }])
    }
  }
}

/* ── per-day checks ──────────────────────────────────────────────────── */
const IRREGULAR = new Set(['sein', 'haben', 'wissen', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'mögen', 'möchten', 'werden', 'tun'])
const ENDINGS = {
  ich: ['e', ''],
  du: ['st', 'est', 't'],
  er: ['t', 'et', ''],
  wir: ['en', 'n'],
  ihr: ['t', 'et'],
  sie: ['en', 'n'],
}

for (const d of DAYS) {
  for (const b of d.notes) {
    if (b.t === 'numbers') {
      for (const it of b.items) {
        const want = numberDe(it.n)
        if (!numVariants(want).has(it.de.toLowerCase().replace(/ß/g, 'ss')) && !numVariants(it.de).has(want.toLowerCase().replace(/ß/g, 'ss'))) {
          err(D(d), 'number-word', `${it.n} is written "${it.de}", should be "${want}"`)
        }
      }
    }

    if (b.t === 'nouns') {
      for (const n of b.items) {
        const hits = vocabByKey.get(norm(n.noun))
        if (!hits) {
          warn(D(d), 'noun-unverified', `"${n.art} ${n.noun}" is not in any vocabulary list, so its article cannot be cross-checked`)
          continue
        }
        if (!hits.some((h) => h.art === n.art)) {
          err(D(d), 'noun-gender', `card says "${n.art} ${n.noun}" but vocabulary says "${hits[0].de}" (Tag ${hits[0].day})`)
        }
        if (n.pl) {
          const h = hits.find((x) => x.pl)
          if (h && norm(h.pl) !== norm(n.pl) && norm(h.pl) !== norm(`die ${n.pl}`) && norm(`die ${h.pl}`) !== norm(n.pl)) {
            err(D(d), 'noun-plural', `card plural "${n.pl}" for ${n.noun} contradicts vocabulary "${h.pl}" (Tag ${h.day})`)
          }
        }
      }
    }

    if (b.t === 'conj') {
      if (!IRREGULAR.has(b.verb)) {
        for (const r of b.rows) {
          const key = r.pron.toLowerCase().split('/')[0].trim()
          const allowed = ENDINGS[key]
          if (allowed && !allowed.includes(r.ending)) {
            err(D(d), 'conj-ending', `${b.verb}: "${r.pron}" has ending "${r.ending}" (normal endings: ${allowed.map((e) => `-${e || '∅'}`).join(', ')}). Mark the verb irregular by teaching it as sein/haben/a modal, or fix the ending.`)
          }
        }
      }
      if (b.rows.length !== 6) warn(D(d), 'conj-rows', `${b.verb}: conj card has ${b.rows.length} rows, expected 6 (ich, du, er/sie/es, wir, ihr, sie/Sie)`)
    }
  }

  d.exercises.forEach((e, i) => {
    const at = `exercise ${i + 1}`
    if (e.k === 'mcq') {
      if (!Number.isInteger(e.a) || e.a < 0 || e.a >= e.options.length) err(D(d), 'mcq-index', `${at}: answer index ${e.a} is outside the ${e.options.length} options`)
      if (new Set(e.options.map((o) => o.trim())).size !== e.options.length) err(D(d), 'mcq-dup-options', `${at}: two options are identical ("${e.q.slice(0, 50)}…")`)
    }
    if (e.k === 'order') {
      const w = e.words.map(norm).sort().join('|')
      const a = e.a.split(' ').filter(Boolean).map(norm).sort().join('|')
      if (w !== a) err(D(d), 'order-words', `${at}: the tiles [${e.words.join(' ')}] do not rebuild the answer "${e.a}"`)
    }
    if (e.k === 'artikel') {
      if (!['der', 'die', 'das'].includes(e.a)) err(D(d), 'artikel-answer', `${at}: answer "${e.a}" is not der/die/das`)
      const hits = vocabByKey.get(norm(e.noun))
      if (hits && !hits.some((h) => h.art === e.a)) err(D(d), 'artikel-vs-vocab', `${at}: "${e.a} ${e.noun}" contradicts vocabulary "${hits[0].de}" (Tag ${hits[0].day})`)
    }
    if (e.k === 'fill' && (!Array.isArray(e.a) || !e.a.length || e.a.some((x) => !String(x).trim()))) err(D(d), 'fill-empty', `${at}: empty answer`)
    if (e.k === 'listen' && (!Array.isArray(e.a) || !e.a.length)) err(D(d), 'listen-empty', `${at}: empty answer`)
  })
}

/* ── duplicates ──────────────────────────────────────────────────────── */
// the same vocabulary entry taught on two days
for (const [k, days] of vocabByDe) {
  const uniq = Array.from(new Set(days))
  if (uniq.length > 1) err('all', 'vocab-dup', `"${k}" is a vocabulary entry on Tag ${uniq.join(' and Tag ')} — teach it once`)
  else if (days.length > 1) err(`Tag ${uniq[0]}`, 'vocab-dup', `"${k}" appears twice in the same vocabulary list`)
}

const words = (s) => norm(s).replace(/\*/g, '').split(' ').filter((w) => w.length > 1)
const shingles = (s, n = 3) => {
  const w = words(s)
  const out = new Set()
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '))
  return out
}
const overlap = (a, b) => {
  if (!a.size || !b.size) return 0
  let hit = 0
  for (const x of a) if (b.has(x)) hit++
  return hit / Math.min(a.size, b.size) // containment: catches a short block copied into a longer one
}

const blockText = (b) => {
  if (b.t === 'rule') return `${b.title}. ${b.body}`
  if (b.t === 'p' || b.t === 'tip' || b.t === 'warn' || b.t === 'sticky') return b.text
  if (b.t === 'table') return b.rows.map((r) => r.join(' ')).join(' ')
  if (b.t === 'compare') return b.rows.map((r) => `${r.wrong} ${r.right} ${r.why}`).join(' ')
  return ''
}
const flat = []
for (const d of DAYS) {
  d.notes.forEach((b, i) => {
    const text = blockText(b)
    if (text && words(text).length >= 12) flat.push({ day: d.id, i, t: b.t, text, sh: shingles(text), cap: b.caption ?? b.title ?? '' })
  })
}
for (let x = 0; x < flat.length; x++) {
  for (let y = x + 1; y < flat.length; y++) {
    const a = flat[x]
    const b = flat[y]
    const o = overlap(a.sh, b.sh)
    if (o >= 0.6) {
      const where = a.day === b.day ? `twice on Tag ${a.day}` : `on Tag ${a.day} and Tag ${b.day}`
      warn('all', 'near-duplicate', `${a.t}/${b.t} block ${where} overlap ${(o * 100).toFixed(0)}%: "${(a.cap || a.text).slice(0, 55)}" ~ "${(b.cap || b.text).slice(0, 55)}"`)
    }
  }
}

// example sentences taught twice
const exSeen = new Map()
for (const d of DAYS) {
  for (const b of d.notes) {
    if (b.t !== 'ex') continue
    for (const it of b.items) {
      const k = norm(it.de)
      if (!exSeen.has(k)) exSeen.set(k, [])
      exSeen.get(k).push(d.id)
    }
  }
}
for (const [k, days] of exSeen) if (days.length > 1) warn('all', 'example-dup', `example "${k.slice(0, 70)}" appears ${days.length}× (Tag ${days.join(', ')})`)

// exercise questions repeated
const qSeen = new Map()
for (const d of DAYS) {
  for (const e of d.exercises) {
    const key = e.k === 'mcq' || e.k === 'fill' ? e.q : e.k === 'order' ? e.a : e.k === 'artikel' ? e.noun : e.text
    const k = `${e.k}:${norm(key)}`
    if (!qSeen.has(k)) qSeen.set(k, [])
    qSeen.get(k).push(d.id)
  }
}
for (const [k, days] of qSeen) if (days.length > 1) warn('all', 'exercise-dup', `exercise "${k.slice(0, 70)}" appears ${days.length}× (Tag ${days.join(', ')})`)

/* ── hover coverage: German words that would show no tooltip ─────────── */
const gtmp = path.join(ROOT, 'node_modules', '.cache-audit-gloss.mjs')
await esbuild.build({
  entryPoints: [path.join(ROOT, 'src', 'lib', 'glossary.ts')],
  bundle: true, format: 'esm', platform: 'node', outfile: gtmp,
  alias: { '@': path.join(ROOT, 'src') }, logLevel: 'silent',
})
const { lookup } = await import('file://' + gtmp.replace(/\\/g, '/'))
// names that never get a tooltip: the shared list plus one file per Day in scripts/audit-names.d/
const nameFiles = [path.join(ROOT, 'scripts', 'audit-names.txt')]
const nameDir = path.join(ROOT, 'scripts', 'audit-names.d')
if (fs.existsSync(nameDir)) for (const f of fs.readdirSync(nameDir)) if (f.endsWith('.txt')) nameFiles.push(path.join(nameDir, f))
const NAMES = new Set(
  nameFiles
    .filter((f) => fs.existsSync(f))
    .flatMap((f) => fs.readFileSync(f, 'utf8').split(/\r?\n/))
    .map((l) => l.trim().toLowerCase())
    .filter((l) => l && !l.startsWith('#')),
)
const AMBIGUOUS = new Set(['in', 'an', 'man', 'also', 'was', 'hat', 'die', 'bald', 'mal', 'hier', 'boot'])
const tok = (t) => String(t ?? '').split(/[^\p{L}\p{M}ß-]+/u).filter((w) => w.length >= 2)
const BIGNUM = /^(?:ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|hundert|tausend|und|zig|zehn|ssig|ßig|zwan|dreißig|vierzig|fünfzig|sechzig|siebzig|achtzig|neunzig|million(?:en)?)+$/i
for (const d of DAYS) {
  const missing = new Map()
  const see = (t) => {
    for (const w of tok(t)) {
      const k = w.toLowerCase()
      if (AMBIGUOUS.has(k) || NAMES.has(k) || lookup(w) || BIGNUM.test(k)) continue
      missing.set(k, (missing.get(k) ?? 0) + 1)
    }
  }
  for (const b of d.notes) {
    if (b.t === 'h') see(b.text)
    if (b.t === 'ex') b.items.forEach((i) => see(i.de))
    if (b.t === 'table') { see(b.caption); (b.say ?? []).forEach(see) }
    if (b.t === 'timeline') b.steps.forEach((x) => see(x.de))
    if (b.t === 'preps') b.items.forEach((x) => see(x.de))
    if (b.t === 'sentence') b.items.forEach((x) => x.parts.forEach((p) => see(p.text)))
    if (b.t === 'conj') { see(b.verb); b.rows.forEach((r) => see(`${r.stem}${r.ending}`)) }
    if (b.t === 'compare') b.rows.forEach((r) => see(r.right))
    if (b.t === 'nouns') b.items.forEach((n) => { see(n.noun); see(n.pl) })
    if (b.t === 'numbers') b.items.forEach((n) => see(n.de))
    if (b.t === 'tiles') b.items.forEach((t) => { see(t.big); see(t.say) })
    if (b.t === 'clock' && b.mode === 'formal') b.items.forEach((i) => see(i.de))
  }
  d.dialogue?.lines.forEach((l) => see(l.de))
  for (const v of d.vocab) { see(v.de); see(v.ex); see(v.forms) }
  for (const e of d.exercises) {
    if (e.k === 'order') e.words.forEach(see)
    if (e.k === 'listen') see(e.text)
    if (e.k === 'artikel') see(e.noun)
  }
  if (missing.size) warn(D(d), 'no-tooltip', `${missing.size} German word(s) would show no hover meaning — add to src/data/gloss/g${String(d.id).padStart(2, '0')}.ts (or audit-names.txt if it is a name): ${[...missing.keys()].join(', ')}`)
}

/* ── report ──────────────────────────────────────────────────────────── */
const only = process.argv.find((a) => a.startsWith('--day='))?.split('=')[1]
const show = (list) => (only ? list.filter((p) => p.day === `Tag ${only}` || p.day === 'all') : list)
const group = (list) => {
  const by = {}
  for (const p of list) (by[p.kind] ??= []).push(p)
  return by
}
const dump = (label, list) => {
  if (!list.length) return
  console.log(`\n  ${label} (${list.length})`)
  const by = group(list)
  for (const kind of Object.keys(by)) {
    console.log(`  ── ${kind}`)
    for (const p of by[kind]) console.log(`     [${p.day}] ${p.msg}`)
  }
}
console.log(`\n  audited ${DAYS.length} days`)
dump('ERRORS', show(errors))
dump('WARNINGS', show(warnings))
console.log(errors.length ? `\n  ${errors.length} error(s), ${warnings.length} warning(s)\n` : `\n  no errors · ${warnings.length} warning(s) to review\n`)
if (errors.length) process.exitCode = 1
