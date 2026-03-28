// @ts-check
import { defineConfig } from "astro/config";
import contentCollectionsMinimal from "astro-content-collections-minimal";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [contentCollectionsMinimal()],

  vite: {
    plugins: [tailwindcss()],
  },
});
