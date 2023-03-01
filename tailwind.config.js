module.exports = {
  content: [
    // tailwind가 어디서 사용될 지 설정
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // media: os, class: 수동 설정 가능
  plugins: [],
};
