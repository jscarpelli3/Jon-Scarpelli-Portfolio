// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYLepiqtowr5wU7JDTAXJztXnJHfhsCJM",
  authDomain: "jscarpelli-portfolio.firebaseapp.com",
  projectId: "jscarpelli-portfolio",
  storageBucket: "jscarpelli-portfolio.appspot.com",
  messagingSenderId: "1001307037878",
  appId: "1:1001307037878:web:30091e7ada9febb4fdc617",
  measurementId: "G-NX4JM364TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);