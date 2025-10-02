<template>
  <a :href="issueUrl" target="_blank" rel="noreferrer" class="report-link">Report link</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ title?: string; url?: string }>()
const issueUrl = computed(() => {
  const repo = 'openm-project/mcdoc.github.io'
  const t = encodeURIComponent(`Broken or malicious link: ${props.title || ''}`)
  const body = encodeURIComponent(`URL: ${props.url || ''}\n\nPage: ${location.href}`)
  return `https://github.com/${repo}/issues/new?labels=broken-link&title=${t}&body=${body}`
})
</script>

<style scoped>
.report-link { font-size: 12px; color: var(--vp-c-brand-2); }
</style>

