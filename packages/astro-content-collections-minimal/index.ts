import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { z } from "astro/zod";
import { AstroError } from "astro/errors";

const OptionsSchema = z.object({
  styles: z.string({
    error:
      "styles is required. Specify the path to your CSS entry point (e.g. './src/styles/global.css').",
  }),
});
type UserOptions = z.input<typeof OptionsSchema>;

const VIRTUAL_STYLES_ID = "virtual:astro-content-collections-minimal/styles";
const RESOLVED_VIRTUAL_STYLES_ID = `\0${VIRTUAL_STYLES_ID}`;

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
            plugins: [
              {
                name: "vite-plugin-user-styles",
                resolveId(id: string) {
                  if (id === VIRTUAL_STYLES_ID) {
                    return RESOLVED_VIRTUAL_STYLES_ID;
                  }
                  return undefined;
                },
                load(id: string) {
                  if (id === RESOLVED_VIRTUAL_STYLES_ID) {
                    return `import "${userStylesPath}";`;
                  }
                  return undefined;
                },
              },
            ],
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
