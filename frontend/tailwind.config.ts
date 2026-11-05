import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Hijau Biologi
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Secondary palette - Biru Ilmu Pengetahuan
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Accent - Teal
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Emerald untuk highlight
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        // Dark backgrounds
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #0d2d1a 50%, #0f172a 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(14,165,233,0.1) 100%)',
        'gradient-green-blue': 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        'gradient-organ': 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'peristaltic': 'peristaltic 1.5s ease-in-out infinite',
        'digest': 'digest 2s ease-in-out infinite',
        'absorb': 'absorb 1s ease-in-out infinite alternate',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wave': 'wave 2s linear infinite',
        'bubble-rise': 'bubbleRise 3s ease-in infinite',
        'color-change': 'colorChange 1.5s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        peristaltic: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '33%': { transform: 'scaleX(0.8) scaleY(1.2)' },
          '66%': { transform: 'scaleX(1.2) scaleY(0.8)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
        digest: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(5deg) scale(1.05)' },
          '75%': { transform: 'rotate(-5deg) scale(0.95)' },
        },
        absorb: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0.3', transform: 'scale(0.5)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(16,185,129,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(16,185,129,0.8), 0 0 60px rgba(14,165,233,0.4)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25%) translateY(-5%)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' },
        },
        bubbleRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0' },
        },
        colorChange: {
          '0%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: 'var(--target-color)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(16,185,129,0.4)',
        'glow-blue': '0 0 20px rgba(14,165,233,0.4)',
        'glow-teal': '0 0 20px rgba(20,184,166,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(16,185,129,0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
