/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e5',
          200: '#9fb0d2',
          300: '#7890bf',
          400: '#5a78b1',
          500: '#3c60a3',
          600: '#2e5298',
          700: '#1f4088',
          800: '#162e6f',
          900: '#0d1f3c',
          950: '#060f1e',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#faedcc',
          200: '#f5d98a',
          300: '#f0c553',
          400: '#e8ae2c',
          500: '#c9a843',
          600: '#a8862d',
          700: '#836821',
          800: '#5e4c19',
          900: '#3d3112',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d1f3c 0%, #162e6f 50%, #1f4088 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a843 0%, #e8ae2c 100%)',
      },
    },
  },
  plugins: [],
}
