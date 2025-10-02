<template>
  <div v-if="tags.length" class="tags">
    <a v-for="t in tags" :key="t" class="tag" :href="`/browse?tag=${encodeURIComponent(t)}`">#{{ t }}</a>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const tags = computed(() => (frontmatter.value as any)?.tags ?? [])
</script>

<style scoped>
.tags { display:flex; flex-wrap: wrap; gap: 6px; margin: 10px 0 0 }
.tag { font-size: 12px; padding: 2px 8px; border-radius: 9999px; background: var(--vp-c-default-soft); color: var(--vp-c-text-1); }
</style>

