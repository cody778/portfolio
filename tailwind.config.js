/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          text: '#c8c8c8',
          textLight: '#d8d8d8',
          textDim: '#6a6a6a',
          bg: '#0a0a14',
          frame: '#0a0a14',
          border: 'rgba(0, 221, 170, 0.2)',
          comment: '#ff6b7a',
          keyword: '#7fb342',
          green: '#7fb342',
          prompt: '#ff6b7a',
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Courier New'", 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}