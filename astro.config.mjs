// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://deepratai.github.io",
  base: "/cortex-web",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
