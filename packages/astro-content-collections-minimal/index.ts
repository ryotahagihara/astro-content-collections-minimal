import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { z } from "astro/zod";
import { AstroError } from "astro/errors";
import { vitePluginUserConfig } from "./integrations/vite-plugins";

const OptionsSchema = z.object({
  siteTitle: z.string({ error: "siteTitle is required." }),
  siteDescription: z.string().optional(),
  lang: z.string().default("en"),
  styles: z.string({
    error:
      "styles is required. Specify the path to your CSS entry point (e.g. './src/styles/global.css').",
  }),
});
type UserOptions = z.input<typeof OptionsSchema>;

export default function contentCollectionsMinimal(
  options: UserOptions,
): AstroIntegration {
  const result = OptionsSchema.safeParse(options);
  if (!result.success) {
    throw new AstroError(
      "Invalid configuration passed to astro-content-collections-minimal",
      result.error.issues
        .map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
        .join("\n"),
    );
  }
  const parsed = result.data;

  return {
    name: "astro-content-collections-minimal",
    hooks: {
      "astro:config:setup": ({ injectRoute, updateConfig, config }) => {
        const userStylesPath = resolve(
          fileURLToPath(config.root),
          parsed.styles,
        );

        updateConfig({
          vite: {
            plugins: vitePluginUserConfig({
              config: {
                siteTitle: parsed.siteTitle,
                siteDescription: parsed.siteDescription,
                lang: parsed.lang,
              },
              userStylesPath,
            }),
          },
        });

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
