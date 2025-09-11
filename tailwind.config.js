/** @type {import('tailwindcss').Config} */
export default {
  content: [
   {
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Serif", 'serif'], // set Helvetica as main
      },
    },
  },
  plugins: [],
}
