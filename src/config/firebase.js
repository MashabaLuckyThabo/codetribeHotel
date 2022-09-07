// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCEU6gfeYciOBqmwEOIieRwSLAuh6xcuEc",
  authDomain: "resort-booking-ff52a.firebaseapp.com",
  projectId: "resort-booking-ff52a",
  storageBucket: "resort-booking-ff52a.appspot.com",
  messagingSenderId: "825433302668",
  appId: "1:825433302668:web:87f20a7558a60855e23da9",
  measurementId: "G-R2JK14CTJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth};