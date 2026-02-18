// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔴 TUS DATOS REALES DE FIREBASE (copiados de tu consola)
const firebaseConfig = {
  apiKey: "AIzaSyDfNTl9SIDmpJWmrNfVyX7ptk1WRjxQ-LA",
  authDomain: "taller-herramientas-38bed.firebaseapp.com",
  projectId: "taller-herramientas-38bed",
  storageBucket: "taller-herramientas-38bed.firebasestorage.app",
  messagingSenderId: "550679684036",
  appId: "1:550679684036:web:fac9e63eb8154c7b36fa91"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar funciones
export { db, collection, query, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs };
