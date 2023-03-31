import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "bab-ble.firebaseapp.com",
  projectId: "bab-ble",
  storageBucket: "bab-ble.appspot.com",
  messagingSenderId: "324859744636",
  appId: "1:324859744636:web:a6c00e7a90ff2af065d4f9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
