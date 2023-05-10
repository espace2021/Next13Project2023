// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyATRVSxM4NOndpyJct3th74FY4HQqb-B2I",
  authDomain: "nextproject-76ce9.firebaseapp.com",
  projectId: "nextproject-76ce9",
  storageBucket: "nextproject-76ce9.appspot.com",
  messagingSenderId: "474273333859",
  appId: "1:474273333859:web:ae5786efe351cb8ca66e56"
}
 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
