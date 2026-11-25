/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0a101f',
          850: '#0e172e',
          800: '#131f3d',
          750: '#17274c',
          700: '#1c2f5b',
          600: '#253d73',
          500: '#335399',
        },
        cyber: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          teal: '#14b8a6',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
          purple: '#8b5cf6',
          violet: '#6366f1'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'flow': 'flow 1.5s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}

