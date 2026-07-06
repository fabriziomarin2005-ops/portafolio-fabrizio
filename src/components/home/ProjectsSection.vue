<template>
  <section class="projects-section">

    <div class="projects-header">
      <span class="text-marca-rojo font-bold uppercase tracking-widest text-sm mb-4 block">Portafolio</span>
      <h2 class="projects-title text-white">
        Trabajo <br> <span class="text-gray-500">Reciente.</span>
      </h2>
    </div>

    <div class="bento-grid">

      <a href="#" class="bento-card group card-large">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Sistema Adquisiciones" class="bento-img" />
        <div class="bento-bg"></div>

        <div class="bento-content">
          <div class="project-tag-container">
            <span class="project-tag">Full-Stack</span>
            <span class="project-tag-dark">Vue.js</span>
            <span class="project-tag-dark">Laravel</span>
          </div>
          <h3 class="project-title">Sistema de Gestión de Adquisiciones</h3>
          <p class="project-desc">
            Arquitectura e interfaz para el control de recursos. Optimización de rendimiento en base de datos mediante filtrado por <code>idEstudio</code> y categorización dinámica de artículos institucionales.
          </p>
        </div>
      </a>

      <a href="#" class="bento-card card-small">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" alt="UI Colegio" class="bento-img" />
        <div class="bento-bg"></div>

        <div class="bento-content">
          <div class="project-tag-container">
            <span class="project-tag">UI / UX</span>
            <span class="project-tag-dark">Tailwind CSS</span>
          </div>
          <h3 class="project-title">Rediseño Web Institucional</h3>
          <p class="project-desc">
            Propuesta de modernización visual para el Colegio Mundo Maya. Construcción de componentes escalables y Hero sections optimizados para una experiencia de usuario fluida.
          </p>
        </div>
      </a>

      <a href="#" class="bento-card card-medium">
        <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop" alt="Scouting Data" class="bento-img" />
        <div class="bento-bg"></div>

        <div class="bento-content">
          <div class="project-tag-container">
            <span class="project-tag">Data Science</span>
            <span class="project-tag-dark">Python</span>
            <span class="project-tag-dark">DuckDB</span>
          </div>
          <h3 class="project-title">Radar de Fichajes</h3>
          <p class="project-desc">
            Motor de scouting deportivo. Extracción, limpieza y análisis de datos masivos de StatsBomb utilizando Pandas y entornos virtuales para evaluar rendimiento de jugadores.
          </p>
        </div>
      </a>

      <a href="#" class="bento-card card-medium">
        <img src="https://images.unsplash.com/photo-1618477388954-7852f32655c7?q=80&w=1964&auto=format&fit=crop" alt="Portafolio Code" class="bento-img" />
        <div class="bento-bg"></div>

        <div class="bento-content">
          <div class="project-tag-container">
            <span class="project-tag">Front-End</span>
            <span class="project-tag-dark">Vue 3</span>
            <span class="project-tag-dark">Netlify</span>
          </div>
          <h3 class="project-title">Arquitectura de Portafolio</h3>
          <p class="project-desc">
            Desarrollo de este ecosistema web. Enfoque en diseño intencional, renderizado dinámico con Vue Router y despliegue continuo en la nube garantizando tiempos de carga óptimos.
          </p>
        </div>
      </a>

    </div>
  </section>
</template>

<style scoped src="@/assets/css/projects.css"></style>
