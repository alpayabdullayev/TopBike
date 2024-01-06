export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
      colors: {
        'f4': '#F4F4F4',
      },
    },
  },
  plugins: [],
}