/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //utility colors
        "white": "#FFFFFF",
        "black-space": "#070724",
        "ash": "#38384F",
        "gray": "#838391",
        // Planets colors
        "mercury": "#419EBB",
        "venus": "#EDA249",
        "earth": "#6f2ed6",
        "mars": "#D14C32",
        "jupiter": "#D83A34",
        "saturn": "#CD5120",
        "uranus": "#1ec2a4",
        "neptune": "#2d68f0"
      },
      fontFamily: {
        "antonio": ['Antonio', 'sans-serif'],
        "spartan": ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        "stars": "url('/assets/background-stars.svg')"
      }
    },
  },
  plugins: [],
}

