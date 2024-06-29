import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        'vitepress'
      ], 
    },
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
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
        'medium-zoom',
        'sass',
        'vite',
        'vitepress',
        'vitepress-markdown-timeline',
        'vitepress-plugin-comment-with-giscus',
        'vue',
      ], 
    }, 
    plugins: [
      // other vite plugins...
    ],
    // other vite configurations...
  }
})