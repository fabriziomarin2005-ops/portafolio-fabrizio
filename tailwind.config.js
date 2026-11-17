/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}'
  ],
  // El NavBar alterna la clase `.dark` en <html>: Tailwind debe leer esa clase
  darkMode: 'class',
  future: {
    // Los estados hover solo se aplican en dispositivos con puntero real
    // (evita el "hover pegado" al tocar en móvil)
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      colors: {
        'marca-negro': '#1a1a1a',
        'marca-blanco': '#fdfdfd',
        'marca-rojo': '#dc2626'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-soft': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    // Utilidad global: disponible en cualquier hoja (incluidos <style scoped src>)
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        }
      })
    }
  ]
}
