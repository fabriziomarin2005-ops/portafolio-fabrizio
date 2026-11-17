/**
 * Sistema de movimiento del portafolio.
 *
 *  v-reveal                      → fade-up + scale + blur al entrar en viewport
 *  v-reveal="{ delay: 120 }"     → con retraso (ms)
 *  v-reveal="{ variant: 'zoom' }"→ variantes: 'up' (default) | 'zoom' | 'left' | 'right'
 *  v-reveal-group                → aplica reveal a cada hijo directo en cascada
 *  v-reveal-group="{ delay: 200, step: 90, variant: 'up' }"
 *  v-magnetic                    → atracción magnética sutil hacia el cursor (solo puntero fino)
 *
 * Las clases de animación se retiran al terminar, de modo que los hover/transiciones
 * propios de cada componente vuelven a funcionar intactos.
 */

const DURATION = 900

const canAnimate = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

// --- Un único IntersectionObserver compartido para toda la app ---
let observer = null
const callbacks = new WeakMap()

function getObserver () {
  if (observer) return observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const cb = callbacks.get(entry.target)
      observer.unobserve(entry.target)
      callbacks.delete(entry.target)
      if (cb) cb()
    })
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0 })
  return observer
}

function watch (el, cb) {
  callbacks.set(el, cb)
  getObserver().observe(el)
}

function unwatch (el) {
  if (!observer) return
  observer.unobserve(el)
  callbacks.delete(el)
}

// --- Ciclo de vida de un elemento revelable ---
function prepare (el, variant) {
  el.classList.add('rv', `rv--${variant}`)
  el.__rvVariant = variant
}

function play (el, delay = 0, duration = DURATION) {
  el.style.transitionDelay = `${delay}ms`
  el.style.transitionDuration = `${duration}ms`
  // Doble rAF: garantiza que el estado inicial se pinte antes de animar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('rv-in'))
  })
  el.__rvTimer = setTimeout(() => cleanup(el), delay + duration + 120)
}

function cleanup (el) {
  clearTimeout(el.__rvTimer)
  el.classList.remove('rv', 'rv-in', `rv--${el.__rvVariant}`)
  el.style.transitionDelay = ''
  el.style.transitionDuration = ''
}

const opts = (binding) => (binding.value && typeof binding.value === 'object' ? binding.value : {})

export const reveal = {
  mounted (el, binding) {
    if (!canAnimate()) return
    const { delay = 0, variant = 'up', duration = DURATION } = opts(binding)
    prepare(el, variant)
    watch(el, () => play(el, delay, duration))
  },
  unmounted (el) {
    unwatch(el)
    clearTimeout(el.__rvTimer)
  }
}

export const revealGroup = {
  mounted (el, binding) {
    if (!canAnimate()) return
    const { delay = 0, step = 110, variant = 'up', duration = DURATION } = opts(binding)
    const children = Array.from(el.children)
    children.forEach((child) => prepare(child, variant))
    watch(el, () => {
      children.forEach((child, i) => play(child, delay + i * step, duration))
    })
    el.__rvChildren = children
  },
  unmounted (el) {
    unwatch(el)
    ;(el.__rvChildren || []).forEach((child) => clearTimeout(child.__rvTimer))
  }
}

// --- Efecto magnético (solo escritorio con puntero fino) ---
export const magnetic = {
  mounted (el, binding) {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const strength = typeof binding.value === 'number' ? binding.value : 0.22
    let frame = null

    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        // `translate` es independiente de `transform`: convive con los hover de Tailwind
        el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      el.style.translate = ''
    }

    el.classList.add('magnetic')
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    el.__magnetic = { move, leave }
  },
  unmounted (el) {
    if (!el.__magnetic) return
    el.removeEventListener('pointermove', el.__magnetic.move)
    el.removeEventListener('pointerleave', el.__magnetic.leave)
  }
}

export default {
  install (app) {
    app.directive('reveal', reveal)
    app.directive('reveal-group', revealGroup)
    app.directive('magnetic', magnetic)
  }
}
