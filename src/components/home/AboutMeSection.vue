<template>
  <section class="aboutme-section" id="sobre-mi">
    <div class="aboutme-container">

      <!-- Encabezado Editorial -->
      <div class="aboutme-header" v-reveal-group="{ step: 150 }">
        <span class="aboutme-kicker">// Historia y Filosofía</span>
        <h1 class="adria-title">
          Más allá <br>
          <span class="text-marca-rojo">del código.</span>
        </h1>
      </div>

      <!-- Imagen Principal con Pie Editorial -->
      <figure class="editorial-figure group mt-8 sm:mt-12 mb-12 sm:mb-16" v-reveal="{ variant: 'zoom', delay: 200 }">
        <div class="editorial-image-container">
          <img
            src="/img/home/Fabrizio5.jpeg"
            alt="Fabrizio Aguilar"
            class="editorial-image"
            loading="lazy"
          />
        </div>
        <figcaption class="editorial-caption">
          <span>FIG 01. — VILLahermosa, TABASCO</span>
          <span>ARQUITECTURA & PROPÓSITO</span>
        </figcaption>
      </figure>

      <!-- Bloque de Prosa Principal -->
      <div class="adria-prose-wrapper" v-reveal-group="{ step: 140 }">
        <p class="adria-prose">
          En un mundo tecnológico donde intentamos controlar todo mediante algoritmos, modelos predictivos e inteligencia artificial, mi mayor certeza no viene de una pantalla. Viene de saber que no tengo el control absoluto, y eso me da una paz inmensa.
        </p>
        <p class="adria-prose">
          Mi motor principal es Dios. Cuando las cosas no salen como espero o cometo errores (porque al final, soy humano), recuerdo que <em>"El Señor da y el Señor quita"</em> y que <em>"El Señor es mi pastor, nada me faltará"</em>. Orar con fe siempre me trae claridad. Y como dice Ilia Topuria:
        </p>
      </div>

      <!-- Cita Destacada Brutalista -->
      <blockquote class="adria-quote" v-reveal="{ variant: 'left' }">
        "Si Dios destruye tus planes, es porque ellos pueden destruirte a ti."
      </blockquote>

      <!-- Línea del Tiempo Personal (Mobile-First) -->
      <div class="timeline-container" v-reveal-group="{ step: 160 }">

        <!-- Etapa 1: 18 Años -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-year">Hace unos años (18 años) · Teapa → Villahermosa</span>
          <h3 class="timeline-title">El sueño foráneo y la obsesión por los números</h3>
          <p class="adria-prose text-sm sm:text-base mb-6">
            Todo empezó viajando diariamente de Teapa a Villahermosa. Era un estudiante con el sueño de entender la ciencia de datos, apasionado por la filosofía estoica, la mitología nórdica y obsesionado con la lógica matemática, logrando entrar al <strong>Top 10 estatal en matemáticas</strong> en la preparatoria.
          </p>

          <figure class="editorial-figure group">
            <div class="editorial-image-container">
              <img
                src="/img/home/FABRIZIO4.jpeg"
                alt="Rumbo a Villahermosa"
                class="editorial-image-sm"
                loading="lazy"
              />
            </div>
            <figcaption class="editorial-caption">
              <span>FIG 02. — EL INICIO DEL CAMINO</span>
              <span>DISCIPLINA DIARIA</span>
            </figcaption>
          </figure>
        </div>

        <!-- Etapa 2: Actualidad -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-year">Hoy · Ingeniería & Sistemas en Producción</span>
          <h3 class="timeline-title">Constructor de Lógica, Datos e IA</h3>
          <p class="adria-prose text-sm sm:text-base mb-0">
            Esa curiosidad mutó en ingeniería real. Hoy no solo estudio <strong>Ingeniería en Ciencia de Datos en la UMMA</strong>, sino que diseño y mantengo sistemas institucionales (CAE y SIPA), construyo pipelines analíticos con Python y prototipo soluciones con Inteligencia Artificial. Además, ayudo a otros a dominar la física y las matemáticas como tutor, demostrando cómo la lógica transforma vidas.
          </p>
        </div>

      </div>

      <!-- El Pulso: Música, Lealtad y Desconexión -->
      <div class="balance-grid">

        <!-- Columna de Texto -->
        <div class="balance-text-col" v-reveal="{ variant: 'left' }">
          <span class="aboutme-kicker">// Mi Tribu & Cable a Tierra</span>
          <h2 class="balance-heading">
            El balance: Lealtad y Desconexión.
          </h2>
          <p class="adria-prose text-sm sm:text-base">
            Mi filosofía de vida se rige por un principio innegociable que comparto con mi artista favorito, Anuel AA: <strong>Ser real y leal hasta la muerte.</strong> Esa lealtad se la debo a mi tribu: mi mamá Ana Isabel, mi tía Gladys, mi padrino, mis hermanos (Isabel, Nayeli, Héctor y Juan Luis) y mi novia Ixchel.
          </p>
          <p class="adria-prose text-sm sm:text-base mb-6">
            Para rendir al máximo en la ingeniería, aplico una regla estricta: cuando estoy con los míos, me desconecto por completo. El Fabrizio que optimiza bases de datos y el que comparte en casa son la misma persona, pero respetan cada espacio. Y cuando necesito recargar energía o analizar el fútbol (especialmente al <strong>Club América</strong>), mi <em>soundtrack</em> siempre está ahí para recordarme de dónde vengo.
          </p>

          <!-- Chips de Intereses Personales -->
          <div class="personal-pills" v-reveal-group="{ delay: 400, step: 80, variant: 'zoom' }">
            <span class="personal-pill">⚽ Analítica & Club América</span>
            <span class="personal-pill">🏛️ Filosofía Estoica</span>
            <span class="personal-pill">🏍️ Ruta & Desconexión</span>
          </div>
        </div>

        <!-- Grid de Dos Imágenes (Familia + Ixchel) Optimizado para Móvil -->
        <div class="balance-photos-grid" v-reveal-group="{ delay: 150, step: 180, variant: 'zoom' }">

          <!-- Foto Familia -->
          <figure class="flex flex-col group">
            <div class="editorial-image-container h-[260px] sm:h-[360px] md:h-[400px]">
              <img
                src="/img/home/Fabrizio7.jpeg"
                alt="Mi Familia"
                class="balance-photo"
                loading="lazy"
              />
            </div>
            <figcaption class="editorial-caption">
              <span>MI FAMILIA</span>
              <span>RAÍCES</span>
            </figcaption>
          </figure>

          <!-- Foto Ixchel (Alineada en móvil, desfasada estilo revista en desktop) -->
          <figure class="flex flex-col group sm:translate-y-10 md:translate-y-14">
            <div class="editorial-image-container h-[260px] sm:h-[360px] md:h-[400px]">
              <img
                src="/img/home/ix.jpeg"
                alt="Ixchel y yo"
                class="balance-photo"
                loading="lazy"
              />
            </div>
            <figcaption class="editorial-caption">
              <span>CON IXCHEL</span>
              <span>COMPLICIDAD</span>
            </figcaption>
          </figure>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped src="@/assets/css/aboutme.css"></style>
