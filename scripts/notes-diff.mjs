/**
 * Meaning-preservation check for reformatting work.
 *
 *   node scripts/notes-diff.mjs save    <snapshot.json>   # remember every word of every Day's notes
 *   node scripts/notes-diff.mjs compare <snapshot.json>   # list words that were LOST since the snapshot
 *
 * Reformatting (paragraph -> bullets/table) may add or reorder words but must not lose
 * any: a lost "not", "only", "except" or German example changes what the learner learns.
 * The report highlights qualifier words and German-looking words (umlauts, capitalised nouns).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as esbuild from 'esbuild'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const [mode, file] = process.argv.slice(2)
if (!['save', 'compare'].includes(mode) || !file) {
  console.error('usage: node scripts/notes-diff.mjs save|compare <snapshot.json> [--day=N]')
  process.exit(2)
}
const only = process.argv.find((a) => a.startsWith('--day='))?.split('=')[1]

const tmp = path.join(ROOT, 'node_modules', '.cache-notes-diff.mjs')
await esbuild.build({
  entryPoints: [path.join(ROOT, 'src', 'data', 'curriculum.ts')],
  bundle: true, format: 'esm', platform: 'node', outfile: tmp,
  alias: { '@': path.join(ROOT, 'src') }, logLevel: 'silent',
})
const { DAYS } = await import('file://' + tmp.replace(/\\/g, '/'))

const SKIP_KEYS = new Set(['t', 'art', 'icon', 'mode', 'role', 'cols', 'art', 'h', 'm', 'n'])
function strings(v, out = []) {
  if (typeof v === 'string') out.push(v)
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!SKIP_KEYS.has(k)) strings(x, out)
  return out
}
const tokens = (s) => s.toLowerCase().replace(/\*/g, '').split(/[^\p{L}\p{N}ß]+/u).filter((w) => w.length >= 1)

function snapshot() {
  const out = {}
  for (const d of DAYS) {
    const count = {}
    for (const b of d.notes) for (const s of strings(b)) for (const w of tokens(s)) count[w] = (count[w] ?? 0) + 1
    out[d.id] = count
  }
  return out
}

if (mode === 'save') {
  fs.writeFileSync(file, JSON.stringify(snapshot()))
  console.log(`saved ${DAYS.length} Days to ${file}`)
  process.exit(0)
}

const before = JSON.parse(fs.readFileSync(file, 'utf8'))
const after = snapshot()
const QUALIFIER = new Set([
  'not', 'no', 'never', 'always', 'only', 'except', 'exception', 'exceptions', 'unless', 'usually', 'often', 'sometimes', 'also',
  'both', 'every', 'each', 'all', 'any', 'but', 'however', 'cannot', 'nicht', 'kein', 'keine', 'nur', 'immer', 'nie', 'aber', 'außer',
  'most', 'some', 'rarely', 'almost', 'mostly', 'before', 'after', 'must', 'may', 'can', 'don', 'doesn', 'isn', 'aren', 'without',
])
const germanish = (w) => /[äöüß]/.test(w)
let total = 0
for (const d of DAYS) {
  if (only && String(d.id) !== only) continue
  const b = before[d.id] ?? {}
  const a = after[d.id] ?? {}
  const lost = []
  for (const [w, n] of Object.entries(b)) {
    const m = a[w] ?? 0
    if (m < n) lost.push([w, n - m])
  }
  if (!lost.length) {
    console.log(`Tag ${d.id}: nothing lost`)
    continue
  }
  total += lost.length
  const q = lost.filter(([w]) => QUALIFIER.has(w)).map(([w, n]) => `${w}×${n}`)
  const g = lost.filter(([w]) => germanish(w)).map(([w, n]) => `${w}×${n}`)
  const rest = lost.filter(([w]) => !QUALIFIER.has(w) && !germanish(w) && w.length > 3).map(([w, n]) => `${w}${n > 1 ? '×' + n : ''}`)
  console.log(`\nTag ${d.id}: ${lost.length} word(s) lost`)
  if (q.length) console.log(`  QUALIFIERS : ${q.join(', ')}`)
  if (g.length) console.log(`  GERMAN (äöüß): ${g.join(', ')}`)
  if (rest.length) console.log(`  other (len>3): ${rest.join(', ')}`)
}
console.log(total ? `\n${total} lost word types in total — review the lists above.\n` : '\nno words lost.\n')
