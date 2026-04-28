/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // <--- Cambiamos "tailwindcss" por "@tailwindcss/postcss"
    autoprefixer: {},
  },
};

export default config;