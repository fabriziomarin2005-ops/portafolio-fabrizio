<template>
  <section class="impact-section" id="impacto">
    <div class="impact-container">

      <!-- Encabezado Persuasivo -->
      <div class="impact-header" v-reveal-group="{ step: 140 }">
        <span class="impact-kicker">// Retorno de Inversión Técnica</span>
        <h2 class="impact-heading">
          La tecnología intencional es lo único que necesitas para
          <span class="impact-heading-highlight">escalar tu proyecto.</span>
        </h2>
      </div>

      <!-- Las 4 Tarjetas de Resultados (Mobile-First Grid) -->
      <div class="impact-grid" v-reveal-group="{ step: 110 }">

        <!-- Tarjeta 1: Eficiencia Operativa & IA -->
        <article class="impact-card group">
          <div class="impact-card-top">
            <div class="impact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="impact-num">01</span>
          </div>

          <h3 class="impact-title">Eficiencia Operativa & IA</h3>
          <p class="impact-text">
            Automatizo tareas repetitivas e integro prototipos de IA. Construyo sistemas administrativos y bases de datos que eliminan cuellos de botella y el trabajo manual en tu equipo.
          </p>

          <div class="impact-footer-tag">
            <span>Laravel · Gemini API · Workflows</span>
          </div>
        </article>

        <!-- Tarjeta 2: Decisiones Estratégicas -->
        <article class="impact-card group">
          <div class="impact-card-top">
            <div class="impact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span class="impact-num">02</span>
          </div>

          <h3 class="impact-title">Decisiones Estratégicas</h3>
          <p class="impact-text">
            Implemento analítica avanzada, modelos matemáticos y limpieza de bases de datos masivas para que tomes decisiones de negocio basadas en evidencia estadística, no en intuición.
          </p>

          <div class="impact-footer-tag">
            <span>Python · SQL · DuckDB · R Studio</span>
          </div>
        </article>

        <!-- Tarjeta 3: Experiencia de Usuario -->
        <article class="impact-card group">
          <div class="impact-card-top">
            <div class="impact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="impact-num">03</span>
          </div>

          <h3 class="impact-title">Experiencia de Usuario</h3>
          <p class="impact-text">
            La complejidad técnica debe ser invisible. Diseño y maqueto interfaces reactivas, limpias y sin fricción bajo estándares Mobile-First para que tus usuarios dominen la plataforma al instante.
          </p>

          <div class="impact-footer-tag">
            <span>Vue 3 · Vuetify · Tailwind CSS</span>
          </div>
        </article>

        <!-- Tarjeta 4: Escalabilidad Rentable -->
        <article class="impact-card group">
          <div class="impact-card-top">
            <div class="impact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span class="impact-num">04</span>
          </div>

          <h3 class="impact-title">Escalabilidad Rentable</h3>
          <p class="impact-text">
            Mi enfoque en arquitecturas modulares, consultas indexadas y documentación técnica rigurosa garantiza que tu software crezca a la par de tu operación sin deuda técnica.
          </p>

          <div class="impact-footer-tag">
            <span>Clean Code · Cloud DB · Docs</span>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/impact.css"></style>
