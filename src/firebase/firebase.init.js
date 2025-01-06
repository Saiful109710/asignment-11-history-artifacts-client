// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB52JxEDNxhv31VDE-iuRSPwlDGktBZFuw",
  authDomain: "history-artifacts-user.firebaseapp.com",
  projectId: "history-artifacts-user",
  storageBucket: "history-artifacts-user.firebasestorage.app",
  messagingSenderId: "885140719683",
  appId: "1:885140719683:web:7c0f37972dbcb7d60e6cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
