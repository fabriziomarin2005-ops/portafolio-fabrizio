/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    }
  }
}
