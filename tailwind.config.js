/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./layout/*.{liquid,js}",
    "./sections/*.{liquid,js}",
    "./snippets/*.{liquid,js}",
    "./templates/*.{liquid,js}",
    "./templates/customers/*.{liquid,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
