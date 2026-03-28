import { glob } from "astro/loaders";

export const pagesLoader = () =>
  glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content" });
