// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG_PlvjFTopST-h2lin28x6H2OamBPOus",
  authDomain: "coffee-store-5c1df.firebaseapp.com",
  projectId: "coffee-store-5c1df",
  storageBucket: "coffee-store-5c1df.firebasestorage.app",
  messagingSenderId: "168593359045",
  appId: "1:168593359045:web:09af6d530993bd838370ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth