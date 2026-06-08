/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        century: ["var(--font-century)"],
        ovo: ["var(--font-ovo)"],
        bigCaslon: ["var(--font-big-caslon)"],
        creators: ["var(--font-creators-type)"],
      },
    },
  },
  plugins: [],
};
