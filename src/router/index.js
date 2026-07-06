import { createRouter, createWebHashHistory } from 'vue-router'
// Solo importamos la vista principal de forma directa
import HomeView from '../views/HomeView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import SobreMiView from '../views/SobreMiView.vue'
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
    component: () => import('../views/ContactoView.vue')
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
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
