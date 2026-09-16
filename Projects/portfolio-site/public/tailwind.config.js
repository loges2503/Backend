/**
 * Tailwind CSS Configuration
 */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FA6F86',
        secondary: '#F8CDCD',
        background: '#FFF2F2',
        accent: '#1B5E20',
        text: '#08060d',
        'text-h': '#FA6F86',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem', // 16px
        md: '1.25rem', // 20px
      },
      boxShadow: {
        subtle: '0 4px 6px rgba(0,0,0,0.1)',
        glass: '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
