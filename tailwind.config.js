/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          "primary": "#F0ECE5",
          "secondary": "#31304D"
        },
        keyframes: {
        "fade-in-down": {
          "0%": {
            "opacity": "0",
            transform: "translateY(-20px)"
          },
          "100%": {
            "opacity": "1",
            transform: "translateY(0)"
          }
        }
      },
        animation: {
          "fade-in-down": "fade-in-down 0.6s ease-in-out"
        },
        gridTemplateRows: {
          'cards': '20% 60% 20%'
        }
    },
  },
  plugins: [],
}

