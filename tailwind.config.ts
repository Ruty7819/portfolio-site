import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette: Cobalt + Cream
        accent: {
          DEFAULT: '#3B82F6', // Cobalt Blue
          light: '#60A5FA',
          dark: '#2563EB',
        },
        background: {
          DEFAULT: '#FAFAF9', // Off-white/cream
          dark: '#0C0A09', // Deep charcoal
        },
        foreground: {
          DEFAULT: '#1C1917', // Deep charcoal
          dark: '#FAFAF9', // Off-white
        },
        secondary: {
          DEFAULT: '#DBEAFE', // Soft blue
          dark: '#1E3A8A',
        },
      },
      borderRadius: {
        '2xl': '1rem', // Consistent radius
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
