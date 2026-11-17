<template>
  <section class="about-section" id="ventaja">
    <div class="about-container">

      <!-- Encabezado de la sección -->
      <div class="about-header" v-reveal-group="{ step: 150 }">
        <div>
          <span class="about-subheading">// Ventaja Competitiva</span>
          <h2 class="about-heading">
            Por qué soy <br>
            <span class="about-heading-muted">Diferente.</span>
          </h2>
        </div>

        <p class="about-lead">
          La mayoría de los perfiles se dividen entre quienes solo maquetan interfaces y quienes solo analizan datos aislados. Yo conecto ambos mundos para llevar modelos analíticos e IA directamente a sistemas en producción.
        </p>
      </div>

      <!-- Grid de 3 Pilares (Mobile-First) -->
      <div class="about-grid" v-reveal-group="{ step: 140 }">

        <!-- Pilar 1: Ingeniería Híbrida -->
        <article class="diferenciador-card group">
          <div class="card-top-meta">
            <span class="pilar-num">01</span>
            <span class="pilar-badge">Arquitectura End-to-End</span>
          </div>

          <h3 class="diferenciador-titulo">
            Data Science + Full-Stack
          </h3>

          <p class="about-text">
            No me limito a crear vistas estáticas. Combino el desarrollo ágil en <strong>Laravel y Vue.js</strong> con el poder analítico de <strong>Python, SQL y R Studio</strong>. Domino el flujo desde la ingesta y limpieza en base de datos hasta el último píxel interactivo que utiliza el usuario final.
          </p>

          <div class="pilar-deliverables" v-reveal-group="{ delay: 480, step: 70, variant: 'zoom' }">
            <span class="deliverable-chip">Sistemas Institucionales</span>
            <span class="deliverable-chip">Consultas SQL Optimizadas</span>
            <span class="deliverable-chip">APIs RESTful</span>
          </div>
        </article>

        <!-- Pilar 2: IA & Diseño Intencional (Destacada en Negro y Rojo) -->
        <article class="diferenciador-card-destacada group">
          <div class="card-top-meta">
            <span class="pilar-num-destacado">02</span>
            <span class="pilar-badge-destacado">Innovación Aplicada ⚡</span>
          </div>

          <h3 class="diferenciador-titulo-dark">
            IA & Diseño Intencional
          </h3>

          <p class="about-text-dark">
            Mi filosofía se basa en la estructuración consciente de sistemas e integración de <strong>Modelos Generativos (GenAI)</strong>. No escribo código por inercia: cada componente, pipeline de datos y prototipo con IA tiene un propósito medible y escalable. Creo orden a partir del caos.
          </p>

          <div class="pilar-deliverables" v-reveal-group="{ delay: 480, step: 70, variant: 'zoom' }">
            <span class="deliverable-chip-dark">Prototipado con IA</span>
            <span class="deliverable-chip-dark">Automatización</span>
            <span class="deliverable-chip-dark">Escalabilidad</span>
          </div>
        </article>

        <!-- Pilar 3: Rigor Matemático y Comunicación -->
        <article class="diferenciador-card group">
          <div class="card-top-meta">
            <span class="pilar-num">03</span>
            <span class="pilar-badge">Liderazgo Técnico</span>
          </div>

          <h3 class="diferenciador-titulo">
            Traductor de Complejidad
          </h3>

          <p class="about-text">
            Respaldado por un <strong>Top 10 Estatal en Matemáticas</strong> y más de 2 años como mentor técnico, poseo la habilidad de traducir lógicas abstractas a un lenguaje claro y humano. Desde redactar documentación técnica rigurosa hasta alinear objetivos de negocio.
          </p>

          <div class="pilar-deliverables" v-reveal-group="{ delay: 480, step: 70, variant: 'zoom' }">
            <span class="deliverable-chip">Documentación SIPA/CAE</span>
            <span class="deliverable-chip">Lógica Matemática</span>
            <span class="deliverable-chip">Mentoría Analítica</span>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/about.css"></style>
