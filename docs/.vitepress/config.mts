import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { PageProperties } from '@nolebase/vitepress-plugin-page-properties/vite'

export default defineConfig({

  extends: {
  vite: { 
    plugins: [
      GitChangelog({ 
        repoURL: () => 'https://github.com/openm-project/mcdoc.github.io', 
      }) as any,
      GitChangelogMarkdownSection({
        sections: { 
          disableChangelog: false,
          disableContributors: true,
        }, 
      }) as any,
      PageProperties(),
    ],
  },
},

  sitemap: {
    hostname: 'https://openm.tech',
    lastmodDateOnly: false
  },

  title: "MCDOC",
  lang: 'en-US',
  description: "An Ultimate Collection of Bedrock Minecraft History, Tools & Unlockers.",
  base: '/',
  cleanUrls:true,
  srcExclude: ['/node_modules/'],
  appearance:'dark',
  head: [
          ['link', { rel: 'icon', href: '/favicon.ico' }],
          [ 'meta', { property: 'og:type', content: 'website' }],
          [ 'meta', { property: 'og:title', content: 'MCDOC' }],
          [ 'meta', { property: 'og:image', content: '/assets/images/title.webp' }],
          [ 'meta', { property: 'og:url', content: 'https://openm.tech' }],
          [ 'meta', { property: 'og:description', content: 'An Ultimate Collection of Bedrock Minecraft History, Tools & Unlockers.' }],
          [ 'meta', { property: 'og:site_name', content: 'MCDOC' }],
          [ 'meta', { property: 'og:locale', content: 'en_US' }],
          [ 'meta', { name: 'theme-color', content: '#644119' }],
          [ 'meta', { name: 'twitter:card', content: 'summary_large_image' }],
          [ 'meta', { name: 'twitter:title', content: 'MCDOC' }],
          [ 'meta', { name: 'twitter:description', content: 'An Ultimate Collection of Bedrock Minecraft History, Tools & Unlockers.' }],
          [ 'meta', { name: 'twitter:image', content: '/assets/images/title.webp' }],
          [ 'meta', { name: 'keywords', content: 'minecraft, bedrock, java, earth, story mode, windows, linux, android, ios, console, nintendo switch, playstation, xbox, wii, education, legends, dungeons, OpenM, Project, tools, Story, Free Minecraft, Unlocker, Crack, working, 100%, marketplace, addon, crack, free, pro, minecoin, minecraft, MCDOC, unlockers, index, safe' }],
          [ 'meta', { name: 'author', content: 'OpenM Project' }],
          [ 'meta', { name: 'robots', content: 'index, follow' }],
          [ 'meta', { name: 'googlebot', content: 'index, follow' }],
          [ 'meta', { name: 'bingbot', content: 'index, follow' }],
          [ 'meta', { name: 'yandex', content: 'index, follow' }],
          [ 'meta', { name: 'msvalidate.01', content: 'B24AD5C950D13D7C3EE70FD2F6B107B3' }],
          [ 'meta', { name: 'yandex-verification', content: 'd90a346e7ae4267f' }],
          [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
          [ 'meta', { name: 'description', content: 'An Ultimate Collection of Minecraft Tools & Unlockers.' }],
          [ 'script', { type: 'application/ld+json' }, `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://openm.tech",
              "name": "MCDOC",
              "description": "An Ultimate Collection of Minecraft Tools & Unlockers.",
              "publisher": {
                "@type": "Organization",
                "name": "OpenM Project",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://openm.tech/assets/images/logo.webp"
                }
              }
            }
          `],
  ],

  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'MCDOC',
    nav: [
        { text: 'Marketplace', link: '/marketplace' },
        { text: 'Miscellaneous', link: '/miscellaneous' },
        { text: 'OpenM Project', link: 'https://project.openm.tech' },
        { text: 'Guides',
          items: [
            { text: 'Windows',
              items: [
                { text: 'Unban Your Account', link: '/guides/unban-your-account' }
              ]
            }
          ]
         },         
        { text: 'More',
          items: [
            { text: 'Privacy Policy', link: '/legal/privacy' },
            { text: 'DMCA', link: '/legal/dmca' },
            { text: 'Credits', link: '/credits' },
          ]
        }
        ],

    sidebar: [
      {
        text: '❇️ Downloads',
        link: '/download'
      },
      {
        text: '📖 Story',
        link: '/story'
      },
      {
        text: '🔨 Learn',
        link: '/learn'
      },      
      {
        text: 'Bedrock Edition',
        link: '/bedrock',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/bedrock/windows' },
          { text: 'Linux', link: '/bedrock/linux' },
          { text: 'Android', link: '/bedrock/android' },
          { text: 'iOS', link: '/bedrock/ios' },
          { text: 'Console',
            collapsed: true,
            items: [
              { text: 'Nintendo Switch', link: '/bedrock/console/nintendo-switch' },
              { text: 'PlayStation', link: '/bedrock/console/playstation' },
              { text: 'Xbox', link: '/bedrock/console/xbox' },
              { text: 'Wii', link: '/bedrock/console/wii' }
            ]
          },
        ]
      },
      {
        text: 'Java Edition',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/java/windows' },
          { text: 'Linux', link: '/java/linux' },
          { 
            text: 'FMHY Wiki',
            link: 'https://fmhy.net/gaming-tools#minecraft-tools',
            target: '_blank',
            rel: 'noreferrer'          
          },
        ]
      },
      {
        text: 'Minecraft Earth',
        collapsed: false,
        items: [
          { text: 'Server setup',
            collapsed: true,
            items: [
              { text: 'Windows', link: '/earth/server-setup/windows' },
            ]
          },
          { text: 'Android', link: '/earth/android' },
          { text: 'IOS', link: '/earth/ios' },
        ]
      },
      {
        text: 'Minecraft Dungeons',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/dungeons/windows' },
          { text: 'Android', link: '/dungeons/android'}
        ]
      },
      {
        text: 'Other',
        collapsed: false,
        items: [
              { text: 'Education', link: '/other/windows/education' },
              { text: 'Legends', link: '/other/windows/legends' },,
              { text: 'China', link: '/other/windows/china' },
              { text: 'Story Mode', link: '/story-mode'}
        ]
      },
    ],

    outline: 'deep',

    footer: {
      message: `All trademarks, service marks, and trade names of Microsoft, Mojang, and Minecraft used in the site are trademarks or registered trademarks of their respective owners.`,
      copyright: `Copyright © 2024-${new Date().getFullYear()} OpenM Project`,
    },

    docFooter: {
      prev: 'Prev',
      next: 'Next',
    },

    search: {
      provider: 'local'
    }, 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openm-project/mcdoc.github.io', ariaLabel: 'MCDOC GitHub Repo' },
      { icon: 'discord', link: 'https://dc.openm.tech', ariaLabel: 'OpenM Discord Server' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>'
        },
        link: 'https://www.reddit.com/r/openm/',
        ariaLabel: 'OpenM Reddit'
      }
    ],

    externalLinkIcon: false,

  editLink: {
    pattern: 'https://github.com/openm-project/mcdoc.github.io/edit/main/docs/:path',
    text: 'Contribute to this Page'
  },

   lastUpdated: {
    text: 'Last Updated',
    formatOptions: {
      dateStyle: 'full',
       timeStyle: 'medium'
     }
    },
  },

  markdown: {
    lineNumbers: true, 

    config: (md) => {
      md.use(timeline as any);
      md.use(BiDirectionalLinks() as any);
      md.use(InlineLinkPreviewElementTransform as any);
      md.use(tabsMarkdownPlugin as any);
    },

    image: {
      lazyLoading: true
    },
  }

})
