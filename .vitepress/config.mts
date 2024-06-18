import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCBEDOC",
  description: "An Ultimate Collection of Minecraft: Bedrock Edition Tools & Unlockers",
  pwa: {},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Credits', link: '/credits' },
      { text: 'DMCA', link: '/dmca' }
    ],

    sidebar: [
      {
        text: 'The Story',
        link: '/story'
      },
      {
        text: 'Windows',
        link: '/windows',
        items: [
          { text: 'Minecraft for Windows', link: '/windows/minecraft-for-windows' },
          { text: 'Minecraft Dungeons', link: '/windows/minecraft-dungeons' },
          {text: 'Minecraft China', link: '/windows/minecraft-china' },
          { text: 'Minecraft Earth', link: '/windows/minecraft-earth' },
          { text: 'Minecraft Education', link: '/windows/minecraft-education' },
          { text: 'Minecraft Legends', link: '/windows/minecraft-legends' }
        ]
      },
      {
        text: 'Android',
        link: '/android',
        items: [
          { text: 'Minecraft Earth', link: '/android/minecraft-earth' },
          { text: 'Minecraft for Android', link: '/android/minecraft-for-android' },
          { text: 'Miscellaneous', link: '/android/miscellaneous' }
        ]
      },
      {
        text: 'iOS',
        link: '/ios',
        items: [
          { text: 'Minecraft Earth', link: '/ios/minecraft-earth' },
          { text: 'Minecraft for iOS', link: '/ios/minecraft-for-ios' }
        ]
      },
      {
        text: 'Console Edition',
        link: '/console',
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
          { text: 'TOC', link: '/toc/' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {},
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcbedoc/mcbedoc.github.io' },
      { icon: 'discord', link: 'https://dsc.gg/openms'},
    ]
  }
})


