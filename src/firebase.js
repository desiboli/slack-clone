import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJPZBMOFeB9_izhBoGx1bKmgYgQ-0KdaI",
  authDomain: "slack-clone-489f7.firebaseapp.com",
  projectId: "slack-clone-489f7",
  storageBucket: "slack-clone-489f7.appspot.com",
  messagingSenderId: "344341750268",
  appId: "1:344341750268:web:1070072ac23445144c5279",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, signInWithPopup, provider };
