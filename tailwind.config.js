/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // set Helvetica as main
        Anton: ["'Anton', sans-serif"],
        Cormorant:["Cormorant Garamond", "serif"],
        myfont: ['MyFont', 'sans-serif'],
      },
      screens: {
        '3xl': '2840px', // new ultra-wide breakpoint
        '4xl':"3840px"
      },
    },
  },
  plugins: [],
}
