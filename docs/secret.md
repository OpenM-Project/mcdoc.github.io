---
title: Top Secret!!!
---

# {{ $frontmatter.title }}

::: danger WIP
This page is currently Work-In-Progress. The information here might be outdated, incorrect and cannot be understanded.
:::

::: tip VitePress Tips
- Use `<script setup>` for Vue components in markdown
- Access frontmatter with `$frontmatter` global variable
- Use `$withBase()` helper for URLs
- Enable search with `themeConfig.search.provider: 'local'`
- Custom containers: tip, warning, danger, details
- Markdown extensions like emoji :tada: and custom containers
:::

::: warning Vue Tips
- Composition API with `<script setup>`
- Reactivity with `ref()` and `reactive()`
- Lifecycle hooks like `onMounted()`
- Computed properties with `computed()`
- Watch effects with `watch()` and `watchEffect()`
:::

::: info Vite Tips 
- Hot Module Replacement (HMR)
- Lightning fast cold start
- ESM-based dev server
- Optimized builds with Rollup
- CSS code-splitting
- Asset handling and optimization
:::

::: details Advanced Features
- Custom themes
- i18n internationalization
- PWA support
- Markdown extensions
- Full Vue3 support
- TypeScript integration
- SSG/SSR capabilities
:::

## What the heck was MCDOC?

![](https://i.imgur.com/1nvFycH.png)

## Dev Notes

Frontmatter data can be accessed via the special `$frontmatter` global variable:

Example:

```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content

```

::: timeline 2023-04-24
- 一个非常棒的开源项目 H5-Dooring 目前 star 3.1k
  - 开源地址 https://github.com/MrXujiang/h5-Dooring
  - 基本介绍 http://h5.dooring.cn/doc/zh/guide/
- 《深入浅出webpack》 http://webpack.wuhaolin.cn/
:::

::: timeline 2023-04-23
:::