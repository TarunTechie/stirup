/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['heading'],
        nat:['nat'],
        sill:['sill'],
      },
      colors:{
        'orange':'#FF670E',
        'peach':'#FDE4CE',
        'maron':'#4E070C',
      },
    },
  },
  plugins: [],
}