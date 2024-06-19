import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "MCDOC",
  lang: 'en-US',
  description: "An Ultimate Collection of Minecraft Tools & Unlockers",
  pwa: {},
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
            { text: 'Minecraft for Xbox', link: '/console/minecraft-for-xbox' }
          ]
        },
        {
          text: 'Miscellaneous',
          items: [
            { text: 'Miscellaneous', link: '/miscellaneous/' },
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
      {
        text: 'Windows',
        link: '/windows',
        collapsed: true,
        items: [
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
        collapsed: true,
        items: [
          { text: 'Minecraft Earth', link: '/android/minecraft-earth' },
          { text: 'Minecraft for Android', link: '/android/minecraft-for-android' },
          { text: 'Miscellaneous', link: '/android/miscellaneous' }
        ]
      },
      {
        text: 'iOS',
        link: '/ios',
        collapsed: true,
        items: [
          { text: 'Minecraft Earth', link: '/ios/minecraft-earth' },
          { text: 'Minecraft for iOS', link: '/ios/minecraft-for-ios' }
        ]
      },
      {
        text: 'Console Edition',
        collapsed: true,
        items: [
          { text: 'Minecraft for Nintendo Switch', link: '/console/minecraft-for-nintendo-switch' },
          { text: 'Minecraft for PlayStation', link: '/console/minecraft-for-playstation' },
          { text: 'Minecraft for Xbox', link: '/console/minecraft-for-xbox' }
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Miscellaneous', link: '/miscellaneous/' },
          { text: 'Credits', link: '/credits/' },
          { text: 'DMCA', link: '/dmca/' },
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {},
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcbedoc/mcdoc.github.io' },
      { icon: 'discord', link: 'https://dsc.gg/openms'},
    ]
  }
})


