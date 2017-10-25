const Monitor = require('forever-monitor').Monitor;
const waitOn = require('wait-on');
const chalk = require('chalk');
const samplesConfig = require('../../.samples.config.json').oktaSample;

const daemonUtil = module.exports;

function startNpmScript(script, color) {
  const child = new Monitor(script, {
    command: 'npm run',
    max: 1,
    silent: true,
  });

  const normal = chalk[color || 'yellow'];
  const bold = normal.bold.underline;

  child.on('stdout', (msg) => {
    console.log(normal(msg));
  });

  child.on('stderr', (msg) => {
    console.log(bold(`Failed to start "npm run ${script}"`));
    console.log(bold(msg));
  });

  child.on('exit', () => {
    console.log(normal(`Finished "npm run ${script}"`));
  });

  return new Promise((resolve, reject) => {
    child.on('start', () => {
      resolve(child);
    });
    console.log(normal(`Running "npm run ${script}"`));
    try {
      child.start();
    } catch (err) {
      reject(err);
    }
  });
}

function waitOnPromise(opts, context) {
  const normal = chalk[context.color || 'yellow'];
  const bold = normal.bold.underline;

  return new Promise((resolve, reject) => {
    const resourceJSON = JSON.stringify(opts.resources, null, 2);
    waitOn(opts, (err) => {
      if (err) {
        console.log(bold(`Failed while waiting for "npm run ${context.script}"`));
        console.log(bold(`Waiting for ${resourceJSON}`));
        console.log(bold(err));
        reject(err);
      } else {
        console.log(normal(`The following resources are available after "npm run ${context.script}":`));
        console.log(normal(resourceJSON));
        resolve();
      }
    });
  });
}

function startAndWait(opts) {
  return startNpmScript(opts.script, opts.color)
  .then(child => waitOnPromise({
    resources: opts.resources,
  }, opts)
  .then(() => child));
}

daemonUtil.startAppServer = () => startAndWait({
  script: 'start',
  color: 'green',
  resources: [
    `http-get://localhost:${samplesConfig.server.port}/assets/bundle.js`,
  ],
});

daemonUtil.startMockOkta = () => startAndWait({
  script: 'mock-okta',
  color: 'blue',
  resources: [
    `tcp:${samplesConfig.mockOkta.port}`,
  ],
});

daemonUtil.startTestMockOkta = () => startAndWait({
  script: 'test:mock-okta',
  color: 'magenta',
  resources: [
    `tcp:${samplesConfig.mockOkta.port}`,
  ],
});
