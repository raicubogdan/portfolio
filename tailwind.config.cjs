/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        first: '#272838',
        second: '#f3de8a',
        third: '#7e7f9a',
        fourth: '#de7f70',
        fifth: '#f9f8f8',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
        mplus: ['M PLUS Rounded 1c', 'sans-serif'],
        lekton: ['Lekton', 'sans-serif'],
      },
      maxWidth: {
        layout: '1000px',
      },
      maxHeight: {
        layout: '1000px',
      },
      minHeight: {
        layout: '1000px',
      },
    },
  },
  plugins: [],
}
