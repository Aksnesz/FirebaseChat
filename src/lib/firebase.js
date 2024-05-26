import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d5b4b.firebaseapp.com",
  projectId: "reactchat-d5b4b",
  storageBucket: "reactchat-d5b4b.appspot.com",
  messagingSenderId: "731441474940",
  appId: "1:731441474940:web:79bc6b91551619243908f9"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()