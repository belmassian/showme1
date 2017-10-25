import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Overview from './components/overview';
import LoginRedirect from './components/authorization-code/login-redirect';
import LoginCustom from './components/authorization-code/login-custom';
import Profile from './components/authorization-code/profile';

export function bootstrap(config) {
  render((
    <Router history={browserHistory}>
      <Route path="/authorization-code/login-redirect" component={LoginRedirect} config={config} />
      <Route path="/authorization-code/login-custom" component={LoginCustom} config={config} />
      <Route path="/authorization-code/profile" component={Profile} config={config} />
      <Route path="/" component={Overview} />
    </Router>
  ), document.querySelector(config.container));
}

export default bootstrap;
