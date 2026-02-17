// script.js
function getHerramientas() {
    return JSON.parse(localStorage.getItem('herramientas')) || [];
}

function saveHerramientas(herramientas) {
    localStorage.setItem('herramientas', JSON.stringify(herramientas));
}

function actualizarHerramienta(id, cambios) {
    const herramientas = getHerramientas();
    const index = herramientas.findIndex(h => h.id === id);
    if (index !== -1) {
        herramientas[index] = { ...herramientas[index], ...cambios };
        saveHerramientas(herramientas);
        return true;
    }
    return false;
}

function marcarPresente(id, presente) {
    return actualizarHerramienta(id, { presente });
}

function reportarRota(id, motivo) {
    return actualizarHerramienta(id, {
        estado: 'roto',
        reporte: motivo,
        fechaReporte: new Date().toLocaleString(),
        necesitaRepuesto: true
    });
}

function agregarHerramienta(herramienta) {
    const herramientas = getHerramientas();
    herramienta.id = Date.now() + Math.random().toString(36).substr(2, 9);
    herramienta.presente = true;
    herramienta.estado = herramienta.estado || 'bueno';
    herramientas.push(herramienta);
    saveHerramientas(herramientas);
    return herramienta;
}

function eliminarHerramienta(id) {
    const herramientas = getHerramientas();
    const nuevas = herramientas.filter(h => h.id !== id);
    saveHerramientas(nuevas);
    return nuevas;
}

function getEstadisticas() {
    const herramientas = getHerramientas();
    return {
        total: herramientas.length,
        presentes: herramientas.filter(h => h.presente).length,
        rotas: herramientas.filter(h => h.estado === 'roto').length,
        reparacion: herramientas.filter(h => h.estado === 'reparacion').length,
        necesitanRepuesto: herramientas.filter(h => h.necesitaRepuesto).length
    };
}

window.toolFunctions = {
    getHerramientas,
    saveHerramientas,
    actualizarHerramienta,
    marcarPresente,
    reportarRota,
    agregarHerramienta,
    eliminarHerramienta,
    getEstadisticas
};