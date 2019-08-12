(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{323:function(n,t){n.exports='<h1 id="component-img-src-resolving"><span class="bd-content-title">Component img src resolving</span></h1>\n<h2 id="using-project-relative-image-urls-for-bootstrapvue-custom-components"><span class="bd-content-title">Using project relative image URLs for BootstrapVue custom components<a class="anchorjs-link" href="#using-project-relative-image-urls-for-bootstrapvue-custom-components" aria-label="Anchor"></a></span></h2>\n<p>vue-loader automatically converts project relative <code translate="no" class="notranslate text-nowrap">src</code> attributes on <code translate="no" class="notranslate text-nowrap">&lt;img&gt;</code> tags, but doesn&#39;t\nautomatically for BootstrapVue custom components that accept image src url tags.</p>\n<h2 id="vue-loader-transformasseturls-to-resolve-img-paths"><span class="bd-content-title">Vue Loader <code translate="no" class="notranslate text-nowrap">transformAssetUrls</code> to resolve img paths<a class="anchorjs-link" href="#vue-loader-transformasseturls-to-resolve-img-paths" aria-label="Anchor"></a></span></h2>\n<p>To have your project convert these custom component image URLs for you, you will need to customize\nthe <a href="https://vue-loader.vuejs.org/options.html#transformasseturls" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">transformAssetUrls</code></a> <code translate="no" class="notranslate text-nowrap">option</code>\nfor <code translate="no" class="notranslate text-nowrap">vue-loader</code> in your webpack config.</p>\n<p>The default value for <code translate="no" class="notranslate text-nowrap">transformAssetUrls</code> is:</p>\n\x3c!-- eslint-disable no-unused-vars --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">const</span> options = {\n  <span class="hljs-attr">transformAssetUrls</span>: {\n    <span class="hljs-attr">video</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'poster\'</span>],\n    <span class="hljs-attr">source</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-attr">img</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-attr">image</span>: <span class="hljs-string">\'xlink:href\'</span>\n  }\n}</pre><p>To allow BootstrapVue components to use project relative URLs, use the following configuration:</p>\n\x3c!-- eslint-disable no-unused-vars --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">const</span> options = {\n  <span class="hljs-attr">transformAssetUrls</span>: {\n    <span class="hljs-attr">video</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'poster\'</span>],\n    <span class="hljs-attr">source</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-attr">img</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-attr">image</span>: <span class="hljs-string">\'xlink:href\'</span>,\n    <span class="hljs-string">\'b-img\'</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-string">\'b-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n    <span class="hljs-string">\'b-card\'</span>: <span class="hljs-string">\'img-src\'</span>,\n    <span class="hljs-string">\'b-card-img\'</span>: <span class="hljs-string">\'src\'</span>,\n    <span class="hljs-string">\'b-card-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n    <span class="hljs-string">\'b-carousel-slide\'</span>: <span class="hljs-string">\'img-src\'</span>,\n    <span class="hljs-string">\'b-embed\'</span>: <span class="hljs-string">\'src\'</span>\n  }\n}</pre><p>This will allow you to use the following format in your <code translate="no" class="notranslate text-nowrap">.vue</code> files:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"~/static/picture.jpg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"~/static/picture.jpg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-card-img</span>&gt;</span></pre><h3 id="vue-cli-3-support"><span class="bd-content-title">Vue CLI 3 Support<a class="anchorjs-link" href="#vue-cli-3-support" aria-label="Anchor"></a></span></h3>\n<p>Vue CLI 3 changed the way that webpack compiles a Vue app, in order to make BootstrapVue work again,\nyou need to do the following steps:</p>\n<ol>\n<li>Create <code translate="no" class="notranslate text-nowrap">vue.config.js</code> in the root directory (next to <code translate="no" class="notranslate text-nowrap">package.json</code>).</li>\n<li>Put the following code</li>\n</ol>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">chainWebpack</span>: <span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span> {\n    config.module\n      .rule(<span class="hljs-string">\'vue\'</span>)\n      .use(<span class="hljs-string">\'vue-loader\'</span>)\n      .loader(<span class="hljs-string">\'vue-loader\'</span>)\n      .tap(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {\n        options[<span class="hljs-string">\'transformAssetUrls\'</span>] = {\n          <span class="hljs-attr">img</span>: <span class="hljs-string">\'src\'</span>,\n          <span class="hljs-attr">image</span>: <span class="hljs-string">\'xlink:href\'</span>,\n          <span class="hljs-string">\'b-img\'</span>: <span class="hljs-string">\'src\'</span>,\n          <span class="hljs-string">\'b-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n          <span class="hljs-string">\'b-card\'</span>: <span class="hljs-string">\'img-src\'</span>,\n          <span class="hljs-string">\'b-card-img\'</span>: <span class="hljs-string">\'src\'</span>,\n          <span class="hljs-string">\'b-card-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n          <span class="hljs-string">\'b-carousel-slide\'</span>: <span class="hljs-string">\'img-src\'</span>,\n          <span class="hljs-string">\'b-embed\'</span>: <span class="hljs-string">\'src\'</span>\n        }\n\n        <span class="hljs-keyword">return</span> options\n      })\n  }\n}</pre><h3 id="configuring-transformasseturls-in-nuxtjs"><span class="bd-content-title">Configuring <code translate="no" class="notranslate text-nowrap">transformAssetUrls</code> in Nuxt.js<a class="anchorjs-link" href="#configuring-transformasseturls-in-nuxtjs" aria-label="Anchor"></a></span></h3>\n<p>In your <code translate="no" class="notranslate text-nowrap">nuxt.config.js</code> file, add the following to your build section:</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">build</span>: {\n    extend(config, ctx) {\n      <span class="hljs-keyword">const</span> vueLoader = config.module.rules.find(<span class="hljs-function"><span class="hljs-params">rule</span> =&gt;</span> rule.loader === <span class="hljs-string">\'vue-loader\'</span>)\n      vueLoader.options.transformAssetUrls = {\n        <span class="hljs-attr">video</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'poster\'</span>],\n        <span class="hljs-attr">source</span>: <span class="hljs-string">\'src\'</span>,\n        <span class="hljs-attr">img</span>: <span class="hljs-string">\'src\'</span>,\n        <span class="hljs-attr">image</span>: <span class="hljs-string">\'xlink:href\'</span>,\n        <span class="hljs-string">\'b-img\'</span>: <span class="hljs-string">\'src\'</span>,\n        <span class="hljs-string">\'b-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n        <span class="hljs-string">\'b-card\'</span>: <span class="hljs-string">\'img-src\'</span>,\n        <span class="hljs-string">\'b-card-img\'</span>: <span class="hljs-string">\'src\'</span>,\n        <span class="hljs-string">\'b-card-img-lazy\'</span>: [<span class="hljs-string">\'src\'</span>, <span class="hljs-string">\'blank-src\'</span>],\n        <span class="hljs-string">\'b-carousel-slide\'</span>: <span class="hljs-string">\'img-src\'</span>,\n        <span class="hljs-string">\'b-embed\'</span>: <span class="hljs-string">\'src\'</span>\n      }\n    }\n  }\n}</pre><p><span class="badge badge-info small">NEW in v2.0.0-rc.22</span> If using the\n<a href="/docs#nuxtjs-module" class="font-weight-bold">BootstrapVue Nuxt</a> module with Nuxt.js, the plugin module will automatically\nadd in the BootstrapVue specific <code translate="no" class="notranslate text-nowrap">transformAssetUrls</code> configuration for you.</p>\n<h2 id="using-require-to-resolve-image-paths"><span class="bd-content-title">Using <code translate="no" class="notranslate text-nowrap">require</code> to resolve image paths<a class="anchorjs-link" href="#using-require-to-resolve-image-paths" aria-label="Anchor"></a></span></h2>\n<p>If you cannot set the <code translate="no" class="notranslate text-nowrap">transformAssetUrls</code> in your view-loader config, you can alternatively use the\n<code translate="no" class="notranslate text-nowrap">require</code> method:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"require(\'../static/picture.jpg\')"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"require(\'../static/picture.jpg\')"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-card-img</span>&gt;</span></pre>'}}]);