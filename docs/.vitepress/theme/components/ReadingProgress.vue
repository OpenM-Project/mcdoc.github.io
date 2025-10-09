<template>
  <div 
    class="reading-progress" 
    :style="{ width: `${progress}%` }"
    :class="{ 'visible': shouldShow, 'reading': isReading }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const progress = ref(0)
const isReading = ref(false)
const readingStartTime = ref(0)

const shouldShow = computed(() => {
  // Don't show on specific pages
  const excludedPages = ['/', '/index', '/credits', '/download', '/changelog'];
  if (excludedPages.includes(route.path)) {
    return false
  }
  // Always show on other pages, even if progress is 0
  return true
})

const updateProgress = () => {
  // Ensure window and document are available
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  
  const scrollTop = window.scrollY || window.pageYOffset || 0
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  
  // Handle edge cases
  if (docHeight <= 0 || !isFinite(docHeight)) {
    progress.value = 0
    return
  }
  
  const scrollPercent = (scrollTop / docHeight) * 100
  const newProgress = Math.min(100, Math.max(0, scrollPercent))
  
  // Track reading behavior
  if (newProgress > progress.value) {
    if (!isReading.value) {
      isReading.value = true
      readingStartTime.value = Date.now()
    }
  }
  
  progress.value = newProgress
}

// Reset reading state on route change
watch(route, () => {
  progress.value = 0
  isReading.value = false
  readingStartTime.value = 0
  
  // Re-initialize progress after route change with a small delay
  setTimeout(() => {
    updateProgress()
  }, 100)
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })
    
    // Initialize progress with a delay to ensure DOM is ready
    setTimeout(() => {
      updateProgress()
    }, 100)
    
    // Also update on next tick
    setTimeout(() => {
      updateProgress()
    }, 500)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateProgress)
    window.removeEventListener('resize', updateProgress)
  }
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  z-index: 1000;
  transition: width 0.1s ease, opacity 0.3s ease;
  box-shadow: 0 0 10px var(--vp-c-brand-1);
  opacity: 0;
  transform: translateY(-4px);
  border-bottom: 1px solid var(--vp-c-brand-1);
  min-width: 1px; /* Ensure it's always visible even at 0% */
}

.reading-progress.visible {
  opacity: 1;
  transform: translateY(0);
}

.reading-progress.reading {
  box-shadow: 0 0 15px var(--vp-c-brand-1), 0 0 30px rgba(var(--vp-c-brand-1-rgb), 0.3);
  height: 4px;
}

/* Smooth entrance animation */
.reading-progress.visible {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-4px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .reading-progress {
    height: 2px;
  }
  
  .reading-progress.reading {
    height: 3px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .reading-progress {
    background: var(--vp-c-brand-1);
    box-shadow: none;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .reading-progress {
    transition: width 0.01ms ease;
  }
  
  .reading-progress.visible {
    animation: none;
  }
}
</style>
