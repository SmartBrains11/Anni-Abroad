/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc6c6',
          300: '#ff9e9e',
          400: '#ff6565',
          500: '#f83535',
          600: '#e51212',
          700: '#c10a0a',
          800: '#a00c0c',
          900: '#840f0f',
          950: '#490303',
        },
        crimson: {
          DEFAULT: '#c0182a',
          dark: '#8b0e1c',
          light: '#e52235',
        },
        charcoal: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
          soft: '#3e3e58',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #ffffff 0%, #fff5f5 40%, #fdfdfd 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(192,24,42,0.05) 0%, rgba(0,0,0,0.02) 100%)',
        'red-gradient': 'linear-gradient(135deg, #c0182a 0%, #8b0e1c 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'orbit-1': 'orbit1 40s linear infinite',
        'orbit-2': 'orbit2 35s linear infinite',
        'orbit-3': 'orbit3 45s linear infinite',
        'orbit-4': 'orbit4 38s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        orbit1: {
          '0%': { transform: 'rotate(225deg) translateX(220px) rotate(-225deg)' },
          '100%': { transform: 'rotate(585deg) translateX(220px) rotate(-585deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(45deg) translateX(190px) rotate(-45deg)' },
          '100%': { transform: 'rotate(405deg) translateX(190px) rotate(-405deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(135deg) translateX(210px) rotate(-135deg)' },
          '100%': { transform: 'rotate(495deg) translateX(210px) rotate(-495deg)' },
        },
        orbit4: {
          '0%': { transform: 'rotate(315deg) translateX(200px) rotate(-315deg)' },
          '100%': { transform: 'rotate(675deg) translateX(200px) rotate(-675deg)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 60px rgba(192,24,42,0.25)',
        'glow-red': '0 0 40px rgba(192,24,42,0.4)',
      },
    },
  },
  plugins: [],
};
