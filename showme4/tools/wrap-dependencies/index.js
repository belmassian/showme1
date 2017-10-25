const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;

// ----------------------------------------------------------------------------
// Setup

// Use 4.1.2, which includes many fixes to make shrinkwraps more consistent
const expectedNpmVersion = '4.1.2';
const rootDir = path.resolve(__dirname, '../../');

// ----------------------------------------------------------------------------
// Helper functions

function getNpmVersion() {
  return execSync('npm -v', { encoding: 'utf8' }).trim();
}

function generateShrinkwrap() {
  console.log(`Generating root shrinkwrap in ${rootDir}`);
  execSync('npm shrinkwrap --dev', { encoding: 'utf8', cwd: rootDir });
  return fs.readFileSync(path.resolve(rootDir, 'npm-shrinkwrap.json'));
}

function updateShrinkwrap(shrinkwrap) {
  console.log('Removing "from" and "resolved" from shrinkwrap');
  const replacer = (key, val) => {
    // Remove:
    // 1. resolved - remove internal registry urls
    // 2. from - reduce shrinkwrap churn when installing new dependencies
    if (key === 'resolved' || key === 'from') {
      return undefined;
    }
    return val;
  };
  return `${JSON.stringify(JSON.parse(shrinkwrap), replacer, 2)}\n`;
}

function writeCiShrinkwrap(shrinkwrap) {
  const out = path.resolve(__dirname, 'npm-shrinkwrap-ci.json');
  console.log(`Writing new shrinkwrap to ${out}`);
  fs.writeFileSync(out, shrinkwrap);
}

function deleteRootShrinkwrap() {
  const shrinkwrapPath = path.resolve(rootDir, 'npm-shrinkwrap.json');
  console.log(`Deleting root shrinkwrap from ${shrinkwrapPath}`);
  fs.unlinkSync(shrinkwrapPath);
}

// ----------------------------------------------------------------------------
// Init

const npmVersion = getNpmVersion();
if (npmVersion !== expectedNpmVersion) {
  const error = chalk.red(`
    Your npm version is ${npmVersion}, but we expect ${expectedNpmVersion}.
    Install ${expectedNpmVersion} by running:
    $ npm install -g npm@${expectedNpmVersion}
  `);
  throw new Error(error);
}

const shrinkwrap = generateShrinkwrap();
const updated = updateShrinkwrap(shrinkwrap);

writeCiShrinkwrap(updated);
deleteRootShrinkwrap();
