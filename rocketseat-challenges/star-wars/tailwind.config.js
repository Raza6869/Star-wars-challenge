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
        "purple-base": "#ECE4EF",
        "purple-text": "#D8CEDE",
        "purple-secondary-text": "#9C83A7",
        "purple-cards-titles": "#312D74",
        "background-initial": "#030422",
        "background-final": "#090114",
      },
    },
  },
  plugins: [],
};
