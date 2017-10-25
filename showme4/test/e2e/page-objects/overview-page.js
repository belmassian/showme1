'use strict';

const util = require('./shared/util');

class OverviewPage {

  constructor() {
    this.$overviewHeader = $(util.se('overview-doc-header'));
    this.$linkAuthCodeLoginRedirect = $(util.se('auth-code-login-redirect'));
    this.$linkAuthCodeLoginCustom = $(util.se('auth-code-login-custom'));
  }

  load() {
    browser.get('http://localhost:3000/');
    return this.waitForPageLoad();
  }

  waitForPageLoad() {
    return util.wait(this.$overviewHeader);
  }

  chooseAuthCodeLoginRedirect() {
    return this.$linkAuthCodeLoginRedirect.click();
  }

  chooseAuthCodeLoginCustom() {
    return this.$linkAuthCodeLoginCustom.click();
  }

}

module.exports = OverviewPage;
