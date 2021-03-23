import { defineConfig } from "vite";
// const path = require("path");
// const resolve = (dir) => path.join(__dirname, dir);

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
