<template>
  <section class="career-section" id="trayectoria">
    <div class="career-container">

      <!-- Encabezado de Sección -->
      <div class="career-header" v-reveal-group="{ step: 140 }">
        <span class="career-kicker">// El Camino & Evolución</span>
        <h2 class="career-main-title">
          Dónde he estado y <br class="hidden md:block">
          <span class="text-marca-rojo">hacia dónde voy.</span>
        </h2>
      </div>

      <!-- Grid de 2 Columnas (Mobile-First) -->
      <div class="career-grid" v-reveal-group="{ step: 160 }">

        <!-- Columna 1: Experiencia Consolidada -->
        <div class="career-card">
          <div class="career-card-header">
            <h3 class="career-card-title">Mi Experiencia</h3>
            <span class="career-card-badge">Producción & Liderazgo</span>
          </div>

          <div class="career-timeline" v-reveal-group="{ delay: 260, step: 130 }">

            <!-- Item 1 -->
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <span class="timeline-date">Universidad Mundo Maya (UMMA)</span>
              <h4 class="timeline-role">Desarrollo en Depto. de Sistemas</h4>
              <p class="timeline-desc">
                Desarrollo evolutivo, mantenimiento, documentación técnica y optimización de los sistemas institucionales <strong>CAE</strong> (gestión extracurricular) y <strong>SIPA</strong> (gestión de adquisiciones), asegurando la estabilidad operativa.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Laravel</span>
                <span class="timeline-tag">Vue.js</span>
                <span class="timeline-tag">Blade</span>
                <span class="timeline-tag">SQL</span>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <span class="timeline-date">+2 Años de Trayectoria · Top 10 Estatal</span>
              <h4 class="timeline-role">Asesor y Tutor Técnico Privado</h4>
              <p class="timeline-desc">
                Impartición de mentorías personalizadas en Matemáticas, Física y Lógica de Programación. Aplicación de metodologías analíticas para simplificar problemas complejos y formar pensamiento computacional.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Cálculo & Álgebra</span>
                <span class="timeline-tag">Física</span>
                <span class="timeline-tag">Algoritmos</span>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <span class="timeline-date">Formación & Certificaciones</span>
              <h4 class="timeline-role">Ingeniería en Ciencia de Datos</h4>
              <p class="timeline-desc">
                Especialización continua en modelado estadístico, redes neuronales, bases de datos relacionales/NoSQL y análisis avanzado de datos.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Python</span>
                <span class="timeline-tag">R Studio</span>
                <span class="timeline-tag">SQL</span>
                <span class="timeline-tag">MongoDB Atlas</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Columna 2: Mi Actualidad (Proyectos Activos & Enfoque) -->
        <div class="career-card career-card-active">
          <div class="career-card-header">
            <h3 class="career-card-title">Mi Actualidad</h3>
            <span class="career-card-badge-active">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              En Desarrollo Activo
            </span>
          </div>

          <div class="career-timeline" v-reveal-group="{ delay: 260, step: 130 }">

            <!-- Item Activo 1 -->
            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <span class="timeline-date">Full-Stack Architecture</span>
              <h4 class="timeline-role">Sistema de Gestión de Adquisiciones (SIPA)</h4>
              <p class="timeline-desc">
                Escalando la arquitectura, migraciones de base de datos, filtrado optimizado por <code>idEstudio</code> e interfaz de usuario administrativa con componentes reactivos.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Vue.js</span>
                <span class="timeline-tag">Vuetify</span>
                <span class="timeline-tag">Tailwind CSS</span>
                <span class="timeline-tag">Laravel</span>
              </div>
            </div>

            <!-- Item Activo 2 -->
            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <span class="timeline-date">GenAI & Cloud Prototyping</span>
              <h4 class="timeline-role">Prototipado de Aplicaciones con IA</h4>
              <p class="timeline-desc">
                Diseño y experimentación de soluciones de software impulsadas por Inteligencia Artificial utilizando Google AI Studio, Gemini API y modelos generativos para automatización inteligente.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Gemini API</span>
                <span class="timeline-tag">Google AI Studio</span>
                <span class="timeline-tag">Python</span>
              </div>
            </div>

            <!-- Item Activo 3 -->
            <div class="timeline-item">
              <div class="timeline-dot-active"></div>
              <span class="timeline-date">Data Science & Analytics</span>
              <h4 class="timeline-role">Radar de Fichajes & Transición Corporativa</h4>
              <p class="timeline-desc">
                Construyendo modelos de evaluación deportiva con datos de StatsBomb, Pandas y DuckDB, enfocando mi perfil hacia equipos de alto rendimiento en ciencia de datos, ingeniería de software y sector financiero.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Python</span>
                <span class="timeline-tag">DuckDB</span>
                <span class="timeline-tag">Pandas</span>
                <span class="timeline-tag">StatsBomb</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/career.css"></style>
