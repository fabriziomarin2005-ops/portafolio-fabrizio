<template>
  <div class="min-h-screen bg-marca-blanco flex flex-col font-sans text-marca-negro">

    <NavBar />
    <main class="flex-grow">
      <router-view/>
    </main>

    <AppFooter />

  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>
