/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        grey: "#909090",
        green: "#97FB57",
        offwhite: "#F6F2F2",
      },
    },
  },
  plugins: [],
};
