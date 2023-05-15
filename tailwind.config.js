/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    extend: {
      borderRadius: {
        'bl-4xl': '0 0 0 8rem',
      },

      colors:{
        // Primary
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(356, 100%, 66%)', 
        'very-dark-blue': 'hsl(208, 49%, 24%)', 
  
        // Neutral
        'White': 'hsl(0, 0%, 100%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
        'dropdown-gray': '#efeff1',
  
        // Background gradient - Intro/CTA mobile nav
  
        'very-light-red-gradi': 'hsl(13, 100%, 72%)',
        'light-red-gradi': 'hsl(353, 100%, 62%)',
  
        // Background gradient - body
  
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
      },

      height: {
        one: '2px',
      },

      scale: {
        '400': '4',
        '600': '6',
        '800': '8',
        '900': '9',
        '1000': '10',
      },

      fontFamily: {
        Overpass: ["Overpass", "san's-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
    },
    },
  },
  plugins: [],
}

