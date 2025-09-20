/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        terracotta: '#E2725B',
        maroon: '#800000',
        beige: '#F5F5DC',
        cream: '#FFFDD0',
        gold: '#FFD700',
        emerald: '#00A86B',
        turquoise: '#40E0D0',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('/path/to/mandala-pattern.svg')",
      }
    },
  },
  plugins: [],
}