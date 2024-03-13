// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-estate-f86fa.firebaseapp.com",
  projectId: "mern-estate-f86fa",
  storageBucket: "mern-estate-f86fa.appspot.com",
  messagingSenderId: "1098304946962",
  appId: "1:1098304946962:web:76d36b43cc25cb7baae9cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);