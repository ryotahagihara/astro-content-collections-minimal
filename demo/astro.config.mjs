// @ts-check
import { defineConfig } from "astro/config";
import contentCollectionsMinimal from "astro-content-collections-minimal";

// https://astro.build/config
export default defineConfig({
  integrations: [contentCollectionsMinimal()],
});
