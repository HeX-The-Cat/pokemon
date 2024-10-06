/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        rainbow: "linear-gradient( to right, #ff3434 5%, #ff9e37, #fffc37, #5cff3c, #4cf2ff, #4c56ff, #c249ff, #ff46e6, #ff429b)",
      },
      colors: {
        "rainbow-fill": "linear-gradient( #ff3434 , #ff9e37, #fffc37, #5cff3c, #4cf2ff, #4c56ff, #c249ff, #ff46e6, #ff429b)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "dark"],
  },
};
