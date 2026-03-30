import { fileURLToPath } from "node:url";
import { z } from "astro/zod";

export function ComponentConfigSchema() {
  const defaults = {
    Footer: fileURLToPath(
      new URL("../components/Footer.astro", import.meta.url),
    ),
    Header: fileURLToPath(
      new URL("../components/Header.astro", import.meta.url),
    ),
    Layout: fileURLToPath(
      new URL("../components/Layout.astro", import.meta.url),
    ),
  };
  return z
    .object({
      Footer: z.string().default(defaults.Footer),
      Header: z.string().default(defaults.Header),
      Layout: z.string().default(defaults.Layout),
    })
    .default(defaults);
}

export type ComponentName = keyof z.infer<
  ReturnType<typeof ComponentConfigSchema>
>;
