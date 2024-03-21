import type { Config } from "tailwindcss";

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
    boxShadow: {
      "search-input-shadow": "0px 1px 2px rgba(16, 24, 40, 0.05)",
      table:
        "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    },
    fontSize: {
      md: [
        "10.04px",
        {
          fontWeight: "400",
        },
      ],
      base: [
        "16px",
        {
          fontWeight: "400",
        },
      ],
      "base-500": [
        "16px",
        {
          fontWeight: "500",
        },
      ],
      "base-600": [
        "16px",
        {
          fontWeight: "600",
        },
      ],
      xs: [
        "12px",
        {
          fontWeight: "400",
        },
      ],
      "xs-500": [
        "12px",
        {
          fontWeight: "500",
        },
      ],
      "sm-300": [
        "14px",
        {
          fontWeight: "300",
        },
      ],
      sm: [
        "14px",
        {
          fontWeight: "400",
        },
      ],
      "sm-500": [
        "14px",
        {
          fontWeight: "500",
        },
      ],
      "sm-600": [
        "14px",
        {
          fontWeight: "600",
        },
      ],
      "sm-700": [
        "14px",
        {
          fontWeight: "700",
        },
      ],
      "xsl-500": [
        "18.25px",
        {
          fontWeight: "500",
        },
      ],
      xl: [
        "20px",
        {
          fontWeight: "400",
        },
      ],
      "xl-500": [
        "20px",
        {
          fontWeight: "500",
        },
      ],
      lg: [
        "24px",
        {
          fontWeight: "400",
        },
      ],
      "lg-500": [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      "3xs-600": [
        "35.76px",
        {
          fontWeight: "600",
        },
      ],
      "3xl-400": [
        "36px",
        {
          fontWeight: "500",
        },
      ],
      "3xl-500": [
        "36px",
        {
          fontWeight: "500",
        },
      ],
      "3xl-600": [
        "36px",
        {
          fontWeight: "600",
        },
      ],
      "3xl-700": [
        "36px",
        {
          fontWeight: "700",
        },
      ],
      "4xl-500": [
        "40px",
        {
          fontWeight: "500",
        },
      ],
      "4xl-600": [
        "40px",
        {
          fontWeight: "600",
        },
      ],
      "5xl": [
        "48px",
        {
          fontWeight: "400",
        },
      ],
      "5xl-600": [
        "48px",
        {
          fontWeight: "600",
        },
      ],
      "5xl-700": [
        "48px",
        {
          fontWeight: "700",
        },
      ],
      "6xl-600": [
        "64px",
        {
          fontWeight: "600",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      primary: "#2537E5",
      secondary: "#04081A",
      slate: {
        600: "#545571",
        800: "#1B1C3D",
        900: "#11113B",
      },
      gray: {
        500: "#667085",
        900: "#0F1023",
      },
      zinc: {
        400: "#979CA5",
        800: "#292A2E",
      },
      neutral: {
        400: "#98999B",
        600: "#424444",
        700: "#37393A",
      },
      orange: {
        500: "#F2860A",
      },
      red: {
        700: "#BD1717",
      },
      purple: {
        500: "#9D65EA",
      },
      stone: {
        300: "#C2C2C2",
      },
      violet: {
        500: "#7F56D9",
        950: "#26266A",
      },
    },
    extend: {
      keyframes: {
        "bounce-left": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },

          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-left": "bounce-left 1s ease-in-out infinite",
      },
      backgroundImage: {
        "gradiant-195":
          "linear-gradient(180deg, #FFFFFF 24.84%, #2537E5 101.66%)",
        "video-image": "url('/video.png')",
        "bleu-gradiant":
          "linear-gradient(180deg, rgba(4, 8, 26, 0.00) 0%, #04081A 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
