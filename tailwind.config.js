/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#86a8db",
        secondary: "#3b3291",
        light: "#d2e2fb",
        hover: "#57cc99",
      },
    },
    screens: {
      sm: { min: "300px" },
      md: { min: "520px" },
      lg: { min: "1024px" },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "320px",
        md: "500px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
