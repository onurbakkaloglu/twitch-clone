/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topbar: '#18181b',
        sidebar: '#1f1f23',
        backdrop: '#0e0e10',
      },
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: [],
}
