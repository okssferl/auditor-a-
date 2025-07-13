const ramosPorSemestre = {
  "I Semestre": [
    "Tecnología y Sistemas de Información",
    "Métodos Matemáticos I",
    "Introducción a la Economía",
    "Gestión y Empresas",
    "Inglés"
  ],
  "II Semestre": [
    "Aplicaciones de Manejo de Datos",
    "Métodos Matemáticos II",
    "Introducción a la Microeconomía",
    "Contabilidad I",
    "Inglés I",
    "Entorno Social y Profesional"
  ],
  "III Semestre": [
    "Estadística I",
    "Métodos Matemáticos III",
    "Introducción a la Macroeconomía",
    "Contabilidad II",
    "Inglés II",
    "Libre I"
  ],
  "IV Semestre": [
    "Estadística II",
    "Introducción a las Finanzas",
    "Auditoría I",
    "Fundamentos de Costos",
    "Inglés III",
    "Taller de Integración Profesional"
  ],
  "V Semestre": [
    "Métodos Cuantitativos",
    "Tributación I",
    "Análisis Contable",
    "Costos y Presupuestos",
    "Inglés IV",
    "Entorno Legal"
  ],
  "VI Semestre": [
    "Análisis y Planificación Financiera",
    "Tributación II",
    "Auditoría II",
    "Control de Gestión",
    "Libre II",
    "Libre III"
  ],
  "VII Semestre": [
    "Gestión Financiera Corporativa",
    "Tributación III",
    "Auditoría III",
    "Costos Avanzados",
    "Contabilidad Avanzada"
  ],
  "VIII Semestre": [
    "Tecnología y Base de datos para Auditoría",
    "Gestión de Procesos de Negocios",
    "Tributación IV",
    "Tributación V",
    "Taller de Contabilidad y Auditoría"
  ],
  "IX Semestre": [
    "Tributación VI",
    "Auditoría IV",
    "Contabilidad para las Decisiones",
    "Práctica Profesional I"
  ],
  "X Semestre": [
    "Electivo I",
    "Electivo II",
    "Electivo III",
    "Práctica Profesional II"
  ]
};

const requisitos = {
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

const contenedor = document.getElementByI
