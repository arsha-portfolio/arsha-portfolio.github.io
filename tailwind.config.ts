import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        instrument: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        charcoal: "#080b0c",
        ink: "#101616",
        forest: "#244c39",
        moss: "#8da897",
        bluegrey: "#91a6af",
        bone: "#f4efe6",
      },
    },
  },
  plugins: [],
} satisfies Config;
