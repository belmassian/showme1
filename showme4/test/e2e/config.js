const jasmineReporters = require('jasmine-reporters');
const daemonUtil = require('../../tools/daemon-util');

const promises = Promise.all([
  daemonUtil.startAppServer(),
  daemonUtil.startMockOkta(),
]);

const config = {
  framework: 'jasmine2',
  beforeLaunch() {
    return promises;
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      savePath: 'build2/reports/junit',
      filePrefix: 'results',
    }));
  },
  afterLaunch() {
    promises.then((childProcesses) => {
      childProcesses.forEach(child => child.stop());
    });
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  },
  specs: ['specs/*.js'],
  restartBrowserBetweenTests: false,
  capabilities: {},
};

// Run PhantomJs in Travis, else Chrome
if (process.env.TRAVIS) {
  config.capabilities.browserName = 'phantomjs';
} else {
  config.capabilities.browserName = 'chrome';
}

module.exports.config = config;
