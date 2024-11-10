/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#7EC8E3",
        "primary-200": "#0000FF",
        "primary-400": "#000C66",
        "primary-500": "#050A30",
        "secondary-500": "#EC8305",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

