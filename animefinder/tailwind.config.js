/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // background color from CSS variables
        foreground: "var(--foreground)", // foreground color from CSS variables
        primary: "#FFD166", // Custom primary color for background
        secondary: "#FF9BEC", // Sidebar color
        accent: "#AE9BFF", // Poll and navbar color
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Adding Arial font
        cursive: ['"Comic Sans MS"', "cursive"], // Adding Comic Sans font
      },
    },
  },
  plugins: [],
};
