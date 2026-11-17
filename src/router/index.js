import { createRouter, createWebHashHistory } from 'vue-router'
// Solo importamos la vista principal de forma directa
import HomeView from '../views/HomeView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import SobreMiView from '../views/SobreMiView.vue'
import ContactSection from '@/components/home/ContactSection.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProyectosView
  },
  {
    path: '/tutorias',
    name: 'tutorias',
    component: () => import('../views/TutoriasView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactSection
  },
  {
    path: '/sobre-mi',
    name: 'sobre-mi',
    component: SobreMiView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // El scroll al inicio lo gestiona App.vue al terminar la transición de salida.
  // En la primera carga sí forzamos el inicio.
  scrollBehavior (to, from) {
    if (!from.matched.length) return { top: 0 }
    return false
  }
})

export default router
