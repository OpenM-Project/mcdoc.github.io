---
title: Top Secret!!!
---

# {{ $frontmatter.title }}

## MCDOC?

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