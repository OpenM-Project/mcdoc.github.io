import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCBEDOC",
  description: "An Ultimate Collection of Minecraft: Bedrock Edition Tools & Unlockers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Windows', link: '/windows' }
    ],

    sidebar: [
      {
        text: 'Navbar',
        items: [
          { text: 'Windows', link: '/windows' },
          { text: 'Android', link: '/android' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
