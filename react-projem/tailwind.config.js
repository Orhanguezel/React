/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React bileşenlerini tarar
    "./public/index.html",        // HTML dosyasını tarar
    "./src/custom.css",           // Özelleştirilmiş CSS dosyasını tarar
  ],
  theme: {
    extend: {}, // Tema özelleştirmeleri buraya eklenebilir
  },
  plugins: [],
};

