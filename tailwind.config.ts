import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-sidebar-bg": "#333333",
        "light-sidebar-title": "#999999",
        "light-sidebar-item-hover-bg": "#4f4f4f",
        "light-sidebar-text-1": "#999999",
        "light-sidebar-text-2": "#dddddd",
        "light-sidebar-text-2-suffix-text": "#dddddd",
        "light-sidebar-text-2-suffix-bg": "#555555",
        "light-sidebar-hover-text-2": "#ffffff",
        "light-sidebar-text-3": "#ffffff",
        "light-sidebar-collapsed-icon": "#dddddd",
        "dark-sidebar-bg": "#dddddd",
        "dark-sidebar-item-hover-bg": "#ffffff",
        "dark-sidebar-text-1": "#666666",
        "dark-sidebar-text-2": "#333333",
        "dark-sidebar-text-2-suffix-text": "#333333",
        "dark-sidebar-text-2-suffix-bg": "#ffffff",
        "dark-sidebar-hover-text-2": "#000000",
        "dark-sidebar-text-3": "#111111",
        "dark-sidebar-collapsed-icon": "#111111",
      },
      fontWeight: {
        "sidebar-font-weight-1": "800",
        "sidebar-font-weight-2": "600",
        "sidebar-font-weight-3": "400",
      },
      fontSize: {
        "sidebar-font-size-1": "0.75rem",
        "sidebar-font-size-2": "0.9rem",
        "sidebar-font-size-3": "0.9rem",
      }
    }
  },
  plugins: [],
} satisfies Config;
