/**
 * Datos personales y enlaces del portafolio — EDITA SOLO ESTE ARCHIVO.
 * Si un campo queda vacío (''), su botón/enlace se oculta automáticamente.
 */
export const SITE = {
  name: 'Fabrizio Aguilar',
  email: 'fabriziomarin2005@gmail.com',
  github: 'https://github.com/fabriziomarin2005-ops',

  // Ej: 'https://www.linkedin.com/in/tu-usuario'
  linkedin: 'https://www.linkedin.com/in/fabrizio-marin-6891502a4',

  // Coloca tu PDF en /public/cv/ y escribe la ruta. Ej: '/cv/Fabrizio-Aguilar-CV.pdf'
  cvUrl: '',

  // Solo números con lada de país, sin espacios ni '+'. Ej: '5219931234567'
  whatsapp: '529321257085',

  location: 'Villahermosa, Tabasco · Remoto / Híbrido'
}

/**
 * Enlaces opcionales por proyecto (repositorio y demo en vivo).
 * La clave es el `id` del proyecto en ProjectsSection.vue.
 */
export const PROJECT_LINKS = {
  1: { repo: '', demo: '' }, // SIPA & CAE (probablemente privado: déjalo vacío)
  2: { repo: '', demo: '' }, // Asistente con Modelos Generativos
  3: { repo: '', demo: '' }, // Radar de Fichajes
  4: { // Ecosistema Web / este portafolio
    repo: 'https://github.com/fabriziomarin2005-ops/portafolio-fabrizio',
    demo: 'https://fabrizioaguilar.netlify.app'
  }
}
