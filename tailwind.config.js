/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#D8CEDE",
        "rey-title": "#ECE4EF",
        "purple-secondary": "#9C83A7",
        "cards-title": "#312D74",
        "background-initial": "#030422",
        "background-final": "#090114",
      },
    },
  },
  plugins: [],
};
