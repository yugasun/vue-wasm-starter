# Vue WebAssembly Starter

[![Vue](https://img.shields.io/badge/Framework-Vue3-42b883)](https://vuejs.org/)
[![WebAssembly](https://img.shields.io/badge/Language-WebAssembly-6550f0)](https://webassembly.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Language-Rust-blue)](https://www.rust-lang.org/)
[![Vite](https://img.shields.io/badge/Develop-Vite-747bff)](https://vitejs.dev)
[![Pinia](https://img.shields.io/badge/Store-Pinia-f7d336)](https://pinia.vuejs.org)
[![TailwindCSS](https://img.shields.io/badge/CSS-TailwindCSS-858585)](https://tailwindcss.com/)
[![Build](https://github.com/yugasun/vue-template/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/yugasun/vue-wasm-starter/actions/workflows/deploy.yml)

Vue template for starter using Vue3 + WebAssembly + TypeScript + Vite + Pinia + TailwindCSS 🚀

## Feature

- [x] 🔥 [Vue](https://vuejs.org/) The Progressive JavaScript Framework
- [x] 🚀 [WebAssembly](https://webassembly.org/) Execute at native speed.
- [x] [Rust](https://www.rust-lang.org/) A language empowering everyone to build reliable and efficient software.
- [x] [Vue Router](https://github.com/vuejs/router)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [Vite](https://vitejs.dev/) Next Generation Frontend Tooling
- [x] [Vue DevTools](https://devtools-next.vuejs.org) Vue DevTools - Unleash Vue Developer Experience
- [x] [Pinia](https://pinia.vuejs.org/) The Vue Store that you will enjoy using
- [x] ⚙️ [Vitest](https://github.com/vitest-dev/vitest) Unit Testing with Vitest
- [x] 🎉 [Element Plus](https://github.com/element-plus/element-plus) A Vue.js 3 UI Library made by Element team
- [x] [vueuse](https://github.com/vueuse/vueuse) Collection of essential Vue Composition Utilities for Vue 2 and 3
- [x] [axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
- [x] 🎨 [TailwindCSS](https://tailwindcss.com/) Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
- [x] 😃 [Heroicons](https://heroicons.com/) Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
- [x] 🌍 [I18n ready](https://vue-i18n.intlify.dev/) Vue I18n Internationalization plugin for Vue.js
- [x] [msw](https://mswjs.io/docs/) Seamless REST/GraphQL API mocking library for browser and Node.js.
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)
- [x] [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [x] [Commitlint](https://github.com/conventional-changelog/commitlint) Lint commit messages
- [x] [Commitizen](https://github.com/commitizen/cz-cli) The commitizen command line utility.

## Prerequisites

- [Node.js](https://nodejs.org/) (>=18.x, 18.x recommended)
- [pnpm](https://pnpm.io/) (>=8.x, 8.x recommended)
- [Rust](https://www.rust-lang.org/) (>=1.80.1)

Install Nodejs and pnpm:

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.8.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

# install pnpm
npm install -g pnpm
```

Install Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Start

```bash
# 0. Clone project
git clone https://github.com/yugasun/vue-wasm-starter

# 1. Install dependencies
pnpm install

# 2. Install wasm-pack and cargo-watch
cargo install wasm-pack cargo-watch

# 3. Start develop server
pnpm dev

# 4. Build
pnpm build
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## License

[MIT @yugasun](./LICENSE)
