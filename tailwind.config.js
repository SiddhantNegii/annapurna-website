/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ Updated colors to link to your new CSS variables
        maroon: 'var(--color-primary-dark)',
        saffron: 'var(--color-accent-gold)',
        gold: 'var(--color-primary-light)',
        'gold-dark': 'var(--color-accent-gold-dark)',
        cream: 'var(--color-background-soft)',
        'text-dark': 'var(--color-text-dark)',
        'text-light': 'var(--color-text-light)',
      },
      fontFamily: {
        // ✅ Updated fonts to match the new theme
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('/path/to/mandala-pattern.svg')", // Kept this from your original file
      }
    },
  },
  plugins: [],
}