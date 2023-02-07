import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZG9CZ5ihOrd_G4y25L49RRnso8IWmuKI",
  authDomain: "joblog-586c1.firebaseapp.com",
  projectId: "joblog-586c1",
  storageBucket: "joblog-586c1.appspot.com",
  messagingSenderId: "709775626576",
  appId: "1:709775626576:web:0bae0ed2edae4bfca1dc55",
  measurementId: "G-6EY3H43GQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
