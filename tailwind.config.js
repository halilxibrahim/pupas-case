/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Include your entry point
    "./app/**/*.{js,jsx,ts,tsx}", // Include all files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include your components
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
