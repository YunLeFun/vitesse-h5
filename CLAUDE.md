# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vitesse-H5 is a mobile-first Vue 3 starter template by YunYouJun, inspired by antfu/vitesse. It targets H5 (mobile web) applications with SSG support.

## Commands

- `pnpm dev` — Start dev server at localhost:3333
- `pnpm build` — Production build (client-side)
- `pnpm build:ssg` — Static-site generation build
- `pnpm lint` — Run ESLint (uses @antfu/eslint-config: single quotes, no semicolons)
- `pnpm test` — Run Vitest unit tests (tests in `test/` directory)
- `pnpm typecheck` — Run TypeScript type checking via vue-tsc

## Architecture

### Entry Point and App Bootstrap

`src/main.ts` uses `ViteSSG` (not `createApp` from Vue) to create the app with SSG support. Routes are generated from file-based routing and wrapped with `setupLayouts`. Feature modules are auto-installed via glob import of `src/modules/*.ts`.

### Module System

Each file in `src/modules/` exports an `install` function of type `UserModule` (receives `ViteSSGContext`). Modules are automatically registered at app startup — no manual wiring needed. Current modules: pinia, i18n, gtag, nprogress.

### Auto-Imports

Extensive auto-importing is configured in `vite.config.ts`:
- **APIs**: Vue, VueUse, Vue Router, Vue I18n, and Pinia APIs are available globally without imports
- **Components**: Everything in `src/components/` is auto-imported
- **Composables**: Everything in `src/composables/` is auto-imported
- **Stores**: Everything in `src/stores/` is auto-imported

Generated type files: `auto-imports.d.ts`, `components.d.ts`, `typed-router.d.ts`.

### File-Based Routing

Pages in `src/pages/` become routes automatically via `unplugin-vue-router`. Both `.vue` and `.md` files are supported. Layouts are specified via `<route>` YAML blocks in page files and defined in `src/layouts/`.

### Path Alias

`~/` maps to `src/` (configured in both vite.config.ts and tsconfig.json).

## Coding Conventions

- Vue 3 Composition API with `<script setup>` syntax exclusively
- TypeScript throughout
- ESLint with `@antfu/eslint-config` (single quotes, no semicolons)
- UnoCSS for styling (atomic CSS classes, attributify mode supported)
- Icons via UnoCSS preset-icons: `<div i-ri-home-2-line />` (Carbon and Ri icon sets available)
- I18n strings in `locales/*.yml` (YAML format)
- Dark mode via VueUse `useColorMode` composable at `src/composables/dark.ts`
- CSS custom properties for theming: `--h5-c-primary`, `--h5-c-bg`, `--h5-c-text` (defined in `src/styles/css-vars.scss`)
