module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#ff4800",
        blue : {
          450: '#5F99F7'
        }
      },
      fontFamily: {
        balsamiq: "'Balsamiq Sans', cursive",
        mouseMemoire: "'Mouse Memoirs', sans-serif",
        comfortaa: "'Comfortaa', cursive",
        mohave: "'Mohave', sans-serif"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
