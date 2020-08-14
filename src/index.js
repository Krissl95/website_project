import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: "im-tutorial-86a9c.firebaseapp.com",
  databaseURL: "https://im-tutorial-86a9c.firebaseio.com",
  projectId: "im-tutorial-86a9c",
  storageBucket: "im-tutorial-86a9c.appspot.com",
  messagingSenderId: "415416131254",
  appId: "1:415416131254:web:7e34d0d4b52e40f8505017",
  measurementId: "G-886D6RKKW9"
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
