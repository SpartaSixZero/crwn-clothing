import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCQ2nlovjkNrNAk06mA6d2YPK9iL9Dmu4",
  authDomain: "crwn-db-c443a.firebaseapp.com",
  databaseURL: "https://crwn-db-c443a.firebaseio.com",
  projectId: "crwn-db-c443a",
  storageBucket: "crwn-db-c443a.appspot.com",
  messagingSenderId: "552558231958",
  appId: "1:552558231958:web:e20d9c526269756814ddb7",
  measurementId: "G-1Y4PRBQ7CM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;