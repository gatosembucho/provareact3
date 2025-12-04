// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6y6EKZ3D05LshEBHI25M9ovITX2ufAFs",
  authDomain: "aula16-84a1a.firebaseapp.com",
  projectId: "aula16-84a1a",
  storageBucket: "aula16-84a1a.firebasestorage.app",
  messagingSenderId: "815948174294",
  appId: "1:815948174294:web:3ace8dca8e5d871b9d0a77",
  measurementId: "G-TXMS1XZEMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore (app)
// const analytics = getAnalytics(app);