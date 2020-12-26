import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsP8CYF16K28SouedJz2vVIW9nr4G-_oE",
  authDomain: "challenge-d691f.firebaseapp.com",
  projectId: "challenge-d691f",
  storageBucket: "challenge-d691f.appspot.com",
  messagingSenderId: "441870070841",
  appId: "1:441870070841:web:5d56f38b17b0d66b6c09e8",
  measurementId: "G-2WMYR4H851",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
