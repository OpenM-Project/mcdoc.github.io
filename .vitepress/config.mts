import { defineConfig } from 'vitepress'

import timeline from "vitepress-markdown-timeline";

import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'

import { 
  InlineLinkPreviewElementTransform 
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

import taskLists from 'markdown-it-task-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 

  title: "MCDOC",
  lang: 'en-US',
  description: "An Ultimate Collection of Minecraft History, Tools & Unlockers.",
  base: '/',
  cleanUrls:true,
  appearance:'dark',
  head: [
          [ 'link', { rel: "manifest", href: "/manifest.json"}],
          [ 'scipt', { src: "/asstes/js/service.js" }],
          [ 'script', { src: "/assets/js/ads.js" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: 'MCDOC',
    nav: [
        {
          text: 'The Story',
          link: '/story'
        },
        {
          text: 'Windows',
          items: [
            { text: 'Java Edition', link: 'https://fmhy.net/gaming-tools#minecraft-tools' },
            { text: 'Minecraft for Windows', link: '/windows/minecraft-for-windows' },
            { text: 'Minecraft Dungeons', link: '/windows/minecraft-dungeons' },
            { text: 'Minecraft China', link: '/windows/minecraft-china' },
            { text: 'Minecraft Earth', link: '/windows/minecraft-earth' },
            { text: 'Minecraft Education', link: '/windows/minecraft-education' },
            { text: 'Minecraft Legends', link: '/windows/minecraft-legends' }
          ]
        },
        {
          text: 'Android',
          items: [
            { text: 'Minecraft Earth', link: '/android/minecraft-earth' },
            { text: 'Minecraft for Android', link: '/android/minecraft-for-android' },
            { text: 'Miscellaneous', link: '/android/miscellaneous' }
          ]
        },
        {
          text: 'iOS',
          items: [
            { text: 'Minecraft Earth', link: '/ios/minecraft-earth' },
            { text: 'Minecraft for iOS', link: '/ios/minecraft-for-ios' }
          ]
        },
        {
          text: 'Console Edition',
          items: [
            { text: 'Minecraft for Nintendo Switch', link: '/console/minecraft-for-nintendo-switch' },
            { text: 'Minecraft for PlayStation', link: '/console/minecraft-for-playstation' },
            { text: 'Minecraft for Xbox', link: '/console/minecraft-for-xbox' },
            { text: 'Minecraft for Wii', link: '/console/minecraft-for-wii' }
          ]
        },
        {
          text: 'Miscellaneous',
          activeMatch: '/miscellaneous',
          items: [
            { text: 'Miscellaneous', link: '/miscellaneous/' },
            { text: 'Secret Marketplace Items', link: '/secret-marketplace' },
            { text: 'Credits', link: '/credits/' },
            { text: 'DMCA', link: '/dmca/' },
          ]
        }
    ],

    sidebar: [
      { 
        text: 'The Story',
        link: '/story'
      },
      { text: 'Secret Marketplace Items', link: '/secret-marketplace' },
      { text: 'Miscellaneous', link: '/miscellaneous/' },
      { text: 'Credits', link: '/credits/' },
      { text: 'DMCA', link: '/dmca/' },
      
      {
        text: 'Windows',
        collapsed: false,
        items: [
          { text: 'Java Edition', link: 'https://fmhy.net/gaming-tools#minecraft-tools' },
          { text: 'Minecraft for Windows', link: '/windows/minecraft-for-windows' },
          { text: 'Minecraft Dungeons', link: '/windows/minecraft-dungeons' },
          { text: 'Minecraft China', link: '/windows/minecraft-china' },
          { text: 'Minecraft Earth', link: '/windows/minecraft-earth' },
          { text: 'Minecraft Education', link: '/windows/minecraft-education' },
          { text: 'Minecraft Legends', link: '/windows/minecraft-legends' }
        ]
      },
      {
        text: 'Android',
        collapsed: false,
        items: [
          { text: 'Minecraft Earth', link: '/android/minecraft-earth' },
          { text: 'Minecraft for Android', link: '/android/minecraft-for-android' },
          { text: 'Miscellaneous', link: '/android/miscellaneous' }
        ]
      },
      {
        text: 'iOS',
        collapsed: false,
        items: [
          { text: 'Minecraft Earth', link: '/ios/minecraft-earth' },
          { text: 'Minecraft for iOS', link: '/ios/minecraft-for-ios' }
        ]
      },
      {
        text: 'Console Edition',
        collapsed: false,
        items: [
          { text: 'Minecraft for Nintendo Switch', link: '/console/minecraft-for-nintendo-switch' },
          { text: 'Minecraft for PlayStation', link: '/console/minecraft-for-playstation' },
          { text: 'Minecraft for Xbox', link: '/console/minecraft-for-xbox' },
          { text: 'Minecraft for Wii', link: '/console/minecraft-for-wii' }
        ]
      },
    ],

    search: {
      provider: 'local',
      options: {},
    },

    footer: {
      message: 'All rights reserved.',
      copyright: 'Copyright © 2024 OpenM Project',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openm-project/mcdoc.github.io' },
      { icon: 'discord', link: 'https://dsc.gg/openmproject'}
    ],

editLink: {
  pattern: 'https://github.com/openm-project/mcdoc.github.io/edit/main/:path',
  text: 'Edit'
},

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

  },

  markdown: {
    lineNumbers: true, 

    config: (md) => {
      md.use(timeline);
      md.use(BiDirectionalLinks())
      md.use(InlineLinkPreviewElementTransform)
    },

    image: {
      lazyLoading: true
    },

  }

})


