import { initializeApp, getAnalytics } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQSyEGMvDevteyR9PHIrAqwCS3JQvqPSI",
  authDomain: "crown-clothing-db-402dd.firebaseapp.com",
  projectId: "crown-clothing-db-402dd",
  storageBucket: "crown-clothing-db-402dd.appspot.com",
  messagingSenderId: "345685783775",
  appId: "1:345685783775:web:ee750a652c26e4fbef256a",
  measurementId: "G-ZVGKHLSHZV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
