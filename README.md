# astro-content-collections-minimal

![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![MIT](https://img.shields.io/badge/MIT-green?style=for-the-badge)

A minimal package for building themes with Astro Integration.

Simply add it to your Astro project and place Markdown files in the `src/content` directory to generate pages automatically. It provides the fundamental building blocks for theme development using Content Collections.

This repository is managed as a monorepo using `pnpm workspaces`.

> **Note:**
> For detailed usage instructions and configuration options, please refer to the [package README](packages/astro-content-collections-minimal/README.md).
> A [starter template](https://github.com/ryotahagihara/astro-content-collections-minimal-starter) is also available for getting started quickly with this package.
> You can also check out the [demo site](https://astro-content-collections-minimal.rhghr.com/) to see it in action.

## As an Astro Integration Reference

This project is designed to serve both as a tool and as **a minimal reference implementation for learning how to build Astro Integrations (themes)**.

It follows the design patterns of [Starlight](https://starlight.astro.build/), Astro's official documentation theme, distilled down to the minimum implementation needed to understand how Astro Integrations work.

The project implements the following features as a foundation for theme development:

- Route and component injection via the `astro:config:setup` hook
- Automatic routing from Markdown using Content Collections
- User configuration passthrough via `astro.config.mjs`
- Style customization using CSS custom properties
- Component overrides for Header, Footer, and Layout with custom Astro components

This aims to be a good starting point and reference for developers who want to create their own Astro themes or integrations.

## Project Structure

| Directory                                    | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| `packages/astro-content-collections-minimal` | The package itself (Astro integration source code) |
| `demo`                                       | Astro project for local development and testing    |

## Development Setup

Basic steps for developing this package. This project uses `pnpm` as its package manager.

### 1. Install Dependencies

Run the following command in the project root directory to install dependencies for the entire workspace.

```shell
pnpm install
```

### 2. Start the Development Server

Run the following command to start the `demo` application (the test project).

```shell
pnpm --filter demo dev
```

Open `http://localhost:4321` in your browser to verify it works. Changes to the code in `packages/astro-content-collections-minimal` will be reflected automatically.

## Features

- **Astro Content Collections:** Type-safe data fetching and automatic routing for documents.
- **Tailwind CSS & Typography:** Simple and versatile default styling.
- **Customizable Components:** All core UI (Header, Footer, Layout) is fully overrideable, with CSS custom property theming support.

## Contact

Please report issues or feature requests via [GitHub Issues](https://github.com/ryotahagihara/astro-content-collections-minimal/issues).

## License

MIT License - See [LICENSE](LICENSE) for details.

Copyright &copy; 2026 [Ryota Hagihara](https://www.ryotahagihara.com/)
