import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCaAf16SJztwHBkv5sYG4esoy1uvwwKEEY",
  authDomain: "showme5-193e3.firebaseapp.com",
  databaseURL: "https://showme5-193e3.firebaseio.com",
  projectId: "showme5-193e3",
  storageBucket: '',
  messagingSenderId: "1042786572645",
};

const devConfig = {
  apiKey: "AIzaSyCaAf16SJztwHBkv5sYG4esoy1uvwwKEEY",
  authDomain: "showme5-193e3.firebaseapp.com",
  databaseURL: "https://showme5-193e3.firebaseio.com",
  projectId: "showme5-193e3",
  storageBucket: '',
  messagingSenderId: "1042786572645",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
