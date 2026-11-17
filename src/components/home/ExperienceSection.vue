<template>
  <section class="experience-section" id="experiencia">
    <div class="experience-container">

      <!-- Encabezado Principal -->
      <div class="experience-header" v-reveal-group="{ step: 140 }">
        <span class="experience-kicker">// Síntesis Ejecutiva</span>
        <h2 class="experience-main-heading">
          Soy Fabrizio Aguilar, desarrollador de software, <br class="hidden md:block">
          científico de datos y <span class="text-marca-rojo">creador de soluciones con IA.</span>
        </h2>
      </div>

      <!-- Grid Principal (Mobile-First) -->
      <div class="experience-grid">

        <!-- Tarjeta de Texto y Resultados -->
        <div class="experience-card-text" v-reveal="{ variant: 'left' }">
          <div class="flex items-center justify-between mb-4">
            <h3 class="experience-title">Impacto comprobado</h3>
            <span class="font-mono text-xs font-bold px-2.5 py-1 rounded bg-red-50 dark:bg-red-950/60 text-marca-rojo border border-red-200 dark:border-red-800">
              4 Áreas Clave
            </span>
          </div>

          <p class="experience-paragraph">
            A lo largo de mi trayectoria técnica he desarrollado un enfoque híbrido que une la ingeniería de software con el modelado matemático y la inteligencia artificial, logrando resultados tangibles:
          </p>

          <ul class="check-list" v-reveal-group="{ delay: 300, step: 100 }">
            <!-- Punto 1: Sistemas Institucionales -->
            <li class="check-item">
              <div class="check-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="check-text">
                Diseño, mantenimiento y optimización de sistemas institucionales críticos (<span class="check-highlight">CAE y SIPA</span>) utilizando <span class="check-highlight">Laravel, Vue.js y SQL</span>, agilizando la gestión administrativa y de adquisiciones.
              </p>
            </li>

            <!-- Punto 2: Ciencia de Datos -->
            <li class="check-item">
              <div class="check-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="check-text">
                Construcción de pipelines de datos y extracción de valor estratégico utilizando <span class="check-highlight">Python, Pandas, R Studio y DuckDB</span> para el análisis avanzado de métricas deportivas y corporativas.
              </p>
            </li>

            <!-- Punto 3: Prototipado con IA -->
            <li class="check-item">
              <div class="check-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="check-text">
                Prototipado rápido de aplicaciones impulsadas por <span class="check-highlight">Inteligencia Artificial (Gemini API & Google AI Studio)</span>, integrando modelos generativos para automatizar flujos complejos.
              </p>
            </li>

            <!-- Punto 4: Liderazgo Analítico -->
            <li class="check-item">
              <div class="check-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="check-text">
                Más de 2 años de experiencia como tutor analítico, respaldado por un <span class="check-highlight">Top 10 a nivel estatal en matemáticas</span>, traduciendo conceptos abstractos a soluciones claras.
              </p>
            </li>
          </ul>
        </div>

        <!-- Tarjeta de Imagen con Overlay Editorial -->
        <div class="experience-card-img group" v-reveal="{ variant: 'right', delay: 150 }">
          <img
            src="/img/home/fabrizio3.webp"
            width="558"
            height="992"
            decoding="async"
            alt="Fabrizio Aguilar"
            class="experience-img"
            loading="lazy"
          />
          <div class="experience-img-overlay"></div>

          <!-- Etiqueta flotante inferior sobre la imagen -->
          <div class="experience-img-caption">
            <div>
              <p class="font-mono text-[10px] uppercase tracking-widest text-marca-rojo font-bold mb-0.5">
                // Enfoque Profesional
              </p>
              <p class="text-sm sm:text-base font-black text-white mb-0">
                Arquitectura limpia, datos precisos e IA aplicada.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/experience.css"></style>
