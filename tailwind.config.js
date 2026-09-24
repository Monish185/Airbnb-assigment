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
        airbnb: {
          primary: "#222222",
          muted: "#717171",
          light: "#B0B0B0",
          brand: "#FF385C",
          accent: "#E61E4D",
          gradientEnd: "#D70466",
          border: "#DDDDDD",
          borderLight: "#EBEBEB",
          neutral: "#F7F7F7",
        },
      },
      fontFamily: {
        sans: [
          '"Airbnb Cereal App"',
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        button: "0 1px 2px rgba(0,0,0,0.08)",
        floating: "0 2px 4px rgba(0,0,0,0.18)",
      },
      borderRadius: {
        airbnb: "12px",
      },
      maxWidth: {
        listing: "1120px",
      },
    },
  },
  plugins: [],
};
