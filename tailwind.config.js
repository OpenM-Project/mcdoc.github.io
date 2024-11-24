/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.md',
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/.vitepress/theme/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}