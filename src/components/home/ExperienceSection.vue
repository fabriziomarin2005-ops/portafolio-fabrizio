<template>
  <section class="experience-section">

    <h2 class="experience-main-heading px-4">
      Soy Fabrizio Aguilar, desarrollador de software y <br class="hidden md:block">
      especialista en datos.
    </h2>

    <div class="experience-grid">

      <div class="experience-card-text">
        <h3 class="experience-title">Sobre mí</h3>
        <p class="experience-paragraph">
          A lo largo de mi carrera técnica he desarrollado un enfoque único que combina el desarrollo web ágil con el análisis matemático, consiguiendo resultados como estos:
        </p>

        <ul class="check-list">
          <li class="check-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p class="check-text">
              He diseñado y mantenido sistemas institucionales complejos utilizando <span class="check-highlight">Vue.js, Laravel y SQL</span>, impactando la gestión administrativa y de recursos.
            </p>
          </li>

          <li class="check-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p class="check-text">
              Construyo arquitecturas y extraigo valor de la información utilizando <span class="check-highlight">Python y DuckDB</span> para el análisis avanzado de datos deportivos.
            </p>
          </li>

          <li class="check-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p class="check-text">
              Más de 2 años de experiencia como tutor analítico, respaldado por un <span class="check-highlight">Top 10 a nivel estatal en matemáticas</span>, traduciendo lo complejo a un lenguaje humano.
            </p>
          </li>
        </ul>
      </div>

      <div class="experience-card-img group">
        <img src="/img/home/Fabrizio3.png" alt="Fabrizio Aguilar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-marca-negro/5 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

    </div>
  </section>
</template>

<style scoped src="@/assets/css/experience.css"></style>
