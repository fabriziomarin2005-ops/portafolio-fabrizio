<template>
  <section class="hero-wrapper">
    <!-- Patrón técnico de fondo -->
    <div class="hero-bg-pattern"></div>

    <!-- Resplandores ambientales (Glows) -->
    <div class="hero-glow-red"></div>
    <div class="hero-glow-dark"></div>

    <div class="hero-content">

      <!-- Columna Izquierda: Propuesta de Valor, Stack y CTAs -->
      <div class="hero-text-column">

        <!-- Estado en vivo (Visible en móvil) -->
        <div class="hero-mobile-status sm:hidden hero-anim" style="--d: 80ms">
          <span class="status-dot"></span>
          <span>Disponible para proyectos & consultoría</span>
        </div>

        <!-- Saludo + Rotador Dinámico de Especialidad -->
        <div class="hero-kicker-row hero-anim" style="--d: 160ms">
          <span class="hero-greeting">Hola, soy</span>
          <span class="hero-role-pill">
            <span class="hero-role-slash">//</span>
            <Transition name="role" mode="out-in">
              <span :key="currentRole" class="hero-role-text">{{ currentRole }}</span>
            </Transition>
          </span>
        </div>

        <!-- Título Principal -->
        <h1 class="hero-title">
          <span class="hero-line-mask">
            <span class="hero-line" style="--d: 260ms">Fabrizio</span>
          </span>
          <span class="hero-line-mask">
            <span class="hero-line hero-title-accent" style="--d: 380ms">Aguilar.</span>
          </span>
        </h1>

        <!-- Badges de Tecnologías (Optimizados para toque en móvil) -->
        <div class="tech-badge-container">
          <span class="tech-badge hero-anim" style="--d: 560ms">Laravel & Vue.js</span>
          <span class="tech-badge hero-anim" style="--d: 620ms">Data Science (Python · SQL · R)</span>
          <span class="tech-badge highlight hero-anim" style="--d: 680ms">AI Prototyping ⚡</span>
          <span class="tech-badge hero-anim" style="--d: 740ms">Sistemas Institucionales</span>
        </div>

        <!-- Descripción Principal con enfoque en impacto -->
        <p class="hero-desc hero-anim" style="--d: 760ms">
          Ingeniero de software y especialista en datos. Diseño <strong>arquitecturas web escalables</strong>, transformo datos complejos en <strong>modelos estratégicos</strong> y construyo soluciones inteligentes integrando <strong>Modelos Generativos de IA</strong>.
        </p>

        <!-- Botones de Acción (Full-width en móvil, inline en desktop) -->
        <div class="hero-botones hero-anim" style="--d: 880ms">
          <router-link v-magnetic to="/proyectos" class="btn-hero-primary group">
            <span>EXPLORAR PROYECTOS</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>

          <router-link v-magnetic to="/contacto" class="btn-hero-secondary">
            HABLEMOS
          </router-link>
        </div>

        <!-- Mini-Métricas de Autoridad (Proof of Competence) -->
        <div class="hero-metrics-bar hero-anim" style="--d: 1000ms">
          <div class="metric-item">
            <span class="metric-value">Full-Stack</span>
            <span class="metric-label">Sistemas CAE & SIPA</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-value">Data & AI</span>
            <span class="metric-label">Python · DuckDB · LLMs</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-value">Top 10</span>
            <span class="metric-label">Estatal en Matemáticas</span>
          </div>
        </div>

      </div>

      <!-- Columna Derecha: Marco Visual Brutalista + Tarjetas de Telemetría -->
      <div class="hero-visual-column">

        <div class="hero-photo-stage hero-photo-anim" style="--d: 420ms">
          <!-- Contenedor Principal de la Fotografía -->
          <div class="hero-photo-frame group">
            <div class="hero-photo-overlay"></div>
            <img
              src="/img/home/Fabrizio2.png"
              alt="Fabrizio Aguilar - Ingeniero en Ciencia de Datos y Desarrollador Full-Stack"
              class="hero-photo-img"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <!-- Tarjeta Flotante Superior Derecha: AI & Data Stack -->
          <div class="floating-card floating-card-top floating-anim" style="--d: 1100ms">
            <div class="floating-icon-box bg-marca-rojo text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p class="floating-card-label">Core Engine</p>
              <p class="floating-card-title">GenAI & Data Pipelines</p>
            </div>
          </div>

          <!-- Tarjeta Flotante Inferior Izquierda: Arquitectura & Lógica -->
          <div class="floating-card floating-card-bottom floating-anim" style="--d: 1250ms">
            <div class="floating-icon-box bg-marca-negro dark:bg-white text-white dark:text-marca-negro">
              <span class="font-mono font-black text-xs sm:text-sm">&lt;/&gt;</span>
            </div>
            <div>
              <p class="floating-card-label">Arquitectura</p>
              <p class="floating-card-title">Laravel · Vue 3 · SQL</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = [
  'Data Science Engineer',
  'Full-Stack Developer',
  'AI Application Prototyper',
  'Systems Architect'
]

const currentRoleIndex = ref(0)
const currentRole = ref(roles[0])
let roleInterval = null

onMounted(() => {
  roleInterval = setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
    currentRole.value = roles[currentRoleIndex.value]
  }, 2800)
})

onUnmounted(() => {
  if (roleInterval) clearInterval(roleInterval)
})
</script>

<style scoped src="@/assets/css/hero.css"></style>
