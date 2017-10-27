import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import Navbar from './Navbar';
import './css/font-awesome.css'
import './css/bootstrap-social.css';
import './index.css';

const App = () => {
    console.log('mmmmm')

    return <Router>
    <div className="app">
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />

      <hr/>
    </div>
  </Router>
}

export default withAuthentication(App);