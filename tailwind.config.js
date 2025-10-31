/** @type {import('tailwindcss').Config} */
export default {
     content: [
     "./src/**/*.{js,ts,jsx,tsx,html}", // Vite will scan these files for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
