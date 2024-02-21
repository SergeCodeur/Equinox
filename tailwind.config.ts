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
        800: "#1B1C3D",
      },
      gray: {
        500: "#667085",
        900: "#0F1023",
      },
      zinc: {
        800: "#292A2E",
      },
      neutral: {
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
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
