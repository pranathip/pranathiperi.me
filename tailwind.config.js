module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Apercu"],
      },
      colors: {
        background: "#FFFEFB",
      },
      textColor: {
        primary: "#2F2F2F",
        secondary: "#707070",
        tertiary: "#C1C1C1",
      },
    },
    maxWidth: {
      "container-large": "600px",
      "container-small": "90%",
    },
  },
  plugins: [],
};
