/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 8medical design tokens
        violet: {
          50: '#F4F1FF',
          100: '#ECE5FF',
          200: '#D9CFFF',
          300: '#BEA8FF',
          400: '#A177FF',
          500: '#8540FF',
          700: '#6D09F9',
          950: '#2C0174',
        },
        red: {
          50: '#FEE6E8',
          400: '#FA3A4A',
          500: '#F9091D',
        },
        dark: '#0A0116',
        ink: {
          900: '#181719',
          700: '#4C4A4E',
          600: '#615F64',
          500: '#636066',
          400: '#4A464E',
          300: '#9C9A9E',
          200: '#E4E3E5',
          100: '#F4F2F5',
          50: '#F9F9FA',
        },
        pink: { 500: '#F34197' },
        green: { 700: '#2D995B' },
        martinique: { 50: '#F4F6FA', 100: '#E5E8F4' },
        blue: { 100: '#B3B3C3', 400: '#3B3B65' },
        footer: '#04041A',
        divider: '#3B3B65',
      },
      fontFamily: {
        sans: ['"BR Firma"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      maxWidth: {
        container: '1280px',
        content: '1144px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
