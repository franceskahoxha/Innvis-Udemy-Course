// Import necessary Firebase modules
import { initializeApp, getAnalytics } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase configuration object containing credentials
const firebaseConfig = {
  apiKey: "AIzaSyAQSyEGMvDevteyR9PHIrAqwCS3JQvqPSI",
  authDomain: "crown-clothing-db-402dd.firebaseapp.com",
  projectId: "crown-clothing-db-402dd",
  storageBucket: "crown-clothing-db-402dd.appspot.com",
  messagingSenderId: "345685783775",
  appId: "1:345685783775:web:ee750a652c26e4fbef256a",
  measurementId: "G-ZVGKHLSHZV",
};

// Initialize Firebase app with the provided configuration
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the GoogleAuthProvider
// The "setCustomParameters" method sets the parameter "prompt" to "select_account", which prompts the user to select an account when signing in.
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// This line initializes the authentication service instance using getAuth(), which you can use to authenticate users.
export const auth = getAuth();

//This line exports a function signInWithGooglePopup that signs in the user with a Google account using a popup. It uses the signInWithPopup function from the authentication service and passes the auth instance and the provider (GoogleAuthProvider) instance.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
