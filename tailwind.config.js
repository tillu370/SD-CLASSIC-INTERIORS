/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': '#000000',
        'rich-black': '#080808',
        'charcoal': '#171717',
        'graphite': '#303030',
        'mid-grey': '#858585',
        'light-grey': '#D8D8D8',
        'off-white': '#F5F5F3',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-wide': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'doors': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
}
