// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hightrade-6138b.firebaseapp.com",
  projectId: "hightrade-6138b",
  storageBucket: "hightrade-6138b.firebasestorage.app",
  messagingSenderId: "562659604726",
  appId: "1:562659604726:web:6b7032e67f05c87699d4d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);