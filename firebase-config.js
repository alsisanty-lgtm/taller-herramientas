// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  query, 
  where,
  onSnapshot, 
  addDoc, 
  updateDoc, 
  doc, 
  deleteDoc, 
  getDocs,
  getDoc,
  setDoc,
  orderBy,
  limit,
  writeBatch
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfNTl9SIDmpJWmrNfVyX7ptk1WRjxQ-LA",
  authDomain: "taller-herramientas-38bed.firebaseapp.com",
  projectId: "taller-herramientas-38bed",
  storageBucket: "taller-herramientas-38bed.firebasestorage.app",
  messagingSenderId: "550679684036",
  appId: "1:550679684036:web:fac9e63eb8154c7b36fa91"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { 
  db, 
  collection, 
  query,
  where,
  onSnapshot, 
  addDoc, 
  updateDoc, 
  doc, 
  deleteDoc, 
  getDocs,
  getDoc,
  setDoc,
  orderBy,
  limit,
  writeBatch
};
