<template>
  <div id="app" class="relative min-h-screen bg-gray-50 flex flex-col">
    <!--<Navbar />-->
    <!--<CustomCursor />-->
    <NavbarPremium />
    <!--<main class="flex-grow">
      <router-view />
    </main>-->
    <main class="flex-grow relative z-10 bg-gray-50 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-b-[40px] overflow-hidden">
      <router-view />
    </main>
    <!--<div class="sticky bottom-0 left-0 w-full z-0">
      <FooterPremium />
    </div>-->

    <Footer />
  </div>
</template>

<script>
// Importamos los componentes de layout
// import Navbar from './components/layout/Navbar.vue'
import NavbarPremium from '@/components/layout/NavbarPremium.vue'
import Footer from './components/layout/Footer.vue'
// import FooterPremium from '@/components/layout/FooterPremium.vue'
// import CustomCursor from './components/layout/CustomCursor.vue'
export default {
  name: 'App',
  components: {
    // Navbar,
    // CustomCursor,
    Footer,
    NavbarPremium
    // FooterPremium
  }
}
</script>
