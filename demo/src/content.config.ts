import { defineCollection } from "astro:content";
import { pagesLoader, pagesSchema } from "astro-content-collections-minimal";

const pages = defineCollection({
  loader: pagesLoader(),
  schema: pagesSchema(),
});

export const collections = { pages };
