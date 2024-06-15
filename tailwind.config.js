/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        tls: ["The_Last_Shuriken", "sans-serif"],
      },
      gridTempleteColumns: {
        "70/30": "70% 28%",
      },

      brightness: {
        104: '1.04',
      },
      spacing: {
        'semi': '98vh',
      }
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
  ],
};
