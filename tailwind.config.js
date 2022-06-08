//https://draculatheme.com/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dracula-background':"#282a36",
        'dracula-current':'#282a36',
        'dracula-foreground':'#f8f8f2',
        'dracula-comment':'#6272a4',
        'dracula-cyan':'#8be9fd',
        'dracula-green':'#50fa7b',
        'dracula-purple':'#bd93f9',
      },
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
