module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '8xl':'6rem',
        '9xl' : '7rem'
      },
      animation:{
        "neon":"flicker"
      }
    },
    fontFamily:{
      sans: ['"Rajdhani"', "sans-serif"],
      // special: ['"Gudea"',"sans-serif"]
    }
  },
  plugins: [],
}
