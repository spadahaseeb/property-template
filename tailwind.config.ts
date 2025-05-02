import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          primary: "#1A1A1A",
          secondary: "#3D3E3F",
          muted: "#122223",
          deep: "#1F4B43",
          smooth: "#222121",
        },
        white: {
          DEFAULT: "#FFFFFF",
          secondary: "#E9E9E9",
          muted: "#F9F9F9",
          soft: "#F6F8FA",
          warm: "#FFF8F6",
        },
        gray: {
          light: "#E1E1E1",
          normal: "#2c2c2c",
        },
        accent: {
          gold: "#E7C873",
          coral: "#EB664E",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        xmd: "880px",
        lg: "1024px",
        xl: "1366px",
        xxl: "1440px",
        "2xl": "1720px",
        "3xl": "1880px",
      },
      zIndex: {
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
      },
      borderWidth: {
        "0": "0",
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
        "7": "7px",
        full: "100%",
      },
      borderRadius: {
        xsm: "3px",
        sm: "calc(var(--radius) - 4px)",
        normal: "12px",
        medium: "16px",
        lg: "50px",
        xlg: "100px",
        md: "calc(var(--radius) - 2px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
