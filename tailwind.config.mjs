/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    screens: {
      xxl: { max: '1600px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
      xs: { max: '360px' },
    },
    extend: {
      colors: {
        primary: {
          800: "rgba(43, 14, 71, 1)",
          DEFAULT: "rgba(255, 57, 188, 1)",
          400: "#bf5e82",
        },
      },
    },
  },
  plugins: [],
};
