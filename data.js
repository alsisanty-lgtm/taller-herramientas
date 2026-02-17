// data.js - Listado completo de herramientas
const herramientasData = [
    // Juego de carracas y caja
    { nombre: "Juego de carracas", codigo: "JC-001", cantidad: 1, estado: "bueno" },
    { nombre: "Caja de herramientas BT.11A", codigo: "BT-11A", cantidad: 1, estado: "bueno" },
    
    // Llaves con trinquete
    { nombre: "Llave con trinquete 467B.10", codigo: "467B.10", cantidad: 1, estado: "bueno" },
    { nombre: "Llave trinquete 467B.13", codigo: "467B.13", cantidad: 1, estado: "bueno" },
    { nombre: "Llave trinquete 467B.17", codigo: "467B.17", cantidad: 1, estado: "bueno" },
    { nombre: "Llave trinquete 467B.19", codigo: "467B.19", cantidad: 1, estado: "bueno" },
    
    // Llaves mixtas
    { nombre: "Llave mixta 440.10", codigo: "440.10", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.13", codigo: "440.13", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.17", codigo: "440.17", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.19", codigo: "440.19", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.20", codigo: "440.20", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.22", codigo: "440.22", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.24", codigo: "440.24", cantidad: 1, estado: "bueno" },
    { nombre: "Llave mixta 440.36", codigo: "440.36", cantidad: 1, estado: "bueno" },
    
    // Llaves de pipa
    { nombre: "Llave de pipa 75.10", codigo: "75.10", cantidad: 1, estado: "bueno" },
    { nombre: "Llave de pipa 75.13", codigo: "75.13", cantidad: 1, estado: "bueno" },
    { nombre: "Llave de pipa 75.17", codigo: "75.17", cantidad: 1, estado: "bueno" },
    { nombre: "Llave de pipa 75.19", codigo: "75.19", cantidad: 1, estado: "bueno" },
    
    // Llaves de vaso
    { nombre: "Llave de vaso con mango 74A.7", codigo: "74A.7", cantidad: 1, estado: "bueno" },
    { nombre: "Llave de vaso con mango 74A.8", codigo: "74A.8", cantidad: 1, estado: "bueno" },
    
    // Otras llaves
    { nombre: "Llave inglesa 101.10", codigo: "101.10", cantidad: 1, estado: "bueno" },
    
    // Destornilladores y Allen
    { nombre: "Destornilladores juego ATP.J6", codigo: "ATP.J6", cantidad: 6, estado: "bueno" },
    { nombre: "Llaves Allen con mango 84TZA", codigo: "84TZA", cantidad: 4, estado: "bueno" },
    { nombre: "Juego llaves de Allen 83H.JP9A", codigo: "83H.JP9A", cantidad: 9, estado: "bueno" },
    
    // Alicates y pinzas
    { nombre: "Alicates de corte 192A.18CPE", codigo: "192A.18", cantidad: 1, estado: "bueno" },
    { nombre: "Alicates de punta 185A.20CPE", codigo: "185A.20", cantidad: 1, estado: "bueno" },
    { nombre: "Alicates universales 187A.18CPE", codigo: "187A.18", cantidad: 1, estado: "bueno" },
    { nombre: "Picoloro 181A.25CPE", codigo: "181A.25", cantidad: 1, estado: "bueno" },
    { nombre: "Alicates para arandela 179A.9", codigo: "179A.9", cantidad: 1, estado: "bueno" },
    { nombre: "Mordaza de presión 580.10", codigo: "580.10", cantidad: 1, estado: "bueno" },
    
    // Medición y marcado
    { nombre: "Calibre 805.2", codigo: "805.2", cantidad: 1, estado: "bueno" },
    { nombre: "Escuadra DELA.1223.03", codigo: "DELA.1223", cantidad: 1, estado: "bueno" },
    { nombre: "Metro 893B.825", codigo: "893B.825", cantidad: 1, estado: "bueno" },
    { nombre: "Nivel 3078.40", codigo: "3078.40", cantidad: 1, estado: "bueno" },
    { nombre: "Tiralíneas DELA.13299.15", codigo: "DELA.13299", cantidad: 1, estado: "bueno" },
    
    // Herramientas de golpe y corte
    { nombre: "Maza 1262H.125", codigo: "1262H.125", cantidad: 1, estado: "bueno" },
    { nombre: "Cincel 263.25", codigo: "263.25", cantidad: 1, estado: "bueno" },
    
    // Eléctricas y especiales
    { nombre: "Alargadera 50m", codigo: "AL-50", cantidad: 1, estado: "bueno" },
    { nombre: "Combo Makita DGA504 + DHP486 + SAMP", codigo: "MK-COMBO", cantidad: 1, estado: "bueno" },
    { nombre: "Taladro Makita DTW285Z", codigo: "MK-DTW285", cantidad: 1, estado: "bueno" },
    { nombre: "Taladro Makita percutor HP2071", codigo: "MK-HP2071", cantidad: 1, estado: "bueno" },
    { nombre: "Máquina de soldar", codigo: "SLD-001", cantidad: 1, estado: "bueno" },
    { nombre: "Carro transporte herramientas", codigo: "CARRO-01", cantidad: 1, estado: "bueno" }
];

// Inicializar datos
if (!localStorage.getItem('herramientas')) {
    const herramientasIniciales = herramientasData.map(h => ({
        ...h,
        presente: true,
        reporte: null,
        fechaReporte: null,
        necesitaRepuesto: false,
        id: Date.now() + Math.random().toString(36).substr(2, 9)
    }));
    localStorage.setItem('herramientas', JSON.stringify(herramientasIniciales));
}