/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '550px',
      // => @media (min-width: 640px) { ... }

       'sm2': "650px",

      'md': '730px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      "dark": "#2b2b2b",
      "darker": "#111",
      "white": "#f5f5f5",
      "gray": "#ccc",
      "darkGray": "#555",
      "transparent": "rgba(0,0,0,0.0)",
      "overlay": "rgba(0,0,0,0.6)",
      "primary": "#B05FFD",

      "tab-red": "#EA5243",
      "tab-yellow": "#F4B632",
      "tab-green": "#6CC861"
    },

    extend: {},
  },
  plugins: [],
}

