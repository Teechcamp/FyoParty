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
      },
      screens: {
        'phone-lg': {
          raw: '(min-width: 380px) and (min-height: 800px)',
        },
        'tablet-lg':{
          raw: '(min-width: 768px) and (min-height: 1024px)',
        },
        'tablet-xl':{
          raw: '(min-width: 768px) and (min-height: 1280px)',
        },
        'desktop-lg':{
          raw: '(min-width: 1024px) and (min-height: 768px)',
        },
        
      },
    },
  },
  plugins: [],
}

