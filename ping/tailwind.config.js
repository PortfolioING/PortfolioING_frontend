/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ping: "#E4FF0D",
      },
      fontFamily: {
        noto: ['"Noto Sans KR"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
