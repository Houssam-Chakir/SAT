/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root index.html file
    "./*.{html,js}", // Include all HTML and JS files in the root directory
    "./src/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
