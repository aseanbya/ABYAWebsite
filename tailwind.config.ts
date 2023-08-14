import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
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
    plugins: [
        require("daisyui")
    ],

    daisyui: {
        themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
} satisfies Config;
