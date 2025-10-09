import { h, onMounted, watch, nextTick, toRefs, ref, computed} from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
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
import ReportButton from './components/ReportButton.vue'
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
    app.component('ReportButton', ReportButton)
    app.component('TagsChips', TagsChips)
    app.component('RelatedLinks', RelatedLinks)
    app.component('vImageViewer', vImageViewer)
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
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      navigator.serviceWorker?.addEventListener('message', (e) => {
        if (e.data?.type === 'SW_READY') {
          const t = (window as any).$toast || null
          // vue-toastification is installed
          if (t) {
            t.info('New version available', {
              timeout: 6000,
              closeOnClick: true,
              onClick: () => {
                if (typeof location !== 'undefined') {
                  location.reload()
                }
              }
            })
          }
        }
      })
    }
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const { frontmatter, theme } = toRefs(useData());
    
    // Modern loading state management
    const isLoading = ref(false);
    const loadingProgress = ref(0);
    
    // Enhanced image viewer with modern features
    imageViewer(route);
    
    // Modern service worker with enhanced caching
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      import('workbox-window').then(({ Workbox }) => {
        const wb = new Workbox('/sw.js', {
          updateViaCache: 'none'
        });
        
        // Enhanced service worker lifecycle
        wb.addEventListener('controlling', () => {
          window.location.reload();
        });
        
        wb.addEventListener('waiting', () => {
          // Show update notification
          console.log('New version available');
        });
        
        wb.register().catch(() => {});
      }).catch(() => {});
    }
    
    // Enhanced giscus integration with modern features
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
      // Modern giscus features
      loading: 'lazy',
      strict: '1',
      reactionsEnabled: '1',
      emitMetadata: '0',
      theme: computed(() => theme.value.dark ? 'transparent_dark' : 'light')
    }, {
      frontmatter, 
      route
    }, true);
    
    // Modern route tracking and analytics
    watch(route, (newRoute, oldRoute) => {
      if (oldRoute && newRoute.path !== oldRoute.path) {
        // Track page views
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: newRoute.path
          });
        }
      }
    });
    
    // Enhanced error handling
    onMounted(() => {
      // Modern intersection observer for lazy loading
      if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '50px'
        });
        
        // Observe elements for animation
        document.querySelectorAll('.vp-doc img, .vp-doc pre').forEach(el => {
          observer.observe(el);
        });
      }
    });
  },

  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
            'nav-bar-content-after': () => [
              h(NolebaseEnhancedReadabilitiesMenu),
              h(ReportButton)
            ],
            'nav-screen-content-after': () => [
              h(NolebaseEnhancedReadabilitiesScreenMenu),
              h(ReportButton)
            ],
            'layout-top': () => [
              h(NolebaseHighlightTargetedHeading),
            ],
    })
  },

} satisfies Theme