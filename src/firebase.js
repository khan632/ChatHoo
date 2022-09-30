import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANXw8naydkApZY58EJrXqCkPkPFZj5nz8",
  authDomain: "chat-apk-2f053.firebaseapp.com",
  projectId: "chat-apk-2f053",
  storageBucket: "chat-apk-2f053.appspot.com",
  messagingSenderId: "2045941296",
  appId: "1:2045941296:web:4ef2dc811810e1f4f27ff5",
  measurementId: "G-V2H2PQF42M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()