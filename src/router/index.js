import { createRouter, createWebHistory } from 'vue-router'
// La portada se carga de inmediato; el resto de vistas bajo demanda
import HomeView from '../views/HomeView.vue'

const SUFFIX = ' · Fabrizio Aguilar'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Fabrizio Aguilar · Data Science Engineer & Full-Stack Developer' }
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import('../views/ProyectosView.vue'),
    meta: { title: 'Proyectos & AI Lab' + SUFFIX }
  },
  {
    path: '/tutorias',
    name: 'tutorias',
    component: () => import('../views/TutoriasView.vue'),
    meta: { title: 'Tutorías de Matemáticas, Física y Programación' + SUFFIX }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue'),
    meta: { title: 'Contacto' + SUFFIX }
  },
  {
    path: '/sobre-mi',
    name: 'sobre-mi',
    component: () => import('../views/SobreMiView.vue'),
    meta: { title: 'Sobre Mí' + SUFFIX }
  },
  // Cualquier ruta desconocida vuelve al inicio
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // El scroll al inicio lo gestiona App.vue al terminar la transición de salida.
  // En la primera carga sí forzamos el inicio.
  scrollBehavior (to, from) {
    if (!from.matched.length) return { top: 0 }
    return false
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
