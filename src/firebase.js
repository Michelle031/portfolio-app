// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGEq_9tYKP1Z6ihA8ZI7cjdbci7pSIE34",
  authDomain: "angel-mba-dev.firebaseapp.com",
  projectId: "angel-mba-dev",
  storageBucket: "angel-mba-dev.appspot.com",
  messagingSenderId: "689980064420",
  appId: "1:689980064420:web:a478f0f96eb68af77f5c31",
  measurementId: "G-08T0MH67GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);