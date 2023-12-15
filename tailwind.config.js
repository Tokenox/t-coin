/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        railway: ["Raleway", "sans-serif"],
      },
      colors: {
        "taelish-blue": " #030326",
        "blue-Violet": "#710CF6",
        purple: " #A23DFF",
        silver: "#C8C8DC",
      },
    },
  },
  plugins: [],
};
