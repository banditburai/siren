import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      screens: {
        'xs': '475px',         
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        retro: {          
            darkslate: '#30353c',
            palecream: '#ece7cb',
            info: '#3b8ad9', // Brighter blue for informational messages
            tip: '#68b346',  // Brighter green for tips
            warning: '#d9822b', // Brighter orange for warnings
            error: '#d94f4f', // Brighter red for errors          
          border: {
            info: '#5555FF', // Example: bright blue border for informational messages
            tip: '#55FF55',  // Example: bright green border for tips
            warning: '#FFAA00', // Example: bright yellow border for warnings
            error: '#FF5555', // Example: bright red border for errors
          },
          text: '#FFFFFF', // Example: white text for all protip types
          // Add other color definitions as needed
        },
        quiz: {
          'border': '#333',
          'hover-border': '#666',
          'background': '#fff',
          'hover-bg': '#e6e6e6',
          'text': '#333',
          'dark': {
            'border': '#ece7cb', // border color for dark mode
            'hover-border': '#b59f82', // hover border color for dark mode
            'background': '#30353c', // background color for dark mode
            'text': '#ece7cb', // text color for dark mode
            'hover-bg': '#3a4048', 
          },
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config