webpackJsonp([30],{x0Or:function(s,a){s.exports='<h1 id="navs">Navs</h1>\n<blockquote>\n<p>Navigation available in Bootstrap share general markup and styles,\nfrom the base <code>&lt;b-nav&gt;</code> class to the <code>active</code> and <code>disabled</code> states.\nSwap modifier props to switch between each style.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-default.vue --&gt;</span>\n</pre>\n<h2 id="overview">Overview</h2>\n<p>The base <code>&lt;b-nav&gt;</code> component is built with flexbox and provides a strong\nfoundation for building all types of navigation components. It includes\nsome style overrides (for working with lists), some link padding for larger\nhit areas, and basic disabled styling. No active states are included in the base nav.</p>\n<h2 id="link-appearance">Link Appearance</h2>\n<p>Two style variations are supported: <code>tabs</code> and <code>pills</code>, which support <code>active</code> state styling.\nThese variants are mutually exclusive - use only one style or the other.</p>\n<h3 id="tab-style">Tab style</h3>\n<p>Make the nav look like tabs by setting the prop <code>tabs</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">tabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-tabs.vue --&gt;</span>\n</pre>\n<h3 id="pill-style">Pill style</h3>\n<p>Use the pill style by setting the prop <code>pills</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">pills</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-pills.vue --&gt;</span>\n</pre>\n<h2 id="fill-and-justify">Fill and justify</h2>\n<p>Force your <code>b-nav</code> content to extend the full available width.</p>\n<h3 id="fill">Fill</h3>\n<p>To proportionately fill all available space with your <code>&lt;b-nav-item&gt;</code> components,\nset the <code>fill</code> prop. Notice that all horizontal space is occupied, but not\nevery nav item has the same width.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">fill</span> <span class="hljs-attr">tabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link with a long name <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-fill.vue --&gt;</span>\n</pre>\n<h3 id="justified">Justified</h3>\n<p>For equal-width elements, set prop <code>justified</code> instead. All horizontal space\nwill be occupied by nav links, but unlike <code>fill</code> above, every <code>&lt;b-nav-item&gt;</code>\nwill be the same width.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">justified</span> <span class="hljs-attr">tabs</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link with a long name <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-justified.vue --&gt;</span>\n</pre>\n<h2 id="vertical-variation">Vertical variation</h2>\n<p>By default <code>&lt;b-nav&gt;</code> appear on a horizontal line. Stack your navigation by setting\nthe <code>vertical</code> prop.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-25&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-vertical.vue --&gt;</span>\n</pre>\n<h2 id="dropdown-support">Dropdown support</h2>\n<p>Use <code>&lt;b-nav-item-dropdown&gt;</code> to place dropdown items within your nav.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">pills</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;nav7_ddown&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Dropdown&quot;</span> <span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>one<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>two<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>three<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- nav-dropdown.vue --&gt;</span>\n</pre>\n<p>Refer to <a href="../dropdown"><code>&lt;b-dropdown&gt;</code></a> for a list of supported sub-components.</p>\n<h3 id="-b-nav-item-dropdown-component-alias"><code>&lt;b-nav-item-dropdown&gt;</code> Component Alias</h3>\n<p><code>&lt;b-nav-item-dropdown&gt;</code> can be used via it&apos;s shorter aliases of <code>&lt;b-nav-item-dd&gt;</code> and <code>&lt;b-nav-dd&gt;</code>.</p>\n<h2 id="using-in-navbar">Using in Navbar</h2>\n<p>Using <code>&lt;b-nav&gt;</code> within a <code>&lt;b-navbar&gt;</code> has been deprecated as of Bootstrap-Vue v1.0.0-beta.10.\nPlease use the <a href="/docs/components/navbar"><code>&lt;b-navbar-nav&gt;</code></a> component instead.</p>\n<p>Prop <code>is-nav-bar</code> has been deprecated and will be removed in a future release.</p>\n<h2 id="tabbed-local-content-support">Tabbed local content support</h2>\n<p>See the <a href="./tabs"><code>&lt;b-tabs&gt;</code></a> component for creating tabbable panes of local\ncontent (not suited for navigation).</p>\n<h2 id="accessibility">Accessibility</h2>\n<p>If you&#x2019;re using <code>&lt;b-nav&gt;</code> to provide a navigation bar, be sure to add a\n<code>role=&quot;navigation&quot;</code> to the most logical parent container of <code>&lt;b-nav&gt;</code>, or wrap\na <code>&lt;nav&gt;</code> element around <code>&lt;b-nav&gt;</code>. Do <strong>not</strong> add the role to the <code>&lt;b-nav&gt;</code> itself,\nas this would prevent it from being announced as an actual list by assistive technologies.</p>\n<p>When using a <code>&lt;b-nav-item-dropdown&gt;</code> in your <code>&lt;b-nav&gt;</code>, be sure to assign a unique <code>id</code>\nprop value to the <code>&lt;b-nav-dropdown&gt;</code> so that the appropriate <code>aria-*</code> attributes can\nbe automatically generated.</p>\n<h2 id="see-also">See Also</h2>\n<ul>\n<li><a href="/docs/components/tabs"><code>&lt;b-tabs&gt;</code></a> to create tabbable panes of local content, even via dropdown menus.</li>\n<li><a href="/docs/components/navbar"><code>&lt;b-navbar&gt;</code></a> a wrapper that positions branding, navigation, and other elements in a concise header.</li>\n<li><a href="/docs/components/dropdown"><code>&lt;b-dropdown&gt;</code></a> for sub-components that you can place inside <code>&lt;b-nav-item-dropdown&gt;</code></li>\n<li><a href="/docs/reference/router-links">Router Link Support reference</a> for information about router-link specific props available on <code>&lt;b-nav-item&gt;</code></li>\n</ul>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components27.7f486d8eefed237eb506.js.map