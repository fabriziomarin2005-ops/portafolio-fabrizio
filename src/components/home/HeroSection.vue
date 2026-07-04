<template>
  <section class="hero-wrapper">
    <!-- Patrón de puntos de fondo -->
    <div class="hero-bg-pattern"></div>

    <div class="hero-content">

      <!-- Columna Izquierda: Texto y CTA -->
      <div>
        <span class="hero-greeting">Hola, soy</span>
        <h1 class="hero-title">
          Fabrizio<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-marca-negro to-marca-rojo">Aguilar.</span>
        </h1>

        <div class="tech-badge-container">
          <span class="tech-badge">Data Science</span>
          <span class="tech-badge">Full-Stack</span>
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">Laravel</span>
          <span class="tech-badge">Python</span>
        </div>

        <p class="hero-desc">
          Transformo datos complejos en estrategias medibles y construyo interfaces web escalables. Pasión por el código limpio y la arquitectura sólida.
        </p>

        <div class="hero-botones">
          <router-link to="/proyectos" class="btn-hero-primary">
            VER PROYECTOS
          </router-link>
          <router-link to="/contacto" class="btn-hero-secondary">
            CONTACTO
          </router-link>
        </div>
      </div>

      <!-- Columna Derecha: Elemento Visual -->
      <!-- Columna Derecha: Elemento Visual -->
      <div class="relative flex justify-center lg:justify-end items-center mt-16 lg:mt-0 w-full px-4 sm:px-0">

        <!-- Bloques decorativos de fondo -->
        <div class="absolute w-72 h-72 bg-marca-rojo rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-10 right-10 w-72 h-72 bg-marca-negro rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <!-- Contenedor ÚNICO de tu foto -->
        <div class="w-full max-w-md aspect-[4/5] rounded-[40px] border-4 border-marca-negro shadow-[15px_15px_0px_0px_#dc2626] overflow-hidden relative group">

          <!-- Capa oscura que desaparece al pasar el mouse -->
          <div class="absolute inset-0 bg-marca-negro/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>

          <!-- TU IMAGEN AQUÍ -->
          <img src="/img/home/Fabrizio2.png" alt="Fabrizio Aguilar" class="w-full h-full object-cover" />

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Aquí más adelante podemos agregar animaciones con GSAP o ScrollReveal si quieres
</script>

<style scoped src="@/assets/css/hero.css"></style>
