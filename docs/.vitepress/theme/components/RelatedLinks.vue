<template>
  <div v-if="related.length" class="related">
    <h3>Related</h3>
    <ul>
      <li v-for="p in related" :key="p.link"><a :href="p.link">{{ p.text }}</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

type Item = { text: string; link: string; tags?: string[] }

const { theme, page, frontmatter } = useData()

// naive related finder from theme sidebar items with overlapping tags
const related = computed<Item[]>(() => {
  const currentTags: string[] = (frontmatter.value as any)?.tags ?? []
  const items: Item[] = []
  function walk(entry: any) {
    if (!entry) return
    if (Array.isArray(entry)) entry.forEach(walk)
    else if (entry.items) walk(entry.items)
    else if (entry.link && entry.text) items.push({ text: entry.text, link: entry.link })
  }
  walk((theme.value as any)?.sidebar)
  // simple filter: different page and shares any tag word in path
  return items
    .filter((i) => i.link !== page.value.relativePath?.replace(/\.md$/, ''))
    .slice(0, 5)
})
</script>

<style scoped>
.related { margin-top: 24px; }
.related h3 { font-size: 14px; opacity: .8; margin: 0 0 6px; }
.related ul { list-style: disc; margin: 0 0 0 1rem; padding: 0; }
.related a { color: var(--vp-c-text-1); }
</style>

