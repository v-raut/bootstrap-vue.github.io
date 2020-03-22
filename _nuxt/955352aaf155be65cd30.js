(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{379:function(n,t){n.exports="<h1 id=settings class=bv-no-focus-ring><span class=bd-content-title>Settings</span></h1> <p class=bd-lead>BootstrapVue provides a few options for customizing component default values, and more.</p> <h2 id=configuring-defaults class=bv-no-focus-ring><span class=bd-content-title>Configuring defaults<a class=anchorjs-link href=#configuring-defaults aria-labelledby=configuring-defaults></a></span></h2> <p>BootstrapVue is pre-configured for the default Bootstrap v4.x configuration. It assumes the breakpoints are the standard breakpoint names of <code class=text-nowrap translate=no>xs</code>, <code class=text-nowrap translate=no>sm</code>, <code class=text-nowrap translate=no>md</code>, <code class=text-nowrap translate=no>lg</code>, and <code class=text-nowrap translate=no>xl</code>. Also various BootstrapVue components have props with default variants and text content.</p> <p>BootstrapVue provides several methods for changing the default configuration.</p> <p>Note that it is not possible to change the defaults when using BootstrapVue via a <code class=text-nowrap translate=no>&lt;script&gt;</code> tag.</p> <h3 id=default-configuration class=bv-no-focus-ring><span class=bd-content-title>Default configuration<a class=anchorjs-link href=#default-configuration aria-labelledby=default-configuration></a></span></h3> <p>Default breakpoint names are stored in the <code class=text-nowrap translate=no>breakpoints</code> property, default form control size is stored under the <code class=text-nowrap translate=no>formControls</code> property, while component specific defaults are keyed by their <samp class=notranslate translate=no>PascalCase</samp> name with the props as <samp class=notranslate translate=no>camelCase</samp> properties. Only properties defined in the default configuration can be overridden. Attempting to set a config property that is not defined in the default will generate a console warning.</p> <div class=bd-code><pre class=\"hljs json p-2\" translate=no>{{ defaultConfig }}</pre></div><h3 id=setting-new-configuration-values class=bv-no-focus-ring><span class=bd-content-title>Setting new configuration values<a class=anchorjs-link href=#setting-new-configuration-values aria-labelledby=setting-new-configuration-values></a></span></h3> <p>When you <code class=text-nowrap translate=no>Vue.use(BootstrapVue)</code>, you can optionally pass a configuration object which specifies new values to replace the default values. For example if you wish to define new breakpoint names (which will generate appropriate properties on components such as <code class=text-nowrap translate=no>&lt;b-col&gt;</code> and <code class=text-nowrap translate=no>&lt;b-form-group&gt;</code>), so that the new breakpoints are <code class=text-nowrap translate=no>[&#39;aa&#39;, &#39;bb&#39;, &#39;cc&#39;, &#39;dd&#39;]</code> then <code class=text-nowrap translate=no>&lt;b-col&gt;</code> will now have <code class=text-nowrap translate=no>bb</code>, <code class=text-nowrap translate=no>cc</code>, and <code class=text-nowrap translate=no>dd</code> props instead of <code class=text-nowrap translate=no>sm</code>, <code class=text-nowrap translate=no>md</code>, <code class=text-nowrap translate=no>lg</code> and <code class=text-nowrap translate=no>xl</code> props (Similar for the <code class=text-nowrap translate=no>label-cols-{breakpoint}</code> and <code class=text-nowrap translate=no>label-align-{breakpoint}</code>props on <code class=text-nowrap translate=no>&lt;b-form-group&gt;</code>):</p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-keyword>import</span> BootstrapVue <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\nVue.use(BootstrapVue, {\n  <span class=hljs-attr>breakpoints</span>: [<span class=hljs-string>`xs`</span>, <span class=hljs-string>'sm'</span>, <span class=hljs-string>'md'</span>, <span class=hljs-string>'lg'</span>, <span class=hljs-string>'xl'</span>, <span class=hljs-string>'xxl'</span>]\n})</pre></div><p>Or if changing the default variants for <code class=text-nowrap translate=no>&lt;b-button&gt;</code> and <code class=text-nowrap translate=no>&lt;b-alert&gt;</code>:</p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-keyword>import</span> BootstrapVue <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\nVue.use(BootstrapVue, {\n  <span class=hljs-attr>BAlert</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'danger'</span> },\n  <span class=hljs-attr>BButton</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'primary'</span> }\n})</pre></div><p>The values provided as the config option to <code class=text-nowrap translate=no>Vue.use</code> will be merged with the default values.</p> <p><strong>Note:</strong> When defining custom breakpoints, keep the names short (2 to 3 characters). At least two breakpoint names must be defined. The breakpoint names <strong>must</strong> match the breakpoint names defined in your custom Bootstrap SCSS. Breakpoint names must not conflict with non-breakpoint prop names used on various components (i.e. avoid <code class=text-nowrap translate=no>to</code>, <code class=text-nowrap translate=no>col</code>, etc)</p> <h3 id=setting-config-via-individual-component-group-plugin-imports class=bv-no-focus-ring><span class=bd-content-title>Setting config via individual component group plugin imports<a class=anchorjs-link href=#setting-config-via-individual-component-group-plugin-imports aria-labelledby=setting-config-via-individual-component-group-plugin-imports></a></span></h3> <p>When importing individual component plugins, you can specify a config as well (using the same config structure as above. You only need to provide configuration to the first component you import, but each successive config will be merged with the previous config provided.</p> <p>Note breakpoint names should be defined before using any components as they are required to generate component breakpoint specific props. Once the component that has breakpoint specific props is used, and subsequent changes to the breakpoints will <strong>not</strong> be reflected.</p> <p><strong>Example 1 (least preferred method):</strong></p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-comment>// Component group plugins</span>\n<span class=hljs-keyword>import</span> { LayoutPlugin, AlertPlugin, ButtonPlugin } <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\n\n<span class=hljs-comment>// Supply configs via each plugin as it is `Vue.use()`'d</span>\nVue.use(LayoutPlugin, { <span class=hljs-attr>breakpoints</span>: [<span class=hljs-string>'xs'</span>, <span class=hljs-string>'sm'</span>, <span class=hljs-string>'lg'</span>, <span class=hljs-string>'xl'</span>, <span class=hljs-string>'xxl'</span>] })\nVue.use(AlertPlugin, { <span class=hljs-attr>BAlert</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'danger'</span> } })\nVue.use(ButtonPlugin, { <span class=hljs-attr>BButton</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'primary'</span> } })</pre></div><p><strong>Example 2:</strong></p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-comment>// Component group plugins</span>\n<span class=hljs-keyword>import</span> { LayoutPlugin, AlertPlugin, ButtonPlugin } <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\n\n<span class=hljs-comment>// Supply complete config to first `Vue.use()`'d plugin</span>\nVue.use(LayoutPlugin, {\n  <span class=hljs-attr>breakpoints</span>: [<span class=hljs-string>'xs'</span>, <span class=hljs-string>'sm'</span>, <span class=hljs-string>'lg'</span>, <span class=hljs-string>'xl'</span>, <span class=hljs-string>'xxl'</span>],\n  <span class=hljs-attr>BAlert</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'danger'</span> },\n  <span class=hljs-attr>BButton</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'primary'</span> }\n})\nVue.use(AlertPlugin)\nVue.use(ButtonPlugin)</pre></div><p><strong>Example 3 (most preferred method):</strong></p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-comment>// BootstrapVue configuration helper plugin and Component group plugins</span>\n<span class=hljs-keyword>import</span> { BVConfigPlugin, LayoutPlugin, AlertPlugin, ButtonPlugin } <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\n\n<span class=hljs-comment>// Supply complete config to the BVConfigPlugin helper plugin</span>\nVue.use(BVConfigPlugin, {\n  <span class=hljs-attr>breakpoints</span>: [<span class=hljs-string>'xs'</span>, <span class=hljs-string>'sm'</span>, <span class=hljs-string>'lg'</span>, <span class=hljs-string>'xl'</span>, <span class=hljs-string>'xxl'</span>],\n  <span class=hljs-attr>BAlert</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'danger'</span> },\n  <span class=hljs-attr>BButton</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'primary'</span> }\n})\n\n<span class=hljs-comment>// Then use component plugins</span>\nVue.use(LayoutPlugin)\nVue.use(AlertPlugin)\nVue.use(ButtonPlugin)</pre></div><p><strong>Example 4 when importing individual components (preferred method):</strong></p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no><span class=hljs-comment>// Import BootstrapVue configuration helper plugin and Individual components</span>\n<span class=hljs-keyword>import</span> { BVConfigPlugin, BAlert, BButton, BRow, BCol } <span class=hljs-keyword>from</span> <span class=hljs-string>'bootstrap-vue'</span>\n\n<span class=hljs-comment>// Supply complete config to the BVConfig helper plugin</span>\nVue.use(BVConfigPlugin, {\n  <span class=hljs-attr>breakpoints</span>: [<span class=hljs-string>'xs'</span>, <span class=hljs-string>'sm'</span>, <span class=hljs-string>'lg'</span>, <span class=hljs-string>'xl'</span>, <span class=hljs-string>'xxl'</span>],\n  <span class=hljs-attr>BAlert</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'danger'</span> },\n  <span class=hljs-attr>BButton</span>: { <span class=hljs-attr>variant</span>: <span class=hljs-string>'primary'</span> }\n})\n\n<span class=hljs-comment>// Then install components globally</span>\nVue.component(<span class=hljs-string>'b-alert'</span>, BAlert)\nVue.component(<span class=hljs-string>'b-button'</span>, BButton)\nVue.component(<span class=hljs-string>'b-row'</span>, BRow)\nVue.component(<span class=hljs-string>'b-col'</span>, BCol)\n\n<span class=hljs-comment>// Or register components as local to your custom component</span>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  <span class=hljs-attr>name</span>: <span class=hljs-string>'MyComponent'</span>,\n  <span class=hljs-attr>components</span>: {\n    BAlert,\n    BButton,\n    BRow,\n    BCol\n  }\n  <span class=hljs-comment>// ...</span>\n}</pre></div><p><strong>Caveat:</strong> Vue only installs plugins <em>once</em>. If you import a plugin that has already been imported by another component plugin, the configuration passed to the component plugin will <strong>not</strong> be merged in. It is best to set the complete configuration using the <code class=text-nowrap translate=no>BVConfigPlugin</code> helper plugin as shown in <strong>Example 3</strong> and <strong>Example 4</strong> above. The <code class=text-nowrap translate=no>BVConfigPlugin</code> plugin should be used in the main entry point of your app, and <strong>before</strong> any <code class=text-nowrap translate=no>Vue.use()</code> of component plugins or <code class=text-nowrap translate=no>Vue.component()</code> or individual components.</p> <h3 id=setting-the-config-via-nuxtjs-bootstrapvue-plugin class=bv-no-focus-ring><span class=bd-content-title>Setting the config via Nuxt.js BootstrapVue plugin<a class=anchorjs-link href=#setting-the-config-via-nuxtjs-bootstrapvue-plugin aria-labelledby=setting-the-config-via-nuxtjs-bootstrapvue-plugin></a></span></h3> <p>Refer to the <a href=/docs/#nuxtjs-plugin-module class=font-weight-bold>Getting Started</a> documentation for information on passing the config object to the Nuxt.js plugin module.</p> <h2 id=disabling-bootstrapvue-console-warnings class=bv-no-focus-ring><span class=bd-content-title>Disabling BootstrapVue console warnings<a class=anchorjs-link href=#disabling-bootstrapvue-console-warnings aria-labelledby=disabling-bootstrapvue-console-warnings></a></span></h2> <p>BootstrapVue will warn (via <code class=text-nowrap translate=no>console.warn</code>) when you try and use a deprecated prop, or pass an invalid value to certain props. These warnings are provided to help you ensure that your application is using the correct props and values.</p> <p>In some cases, you may want to disable these warnings (not recommended). You can do so by setting the following process environment variable:</p> <div class=bd-code><pre class=\"hljs js p-2\" translate=no>process.env.BOOTSTRAP_VUE_NO_WARN = <span class=hljs-literal>true</span></pre></div><p>By ignoring warnings, you may find that your project fails/breaks when using future releases of bootstrapVue where deprecated props have been removed.</p> <p><strong>Warnings should be corrected before moving your project into production!</strong></p> "}}]);