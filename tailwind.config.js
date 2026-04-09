/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1c1e",
          muted: "#3d4248",
        },
        paper: {
          DEFAULT: "#faf9f7",
          soft: "#f3f1ed",
        },
        accent: {
          DEFAULT: "#1e3a5f",
          deep: "#152a45",
        },
        gold: {
          DEFAULT: "#8b7355",
          soft: "#a8906f",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 28, 30, 0.04), 0 8px 24px rgba(26, 28, 30, 0.06)",
        lift: "0 2px 4px rgba(26, 28, 30, 0.04), 0 12px 32px rgba(26, 28, 30, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
