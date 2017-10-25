const cwd = process.cwd();
const path = require('path');
const exec = require('child_process').execSync;

const config = require(path.resolve(cwd, '.samples.config.json'));
const out = path.resolve(cwd, config.oktaSample.server.staticDir);

exec(`DIST_OUT=${out} npm run build`, { cwd: __dirname, stdio: 'inherit' });
