const config = require('config')
const modify = require('./modify.js')
const readline = require('readline')

const [z, x, y] = process.argv.slice(2, 5).map(v => parseInt(v))

console.error(`${new Date().toISOString()}: ${z}/${x}/${y}`)

const rl = readline.createInterface({ input: process.stdin })

rl.on('line', line => {
  rl.pause()
  let f = modify(JSON.parse(line))
  if (f) {
    const s = JSON.stringify(f)
    process.stdout.write(s + '\n')
//    process.stderr.write(s + '\n')
  }
  rl.resume()
})
