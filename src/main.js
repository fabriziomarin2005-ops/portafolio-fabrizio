import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Motion from './directives/motion'
import './assets/css/main.css'
import './assets/css/motion.css'

// Compatibilidad con enlaces antiguos compartidos con "#" (ej. /#/proyectos → /proyectos)
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}

createApp(App)
  .use(router)
  .use(Motion)
  .mount('#app')
