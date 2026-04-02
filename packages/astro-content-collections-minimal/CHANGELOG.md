# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-04-02

### Added

- Component override support via `components` config option (`Header`, `Footer`, `Layout`)
- Type injection via `injectTypes` for all virtual modules
- Pass page `description` to `Layout` (falls back to `siteDescription`)

### Changed

- Page title uses `siteTitle` from config instead of hardcoded package name
- `Layout` imports `Header` / `Footer` through virtual modules instead of direct file imports

## [0.2.0] - 2026-03-29

### Added

- User config options: `siteTitle`, `siteDescription`, `lang`
- Virtual modules: `virtual:astro-content-collections-minimal/config` and `.../styles`
- Theme CSS (`styles/theme.css`) and type definitions (`types.ts`, `env.d.ts`)

### Changed

- `Header` / `Layout` read config for title, description, and language
- Vite plugin combines theme CSS and user CSS

## [0.1.0] - 2026-03-28

### Added

- Create a minimal theme as an Astro integration
- Support Content Collections
- Support Tailwind-based styling

---

## Template

## [X.Y.Z] - YYYY-MM-DD

### Added

for new features.

### Changed

for changes in existing functionality.

### Deprecated

for soon-to-be removed features.

### Removed

for now removed features.

### Fixed

for any bug fixes.

### Security

in case of vulnerabilities.
