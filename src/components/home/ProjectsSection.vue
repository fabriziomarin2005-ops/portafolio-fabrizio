<template>
  <section class="projects-section" id="proyectos">
    <div class="projects-container">

      <!-- Encabezado + Filtros Interactivos Mobile-First -->
      <div class="projects-header" v-reveal-group="{ step: 150 }">
        <div>
          <span class="projects-kicker">// Portafolio & Casos de Estudio</span>
          <h2 class="projects-title">
            Trabajo <br class="hidden sm:block">
            <span class="projects-title-muted">Reciente.</span>
          </h2>
        </div>

        <!-- Barra de Filtros (Scroll horizontal suave en móvil) -->
        <div class="filter-bar" role="tablist" aria-label="Filtrar proyectos por categoría">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="['filter-btn', activeCategory === cat.id ? 'filter-btn-active' : 'filter-btn-inactive']"
            role="tab"
            :aria-selected="activeCategory === cat.id"
          >
            <span>{{ cat.label }}</span>
            <span class="filter-count">{{ getCount(cat.id) }}</span>
          </button>
        </div>
      </div>

      <!-- Cuadrícula Bento Reactiva (se re-coreografía al cambiar de filtro) -->
      <Transition name="grid-swap" mode="out-in">
      <div class="bento-grid" :key="activeCategory">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          v-reveal="{ delay: index * 110, variant: 'zoom' }"
          :class="['bento-card group', project.sizeClass]"
          role="button"
          tabindex="0"
          :aria-label="`Ver detalles: ${project.title}`"
          @click="openProjectModal(project)"
          @keydown.enter.prevent="openProjectModal(project)"
          @keydown.space.prevent="openProjectModal(project)"
        >
          <!-- Imagen de Fondo + Gradiente de Alto Contraste -->
          <img :src="project.image" :alt="project.title" class="bento-img" loading="lazy" />
          <div class="bento-bg"></div>

          <!-- Cabecera Superior de la Tarjeta: Métrica de Impacto + Botón Acción -->
          <div class="bento-top-bar">
            <span class="impact-pill">
              <span class="impact-dot"></span>
              {{ project.metric }}
            </span>

            <span class="bento-action-icon" title="Ver arquitectura del proyecto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </div>

          <!-- Contenido Principal (100% visible en Móvil y Desktop) -->
          <div class="bento-content">
            <div class="project-tag-container">
              <span class="project-tag">{{ project.categoryLabel }}</span>
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="project-tag-dark"
              >
                {{ tech }}
              </span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-desc">
              {{ project.shortDesc }}
            </p>

            <div class="project-footer-cta">
              <span>Explorar arquitectura técnica</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </article>
      </div>
      </Transition>

      <!-- Modal Técnico de Inspección Rápida (Mobile-First Bottom Sheet / Center Modal) -->
      <transition name="modal-fade">
        <div
          v-if="selectedProject"
          class="project-modal-backdrop"
          @click.self="closeProjectModal"
        >
          <div class="project-modal-box" role="dialog" aria-modal="true">
            <div class="project-modal-header">
              <div>
                <span class="project-tag mb-2 inline-block">{{ selectedProject.categoryLabel }}</span>
                <h3 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {{ selectedProject.title }}
                </h3>
              </div>
              <button
                @click="closeProjectModal"
                class="modal-close-btn"
                aria-label="Cerrar detalles"
              >
                ✕
              </button>
            </div>

            <div class="project-modal-body">
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {{ selectedProject.fullDesc }}
              </p>

              <!-- Bloque de Arquitectura / Logros Clave -->
              <div class="modal-highlights-box">
                <h4 class="font-mono text-xs uppercase tracking-widest text-marca-rojo font-bold mb-3">
                  // Arquitectura & Resultados Clave
                </h4>
                <ul class="space-y-2.5">
                  <li
                    v-for="(point, index) in selectedProject.highlights"
                    :key="index"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200"
                  >
                    <span class="text-marca-rojo font-black mt-0.5">▹</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <!-- Stack Completo -->
              <div class="mt-6">
                <span class="font-mono text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                  Stack Tecnológico Utilizado:
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in selectedProject.stack"
                    :key="tech"
                    class="project-tag-dark"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <!-- Enlaces del proyecto (configurables en src/config/site.js) -->
              <div v-if="selectedLinks.repo || selectedLinks.demo" class="flex flex-wrap gap-3 mt-6">
                <a
                  v-if="selectedLinks.repo"
                  :href="selectedLinks.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-modal-link"
                >
                  Ver código ↗
                </a>
                <a
                  v-if="selectedLinks.demo"
                  :href="selectedLinks.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-modal-link"
                >
                  Demo en vivo ↗
                </a>
              </div>
            </div>

            <div class="project-modal-footer">
              <button @click="closeProjectModal" class="btn-modal-secondary">
                Cerrar vista
              </button>
              <router-link to="/contacto" @click="closeProjectModal" class="btn-modal-primary">
                Consultar sobre este desarrollo
              </router-link>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { PROJECT_LINKS } from '@/config/site'

const activeCategory = ref('all')
const selectedProject = ref(null)

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'datascience', label: 'Data Science' },
  { id: 'ai', label: 'GenAI & Prototipos' }
]

const projects = [
  {
    id: 1,
    category: 'fullstack',
    categoryLabel: 'Full-Stack Architecture',
    sizeClass: 'card-large',
    title: 'Sistema de Gestión de Adquisiciones (SIPA & CAE)',
    metric: 'Optimización SQL & Flujos Institucionales',
    shortDesc: 'Arquitectura e interfaz para el control de recursos universitarios. Optimización de consultas mediante filtrado por idEstudio, migraciones estructuradas y categorización dinámica.',
    fullDesc: 'Sistema integral desarrollado para gestionar adquisiciones y actividades extracurriculares institucionales. Diseñado para eliminar cuellos de botella administrativos, garantizando trazabilidad y rapidez en las consultas.',
    stack: ['Laravel', 'Vue.js', 'Vuetify', 'SQL', 'Tailwind CSS'],
    highlights: [
      'Refactorización de consultas SQL y filtrado indexado por idEstudio para tiempos de respuesta inmediatos.',
      'Diseño de interfaces reactivas con Vue.js y componentes modulares para personal administrativo.',
      'Documentación técnica rigurosa y mantenimiento evolutivo de los ecosistemas CAE y SIPA.'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'ai',
    categoryLabel: 'AI Prototyping',
    sizeClass: 'card-small',
    title: 'Asistente & Prototipado con Modelos Generativos',
    metric: 'Google AI Studio · Gemini API',
    shortDesc: 'Diseño de flujos inteligentes y prototipos funcionales integrando LLMs para automatizar el análisis de texto, estructuración de datos y asistencia técnica.',
    fullDesc: 'Exploración e implementación de soluciones basadas en Inteligencia Artificial Generativa utilizando Google AI Studio y Gemini API. Enfocado en convertir prompts complejos y datos no estructurados en salidas JSON listas para producción.',
    stack: ['Gemini API', 'Python', 'Google AI Studio', 'Prompt Engineering'],
    highlights: [
      'Integración de modelos generativos para clasificación y resumen automatizado de información.',
      'Estructuración de respuestas deterministas mediante esquemas e instrucciones de sistema.',
      'Prototipado rápido orientado a resolver casos de uso reales en educación y productividad.'
    ],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'datascience',
    categoryLabel: 'Data Science',
    sizeClass: 'card-medium',
    title: 'Radar de Fichajes & Scouting Analytics',
    metric: '+10k Eventos Deportivos Procesados',
    shortDesc: 'Motor de scouting deportivo. Extracción, limpieza y modelado analítico de datos masivos de StatsBomb utilizando Python, Pandas y consultas columnares ultrarrápidas en DuckDB.',
    fullDesc: 'Plataforma analítica para la evaluación objetiva del rendimiento de futbolistas profesionales. Procesa grandes volúmenes de eventos en cancha para identificar perfiles estadísticos óptimos y comparar métricas avanzadas.',
    stack: ['Python', 'DuckDB', 'Pandas', 'R Studio', 'StatsBomb Data'],
    highlights: [
      'Pipeline ETL en Python y Pandas para normalizar métricas avanzadas por cada 90 minutos jugados.',
      'Implementación de DuckDB para ejecutar consultas analíticas SQL en memoria a alta velocidad.',
      'Modelado matemático para detección de talento e interpretación visual de resultados.'
    ],
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'fullstack',
    categoryLabel: 'UI / UX & Front-End',
    sizeClass: 'card-medium',
    title: 'Ecosistema Web & Rediseño Institucional',
    metric: '100% Mobile-First & Alto Rendimiento',
    shortDesc: 'Modernización visual y arquitectura frontend con Vue 3 y Tailwind CSS. Construcción de sistemas de diseño escalables, modo oscuro nativo y carga instantánea.',
    fullDesc: 'Propuesta y ejecución de interfaces modernas tanto para portales educativos como marca personal. Enfoque estricto en accesibilidad táctil, diseño intencional y despliegue continuo en la nube.',
    stack: ['Vue 3', 'Tailwind CSS', 'Vue Router', 'MongoDB Atlas', 'Netlify'],
    highlights: [
      'Arquitectura basada en componentes reutilizables con separación limpia de estilos y lógica.',
      'Optimización Mobile-First garantizando cero fricción en pantallas táctiles.',
      'Integración con servicios cloud y bases de datos distribuidas.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  }
]

const selectedLinks = computed(() => (selectedProject.value && PROJECT_LINKS[selectedProject.value.id]) || {})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const getCount = (catId) => {
  if (catId === 'all') return projects.length
  return projects.filter(p => p.category === catId).length
}

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

// Cerrar el modal con la tecla Escape
const onKeydown = (e) => {
  if (e.key === 'Escape' && selectedProject.value) closeProjectModal()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped src="@/assets/css/projects.css"></style>
