<template>
  <div class="reading-time-container" v-if="shouldShowReadingTime">
    <div class="reading-time">
      <svg class="reading-time-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
      <span>{{ readingTime }} min read</span>
    </div>
    <div class="reading-stats" v-if="showStats">
      <span class="word-count">{{ wordCount }} words</span>
      <span class="separator">•</span>
      <span class="last-updated">{{ lastUpdated }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { page, frontmatter } = useData()
const route = useRoute()

const wordCount = computed(() => {
  if (!page.value.content) {
    return 0
  }
  return page.value.content.split(/\s+/).filter(word => word.length > 0).length
})

const readingTime = computed(() => {
  if (!wordCount.value) return null
  
  // Average reading speed: 200-250 words per minute
  const wordsPerMinute = 225
  const minutes = Math.ceil(wordCount.value / wordsPerMinute)
  
  return minutes
})

const lastUpdated = computed(() => {
  if (frontmatter.value?.lastUpdated) {
    return new Date(frontmatter.value.lastUpdated).toLocaleDateString()
  }
  if (page.value.lastUpdated) {
    return new Date(page.value.lastUpdated).toLocaleDateString()
  }
  return null
})

const showStats = computed(() => {
  return wordCount.value > 0 && (lastUpdated.value || wordCount.value > 100)
})

const shouldShowReadingTime = computed(() => {
  // Don't show on home page or pages with minimal content
  if (route.path === '/' || route.path === '/index') {
    return false
  }
  if (wordCount.value < 50) {
    return false
  }
  
  // Don't show if explicitly disabled in frontmatter
  if (frontmatter.value?.hideReadingTime) {
    return false
  }
  
  return readingTime.value !== null
})
</script>

<style scoped>
.reading-time-container {
  margin: 16px 0;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  /* Debug: Make it more visible */
  border-left: 4px solid var(--vp-c-brand-1);
}

.reading-time-container:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.reading-time {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-1);
  font-weight: 500;
  margin-bottom: 4px;
}

.reading-time-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.reading-stats {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.separator {
  color: var(--vp-c-divider);
}

.word-count {
  font-weight: 500;
}

.last-updated {
  font-style: italic;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .reading-time-container {
    margin: 12px 0;
    padding: 10px 12px;
  }
  
  .reading-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .separator {
    display: none;
  }
}
</style>
