// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC61Asfc1a2Pkc8z-sJOOId6R1rYqd2ziA",
  authDomain: "mini-blog-a69f4.firebaseapp.com",
  projectId: "mini-blog-a69f4",
  storageBucket: "mini-blog-a69f4.appspot.com",
  messagingSenderId: "633448863742",
  appId: "1:633448863742:web:e1f3f8dca397a3586c12af"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Database connect
const db = getFirestore(app)
export { db }