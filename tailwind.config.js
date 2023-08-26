/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.png')",
        "service-bg": "url('/images/services-bg.png')",
        "process-bg": "url('/images/process-bg.png')",
      },
      colors: {
        primary: "#57B3FE",
        textDark: "#3B3E43",
        textGrey: "#595E64",
        footerBlack: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
