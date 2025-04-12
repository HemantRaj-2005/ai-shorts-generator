// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-video-shorts-gen.firebaseapp.com",
  projectId: "ai-video-shorts-gen",
  storageBucket: "ai-video-shorts-gen.firebasestorage.app",
  messagingSenderId: "773792568138",
  appId: "1:773792568138:web:19ec58f8dc2f5215db27b3",
  measurementId: "G-LTWB7FCT26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)