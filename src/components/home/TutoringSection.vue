<template>
  <section class="tutoring-section" id="tutorias">
    <!-- Bloque decorativo lateral (Solo Desktop/Tablet) -->
    <div class="tutoring-bg-accent"></div>

    <div class="tutoring-container">

      <!-- Columna Izquierda: Propuesta de Valor y Logro Estatal -->
      <div class="tutoring-left-col" v-reveal-group="{ step: 100 }">
        <div class="badge-logro">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 15l-3.5 2.5L9 13 6 10.5l4.5-.5L12 5l1.5 5 4.5.5-3 2.5.5 4.5z"/>
          </svg>
          <span>Top 10 Estatal en Matemáticas</span>
        </div>

        <h2 class="tutoring-title">
          Traduzco lo <br>
          <span class="tutoring-title-accent">Complejo</span> <br>
          a humano.
        </h2>

        <p class="tutoring-desc">
          Con más de 2 años de experiencia como tutor privado, mi objetivo no es que memorices fórmulas para pasar un examen. Mi objetivo es que construyas una <strong>lógica analítica indestructible</strong> que te sirva para la carrera y la vida real.
        </p>

        <!-- Mini Flujo de Metodología -->
        <div class="tutoring-steps" v-reveal-group="{ delay: 420, step: 90, variant: 'zoom' }">
          <div class="step-pill">
            <span class="step-num">01</span>
            <span>Diagnóstico real</span>
          </div>
          <div class="step-pill">
            <span class="step-num">02</span>
            <span>Cero memorización</span>
          </div>
          <div class="step-pill">
            <span class="step-num">03</span>
            <span>Resolución guiada</span>
          </div>
        </div>

        <router-link v-magnetic to="/contacto" class="btn-tutoring-cta group">
          <span>AGENDAR ASESORÍA</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>

      <!-- Columna Derecha: Tarjetas de Materias -->
      <div class="tutoring-cards-col" v-reveal-group="{ delay: 150, step: 140, variant: 'right' }">

        <!-- Materia 1: Matemáticas -->
        <article class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-2 mb-1">
              <h3 class="tutoring-card-title">Matemáticas</h3>
              <span class="tutoring-level-tag">Prepa & Universidad</span>
            </div>
            <p class="tutoring-card-text">
              Desde álgebra básica hasta cálculo diferencial, integral y estadística. Desglosamos problemas aparentemente imposibles en pasos lógicos y fáciles de dominar.
            </p>
            <div class="tutoring-topics" v-reveal-group="{ delay: 520, step: 60, variant: 'zoom' }">
              <span class="topic-chip">Álgebra</span>
              <span class="topic-chip">Cálculo</span>
              <span class="topic-chip">Probabilidad</span>
            </div>
          </div>
        </article>

        <!-- Materia 2: Física -->
        <article class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="2"></circle>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
            </svg>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-2 mb-1">
              <h3 class="tutoring-card-title">Física</h3>
              <span class="tutoring-level-tag">Modelado Físico</span>
            </div>
            <p class="tutoring-card-text">
              Mecánica clásica, cinemática, termodinámica y electromagnetismo. Entenderás cómo funcionan las leyes del universo sin frustrarte con el despeje de ecuaciones.
            </p>
            <div class="tutoring-topics" v-reveal-group="{ delay: 520, step: 60, variant: 'zoom' }">
              <span class="topic-chip">Mecánica</span>
              <span class="topic-chip">Vectores</span>
              <span class="topic-chip">Termodinámica</span>
            </div>
          </div>
        </article>

        <!-- Materia 3: Lógica de Programación & Datos -->
        <article class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-2 mb-1">
              <h3 class="tutoring-card-title">Lógica de Programación & Datos</h3>
              <span class="tutoring-level-tag">Tech Mentoring</span>
            </div>
            <p class="tutoring-card-text">
              Si la matemática es el lenguaje del universo, el código es cómo lo estructuramos. Fundamentos de algoritmos, estructuras de datos, Python, SQL y desarrollo web.
            </p>
            <div class="tutoring-topics" v-reveal-group="{ delay: 520, step: 60, variant: 'zoom' }">
              <span class="topic-chip">Algoritmos</span>
              <span class="topic-chip">Python & SQL</span>
              <span class="topic-chip"> pensamiento Computacional</span>
            </div>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/tutoring.css"></style>
