<template>
  <section class="aboutme-section">
    <div class="max-w-5xl mx-auto">

      <span class="text-marca-rojo font-bold tracking-widest uppercase text-sm mb-6 block">Historia y Filosofía</span>
      <h1 class="adria-title">
        Más allá <br> del código.
      </h1>

      <div class="editorial-image-container mt-12 mb-16">
        <img src="/img/home/Fabrizio5.jpeg"  alt="Fabrizio Aguilar" class="editorial-image">
      </div>

      <div>
        <p class="adria-prose">
          En un mundo tecnológico donde intentamos controlar todo mediante algoritmos, mi mayor certeza no viene de una pantalla. Viene de saber que no tengo el control absoluto, y eso me da una paz inmensa.
        </p>
        <p class="adria-prose">
          Mi motor principal es Dios. Cuando las cosas no salen como espero o cometo errores (porque al final, soy humano), recuerdo que <em>"El Señor da y el Señor quita"</em> y que <em>"El Señor es mi pastor, nada me faltará"</em>. Orar con fe siempre me trae respuestas. Y como dice Ilia Topuria:
        </p>
      </div>

      <blockquote class="adria-quote">
        "Si Dios destruye tus planes, es porque ellos pueden destruirte a ti."
      </blockquote>

      <div class="timeline-container">

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-year">Hace unos años (18 años)</span>
          <h3 class="timeline-title">El sueño foráneo</h3>
          <p class="adria-prose text-base mb-6">
            Todo empezó viajando diariamente de Teapa a Villahermosa. Era un estudiante con el sueño de entender la ciencia de datos, apasionado por la filosofía estoica, la mitología nórdica y obsesionado con los números, logrando entrar al Top 10 estatal en matemáticas en la preparatoria.
          </p>

          <div class="editorial-image-container">
            <img src="/img/home/Fabrizio4.jpeg" alt="Rumbo a Villahermosa" class="editorial-image h-[300px]">
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-year">Hoy (20 años)</span>
          <h3 class="timeline-title">Constructor de Lógica</h3>
          <p class="adria-prose text-base">
            Esa curiosidad mutó. Hoy no solo estudio Ingeniería en Ciencia de Datos en la UMMA, sino que desarrollo sistemas reales. Ayudo a otros a entender la física y las matemáticas como tutor, demostrando cómo la lógica y la tecnología pueden transformar vidas.
          </p>
        </div>

      </div>

      <!-- EL PULSO: MÚSICA, LEALTAD Y DESCONEXIÓN -->
      <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">

        <!-- Textos -->
        <div>
          <h2 class="text-3xl font-bold tracking-tight mb-8">El balance: Lealtad y Desconexión</h2>
          <p class="adria-prose text-base">
            Mi filosofía de vida se rige por un principio muy claro que tomo de Anuel AA, mi artista favorito: <strong>Ser real y leal hasta la muerte.</strong> Esa lealtad se la debo a mi tribu: mi mamá Ana Isabel, mi tía Gladys, mi padrino, mis hermanos (Isabel, Nayeli, Héctor y Juan Luis) y mi novia Ixchel.
          </p>
          <p class="adria-prose text-base">
            Para que todo funcione, tengo una regla estricta: me desconecto por completo. El Fabrizio que diseña bases de datos y el que está con la familia son la misma persona, pero no comparten espacio. Y cuando necesito recargar energía o analizar el fútbol (especialmente al Club América), mi *soundtrack* siempre está ahí para recordarme quién soy y de dónde vengo.
          </p>
        </div>

        <!-- GRID DE DOS IMÁGENES (Familia + Ixchel) -->
        <div class="grid grid-cols-2 gap-4 md:gap-6">

          <!-- Foto Familia (Alineada normal) -->
          <div class="editorial-image-container h-[280px] md:h-[400px]">
            <!-- Deja aquí la ruta de la foto familiar que me mostraste en tu captura -->
            <img src="/img/home/Fabrizio7.jpeg" alt="Mi Familia" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
          </div>

          <!-- Foto Ixchel (Desfasada hacia abajo para el estilo revista) -->
          <div class="editorial-image-container h-[280px] md:h-[400px] translate-y-12 md:translate-y-16">
            <!-- Coloca aquí la ruta de la foto con tu novia -->
            <img src="/img/home/ix.jpeg" alt="Ixchel y yo" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped src="@/assets/css/aboutme.css"></style>
