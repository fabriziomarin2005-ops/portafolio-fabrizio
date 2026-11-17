<template>
  <footer class="footer">
    <div class="footer-container" v-reveal-group="{ step: 120 }">

      <!-- Columna 1: Marca y Especialidad -->
      <div class="footer-brand-col">
        <router-link to="/" class="footer-brand">
          Fabrizio <span class="text-marca-rojo">Aguilar.</span>
        </router-link>
        <p class="footer-role">
          Data Science Engineer · Full-Stack & AI Prototyping
        </p>
      </div>

      <!-- Columna 2: Badges de Stack & Copyright -->
      <div class="footer-center-col">
        <div class="footer-stack-row">
          <span class="footer-tech-pill">Vue 3</span>
          <span class="footer-tech-pill">Tailwind CSS</span>
          <span class="footer-tech-pill">Laravel</span>
          <span class="footer-tech-pill">Python</span>
        </div>
        <p class="footer-copy">
          © 2026 Fabrizio Aguilar. Diseñado con arquitectura limpia.
        </p>
      </div>

      <!-- Columna 3: Enlaces Sociales y Botón Subir -->
      <div class="footer-links-col">
        <div class="footer-links">
          <a
            :href="SITE.github"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
          >
            GitHub ↗
          </a>
          <a
            v-if="SITE.linkedin"
            :href="SITE.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
          >
            LinkedIn ↗
          </a>
          <router-link to="/contacto" class="footer-social-link">
            Contacto
          </router-link>
        </div>

        <button
          v-magnetic
          @click="scrollToTop"
          class="footer-scroll-top"
          aria-label="Volver arriba"
        >
          <span>Subir</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { SITE } from '@/config/site'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped src="@/assets/css/AppFooter.css"></style>
