// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ST5bbXz2CLPeXOxR_e7OLKrhHpdnVbQ",
  authDomain: "linkedin-clone-c2c50.firebaseapp.com",
  projectId: "linkedin-clone-c2c50",
  storageBucket: "linkedin-clone-c2c50.appspot.com",
  messagingSenderId: "1003277682387",
  appId: "1:1003277682387:web:dbae631d48493040af3626",
  measurementId: "G-3V3W9S64WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{auth,app};