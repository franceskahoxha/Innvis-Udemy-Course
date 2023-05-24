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
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
