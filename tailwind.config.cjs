/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (max-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (max-width: 1280px) { ... }
      }
  },
  plugins: [],
}