/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    extend: {
      borderRadius: {
        'bl-4xl': '0 0 0 8rem',
        'bl-tr-4xl': '0 8rem 0 8rem',
        'tr-4xl': '0 8rem 0 0',
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

        // Background hover - buttons

        'btn-transparent': 'hsl(355, 100%, 74%)',
      },

      height: {
        one: '2px',
      },

      backgroundSize: {
        '180%': '180%',
        '120%': '120%',
        '100%': '100%',
        '90%': '90%',
        '50%': '50%',
      },

      fontFamily: {
        Overpass: ["Overpass", "san's-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
    },

    inset: {
      '60%': '60%',
      '52%': '52%',
    },

    width: {
      '600': '600px',
      '800': '800px',
      '900': '900px',
      '1000': '1000px',
    },

    },
  },
  plugins: [],
}

