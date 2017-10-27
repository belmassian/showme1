import React, { Component } from 'react';
import './app.css';
import MessageList from './components/MessageList';
import TopNav from './Nav';
import MainArea from './MainArea';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {

constructor(props){
  super(props);
  firebase.initializeApp({
	  apiKey: "AIzaSyCaAf16SJztwHBkv5sYG4esoy1uvwwKEEY",
	  authDomain: "showme5-193e3.firebaseapp.com",
	  databaseURL: "https://showme5-193e3.firebaseio.com",
	  projectId: "showme5-193e3",
	  storageBucket: '',
	  messagingSenderId: "1042786572645",
	});

}

  render() {
    return (
      <div className="App">
        <TopNav title="ShowMe" />
        <MainArea/>
      </div>
      )
  }
}

export default App;