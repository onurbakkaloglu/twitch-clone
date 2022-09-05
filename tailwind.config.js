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
        activeStatusIndicator: '#eb0400',
        showMore: '#bf94ff',
        channelHover: '#26262c',
        topbartextHover:'#bf94ff',
        topbarIconHover:'#464649'
      },
      zIndex: {
        '1000': '1000',
      },
      flexGrow: {
        '2': 2
      },
      flexShrink: {
        '2': 2
      }
    },
  },
  plugins: [],
}
