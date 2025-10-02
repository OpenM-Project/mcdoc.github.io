import { h, onMounted, watch, nextTick, toRefs} from 'vue'
import { useData , useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/style.css'
import './style/tailwind.css'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
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
import LegalCallout from './components/LegalCallout.vue'
import VersionBadge from './components/VersionBadge.vue'
import TableWrap from './components/TableWrap.vue'
import ReportLink from './components/ReportLink.vue'
import TagsChips from './components/TagsChips.vue'
import RelatedLinks from './components/RelatedLinks.vue'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    app.component('MNavLinks' , MNavLinks)
    app.component('Navlink' , Navlink)
    app.component('xgplayer' , xgplayer)
    app.component('LegalCallout', LegalCallout)
    app.component('VersionBadge', VersionBadge)
    app.component('TableWrap', TableWrap)
    app.component('ReportLink', ReportLink)
    app.component('TagsChips', TagsChips)
    app.component('RelatedLinks', RelatedLinks)
    app.component('vImageViewer', vImageViewer);
    app.provide(InjectionKey, {
      defaultMode: 'LayoutMode.Original',
      diableAnimation: false,
    } as Options)
    const options: PluginOptions = {
      transition: "Vue-Toastification__slideBlurred",
      maxToasts: 30,
      newestOnTop: true,
    };
    app.use(Toast, options);
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.use(NolebaseGitChangelogPlugin, {})
    app.use(autoAnimatePlugin)
    vitepressBackToTop({
      threshold:300
    })

    // SW update toast
    if (typeof window !== 'undefined') {
      navigator.serviceWorker?.addEventListener('message', (e) => {
        if (e.data?.type === 'SW_READY') {
          const t = (window as any).$toast || null
          // vue-toastification is installed
          if (t) {
            t.info('New version available', {
              timeout: 6000,
              closeOnClick: true,
              onClick: () => location.reload()
            })
          }
        }
      })
    }
  },

  setup() {
    const route = useRoute();
    const { frontmatter } = toRefs(useData());
    imageViewer(route);
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      import('workbox-window').then(({ Workbox }) => {
        const wb = new Workbox('/sw.js')
        wb.register()
      }).catch(() => {})
    }
    giscusTalk({
      repo: 'OpenM-Project/mcdoc.github.io',
      repoId: 'R_kgDOM_hm8w',
      category: 'General',
      categoryId: 'DIC_kwDOM_hm884CjUWV',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'en',
      locales: {
          'en-US': 'en'
      },
      homePageShowComment: false,
      lightTheme: 'light',
      darkTheme: 'transparent_dark',
  }, {
      frontmatter, route
  },
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
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            'layout-top': () => [
              h(NolebaseHighlightTargetedHeading),
            ],
    })
  },

} satisfies Theme