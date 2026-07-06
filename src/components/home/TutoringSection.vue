<template>
  <section class="tutoring-section">
    <div class="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gray-50 rounded-l-[4rem] lg:rounded-l-[100px] z-0 hidden md:block"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      <div>
        <div class="badge-logro">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 15l-3.5 2.5L9 13 6 10.5l4.5-.5L12 5l1.5 5 4.5.5-3 2.5.5 4.5z"/>
          </svg>
          Top 10 Estatal en Matemáticas
        </div>

        <h2 class="tutoring-title">
          Traduzco lo <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-marca-rojo to-red-800">Complejo</span> <br>
          a humano.
        </h2>

        <p class="tutoring-desc">
          Con más de 2 años de experiencia como tutor privado, mi objetivo no es que memorices fórmulas para pasar un examen. Mi objetivo es que construyas una lógica analítica indestructible que te sirva para la vida real.
        </p>

        <router-link to="/contacto" class="btn-hero-primary inline-flex items-center gap-3">
          AGENDAR ASESORÍA
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>

      <div class="flex flex-col gap-6">

        <div class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <div>
            <h3 class="tutoring-card-title">Matemáticas</h3>
            <p class="tutoring-card-text">
              Desde álgebra básica hasta cálculo avanzado. Desglosamos problemas aparentemente imposibles en pasos lógicos y fáciles de digerir.
            </p>
          </div>
        </div>

        <div class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="2"></circle>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
            </svg>
          </div>
          <div>
            <h3 class="tutoring-card-title">Física</h3>
            <p class="tutoring-card-text">
              Mecánica, termodinámica y electromagnetismo. Entenderás las leyes que rigen el universo sin frustrarte con las ecuaciones de por medio.
            </p>
          </div>
        </div>

        <div class="tutoring-card group">
          <div class="tutoring-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div>
            <h3 class="tutoring-card-title">Lógica de Programación</h3>
            <p class="tutoring-card-text">
              Si la matemática es el lenguaje del universo, el código es cómo lo controlamos. Bases de algoritmos y pensamiento computacional.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped src="@/assets/css/tutoring.css"></style>
