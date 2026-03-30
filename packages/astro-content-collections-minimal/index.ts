import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { z } from "astro/zod";
import { AstroError } from "astro/errors";
import { vitePluginUserConfig } from "./integrations/vite-plugins";
import { ComponentConfigSchema } from "./schemas/components";

const OptionsSchema = z.object({
  siteTitle: z.string({ error: "siteTitle is required." }),
  siteDescription: z.string().optional(),
  lang: z.string().default("en"),
  styles: z.string({
    error:
      "styles is required. Specify the path to your CSS entry point (e.g. './src/styles/global.css').",
  }),
  components: ComponentConfigSchema(),
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

        const resolveUserPath = (id: string): string =>
          id.startsWith(".") ? resolve(fileURLToPath(config.root), id) : id;

        const componentPaths = Object.fromEntries(
          Object.entries(parsed.components).map(([name, path]) => [
            name,
            resolveUserPath(path),
          ]),
        ) as Record<import("./schemas/components.ts").ComponentName, string>;

        updateConfig({
          vite: {
            plugins: vitePluginUserConfig({
              config: {
                siteTitle: parsed.siteTitle,
                siteDescription: parsed.siteDescription,
                lang: parsed.lang,
              },
              userStylesPath,
              componentPaths,
            }),
          },
        });

        injectRoute({
          pattern: "/[...id]",
          entrypoint: "astro-content-collections-minimal/routes/[...id].astro",
        });
      },
      "astro:config:done": ({ injectTypes }) => {
        injectTypes({
          filename: "types.d.ts",
          content: readFileSync(
            new URL("./env.d.ts", import.meta.url),
            "utf-8",
          ),
        });
      },
    },
  };
}

export { pagesSchema } from "./schema";
export { pagesLoader } from "./loaders";
