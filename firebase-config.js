// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔴 REEMPLAZA ESTO CON LOS DATOS QUE COPIASTE DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyB...",  // ← PON EL TUYO
  authDomain: "taller-herramientas.firebaseapp.com",  // ← PON EL TUYO
  projectId: "taller-herramientas",  // ← PON EL TUYO
  storageBucket: "taller-herramientas.appspot.com",  // ← PON EL TUYO
  messagingSenderId: "123456789",  // ← PON EL TUYO
  appId: "1:123456789:web:abc123"  // ← PON EL TUYO
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar funciones
export { db, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs };
