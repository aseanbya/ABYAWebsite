import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        brandRed: {
          DEFAULT: "#9a1e18",
          10: "#ebd2d1",
          20: "#ddb4b2",
          30: "#cd8f8c",
          40: "#2C3333",
          50: "#ab443e",
          70: "#801914",
          80: "#671410",
          90: "#4d0f0c",
          100: "#330a08",
          110: "#1f0605",
        },
        brandYellow: {
          DEFAULT: "#eeb549",
          10: "#fcf0db",
          20: "#f9e6c2",
          30: "#f7daa4",
          40: "#f4ce86",
          50: "#f1c167",
          70: "#c6973d",
          80: "#9f7931",
          90: "#775b25",
          100: "#4f3c18",
          110: "#30240f",
        },
        brandBlue: {
          DEFAULT: "#111f52",
          10: "#cfd2dc",
          20: "#b0b4c5",
          30: "#888fa9",
          40: "#606a8c",
          50: "#39446f",
          70: "#0e1a44",
          80: "#0b1537",
          90: "#091029",
          100: "#060a1b",
          110: "#030610",
        },
      },
      fontSize: {
        "2xs": "0.650rem",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
