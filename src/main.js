import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import Motion from './directives/motion'
import './index.css'
import './assets/css/main.css'
import './assets/css/motion.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Motion)
app.mount('#app')
