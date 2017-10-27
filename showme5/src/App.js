import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import { hashHistory } from 'react-router'
import Navbar from './Navbar';
import './css/font-awesome.css'
import './css/bootstrap-social.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {loggedin: false};
  }
  componentWillMount(){
    let _this = this;
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        //if logged in...
        _this.setState({loggedin: true});
          hashHistory.push('/dashboard'); //after login, redirect to dashboard
      } else {
        //if not logged in...
        _this.setState({loggedin: false});
      }
    });
  } 
  render() {
    console.log('zzzzzzzz')
    return (
      <Router>
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
      <div className="App">
        <div className="App-header">
          <h4>React / Firebase with Authentication</h4>
        </div>
        <Navbar loggedin={this.state.loggedin} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
