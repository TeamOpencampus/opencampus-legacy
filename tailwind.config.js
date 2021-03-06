module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
