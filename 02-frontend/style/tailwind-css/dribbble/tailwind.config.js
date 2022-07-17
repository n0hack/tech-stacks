/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // 다크모드 활성화 (시스템 설정: media, js 설정: class)
  darkMode: "class",
  plugins: [],
};
