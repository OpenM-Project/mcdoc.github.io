import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            vitepress: ['vitepress'],
            nolebase: [
              '@nolebase/vitepress-plugin-enhanced-readabilities',
              '@nolebase/vitepress-plugin-git-changelog',
              '@nolebase/vitepress-plugin-highlight-targeted-heading',
              '@nolebase/vitepress-plugin-inline-link-preview',
              '@nolebase/vitepress-plugin-page-properties'
            ],
            ui: ['vue-toastification']
          }
        }
      }
    },
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        'vitepress'
      ], 
    },
    ssr: { 
      noExternal: [
        'vue-toastification',
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        'vitepress',
        '@mdit-vue/shared',
        '@nolebase/markdown-it-bi-directional-links',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-git-changelog',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-inline-link-preview',
        '@nolebase/vitepress-plugin-page-properties',
        'less',
        'sass',
        'vite',
        'vitepress',
        'vitepress-markdown-timeline',
        'vitepress-plugin-comment-with-giscus',
        'vue',
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
  }
})