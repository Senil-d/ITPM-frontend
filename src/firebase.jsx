// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "traverse-itpm.firebaseapp.com",
  projectId: "traverse-itpm",
  storageBucket: "traverse-itpm.appspot.com",
  messagingSenderId: "582430830261",
  appId: "1:582430830261:web:899dcbb87d02be396358fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);