// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0O1dLuPK1g0tElbeVXHNdfUMjF9nN1GQ",
  authDomain: "uber-next-clone-38d12.firebaseapp.com",
  projectId: "uber-next-clone-38d12",
  storageBucket: "uber-next-clone-38d12.appspot.com",
  messagingSenderId: "1083263904481",
  appId: "1:1083263904481:web:e811998f2dad12a3d865a0",
  measurementId: "G-GDXNL9BLMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
