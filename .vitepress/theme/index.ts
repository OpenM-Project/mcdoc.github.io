// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData , useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import "vitepress-markdown-timeline/dist/theme/index.css";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';

import giscusTalk from 'vitepress-plugin-comment-with-giscus';

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import Video from './components/Video.vue'
import MNavLinks from './components/MNavLinks.vue'
import Navlink from './components/Navlink.vue'
// import Layout from './components/Layout.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    app.component('Video' , Video)
    app.component('MNavLinks' , MNavLinks)
    app.component('Navlink' , Navlink)
    //app.component('Layout' , Layout)
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
    })
  },
  
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    const { frontmatter } = useData();

  },

}