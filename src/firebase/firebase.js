import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnvX38_LO12daNib2uRWNVEPNiKiF9vpI",
  authDomain: "gimnasio-f5482.firebaseapp.com",
  projectId: "gimnasio-f5482",
  storageBucket: "gimnasio-f5482.appspot.com",
  messagingSenderId: "1016835501590",
  appId: "1:1016835501590:web:9fe2b805390453af914f37",
  measurementId: "G-7WCGEQKN9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage= getStorage(app);

const analytics = getAnalytics(app);

