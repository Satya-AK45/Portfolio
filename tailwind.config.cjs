/*************************************************
 * Tailwind Configuration
 *************************************************/
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 60px -10px rgba(255,255,255,0.55)'
      }
    },
  },
  plugins: [],
};
