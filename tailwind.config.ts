import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a0f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      animation: {
        blob: "blob 7s infinite",
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        scroll: 'scroll 2s infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|from|to)-(purple|blue|cyan|green|yellow|red|gray)-(400|500|600|700|800|900)/,
    },
  ],
}

export default config