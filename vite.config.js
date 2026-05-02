import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";
import path from "path";

import worksData from "./src/markdown/sections-data/works.json" assert { type: "json" };
import productsData from "./src/markdown/sections-data/products.json" assert { type: "json" };

const fullContext = {
  // Для туров  
  works: worksData.worksItems,
  sliders: productsData.sliders,
  
  // Для отзывов
  // reviewsTitle: reviewsData.title,
  // reviews: reviewsData.reviews,

  //...
};

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: [path.resolve(__dirname, "src/markdown")],
      context: fullContext,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    fs: {
      strict: false, // разрешаем доступ к файловой системе
    },
    host: true, // разрешаем все хосты
    strictPort: true,
  },
   build: {
    outDir: './docs',
    emptyOutDir: true
  }
});
