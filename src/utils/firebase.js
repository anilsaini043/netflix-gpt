// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpjr1R1T05Fg3O1OpTxGg8wm-JYo_Xx70",
  authDomain: "netflixgpt-8e15e.firebaseapp.com",
  projectId: "netflixgpt-8e15e",
  storageBucket: "netflixgpt-8e15e.firebasestorage.app",
  messagingSenderId: "279892302696",
  appId: "1:279892302696:web:303b29e1cfc783c2af94dd",
  measurementId: "G-FSPQ17BQ9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();