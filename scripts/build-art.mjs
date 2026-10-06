/**
 * Offline illustration build.
 *
 * Generates the editorial illustrations used by the "rich" lesson layout and
 * saves them to public/art/*.jpg, so they load instantly, work offline and cost
 * nothing at view time (same idea as `npm run audio`).
 *
 *   npm run art              # only what is missing
 *   npm run art -- --force   # regenerate everything
 *   npm run art -- d12-hero  # regenerate one by name
 *
 * To add art for a day, create scripts/art/dNN.json and reference the names from a
 * `figure` note block (art: 'd12-hero') or from the day's `hero` field.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const OUT = path.join(ROOT, 'public', 'art')
fs.mkdirSync(OUT, { recursive: true })

for (const file of ['.env', '.env.local']) {
  const p = path.join(ROOT, file)
  if (!fs.existsSync(p)) continue
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line)
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const KEY = process.env.MINIMAX_API_KEY
const BASE = (process.env.MINIMAX_BASE_URL || 'https://api.minimax.io').replace(/\/$/, '')
const MODEL = process.env.MINIMAX_IMAGE_MODEL || 'image-01'
const GROUP = process.env.MINIMAX_GROUP_ID || ''
if (!KEY) {
  console.error('MINIMAX_API_KEY missing — add it to .env.local')
  process.exit(1)
}

/** One art direction for the whole set, so every scene belongs together. */
const STYLE =
  'Editorial flat vector illustration for a modern language-learning app. ' +
  'Restrained palette: warm cream background, deep teal, dusty blue, terracotta accent, soft charcoal line shapes. ' +
  'Clean geometric shapes, subtle paper grain, generous negative space, calm and sophisticated, ' +
  'no text, no letters, no numbers, no watermark, no logo.'

/** Per-day specs live in scripts/art/*.json: { "<name>": { "ratio": "16:9", "prompt": "…" } } */
const ART = {}
const ART_DIR = path.join(ROOT, 'scripts', 'art')
if (fs.existsSync(ART_DIR)) {
  for (const f of fs.readdirSync(ART_DIR).filter((x) => x.endsWith('.json')).sort()) {
    Object.assign(ART, JSON.parse(fs.readFileSync(path.join(ART_DIR, f), 'utf8')))
  }
}

const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const FORCE = process.argv.includes('--force')

async function generate(name, { prompt, ratio }) {
  const qs = GROUP ? `?GroupId=${encodeURIComponent(GROUP)}` : ''
  const r = await fetch(`${BASE}/v1/image_generation${qs}`, {
    method: 'POST',
    headers: { authorization: `Bearer ${KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      prompt: `${STYLE} Scene: ${prompt}`,
      aspect_ratio: ratio,
      response_format: 'base64',
      n: 1,
      prompt_optimizer: false,
    }),
  })
  const data = await r.json().catch(() => ({}))
  const status = data?.base_resp?.status_code
  if (!r.ok || (status !== undefined && status !== 0)) {
    throw new Error(data?.base_resp?.status_msg || `HTTP ${r.status}`)
  }
  const b64 = data?.data?.image_base64?.[0]
  if (!b64) throw new Error('no image in response')
  fs.writeFileSync(path.join(OUT, `${name}.jpg`), Buffer.from(b64, 'base64'))
}

let made = 0
for (const [name, spec] of Object.entries(ART)) {
  if (only.length && !only.includes(name)) continue
  const file = path.join(OUT, `${name}.jpg`)
  if (fs.existsSync(file) && !FORCE && !only.includes(name)) {
    console.log(`  skip  ${name} (exists)`)
    continue
  }
  process.stdout.write(`  make  ${name} … `)
  try {
    await generate(name, spec)
    made++
    console.log('ok')
  } catch (e) {
    console.log(`FAILED — ${e.message}`)
  }
}
console.log(`\n  done — ${made} generated · files in public/art`)
