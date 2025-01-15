import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-lapiz": "#336699",
        "bg-green": "#317b22",
        "bg-blue": "#78cad2",
        "text-grey": "#556775",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Mukta: ["Mukta", "sans-serif"],
      },
      
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;
