import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyCYfMNDRm80j7Javt2TeHoaDi1pKLCE9Tg",
  authDomain: "foxsay-messenger.firebaseapp.com",
  projectId: "foxsay-messenger",
  storageBucket: "foxsay-messenger.appspot.com",
  messagingSenderId: "963280914704",
  appId: "1:963280914704:web:7e0c06bc27fd9b8d807d95",
  measurementId: "G-2LSRKEXZM5"
});

export const Context = createContext<any>(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);