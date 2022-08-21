<p align='center'>
<h1>Vitesse-H5</h1>

> 快速地<sup><em>Vitesse-H5</em></sup> 创建移动端 Web 应用

</p>

<br>

<p align='center'>
<a href="https://vitesse-h5.yunle.fun/">在线 Demo</a>
</p>

<br>

<p align='center'>
<a href="./README.md">English</a> | <b>简体中文</b>
</p>

<br>

## 为什么有 Vitesse-H5?

由于工作的原因，我主要编写一些移动端相关的应用项目。
而我自己业余也经常写一些小工具，譬如 [air-conditioner](https://github.com/YunYouJun/air-conditioner)、[cook](https://github.com/YunYouJun/cook)、[your-university](https://yu.yunyoujun.cn/) 等。
它们的流量大部分来自移动端，因此移动端的适配是必不可少的。

针对移动端，也有一些更合适的策略和实践。

因此我建立了这一模版来记录我认为的移动端网页应用的最佳实践，它的灵感来自 [vitesse](https://github.com/antfu/vitesse)。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)

- 📑 [布局系统](./src/layouts)

<!-- - 📲 [PWA](https://github.com/antfu/vite-plugin-pwa), PWA 存在一些陷阱，我还没能很好地解决它。 -->

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n 国际化开箱即用](./locales)

- 🗒 [Markdown 支持](https://github.com/antfu/vite-plugin-vue-markdown)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 默认开启 [响应性语法糖](https://vuejs.org/guide/extras/reactivity-transform.html)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🖨 可选地使用 [vite-ssg](https://github.com/antfu/vite-ssg) 进行服务端生成 (SSG)（通常情况下，纯移动端项目且无独立路由需求，我更推荐 SPA）

- 🦔 使用 [critters](https://github.com/GoogleChromeLabs/critters) 的生成关键 CSS

- 🦾 TypeScript, 当然

- ⚙️ 结合 [GitHub Actions](https://github.com/features/actions)，使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试

- ☁️ 零配置部署 Netlify

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.esm.dev) - 直接的, 类型安全的, 使用 Composition api 的轻便灵活的 Vue 状态管理
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`vite-plugin-vue-markdown`](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n) - Vue I18n 的 Vite 插件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`@vueuse/head`](https://github.com/vueuse/head) - 响应式地操作文档头信息
- [`@vitejs/plugin-legacy`](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) - 为在生产环境中构建时不支持原生ESM的遗留浏览器提供支持。

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - 服务端生成
  - [critters](https://github.com/GoogleChromeLabs/critters) - 关键 CSS 生成器
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 现在可以试试!

> Vitesse 需要 Node 版本 >=14.18

### GitHub 模板

[使用这个模板创建仓库](https://github.com/YunYouJun/vitesse-h5/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit YunYouJun/vitesse-h5 my-vitesse-h5
cd my-vitesse-h5
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.ts` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 移除 `.github` 文件夹中包含资助的信息
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 <http://localhost:3333> 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.

### 使用 Docker 构建

首先，通过在项目的根目录中打开终端来构建 vitesse-h5 映像。

```bash
docker buildx build . -t vitesse-h5:latest
```

运行映像并使用 `-p` 标志指定端口映射。

```bash
docker run --rm -it -p 8080:80 vitesse-h5:latest
```
