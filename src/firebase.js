// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPKVr8NY5qsyZAVdUXolwvWAIsbN1mpj4",
  authDomain: "ecommerce-b429b.firebaseapp.com",
  projectId: "ecommerce-b429b",
  storageBucket: "ecommerce-b429b.appspot.com",
  messagingSenderId: "576300643305",
  appId: "1:576300643305:web:2b36c2115076120cc11178"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);