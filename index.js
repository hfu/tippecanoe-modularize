const config = require('config')
const { spawn } = require('child_process')

spawn('tippecanoe', [
  '--force',
  '--output=output.mbtiles',
  // '--full-detail=26',
  // '--low-detail=26',
  // '--minimum-detail=26',
  // '--no-feature-limit',
  // '--no-tile-size-limit',
  '--simplification=2',
  '--maximum-zoom=15',
  "--prefilter=node apply_modify.js $1 $2 $3",
  config.get('srcPath')
], { stdio: 'inherit' })

