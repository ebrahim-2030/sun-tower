/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Correct key: "screens"
        xsdevice: "425px",
      },
      backgroundImage: {
        tower: "url('/src/assets/images/footer.png')",
      },
    },
  },
  plugins: [],
};
