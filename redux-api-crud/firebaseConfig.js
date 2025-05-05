// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWrX-OiQXC_9gY_jed497aA62-SuIkLGo",
  authDomain: "react-recipe-e95b4.firebaseapp.com",
  projectId: "react-recipe-e95b4",
  storageBucket: "react-recipe-e95b4.firebasestorage.app",
  messagingSenderId: "99127717907",
  appId: "1:99127717907:web:4e86468d2dbf0046d50fe6",
  measurementId: "G-EMXLWD74Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const auth = getAuth(app);

