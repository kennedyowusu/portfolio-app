/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        red: "##DC4492",
        blue: "#2CBCE9",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: () => ({
          "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

          "gradient-rainblue": "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        }),
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
        },
        content: {
          brush: "url('./assets/brush.png')",
          person1: "url('./assets/person-1.png')",
          person2: "url('./assets/person-2.png')",
          person3: "url('./assets/person-3.png')",
        },
        backgroundColor: {
          splash: "none",
        },
      },
    screens: {
        xxs: "375px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
  },
  plugins: [],
}

