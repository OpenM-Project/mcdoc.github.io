<template>
  <div class="table-wrap">
    <div :class="['table-scroll', { collapsed }]" ref="scrollEl">
      <slot />
    </div>
    <button v-if="showToggle" class="toggle" @click="collapsed = !collapsed">
      {{ collapsed ? 'Show all' : 'Show less' }}
    </button>
  </div>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const collapsed = ref(true)
const scrollEl = ref<HTMLElement | null>(null)
const showToggle = ref(false)

onMounted(() => {
  const el = scrollEl.value
  if (!el) return
  // Enable toggle if content exceeds max height
  showToggle.value = el.scrollHeight > 420
})
</script>

<style scoped>
.table-wrap { margin: 12px 0 16px; }
.table-scroll { max-height: none; overflow: auto; }
.table-scroll.collapsed { max-height: 420px; }
.toggle { margin-top: 8px; font-size: 12px; padding: 4px 10px; border-radius: 9999px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); }
</style>

