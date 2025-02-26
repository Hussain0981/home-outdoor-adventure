// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,vue}', // Adjust for your project structure
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#191919',  // Define your custom color here
        'button-gray': '#A3A3A3',   // Another custom color example
      },
      fontFamily: {
        'noto': ['Noto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto' : 'Roboto'
      },
      fontSize: {
        'h1': '44px',
        'h2': '32px',
        'h4': '18px',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },

  plugins: [],
}
