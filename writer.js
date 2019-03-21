const config = require('config')
const { spawn } = require('child_process')
const fs = require('fs')
const rl = require('readline')

const [z, x, y] = process.argv.slice(2, 5).map(v => parseInt(v))
console.error(`${new Date().toISOString()} ${[z, x, y].join('/')}`)

if (z == 6) {
  const w = spawn('tippecanoe-json-tool',
    [],
    { stdin: 'pipe', stdout: 'pipe', stderr: 'inherit' }
  )

  fs.mkdirSync(`${config.get('dstDir')}/${z}/${x}`, { recursive: true })
  w.stdout.pipe(fs.createWriteStream(
    `${config.get('dstDir')}/${z}/${x}/${y}.ndjson`
  ))
  process.stdin.pipe(w.stdin)
}
process.stdin.pipe(process.stdout)

