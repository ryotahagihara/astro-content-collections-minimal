// @ts-check
import { defineConfig } from "astro/config";
import contentCollectionsMinimal from "astro-content-collections-minimal";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    contentCollectionsMinimal({
      siteTitle: "My site",
      siteDescription: "My description",
      styles: "./src/styles/global.css",
      components: {
        Header: "./src/components/MyHeader.astro",
        Footer: "./src/components/MyFooter.astro",
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
