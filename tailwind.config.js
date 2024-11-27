/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": "var(--font-playfair-display)",
        "nautigal": "var(--font-nautigal)",
      }
    },
  },
  plugins: [],
}

