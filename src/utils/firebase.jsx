// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBUa0bC746M5PH61ZEPdX4KIWsFvKahGk",
  authDomain: "certifilol.firebaseapp.com",
  projectId: "certifilol",
  storageBucket: "certifilol.firebasestorage.app",
  messagingSenderId: "160197471445",
  appId: "1:160197471445:web:333b00c9a47350bb8ac65c",
  measurementId: "G-HESWH5D2MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
