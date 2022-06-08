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
        'dracula-current':'#44475a',
        'dracula-extra':'#383a59',
        'dracula-foreground':'#f8f8f2',
        'dracula-comment':'#6272a4',
        'dracula-purple-dark':'#22212d',
        'dracula-cyan':'#8be9fd',
        'dracula-green-light':'#75e2b7',
        'dracula-green':'#50fa7b',
        'dracula-middle':'#80fcc6',
        'dracula-green-dark':'#87fe8e',
        'dracula-orange':'#ffb86c',
        'dracula-pink':'#ff79c6',
        'dracula-purple':'#bd93f9',
        'dracula-red':'#ff5555',
        'dracula-yellow':'#f1fa8c',
        'dracula-fire-light':'#fffd82',
        'dracula-fire-middle':'#ffc59f',
        'dracula-fire-dark':'#ff80be',
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
      monda: ['"Monda"',"sans-serif"],
      fire: ['"Fira Code"',"monospace"]
    }
  },
  plugins: [],
}
