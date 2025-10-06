import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        external: ['fsevents']
      },
      chunkSizeWarningLimit: 1000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        'vitepress',
        'fsevents'
      ],
      include: [
        'vue',
        'vue-toastification'
      ]
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
    resolve: {
      alias: {
        '@': resolve(__dirname, 'docs'),
        '@assets': resolve(__dirname, 'docs/public/assets'),
        '@components': resolve(__dirname, 'docs/.vitepress/theme/components')
      }
    },
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
})