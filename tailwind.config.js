/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snapchat: {
          DEFAULT: '#FFFC00',
          dark: '#E6E300',
        },
        love: {
          50: '#fff0f3',
          100: '#ffccd5',
          200: '#ffb3c1',
          300: '#ff8fa3',
          400: '#ff758f',
          500: '#ff4d6d',
          600: '#c9184a',
          700: '#a4133c',
          800: '#800f2f',
          900: '#590d22',
        },
        dreamy: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#adb5bd',
          400: '#6c757d',
          500: '#495057',
          600: '#343a40',
          700: '#212529',
          800: '#161a1d',
          900: '#0b090a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
