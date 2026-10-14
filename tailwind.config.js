/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyan: {
          400: '#00f0ff',
          500: '#00d0e0',
        },
        emerald: {
          400: '#10b981',
          500: '#059669',
        }
      }
    },
  },
  plugins: [],
}
