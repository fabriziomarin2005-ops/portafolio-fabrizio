<template>
  <div class="projects-page min-h-screen bg-marca-negro pt-20">
    <!-- Casos de estudio (Bento Box) -->
    <ProjectsSection />
    <!-- Laboratorio interactivo: código real de los proyectos -->
    <AiDataLabSection />
  </div>
</template>

<script setup>
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import AiDataLabSection from '@/components/home/AiDataLabSection.vue'
</script>
