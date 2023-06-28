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
        "deep-blue": "#010026",
        blue: "#2E4054",
        red: "#011936",
        yellow: "#FFBA00",
        grey: "#ededed",
        "dark-grey": "#011936",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: () => ({
          "gradient-rainblue": "linear-gradient(90deg, #FFBD0C 14.53%, #465362 79.36%)",
        }),
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
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

