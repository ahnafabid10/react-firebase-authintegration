// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwBaNNq5Q0Z38nDtrB4Fj66canLsJADCs",
  authDomain: "react-firebase-authinteg-24d36.firebaseapp.com",
  projectId: "react-firebase-authinteg-24d36",
  storageBucket: "react-firebase-authinteg-24d36.firebasestorage.app",
  messagingSenderId: "373682675673",
  appId: "1:373682675673:web:6021a3ea2d90be3c6c43c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);