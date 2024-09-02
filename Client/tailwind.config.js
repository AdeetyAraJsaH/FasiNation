/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#34d399",

          "secondary": "#fde68a",

          "accent": "#bbf7d0",

          "neutral": "#ccfbf1",

          // "base-100": "#f3e8ff",
          "base-100": "#ffffff",

          "info": "#44403c",

          "success": "#4ade80",

          "warning": "#eab308",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [
    daisyui
  ],
}