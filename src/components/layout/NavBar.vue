<template>
  <header :class="['nav-premium', isScrolled ? 'nav-scrolled' : 'nav-top']">
    <div class="max-w-7xl mx-auto w-full flex justify-between items-center">

      <!-- Logo (z-50 para que quede por encima del menú móvil) -->
      <router-link to="/" class="nav-logo z-50" @click="closeMenu">
        FABRIZIO<span class="text-marca-rojo">.</span>
      </router-link>

      <!-- Menú de Escritorio (Se oculta en celular) -->
      <nav class="nav-menu">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
        <router-link to="/tutorias" class="nav-link">Tutorías</router-link>
      </nav>

      <!-- Botón de Escritorio -->
      <div class="hidden md:flex">
        <router-link to="/contacto" class="btn-contacto">
          Hablemos
        </router-link>
      </div>

      <!-- Botón Hamburguesa (Solo se ve en celular) -->
      <button @click="toggleMenu" class="md:hidden z-50 p-2 text-marca-negro focus:outline-none">
        <!-- Icono de 3 líneas cuando está cerrado -->
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Icono de 'X' cuando está abierto -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú Desplegable Móvil -->
    <div v-show="isMenuOpen" class="fixed inset-0 bg-marca-blanco z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
      <router-link to="/" class="text-3xl font-black uppercase tracking-widest hover:text-marca-rojo transition-colors" @click="closeMenu">Inicio</router-link>
      <router-link to="/proyectos" class="text-3xl font-black uppercase tracking-widest hover:text-marca-rojo transition-colors" @click="closeMenu">Proyectos</router-link>
      <router-link to="/tutorias" class="text-3xl font-black uppercase tracking-widest hover:text-marca-rojo transition-colors" @click="closeMenu">Tutorías</router-link>
      <router-link to="/contacto" class="btn-contacto mt-8" @click="closeMenu">Hablemos</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false) // Estado para el menú móvil

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Bloquear el scroll del fondo cuando el menú está abierto
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped src="@/assets/css/navbar.css"></style>
