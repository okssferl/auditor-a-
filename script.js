const ramos = {
  "Tecnología y Sistemas de Información": [],
  "Métodos Matemáticos I": [],
  "Introducción a la Economía": [],
  "Gestión y Empresas": [],
  "Inglés": [],
  "Aplicaciones de Manejo de Datos": ["Tecnología y Sistemas de Información"],
  "Métodos Matemáticos II": ["Métodos Matemáticos I"],
  "Introducción a la Microeconomía": ["Introducción a la Economía"],
  "Contabilidad I": ["Gestión y Empresas"],
  "Inglés I": ["Inglés"],
  "Entorno Social y Profesional": [],
  "Estadística I": ["Tecnología y Sistemas de Información", "Métodos Matemáticos I"],
  "Métodos Matemáticos III": ["Métodos Matemáticos II"],
  "Introducción a la Macroeconomía": ["Introducción a la Economía", "Métodos Matemáticos II"],
  "Contabilidad II": ["Contabilidad I"],
  "Inglés II": ["Inglés I"],
  "Libre I": [],
  "Estadística II": ["Estadística I", "Métodos Matemáticos III"],
  "Introducción a las Finanzas": ["Introducción a la Microeconomía", "Contabilidad I", "Estadística I"],
  "Auditoría I": ["Contabilidad I", "Gestión y Empresas"],
  "Fundamentos de Costos": ["Contabilidad I"],
  "Inglés III": ["Inglés II"],
  "Taller de Integración Profesional": ["Entorno Social y Profesional"],
  "Métodos Cuantitativos": ["Introducción a la Macroeconomía", "Estadística II"],
  "Tributación I": ["Introducción a la Microeconomía", "Introducción a la Macroeconomía"],
  "Análisis Contable": ["Contabilidad II", "Introducción a las Finanzas"],
  "Costos y Presupuestos": ["Fundamentos de Costos"],
  "Inglés IV": ["Inglés III"],
  "Entorno Legal": ["Entorno Social y Profesional"],
  "Análisis y Planificación Financiera": ["Métodos Cuantitativos", "Análisis Contable"],
  "Tributación II": ["Tributación I", "Entorno Legal"],
  "Auditoría II": ["Auditoría I"],
  "Control de Gestión": ["Costos y Presupuestos", "Taller de Integración Profesional"],
  "Libre II": [],
  "Libre III": [],
  "Gestión Financiera Corporativa": ["Análisis y Planificación Financiera"],
  "Tributación III": ["Tributación II"],
  "Auditoría III": ["Auditoría II"],
  "Costos Avanzados": ["Costos y Presupuestos", "Control de Gestión"],
  "Contabilidad Avanzada": ["Análisis Contable", "Costos y Presupuestos", "Inglés IV"],
  "Tecnología y Base de datos para Auditoría": ["Aplicaciones de Manejo de Datos"],
  "Gestión de Procesos de Negocios": ["Aplicaciones de Manejo de Datos", "Control de Gestión"],
  "Tributación IV": ["Tributación III"],
  "Tributación V": ["Tributación III"],
  "Taller de Contabilidad y Auditoría": ["Control de Gestión", "Contabilidad Avanzada", "Auditoría III"],
  "Tributación VI": ["Tributación IV", "Tributación V"],
  "Auditoría IV": ["Tecnología y Base de datos para Auditoría", "Auditoría III"],
  "Contabilidad para las Decisiones": ["Gestión Financiera Corporativa", "Contabilidad Avanzada"],
  "Práctica Profesional I": [],
  "Práctica Profesional II": ["Práctica Profesional I"],
  "Electivo I": [],
  "Electivo II": [],
  "Electivo III": []
};

const estadoRamos = {};

const contenedor = document.getElementById("malla");

function crearMalla() {
  contenedor.innerHTML = "";
  for (const [ramo, requisitos] of Object.entries(ramos)) {
    const div = document.createElement("div");
    div.className = "ramo";

    if (!estaDesbloqueado(ramo)) {
      div.classList.add("bloqueado");
    }

    if (estadoRamos[ramo]) {
      div.classList.add("aprobado");
    }

    div.innerText = ramo;
    div.onclick = () => {
      if (!estaDesbloqueado(ramo)) return;

      estadoRamos[ramo] = !estadoRamos[ramo];
      actualizarMalla();
    };

    contenedor.appendChild(div);
  }
}

function estaDesbloqueado(ramo) {
  const requisitos = ramos[ramo];
  return requisitos.every(req => estadoRamos[req]);
}

function actualizarMalla() {
  crearMalla();
  guardarEstado();
}

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function cargarEstado() {
  const guardado = JSON.parse(localStorage.getItem("estadoRamos") || "{}");
  Object.assign(estadoRamos, guardado);
}

cargarEstado();
crearMalla();
