import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.6.1_@algolia+client-search@4.24.0_@types+nod_fyo4ytwvghrzlgrfuyrkefomfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/index.mjs
import InlineLinkPreview from "C:/Users/misim/Documents/Munka/mcdoc.github.io/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.6.1_@algolia+client-search@4.24.0_@types+nod_fyo4ytwvghrzlgrfuyrkefomfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/InlineLinkPreview.vue";
import PopupIframe from "C:/Users/misim/Documents/Munka/mcdoc.github.io/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.6.1_@algolia+client-search@4.24.0_@types+nod_fyo4ytwvghrzlgrfuyrkefomfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/PopupIframe.vue";

// node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.6.1_@algolia+client-search@4.24.0_@types+nod_fyo4ytwvghrzlgrfuyrkefomfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/constants.mjs
var InjectionKey = Symbol("VPNolebaseInlineLinkPreview");

// node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.6.1_@algolia+client-search@4.24.0_@types+nod_fyo4ytwvghrzlgrfuyrkefomfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/index.mjs
var components = {
  VPNolebaseInlineLinkPreview: InlineLinkPreview
};
var NolebaseInlineLinkPreviewPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};
export {
  InjectionKey,
  InlineLinkPreview as NolebaseInlineLinkPreview,
  NolebaseInlineLinkPreviewPlugin,
  PopupIframe
};
//# sourceMappingURL=@nolebase_vitepress-plugin-inline-link-preview_client.js.map
