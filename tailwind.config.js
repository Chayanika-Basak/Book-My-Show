// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolGrey: 
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        darkGrey: 
        {
          50: '#eef0fa',
          100: '#cfd2e2',
          200: '#b0b3cc',
          300: '#9095b8',
          400: '#7177a4',
          500: '#585d8c',
          600: '#44496d',
          700: '#31344e',
          800: '#1d1f30',
          900: '#090914',
        },
        coral:  
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}