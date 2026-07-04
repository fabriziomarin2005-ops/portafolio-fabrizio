import { createRouter, createWebHashHistory } from 'vue-router'
// Solo importamos la vista principal de forma directa
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import('../views/ProyectosView.vue')
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
