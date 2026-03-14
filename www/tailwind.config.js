/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f4f8',
          100: '#e1e9f1',
          200: '#c5d3df',
          300: '#9cb1c4',
          400: '#6d8ba5',
          500: '#4b6e8d',
          600: '#3a5874',
          700: '#30475e',
          800: '#2a3d50',
          900: '#263443',
        },
        accent: {
          50: '#f4f6ff',
          100: '#ebf0ff',
          200: '#d9e2ff',
          300: '#bbcaff',
          400: '#99a8ff',
          500: '#7580fc',
          600: '#5a5cef',
          700: '#4a46d7',
          800: '#3d3aac',
          900: '#34358a',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.12)',
        'glow': '0 0 40px -10px rgba(90, 92, 239, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
