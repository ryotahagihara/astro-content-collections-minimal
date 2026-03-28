import { z } from "astro/zod";

export const pagesSchema = () =>
  z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
  });
