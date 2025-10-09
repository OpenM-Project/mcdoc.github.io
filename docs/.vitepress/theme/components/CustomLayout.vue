<template>
  <div class="custom-layout">
    <!-- Reading Progress Bar -->
    <ReadingProgress />
    
    <!-- Default Theme Layout -->
    <DefaultTheme.Layout v-bind="$attrs">
      <!-- Reading Time before content -->
      <template #doc-before>
        <ReadingTime />
        <slot name="doc-before" />
      </template>
      
      <!-- Pass through all other slots -->
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ReadingProgress from './ReadingProgress.vue'
import ReadingTime from './ReadingTime.vue'
</script>

<style scoped>
.custom-layout {
  position: relative;
}
</style>
