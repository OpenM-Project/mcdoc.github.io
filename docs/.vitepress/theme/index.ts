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
import ReadingTime from './components/ReadingTime.vue'
import CopyCodeButton from './components/CopyCodeButton.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import CustomLayout from './components/CustomLayout.vue'
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
    app.component('ReadingTime', ReadingTime)
    app.component('CopyCodeButton', CopyCodeButton)
    app.component('ReadingProgress', ReadingProgress)
    app.component('CustomLayout', CustomLayout)
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

      // Auto-add copy buttons to code blocks
      if (typeof window !== 'undefined') {
        const addCopyButtons = () => {
          const codeBlocks = document.querySelectorAll('div[class*="language-"]:not(.copy-button-added)');
          codeBlocks.forEach(block => {
            const code = block.querySelector('code');
            if (code && !block.querySelector('.copy-code-button')) {
              const copyButton = document.createElement('button');
              copyButton.className = 'copy-code-button';
              copyButton.innerHTML = `
                <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              `;
              
              copyButton.addEventListener('click', async () => {
                try {
                  await navigator.clipboard.writeText(code.textContent || '');
                  copyButton.innerHTML = `
                    <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  `;
                  copyButton.style.background = 'var(--vp-c-brand-soft)';
                  copyButton.style.color = 'var(--vp-c-brand-1)';
                  copyButton.style.borderColor = 'var(--vp-c-brand-1)';
                  
                  setTimeout(() => {
                    copyButton.innerHTML = `
                      <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    `;
                    copyButton.style.background = '';
                    copyButton.style.color = '';
                    copyButton.style.borderColor = '';
                  }, 2000);
                } catch (err) {
                  console.error('Failed to copy code:', err);
                }
              });
              
              block.appendChild(copyButton);
              block.classList.add('copy-button-added');
            }
          });
        };

        // Auto-add reading time component
        const addReadingTime = () => {
          // Don't add on specific pages
          const excludedPages = ['/', '/index', '/credits', '/download', '/changelog'];
          if (excludedPages.includes(route.path)) {
            // Remove any existing reading time on excluded pages
            const existingReadingTime = document.querySelector('.auto-reading-time');
            if (existingReadingTime) {
              existingReadingTime.remove();
            }
            return;
          }
          
          const content = document.querySelector('.vp-doc .container .content') || document.querySelector('.vp-doc .content') || document.querySelector('.vp-doc');
          if (content && !document.querySelector('.auto-reading-time')) {
            // Create reading time element
            const readingTimeEl = document.createElement('div');
            readingTimeEl.className = 'auto-reading-time';
            readingTimeEl.innerHTML = `
              <div class="reading-time-container">
                <div class="reading-time">
                  <svg class="reading-time-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span>Reading time will be calculated...</span>
                </div>
              </div>
            `;
            
            // Find the page title (h1) and insert reading time after it
            const title = content.querySelector('h1');
            if (title && title.parentNode) {
              title.parentNode.insertBefore(readingTimeEl, title.nextSibling);
            } else {
              // Fallback: insert at the beginning of content
              content.insertBefore(readingTimeEl, content.firstChild);
            }
            
                   // Calculate reading time from actual text content
                   const text = content.textContent || '';
                   const wordCount = text.split(/\s+/).filter(word => word.length > 2).length;
                   const readingTime = Math.ceil(wordCount / 225);

                   // Only show reading time if it's more than 1.5 minutes (90 seconds)
                   if (readingTime >= 2) {
                     readingTimeEl.innerHTML = `
                       <div class="simple-reading-time">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                           <circle cx="12" cy="12" r="10"/>
                           <polyline points="12,6 12,12 16,14"/>
                         </svg>
                         <span>${readingTime} min read</span>
                       </div>
                     `;
                   } else {
                     readingTimeEl.remove();
                   }
          }
        };

        // Add components on mount and route change
        const addComponents = () => {
          addCopyButtons();
          // Add delay for reading time to ensure content is loaded
          setTimeout(() => {
            addReadingTime();
          }, 100);
        };
        
        addComponents();
        
        // Watch for route changes and re-add components
        watch(route, () => {
          // Clean up existing reading time before adding new one
          const existingReadingTime = document.querySelector('.auto-reading-time');
          if (existingReadingTime) {
            existingReadingTime.remove();
          }
          
          nextTick(() => {
            addComponents();
          });
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

    return h('div', { class: 'vp-layout-wrapper' }, [
      h(ReadingProgress),
      h(DefaultTheme.Layout, props, {
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
        'doc-before': () => [
          // ReadingTime is now auto-added via JavaScript
            ],
    })
    ])
  },

} satisfies Theme