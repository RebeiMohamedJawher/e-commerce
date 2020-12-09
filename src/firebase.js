/* eslint-disable no-unused-vars */
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyAL0lEUxsAuhl0l4_fuP5wSMu8KKvmjQiQ",
    authDomain: "e-commerce-ecbf8.firebaseapp.com",
    databaseURL: "https://e-commerce-ecbf8.firebaseio.com",
    projectId: "e-commerce-ecbf8",
    storageBucket: "e-commerce-ecbf8.appspot.com",
    messagingSenderId: "22351378928",
    appId: "1:22351378928:web:6004d77125eabeb7934535",
    measurementId: "G-Y4S7SRYF1D"
  });

const auth = firebase.auth();

export { auth };

