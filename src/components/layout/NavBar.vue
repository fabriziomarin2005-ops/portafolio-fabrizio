<template>
  <header :class="['nav-premium', isSolid ? 'nav-scrolled' : 'nav-top']">
    <!-- Barra de progreso de lectura -->
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }" aria-hidden="true"></div>

    <div class="nav-container">

      <!-- Logo Principal + Badge de Versión -->
      <div class="flex items-center gap-3 z-50">
        <router-link to="/" class="nav-logo" @click="closeMenu">
          FABRIZIO<span class="text-marca-rojo">.</span>
        </router-link>

        <div class="status-pill hidden sm:inline-flex">
          <span class="status-dot"></span>
          <span>Disponible</span>
        </div>
      </div>

      <!-- Menú de Escritorio -->
      <nav class="nav-menu" aria-label="Navegación Principal">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
        <router-link to="/tutorias" class="nav-link">Tutorías</router-link>
        <router-link to="/sobre-mi" class="nav-link">Sobre Mí</router-link>
      </nav>

      <!-- Acciones Derecha: Dark Mode + CTA Desktop + Botón Hamburguesa Móvil -->
      <div class="nav-actions z-50">
        <!-- Botón Dark Mode -->
        <button
          @click="toggleDarkMode"
          class="theme-toggle-btn"
          :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          title="Cambiar tema visual"
        >
          <!-- Icono Luna (Modo Claro activo) -->
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Icono Sol (Modo Oscuro activo) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Botón Contacto Desktop -->
        <div class="hidden md:flex">
          <router-link v-magnetic to="/contacto" class="btn-contacto">
            Hablemos
          </router-link>
        </div>

        <!-- Botón Hamburguesa (Solo Móvil) -->
        <button
          @click="toggleMenu"
          class="hamburger-btn md:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-marca-rojo" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú Desplegable Móvil (Mobile-First Fullscreen Drawer) -->
    <transition name="mobile-drawer">
      <div v-if="isMenuOpen" class="mobile-menu-overlay md:hidden">
        <div class="mobile-menu-links">
          <span class="mobile-menu-label">// Navegación Principal</span>

          <router-link to="/" class="mobile-nav-item" @click="closeMenu">
            <span class="mobile-nav-num">01.</span> Inicio
          </router-link>

          <router-link to="/proyectos" class="mobile-nav-item" @click="closeMenu">
            <span class="mobile-nav-num">02.</span> Proyectos & IA
          </router-link>

          <router-link to="/tutorias" class="mobile-nav-item" @click="closeMenu">
            <span class="mobile-nav-num">03.</span> Tutorías
          </router-link>

          <router-link to="/sobre-mi" class="mobile-nav-item" @click="closeMenu">
            <span class="mobile-nav-num">04.</span> Sobre Mí
          </router-link>
        </div>

        <div class="mobile-menu-footer">
          <div class="mobile-status-box">
            <span class="status-dot"></span>
            <span>Disponible para proyectos Web, Data Science & IA</span>
          </div>

          <router-link to="/contacto" class="btn-contacto-mobile" @click="closeMenu">
            INICIAR CONVERSACIÓN
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const scrollProgress = ref(0)
let scrollFrame = null
const isMenuOpen = ref(false)
const isDark = ref(false)

const isSolid = computed(() => {
  return isScrolled.value || route.path !== '/' || isMenuOpen.value
})

// Lectura del scroll agrupada en requestAnimationFrame (60fps sin trabajo extra)
const handleScroll = () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    const y = window.scrollY
    const max = document.documentElement.scrollHeight - window.innerHeight
    isScrolled.value = y > 30
    scrollProgress.value = max > 0 ? Math.min(y / max, 1) : 0
    scrollFrame = null
  })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Al cambiar de vista: cierra el menú y recalcula la barra tras la transición
watch(() => route.path, () => {
  closeMenu()
  setTimeout(handleScroll, 350)
})

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('fabrizio_theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  handleScroll()

  const savedTheme = localStorage.getItem('fabrizio_theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme(isDark.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  if (scrollFrame) cancelAnimationFrame(scrollFrame)
  document.body.style.overflow = ''
})
</script>

<style scoped src="@/assets/css/navbar.css"></style>
