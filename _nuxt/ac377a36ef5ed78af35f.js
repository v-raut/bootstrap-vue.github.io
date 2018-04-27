(window.webpackJsonp=window.webpackJsonp||[]).push([[14,67],{285:function(s,n,a){"use strict";var t=a(18);n.a={data:function(){return{scrollTimeout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}}},head:function(){return{title:(this.meta&&this.meta.title||"Docs")+" - BootstrapVue"}},mounted:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$root.$emit("setTOC",this.readme)},updated:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy:function(){this.$root.$emit("setTOC","")},methods:{focusScroll:function(){var s=this,n=this.$route.hash;this.$nextTick(function(){var a=void 0;n&&(a=s.$el.querySelector('[id="'+n.replace("#","")+'"]'),s.scrollIntoView(a)),a||(a=s.$el.querySelector("h1")),a&&(a.tabIndex=-1,a.focus())})},scrollIntoView:function(s){var n=this;if(s){var a=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(function(){Object(t.d)(a,Object(t.c)(s)-70,100),n.scrollTimeout=null},100)}}}}},383:function(s,n){s.exports='<h1 id="getting-started">Getting Started</h1>\n<h2 id="webpack">Webpack</h2>\n<p>If you are using module bundlers such as Webpack, Rollup, Laravel elixir/mix, etc you may prefer to directly include the package\ninto your project. To get started, use yarn or npm to get latest version of bootstrap-vue and bootstrap 4:</p>\n<pre class="hljs"><span class="hljs-comment"># With NPM:</span>\nnpm i bootstrap-vue\n\n<span class="hljs-comment"># With Yarn:</span>\nyarn add bootstrap-vue\n</pre>\n<p>Then, register BootstrapVue plugin in your app entry point:</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;vue&apos;</span>\n<span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue&apos;</span>\n\nVue.use(BootstrapVue);\n</pre>\n<p>And import Bootstrap and Bootstrap-Vue css files:</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-string">&apos;bootstrap/dist/css/bootstrap.css&apos;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&apos;bootstrap-vue/dist/bootstrap-vue.css&apos;</span>\n</pre>\n<p><strong>Note</strong>: <em>requires webpack configuration to load css files (<a href="https://webpack.js.org/guides/asset-management/#loading-css">official guide</a>)</em></p>\n<h2 id="nuxt-js">Nuxt.js</h2>\n<p>Install dependencies:</p>\n<pre class="hljs"><span class="hljs-comment"># With NPM:</span>\nnpm i bootstrap-vue\n\n<span class="hljs-comment"># With Yarn:</span>\nyarn add bootstrap-vue\n</pre>\n<p>Add <code>bootstrap-vue/nuxt</code> to modules section of <strong>nuxt.config.js</strong></p>\n<pre class="hljs">{\n  <span class="hljs-attr">modules</span>: [\n    <span class="hljs-string">&apos;bootstrap-vue/nuxt&apos;</span>,\n\n    <span class="hljs-comment">// Or if you have custom bootstrap CSS...</span>\n    [<span class="hljs-string">&apos;bootstrap-vue/nuxt&apos;</span>, { <span class="hljs-attr">css</span>: <span class="hljs-literal">false</span> }],\n  ]\n}\n</pre>\n<h2 id="vue-cli">vue-cli</h2>\n<p>Bootstrap-Vue has two vue-cli templates available:</p>\n<ul>\n<li><a href="https://github.com/bootstrap-vue/webpack-simple">webpack-simple</a>: Quick scaffold for a proof of concept or small app</li>\n<li><a href="https://github.com/bootstrap-vue/webpack">webpack</a>: Larger, production ready template with more options</li>\n</ul>\n<pre class="hljs"><span class="hljs-comment"># Ensure vue-cli is installed and up to date</span>\nnpm i -g vue-cli\n<span class="hljs-comment"># Initialize a bootstrap project in the directory &apos;my-project&apos;</span>\nvue init bootstrap-vue/webpack-simple my-project\n<span class="hljs-comment"># Change into the directory</span>\n<span class="hljs-built_in">cd</span> my-project\n<span class="hljs-comment"># Install dependencies</span>\nnpm i\n<span class="hljs-comment"># Fire up the dev server with HMR</span>\nnpm run dev\n</pre>\n<p>You can repeat the commands above replacing <code>bootstrap-vue/webpack-simple</code> with\n<code>bootstrap-vue/webpack</code> for the webpack template.</p>\n<h2 id="individual-components-and-directives">Individual components and directives</h2>\n<p>If you would like to only pull in a specific component or set of components, you can do\nthis by directly importing those components.</p>\n<p>To cherry pick a component/directive, start by importing it in the file where it is being used:</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> bModal <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue/es/components/modal/modal&apos;</span>\n<span class="hljs-keyword">import</span> bModalDirective <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue/es/directives/modal/modal&apos;</span>\n</pre>\n<p>Then add it to your component definition:</p>\n<pre class="hljs">Vue.component(<span class="hljs-string">&apos;my-component&apos;</span>, {\n    <span class="hljs-attr">components</span>: {\n        <span class="hljs-string">&apos;b-modal&apos;</span>: bModal\n    },\n    <span class="hljs-attr">directives</span>: {\n        <span class="hljs-string">&apos;b-modal&apos;</span>: bModalDirective\n    }\n    <span class="hljs-comment">// ...</span>\n})\n</pre>\n<p>Or register them globally:</p>\n<pre class="hljs">Vue.component(<span class="hljs-string">&apos;b-modal&apos;</span>, bModal);\nVue.directive(<span class="hljs-string">&apos;b-modal&apos;</span>, bModalDirective);\n</pre>\n<p>Vue and ES2015 allow for various syntaxes here, so feel free to utilize kebab-casing (shown),\ncamel-casing, pascal-casing, and/or object property shorthand.</p>\n<h3 id="component-groups-and-directives-as-vue-plugins">Component groups and Directives as Vue plugins</h3>\n<p>You can also import component groups and directives as Vue plugins by importing\nthe component group or directive directory:</p>\n<pre class="hljs"><span class="hljs-comment">// This imports &lt;b-modal&gt; as well as the v-b-modal directive as a plugin:</span>\n<span class="hljs-keyword">import</span> { Modal } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue/es/components&apos;</span>;\nVue.use(Modal);\n\n<span class="hljs-comment">// This imports &lt;b-card&gt; along with all the &lt;b-card-*&gt; sub-components as a plugin:</span>\n<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue/es/components&apos;</span>;\nVue.use(Card);\n\n<span class="hljs-comment">// This imports directive v-b-scrollspy as a plugin:</span>\n<span class="hljs-keyword">import</span> { Scrollspy } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;bootstrap-vue/es/directives&apos;</span>;\nVue.use(Scrollspy);\n</pre>\n<p>When importing as plugins, all subcomponents and related directives are imported in most cases.\ni.e. When importing <code>&lt;b-nav&gt;</code>, all the <code>&lt;nav-*&gt;</code> sub components are also included, as well all\ndropdown sub components.</p>\n<p>Refer to the component and directive documentation for details.</p>\n<h3 id="webpack-babel">Webpack + Babel</h3>\n<p>When importing components/directives individually, you must configure your app to properly\nbuild the bootstrap-vue library source code. This commonly involves white-listing the node\nmodule for your babel loader rule in webpack.</p>\n<pre class="hljs"><span class="hljs-comment">// webpack.config.js</span>\n<span class="hljs-keyword">const</span> webpack = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;webpack&apos;</span>)\n<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>)\n\n<span class="hljs-built_in">module</span>.exports = {\n    <span class="hljs-attr">entry</span>: <span class="hljs-string">&apos;./app.js&apos;</span>,\n    <span class="hljs-attr">output</span>: {\n        <span class="hljs-attr">filename</span>: <span class="hljs-string">&apos;bundle.js&apos;</span>\n    },\n    <span class="hljs-attr">module</span>: {\n        <span class="hljs-attr">rules</span>: [\n            {\n                <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.js$/</span>,\n                <span class="hljs-attr">include</span>: [ <span class="hljs-comment">// use `include` vs `exclude` to white-list vs black-list</span>\n                    path.resolve(__dirname, <span class="hljs-string">&quot;src&quot;</span>), <span class="hljs-comment">// white-list your app source files</span>\n                    <span class="hljs-built_in">require</span>.resolve(<span class="hljs-string">&quot;bootstrap-vue&quot;</span>), <span class="hljs-comment">// white-list bootstrap-vue</span>\n                ],\n                <span class="hljs-attr">loader</span>: <span class="hljs-string">&quot;babel-loader&quot;</span>\n            }\n        ]\n    }\n}\n</pre>\n<h2 id="browser">Browser</h2>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Add this to &lt;head&gt; --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text/css&quot;</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;//unpkg.com/bootstrap/dist/css/bootstrap.min.css&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text/css&quot;</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css&quot;</span>/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Add this after vue.js --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js&quot;</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js&quot;</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</pre>\n<h2 id="build-variants">Build variants</h2>\n<p>Choosing the best variant for your build environment / packager helps less bundle sizes.\nIf your bundler supports es modules, it will automatically prefer it over commonjs.</p>\n<table class="table b-table table-sm table-striped">\n<thead class="thead-default">\n<tr>\n<th>Variant</th>\n<th>Environments</th>\n<th>Package path</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>ES Module</strong></td>\n<td>Webpack 2 / Rollup</td>\n<td><code>dist/bootstrap-vue.esm.js</code></td>\n</tr>\n<tr>\n<td>commonjs2</td>\n<td>Webpack 1 / ...</td>\n<td><code>dist/bootstrap-vue.common.js</code></td>\n</tr>\n<tr>\n<td>UMD</td>\n<td>Browser</td>\n<td><code>dist/bootstrap-vue.js</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="migrating-a-project-already-using-bootstrap">Migrating a project already using Bootstrap</h2>\n<p>If you&apos;ve already been using Bootstrap 4, there are a couple adjustments you may need to make to your project:</p>\n<ul>\n<li>Remove the bootstrap.js file from your page scripts or build pipeline</li>\n<li>If Bootstrap is the only thing relying on jQuery, you can safely remove it &#x2014; BootstrapVue <strong>does not</strong> depend on jQuery</li>\n<li>Convert your native bootstrap HTML markup into the simplified Bootstrap-Vue custom component markup</li>\n</ul>\n<h2 id="browsers-support">Browsers Support</h2>\n<h3 id="css">CSS</h3>\n<p>BootstrapVue is to be used with Bootstrap 4 CSS.\nPlease see <a href="https://getbootstrap.com/docs/4.0/getting-started/browsers-devices">Browsers and devices</a>\nfor more information about browsers currently supported by Bootstrap 4.</p>\n<h3 id="js">JS</h3>\n<p>BootstrapVue is written in Vue! So this is up to your project and bundler which browsers are supported.\nIf you want to support older IE, Android and IOS devices, you may want to use\n<a href="https://babeljs.io/docs/usage/polyfill">Babel Polyfill</a></p>\n<h3 id="ie-11">IE 11</h3>\n<p>You&apos;ll need babel-polyfill for BootstrapVue to work properly. In order to support this browser:</p>\n<ul>\n<li><code>npm install babel-polyfill</code></li>\n<li>Import it in your app main entry point with <code>import &apos;babel-polyfill&apos;</code></li>\n</ul>\n<h2 id="tooling-support">Tooling Support</h2>\n<h3 id="vscode-vetur">vscode + vetur</h3>\n<p>If you are using <a href="https://code.visualstudio.com/">vscode</a> as your text editor, bootstrap-vue\nhas intellisense autocompletion for component attributes available when using the\n<a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur">vetur extension</a>.</p>\n<p><a href="https://twitter.com/AlexSashaRegan/status/912769997776158723">Twitter: vetur + bootstrap-vue</a></p>\n'},515:function(s,n,a){"use strict";a.r(n);var t=a(383),e=a.n(t),o={mixins:[a(285).a],layout:"docs",computed:{readme:function(){return e.a}}},p=a(7),l=Object(p.a)(o,function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"container bd-content",domProps:{innerHTML:this._s(this.readme)}})},[],!1,null,null,null);n.default=l.exports}}]);