/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/image-hero.jpg')",
        'mobile-hero': "url('./assets/mobile-image-hero.jpg')",
      },
      transformOrigin: {
        'top-left-0-0': '0% 0%',
        'bottom-left-0-100': '0% 100%',
      },
    },
  },
  plugins: [],
};
