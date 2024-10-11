// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick, toRefs} from 'vue'
import { useData , useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/style.css'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties/client'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css' 
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import MNavLinks from './components/MNavLinks.vue'
import Navlink from './components/Navlink.vue'
import xgplayer from "./components/xgplayer.vue"

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    app.component('MNavLinks' , MNavLinks)
    app.component('Navlink' , Navlink)
    app.component('xgplayer' , xgplayer)
    app.component('vImageViewer', vImageViewer);
    app.provide(InjectionKey, {
      // Configuration
      defaultMode: 'LayoutMode.Original',
      diableAnimation: false,
    } as Options)
    app.use(NolebaseGitChangelogPlugin)
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.use(NolebaseGitChangelogPlugin, {
      // Configuration
    })
    enhanceAppWithTabs(app)
    vitepressBackToTop({
      // default
      threshold:300
    })
    onMounted(() => {
      const viewer = new Viewer(document.querySelector('body'), {
        selector: 'img:not(.no-viewer)'
      });
    });
  },

  setup() {
    // Get route
    const route = useRoute();
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    // Using
    imageViewer(route);
    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: 'OpenM-Project/mcdoc.github.io',
      repoId: 'R_kgDOMPBaCw',
      category: 'General', // default: `General`
      categoryId: 'DIC_kwDOMPBaC84CiDbA',
      mapping: 'pathname', // default: `pathname`
      inputPosition: 'top', // default: `top`
      lang: 'en', // default: `zh-CN`
      // i18n setting (Note: This configuration will override the default language set by lang)
      // Configured as an object with key-value pairs inside:
      // [your i18n configuration name]: [corresponds to the language pack name in Giscus]
      locales: {
          'en-US': 'en'
      },
      homePageShowComment: false, // Whether to display the comment area on the homepage, the default is false
      lightTheme: 'light', // default: `light`
      darkTheme: 'transparent_dark', // default: `transparent_dark`
      // ...
  }, {
      frontmatter, route
  },
      // Whether to activate the comment area on all pages.
      // The default is true, which means enabled, this parameter can be ignored;
      // If it is false, it means it is not enabled.
      // You can use `comment: true` preface to enable it separately on the page.
      true
  );
},

  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
            // A enhanced readabilities menu for wider screens
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
            // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            'layout-top': () => [
              h(NolebaseHighlightTargetedHeading),
            ],
    })
  },

} satisfies Theme