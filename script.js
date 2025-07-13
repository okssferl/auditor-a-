const ramos = [
  { nombre: "Tecnología y Sistemas de Información", requisitos: [] },
  { nombre: "Aplicaciones de Manejo de Datos", requisitos: ["Tecnología y Sistemas de Información"] },
  { nombre: "Tecnología y Base de Datos para Auditoría", requisitos: ["Aplicaciones de Manejo de Datos"] },

  { nombre: "Métodos Matemáticos I", requisitos: [] },
  { nombre: "Estadística I", requisitos: ["Tecnología y Sistemas de Información", "Métodos Matemáticos I"] },
  { nombre: "Estadística II", requisitos: ["Estadística I", "Métodos Matemáticos III"] },
  { nombre: "Métodos Matemáticos II", requisitos: ["Métodos Matemáticos I"] },
  { nombre: "Métodos Matemáticos III", requisitos: ["Métodos Matemáticos II"] },
  { nombre: "Métodos Cuantitativos", requisitos: ["Introducción a la Macroeconomía", "Estadística II"] },

  { nombre: "Introducción a la Economía", requisitos: [] },
  { nombre: "Introducción a la Microeconomía", requisitos: ["Introducción a la Economía"] },
  { nombre: "Introducción a la Macroeconomía", requisitos: ["Métodos Matemáticos II", "Introducción a la Economía"] },

  { nombre: "Gestión y Empresas", requisitos: [] },
  { nombre: "Auditoría I", requisitos: ["Gestión y Empresas", "Contabilidad I"] },
  { nombre: "Auditoría II", requisitos: ["Auditoría I"] },
  { nombre: "Auditoría III", requisitos: ["Auditoría II"] },
  { nombre: "Auditoría IV", requisitos: ["Auditoría III", "Tecnología y Base de Datos para Auditoría"] },

  { nombre: "Contabilidad I", requisitos: ["Gestión y Empresas"] },
  { nombre: "Contabilidad II", requisitos: ["Contabilidad I"] },
  { nombre: "Contabilidad Avanzada", requisitos: ["Costos y Presupuestos", "Inglés IV", "Análisis Contable"] },
  { nombre: "Contabilidad para las Decisiones", requisitos: ["Gestión Financiera Corporativa", "Contabilidad Avanzada"] },

  { nombre: "Fundamentos de Costos", requisitos: ["Contabilidad I"] },
  { nombre: "Costos y Presupuestos", requisitos: ["Fundamentos de Costos"] },
  { nombre: "Costos Avanzados", requisitos: ["Costos y Presupuestos", "Control de Gestión"] },

  { nombre: "Inglés", requisitos: [] },
  { nombre: "Inglés I", requisitos: ["Inglés"] },
  { nombre: "Inglés II", requisitos: ["Inglés I"] },
  { nombre: "Inglés III", requisitos: ["Inglés II"] },
  { nombre: "Inglés IV", requisitos: ["Inglés III"] },

  { nombre: "Entorno Social y Profesional", requisitos: [] },
  { nombre: "Taller de Integración Profesional", requisitos: ["Entorno Social y Profesional"] },

  { nombre: "Entorno Legal", requisitos: ["Entorno Social y Profesional"] },

  { nombre: "Introducción a las Finanzas", requisitos: ["Contabilidad I", "Introducción a la Microeconomía", "Estadística I"] },
  { nombre: "Análisis Contable", requisitos: ["Contabilidad II", "Introducción a las Finanzas"] },
  { nombre: "Análisis y Planificación Financiera", requisitos: ["Métodos Cuantitativos", "Análisis Contable"] },
  { nombre: "Gestión Financiera Corporativa", requisitos: ["Análisis y Planificación Financiera"] },

  { nombre: "Control de Gestión", requisitos: ["Costos y Presupuestos", "Taller de Integración Profesional"] },

  { nombre: "Tributación I", requisitos: ["Introducción a la Microeconomía", "Introducción a la Macroeconomía"] },
  { nombre: "Tributación II", requisitos: ["Tributación I", "Entorno Legal"] },
  { nombre: "Tributación III", requisitos: ["Tributación II"] },
  { nombre: "Tributación IV", requisitos: ["Tributación III"] },
  { nombre: "Tributación V", requisitos: ["Tributación III"] },
  { nombre: "Tributación VI", requisitos: ["Tributación IV", "Tributación V"] },

  { nombre: "Gestión de Procesos de Negocios", requisitos: ["Aplicaciones de Manejo de Datos", "Control de Gestión"] },

  { nombre: "Taller de Contabilidad y Auditoría", requisitos: ["Auditoría III", "Contabilidad Avanzada", "Control de Gestión"] },

  { nombre: "Libre I", requisitos: [] },
  { nombre: "Libre II", requisitos: [] },
  { nombre: "Libre III", requisitos: [] },

  { nombre: "Electivo I", requisitos: [] },
  { nombre: "Electivo II", requisitos: [] },
  { nombre: "Electivo III", requisitos: [] },

  { nombre: "Práctica Profesional I", requisitos: [] },
  { nombre: "Práctica Profesional II", requisitos: ["Práctica Profesional I"] },
];

const aprobados = new Set();

function crearRamos() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.innerText = ramo.nombre;

    if (!ramo.requisitos.length || ramo.requisitos.every((r) => aprobados.has(r))) {
      if (aprobados.has(ramo.nombre)) {
        div.classList.add("aprobado");
      }
      div.addEventListener("click", () => aprobarRamo(ramo.nombre));
    } else {
      div.classList.add("bloqueado");
    }

    contenedor.appendChild(div);
  });
}

function aprobarRamo(nombre) {
  if (!aprobados.has(nombre)) {
    aprobados.add(nombre);
    crearRamos();
  }
}

document.addEventListener("DOMContentLoaded", crearRamos);
