<template>
  <section class="contact-section" id="contacto">
    <div class="contact-container">

      <!-- Grid Principal (Mobile-First) -->
      <div class="contact-grid">

        <!-- Columna Izquierda: Propuesta de Conexión y Canales Directos -->
        <div class="contact-info-col" v-reveal-group="{ step: 110 }">
          <span class="contact-kicker">// Iniciar Conversación</span>
          <h2 class="contact-title">
            Construyamos algo <br>
            <span class="text-marca-rojo">Extraordinario.</span>
          </h2>

          <p class="contact-desc">
            Ya sea que necesites escalar un <strong>sistema institucional</strong>, extraer valor estratégico de tus <strong>datos</strong>, prototipar una solución con <strong>Inteligencia Artificial</strong> o agendar una <strong>mentoría analítica</strong>, estoy listo para colaborar.
          </p>

          <!-- Tarjetas de Canales Directos -->
          <div class="contact-channels" v-reveal-group="{ delay: 380, step: 110, variant: 'left' }">

            <!-- Canal 1: Correo Directo con botón Copiar -->
            <div class="channel-card">
              <div class="channel-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="channel-label">Contacto Directo</p>
                <p class="channel-value truncate">{{ SITE.email }}</p>
              </div>
              <button @click="copyEmail" class="channel-copy-btn">
                {{ emailCopied ? '✓ Copiado' : 'Copiar' }}
              </button>
            </div>

            <!-- Canal 2: GitHub Oficial -->
            <a
              :href="SITE.github"
              target="_blank"
              rel="noopener noreferrer"
              class="channel-card group"
            >
              <div class="channel-icon-box group-hover:bg-marca-rojo group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="channel-label">Repositorios & Código</p>
                <p class="channel-value">github.com/fabriziomarin2005-ops</p>
              </div>
              <span class="channel-arrow">↗</span>
            </a>

            <!-- Canal opcional: LinkedIn -->
            <a
              v-if="SITE.linkedin"
              :href="SITE.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="channel-card group"
            >
              <div class="channel-icon-box group-hover:bg-marca-rojo group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="channel-label">Perfil Profesional</p>
                <p class="channel-value truncate">LinkedIn</p>
              </div>
              <span class="channel-arrow">↗</span>
            </a>

            <!-- Canal opcional: WhatsApp -->
            <a
              v-if="SITE.whatsapp"
              :href="`https://wa.me/${SITE.whatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
              class="channel-card group"
            >
              <div class="channel-icon-box group-hover:bg-marca-rojo group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="channel-label">Respuesta Rápida</p>
                <p class="channel-value truncate">WhatsApp</p>
              </div>
              <span class="channel-arrow">↗</span>
            </a>

            <!-- Canal 3: Ubicación & Disponibilidad -->
            <div class="channel-card">
              <div class="channel-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="channel-label">Base de Operaciones</p>
                <p class="channel-value">{{ SITE.location }}</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Columna Derecha: Formulario Brutalista Interactivo -->
        <div class="contact-form-wrapper" v-reveal="{ variant: 'right', delay: 180 }">
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent="submitForm"
            class="contact-form-card"
          >
            <!-- Trampa anti-spam: invisible para humanos -->
            <p class="hidden" aria-hidden="true">
              <label>No llenar este campo: <input v-model="form.botField" name="bot-field" tabindex="-1" autocomplete="off" /></label>
            </p>

            <div class="mb-6">
              <span class="font-mono text-xs uppercase tracking-widest text-marca-rojo font-bold block mb-2">
                01. ¿Qué tipo de colaboración buscas?
              </span>

              <!-- Selector de Categoría Táctil -->
              <div class="topic-selector-grid">
                <button
                  v-for="item in topics"
                  :key="item"
                  type="button"
                  @click="form.topic = item"
                  :class="['topic-select-btn', form.topic === item ? 'topic-select-active' : 'topic-select-inactive']"
                >
                  {{ item }}
                </button>
              </div>
            </div>

            <!-- Campos de Entrada -->
            <div class="form-fields-group">
              <div>
                <label for="name" class="form-label">02. Tu Nombre o Empresa</label>
                <input
                  id="name"
                  v-model="form.name"
                  name="name"
                  autocomplete="name"
                  type="text"
                  required
                  placeholder="Ej. Carlos Méndez / Tech Corp"
                  class="form-input"
                />
              </div>

              <div>
                <label for="email" class="form-label">03. Tu Correo o WhatsApp</label>
                <input
                  id="email"
                  v-model="form.contact"
                  name="contact"
                  autocomplete="email"
                  type="text"
                  required
                  placeholder="correo@ejemplo.com o +52 993..."
                  class="form-input"
                />
              </div>

              <div>
                <label for="message" class="form-label">04. Detalles del Proyecto o Asesoría</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Cuéntame brevemente qué necesitas resolver, fechas estimadas o materia de tutoría..."
                  class="form-input resize-none"
                ></textarea>
              </div>
            </div>

            <!-- Estado de Confirmación -->
            <Transition name="banner" mode="out-in">
              <div v-if="status === 'success'" key="ok" class="form-success-banner" role="status">
                <span>✓ ¡Mensaje enviado! Te responderé a la brevedad.</span>
              </div>
              <div v-else-if="status === 'error'" key="err" class="form-error-banner" role="alert">
                <span>No se pudo enviar el mensaje. Tu texto sigue aquí:</span>
                <a :href="mailtoHref" class="form-error-link">Enviarlo por correo ↗</a>
              </div>
            </Transition>

            <!-- Botón de Envío -->
            <button type="submit" class="btn-contact-submit" :disabled="status === 'sending'">
              <span>{{ status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { SITE } from '@/config/site'

const emailCopied = ref(false)
// idle | sending | success | error
const status = ref('idle')

const topics = [
  'Full-Stack (Laravel/Vue)',
  'Data Science & SQL',
  'Prototipado con IA',
  'Tutoría (Mate/Física)'
]

const form = reactive({
  topic: 'Full-Stack (Laravel/Vue)',
  name: '',
  contact: '',
  message: '',
  botField: ''
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(SITE.email)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2200)
  } catch (e) {
    emailCopied.value = false
  }
}

// Plan B si el envío falla: abre el correo con el mensaje ya redactado
const mailtoHref = computed(() => {
  const subject = `[Portafolio] ${form.topic} — ${form.name}`
  const body = `${form.message}\n\nContacto: ${form.contact}`
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

// Envío real con Netlify Forms (los mensajes llegan al panel de Netlify y a tu correo)
const submitForm = async () => {
  if (status.value === 'sending') return
  if (form.botField) return // bot detectado

  status.value = 'sending'
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contacto',
        topic: form.topic,
        name: form.name,
        contact: form.contact,
        message: form.message
      }).toString()
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    status.value = 'success'
    form.name = ''
    form.contact = ''
    form.message = ''
    setTimeout(() => {
      if (status.value === 'success') status.value = 'idle'
    }, 6000)
  } catch (e) {
    // Se conserva lo escrito para no perder el mensaje
    status.value = 'error'
  }
}
</script>

<style scoped src="@/assets/css/contact.css"></style>
