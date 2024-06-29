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
      ], 
    }, 
    plugins: [
      // other vite plugins...
    ],
    // other vite configurations...
  }
})