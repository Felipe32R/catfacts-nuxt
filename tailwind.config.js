/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1091px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      fontFamily: {
        jost: ["sans-serif"],
      },
      colors: {
        blue: {
          main: "#22223B",
          light: "#4A4E69",
        },
        purple: {
          main: "#9A8C98",
        },
        pink: {
          main: "#C9ADA7",
          light: "#F2E9E4",
        },
      },
    },
  },
  plugins: [],
};
