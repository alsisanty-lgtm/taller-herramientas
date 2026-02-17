// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔴 REEMPLAZA ESTO CON TUS DATOS DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyB...",  // ← PON TU API KEY
  authDomain: "taller-herramientas.firebaseapp.com",  // ← PON TU DOMINIO
  projectId: "taller-herramientas",  // ← PON TU PROJECT ID
  storageBucket: "taller-herramientas.appspot.com",  // ← PON TU STORAGE
  messagingSenderId: "123456789",  // ← PON TU SENDER ID
  appId: "1:123456789:web:abc123"  // ← PON TU APP ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs };
