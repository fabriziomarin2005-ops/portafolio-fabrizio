<template>
  <div class="min-h-screen bg-marca-blanco dark:bg-[#0b0b0e] flex flex-col font-sans text-marca-negro dark:text-white transition-colors duration-300">

    <NavBar />
    <main class="flex-grow">
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in" @after-leave="resetScroll">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>

    <AppFooter />

  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'

// Sube al inicio justo cuando la vista anterior terminó de salir
// (evita el salto visual antes de la animación de salida)
const resetScroll = () => {
  window.scrollTo(0, 0)
}
</script>
