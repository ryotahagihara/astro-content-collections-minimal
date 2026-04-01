# astro-content-collections-minimal

![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MIT](https://img.shields.io/badge/MIT-green?style=for-the-badge)

`astro-content-collections-minimal` is an integration that adds document functionality to your Astro project with minimal configuration.
Simply place Markdown (`.md`) files in the `src/content` directory, and routing and layout will be applied automatically to generate a complete site.

## Prerequisites

This package is designed to be installed in Astro v6 or later projects.

It uses [Tailwind CSS (v4)](https://tailwindcss.com/) and [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) for styling. Your Astro project must also have Tailwind CSS set up. Make sure to import Tailwind and the Typography plugin in your project's CSS file.

## Installation

Install the package in your Astro project that already has **Tailwind CSS (v4)** and **@tailwindcss/typography** set up.

```bash
npm install astro-content-collections-minimal
```

## Usage

### 1. Add the Integration

Edit `astro.config.mjs` to add the integration.

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import contentCollectionsMinimal from "astro-content-collections-minimal";

export default defineConfig({
  integrations: [
    contentCollectionsMinimal({
      siteTitle: "My site", // Required: site title
      styles: "./src/styles/global.css", // Required: path to the CSS entry file containing Tailwind directives
    }),
  ],
});
```

### 2. Configure Content Collections

Create `src/content.config.js` (or `.ts`) in your project root and import the `loader` and `schema` provided by the package.

```js
// src/content.config.js
import { defineCollection } from "astro:content";
import { pagesLoader, pagesSchema } from "astro-content-collections-minimal";

const pages = defineCollection({
  loader: pagesLoader(),
  schema: pagesSchema(),
});

export const collections = { pages };
```

### 3. Create Content and Routing

Create Markdown files under `src/content/` in your project. The directory structure maps directly to URL paths.

```text
src/
└── content/
    ├── index.md         // -> /
    ├── about.md         // -> /about
    └── guide/
        └── setup.md     // -> /guide/setup (subdirectories are supported)
```

### 4. Frontmatter

You can specify the following frontmatter at the top of each Markdown file. All fields are optional.

```md
---
title: "Page Title"
description: "Page description"
date: 2026-04-01
---

# Your content here...
```

## Configuration Options

All available options for `astro.config.mjs`:

| Option            | Type     | Required | Default | Description                                                 |
| ----------------- | -------- | -------- | ------- | ----------------------------------------------------------- |
| `siteTitle`       | `string` | **Yes**  | -       | Site title (displayed in the browser tab and header)        |
| `styles`          | `string` | **Yes**  | -       | Relative path to the global CSS file (e.g., Tailwind entry) |
| `siteDescription` | `string` | No       | -       | Site description (used for meta description)                |
| `lang`            | `string` | No       | `"en"`  | HTML `lang` attribute                                       |
| `components`      | `object` | No       | -       | Paths to custom components that override the defaults       |

## Customization

### Styling with CSS Custom Properties

You can customize styles by overriding CSS custom properties in the CSS file specified by the `styles` option (e.g., `global.css`).

Since this package also supports full component replacement, the only CSS custom property currently provided is `--color-background` (background color). You can also use Tailwind's built-in variables.

```css
/* src/styles/global.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme inline {
  /* You can use Tailwind variables directly */
  --color-background: var(--color-amber-100);
}
```

### Component Overrides

The default `Header`, `Footer`, and `Layout` components can be replaced with your own custom Astro components. Specify paths relative to the project root.

```js
// astro.config.mjs
contentCollectionsMinimal({
  siteTitle: "My site",
  styles: "./src/styles/global.css",
  components: {
    Header: "./src/components/MyHeader.astro",
    Footer: "./src/components/MyFooter.astro",
    Layout: "./src/layouts/MyLayout.astro",
  },
});
```

#### Accessing Configuration in Custom Components

To use configuration values such as `siteTitle` inside your custom components, import the provided virtual module.

```astro
---
// src/components/MyHeader.astro
import config from "virtual:astro-content-collections-minimal/config";
const { siteTitle } = config;
---

<header>
  <h1>{siteTitle}</h1>
</header>
```

#### Props Passed to the Layout Component

When you override the `Layout` component, the following `Astro.props` are automatically passed from the internal routing logic. Use them to build your own `<head>` and meta tags.

- `title`: Page title (a combination of the frontmatter `title` and `siteTitle`, or a fallback value)
- `description`: Page description (the frontmatter `description`, or a fallback value)

## Contact

Please report issues or feature requests via [GitHub Issues](https://github.com/ryotahagihara/astro-content-collections-minimal/issues).

## License

MIT License - See [LICENSE](LICENSE) for details.

Copyright &copy; 2026 [Ryota Hagihara](https://www.ryotahagihara.com/) All rights reserved.
