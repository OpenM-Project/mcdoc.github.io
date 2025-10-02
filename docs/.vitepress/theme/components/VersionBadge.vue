<template>
  <div class="badges">
    <span v-if="lastTested" class="badge tested">Last tested: {{ lastTested }}</span>
    <span v-if="riskLevel" class="badge" :class="riskClass">Risk: {{ riskLevel }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const lastTested = computed(() => (frontmatter.value as any)?.lastTested as string | undefined)
const riskLevel = computed(() => (frontmatter.value as any)?.riskLevel as string | undefined)
const riskClass = computed(() => {
  const risk = (riskLevel.value || '').toLowerCase()
  if (risk === 'low') return 'risk-low'
  if (risk === 'medium') return 'risk-medium'
  if (risk === 'high') return 'risk-high'
  return 'risk-unknown'
})
</script>

<style scoped>
.badges {
  display: flex;
  gap: .5rem;
  margin: 8px 0 16px;
}
.badge {
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  border: 1px solid var(--vp-c-divider);
}
.badge.tested { background: rgba(16,185,129,.12); color: #10b981; border-color: rgba(16,185,129,.3); }
.badge.risk-low { background: rgba(59,130,246,.12); color: #3b82f6; border-color: rgba(59,130,246,.3); }
.badge.risk-medium { background: rgba(245,158,11,.12); color: #f59e0b; border-color: rgba(245,158,11,.3); }
.badge.risk-high { background: rgba(239,68,68,.12); color: #ef4444; border-color: rgba(239,68,68,.3); }
.badge.risk-unknown { background: rgba(107,114,128,.12); color: #6b7280; border-color: rgba(107,114,128,.3); }
</style>

