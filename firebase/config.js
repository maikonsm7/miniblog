// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaRfr81yMltb9RRNhZ3BYg6FLH2yaRHiA",
  authDomain: "miniblog-35812.firebaseapp.com",
  projectId: "miniblog-35812",
  storageBucket: "miniblog-35812.appspot.com",
  messagingSenderId: "40270728226",
  appId: "1:40270728226:web:11e7916a7ebe8e0ffa4e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Conectar com o banco de dados
const db = getFirestore(app)
export { db }