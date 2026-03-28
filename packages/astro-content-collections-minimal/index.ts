import type { AstroIntegration } from "astro";

export default function contentCollectionsMinimal(): AstroIntegration {
  return {
    name: "astro-content-collections-minimal",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({
          pattern: "/[...id]",
          entrypoint: "astro-content-collections-minimal/routes/[...id].astro",
        });
      },
    },
  };
}

export { pagesSchema } from "./schema";
export { pagesLoader } from "./loaders";
