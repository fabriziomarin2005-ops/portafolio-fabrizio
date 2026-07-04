<template>
  <section class="career-section">
    <div class="career-container">

      <div class="mb-20 text-center">
        <span class="text-marca-rojo font-bold uppercase tracking-widest text-sm mb-4 block">El Camino</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-marca-negro tracking-tight uppercase leading-[0.9]">
          Dónde he estado y <br class="hidden md:block"> hacia dónde voy.
        </h2>
      </div>

      <div class="career-grid">

        <div class="career-card">
          <h3 class="career-card-title">Mi Experiencia</h3>
          <div class="career-timeline">

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4 class="timeline-role">Desarrollo en Depto. de Sistemas</h4>
              <p class="timeline-company">Universidad Mundo Maya</p>
              <p class="timeline-desc">
                Mantenimiento, documentación técnica y actualización de los sistemas institucionales CAE y SIPA, asegurando la estabilidad operativa y optimizando procesos internos.
              </p>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <h4 class="timeline-role">Asesor y Tutor Privado</h4>
              <p class="timeline-company">Matemáticas y Física</p>
              <p class="timeline-desc">
                Más de 2 años impartiendo tutorías personalizadas. Aplico metodologías analíticas para simplificar conceptos complejos, respaldado por un Top 10 estatal en matemáticas.
              </p>
            </div>

          </div>
        </div>

        <div class="career-card">
          <h3 class="career-card-title">Mi Actualidad</h3>
          <div class="career-timeline">

            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <h4 class="timeline-role">Sistema de Gestión de Adquisiciones</h4>
              <p class="timeline-company">Proyecto Full-Stack</p>
              <p class="timeline-desc">
                Desarrollando la arquitectura, migraciones de base de datos e interfaz de usuario utilizando Vue.js, Vuetify, Tailwind CSS y Laravel.
              </p>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <h4 class="timeline-role">Proyecto "Radar de Fichajes"</h4>
              <p class="timeline-company">Data Science / Scouting</p>
              <p class="timeline-desc">
                Construyendo modelos de análisis deportivo y evaluación de jugadores utilizando Python, Pandas, DuckDB y procesamiento de datos de StatsBomb.
              </p>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <h4 class="timeline-role">Transición Estratégica</h4>
              <p class="timeline-company">Análisis de Datos y Finanzas</p>
              <p class="timeline-desc">
                Finalizando mis estudios en Data Science con el objetivo de integrarme a equipos de alto rendimiento en el sector financiero o análisis de datos corporativo.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/css/career.css"></style>
