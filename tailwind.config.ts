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
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84E",
          dark: "#B8941E",
          muted: "#C9A227",
        },
        black: {
          DEFAULT: "#080808",
          soft: "#111111",
          card: "#161616",
        },
        ivory: {
          DEFAULT: "#F7F3EA",
          dark: "#EDE8DC",
          muted: "#E3DDD0",
        },
        brown: {
          DEFAULT: "#2A211A",
          light: "#3D2E22",
          muted: "#6B5E4E",
        },
        cream: "#EDE8DC",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "5rem",
        "section-lg": "7rem",
        "section-sm": "3rem",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212, 175, 55, 0.15)",
        "gold-sm": "0 0 15px rgba(212, 175, 55, 0.1)",
        card: "0 4px 24px rgba(8, 8, 8, 0.08)",
        "card-dark": "0 8px 40px rgba(8, 8, 8, 0.25)",
        "card-hover": "0 12px 48px rgba(8, 8, 8, 0.15)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #B8941E 100%)",
        "dark-gradient": "linear-gradient(180deg, #080808 0%, #2A211A 100%)",
        "ivory-gradient": "linear-gradient(180deg, #F7F3EA 0%, #EDE8DC 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.5) 60%, rgba(8,8,8,0.7) 100%)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in-down": "fadeInDown 0.5s ease forwards",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
