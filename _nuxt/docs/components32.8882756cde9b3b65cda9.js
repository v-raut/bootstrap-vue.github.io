webpackJsonp([25],{yKQA:function(s,a){s.exports='<h1 id="progress">Progress</h1>\n<blockquote>\n<p>Use our custom progress component for displaying simple or complex progress\nbars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;counter&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">animated</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-1&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">show-value</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;counter*(6/10)&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;counter*(2.5/10)&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;counter*(1.5/10)&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-4&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clicked&quot;</span>&gt;</span>Click me<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">counter</span>: <span class="hljs-number">45</span>,\n      <span class="hljs-attr">max</span>: <span class="hljs-number">100</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    clicked () {\n      <span class="hljs-keyword">this</span>.counter = <span class="hljs-built_in">Math</span>.random() * <span class="hljs-keyword">this</span>.max\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Change progress to &apos;</span> +\n        <span class="hljs-built_in">Math</span>.round(<span class="hljs-keyword">this</span>.counter * <span class="hljs-number">100</span>) / <span class="hljs-number">100</span>)\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-1.vue --&gt;</span>\n</pre>\n<h2 id="value">Value</h2>\n<p>Set the maximum value with the <code>max</code> prop (default is <code>100</code>), and the current value via the\n<code>value</code> prop (default <code>0</code>).</p>\n<p>When creating multiple bars in a sinple process, place hte value prop on the individual\n<code>&lt;b-progress-bar&gt;</code> sub components (see the <strong>Multiple Bars</strong> section below for more details)</p>\n<h2 id="labels">Labels</h2>\n<p>Add labels to your progress bars by either enabling <code>show-progress</code> (percentage of max) or\n<code>show-value</code>for the current absolute value. You may also set the precision (number of\ndigits after the decimal) via the <code>precision</code> prop (default is <code>0</code>digits after the decimal).</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>No label<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Value label<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">show-value</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Progress label<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Value label with precision<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">:precision</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">show-value</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Progress label with precision<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">:precision</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">max</span>: <span class="hljs-number">50</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-number">33.333333333</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-labels.vue --&gt;</span>\n</pre>\n<h3 id="custom-progress-label">Custom progress label</h3>\n<p>Need more control over the label? Provide your own label by using the default slot within\na <code>&lt;b-progress-bar&gt;</code> sub-component, or by using the <code>label</code> prop on <code>&lt;b-progress-bar&gt;</code>\n(HTML supported):</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Custom Label via Default Slot<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n        Progress: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ value.toFixed(3) }} / {{ max }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3&quot;</span>&gt;</span>Custom Label via Prop<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;&apos;&amp;lt;&apos;+value.toFixed(0)+&apos;&amp;gt;&apos;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">max</span>: <span class="hljs-number">50</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-number">33.333333333</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-custom-labels.vue --&gt;</span>\n</pre>\n<p>Precedence order for label methods:</p>\n<ul>\n<li>default slot of <code>&lt;b-progress-bar&gt;</code></li>\n<li><code>label</code> prop of <code>&lt;b-progress-bar&gt;</code></li>\n<li><code>show-progress</code> prop of <code>&lt;b-progress-bar&gt;</code></li>\n<li><code>show-value</code> prop of <code>&lt;b-progress-bar&gt;</code></li>\n<li><code>show-progress</code> prop of <code>&lt;b-progress&gt;</code></li>\n<li><code>show-value</code> prop of <code>&lt;b-progress&gt;</code></li>\n<li>no label</li>\n</ul>\n<h2 id="width-and-height">Width and Height</h2>\n<p><code>&lt;b-progress&gt;</code> will always expand to the maximum with of it&apos;s parent container. To\nchange the width, place <code>&lt;b-progress&gt;</code> in a standard Bootstrap column or apply\none of the standard Bootstrap width classes.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Default width<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Custom widths<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-75 mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-50 mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-25&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-width.vue --&gt;</span>\n</pre>\n<p>The height of the progress bar can be controled with the <code>height</code> prop. The height\nvalue should be a standard CSS dimension (<code>px</code>, <code>rem</code>, <code>em</code>, etc). The default\nheight is <code>1rem</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Default height<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Custom heights<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;2rem&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;20px&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;2px&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-height.vue --&gt;</span>\n</pre>\n<h2 id="backgrounds">Backgrounds</h2>\n<p>Use background variants to change the appearance of individual progress bars.\nThe default variant is <code>primary</code>.</p>\n<h3 id="solid-background-variants">Solid background variants</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;bar in bars&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row mb-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-sm-2&quot;</span>&gt;</span>{{ bar.variant }}:<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-sm-10 pt-1&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;bar.value&quot;</span>\n                    <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;bar.variant&quot;</span>\n                    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;bar.variant&quot;</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">bars</span>: [\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;success&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;info&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;warning&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;danger&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;primary&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;secondary&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>},\n        {<span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;dark&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">75</span>}\n      ],\n      <span class="hljs-attr">timer</span>: <span class="hljs-literal">null</span>\n    }\n  },\n  mounted () {\n    <span class="hljs-keyword">this</span>.timer = setInterval(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">this</span>.bars.forEach(<span class="hljs-function"><span class="hljs-params">bar</span> =&gt;</span> bar.value = <span class="hljs-number">25</span> + (<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">75</span>))\n    }, <span class="hljs-number">2000</span>)\n  },\n  beforeDestroy () {\n    clearInterval(<span class="hljs-keyword">this</span>.timer)\n    <span class="hljs-keyword">this</span>.timer = <span class="hljs-literal">null</span>\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-backgrounds.vue --&gt;</span>\n</pre>\n<h3 id="striped-backgrounds">Striped backgrounds</h3>\n<p>Set <code>striped</code> to apply a stripe via CSS gradient over the progress bar&#x2019;s\nbackground variant.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">:striped</span>=<span class="hljs-string">&quot;striped&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">:striped</span>=<span class="hljs-string">&quot;striped&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">:striped</span>=<span class="hljs-string">&quot;striped&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:striped</span>=<span class="hljs-string">&quot;striped&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;striped = !striped&quot;</span>&gt;</span>\n      {{ striped ? &apos;Remove&apos; : &apos;Add&apos;}} Striped\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">striped</span>: <span class="hljs-literal">true</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-striped.vue --&gt;</span>\n</pre>\n<h3 id="animated-backgrounds">Animated backgrounds</h3>\n<p>The striped gradient can also be animated by setting the <code>animated</code>prop.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">:animated</span>=<span class="hljs-string">&quot;animate&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">:animated</span>=<span class="hljs-string">&quot;animate&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">:animated</span>=<span class="hljs-string">&quot;animate&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">:animated</span>=<span class="hljs-string">&quot;animate&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;animate = !animate&quot;</span>&gt;</span>\n      {{ animate ? &apos;Stop&apos; : &apos;Start&apos;}} Animation\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">animate</span>: <span class="hljs-literal">true</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-animated.vue --&gt;</span>\n</pre>\n<p>Notes:</p>\n<ul>\n<li>if <code>animated</code> is true, <code>striped</code> will automatically be enabled.</li>\n<li>Animated progress bars don&#x2019;t work in Opera 12 &#x2014; as they don&#x2019;t support CSS3 animations.</li>\n</ul>\n<h2 id="multiple-bars">Multiple bars</h2>\n<p>Include multiple <code>&lt;b-progress-bar&gt;</code> sub-components in a <code>&lt;b-progress&gt;</code> component to build\na horizontally stacked set of progress bars.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[0]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[1]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[2]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">show-progress</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[0]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[1]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[2]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">show-value</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[0]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[1]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[2]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;max&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[0]&quot;</span> <span class="hljs-attr">show-progress</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[1]&quot;</span> <span class="hljs-attr">animated</span> <span class="hljs-attr">show-progress</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress-bar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;values[2]&quot;</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">show-progress</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress-bar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">max</span>: <span class="hljs-number">100</span>,\n      <span class="hljs-attr">values</span>: [ <span class="hljs-number">15</span>, <span class="hljs-number">30</span>, <span class="hljs-number">20</span> ]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- progress-multiple.vue --&gt;</span>\n</pre>\n<p><code>&lt;b-prgress-bar&gt;</code> will inherit most of the props from the <code>&lt;b-progress&gt;</code> parent component,\nbut you can override any of the props by setting them on the <code>&lt;b-progress-bar&gt;</code></p>\n<p>Notes:</p>\n<ul>\n<li><code>height</code>, if specified, should always set on the <code>&lt;b-progress&gt;</code> component.</li>\n<li><code>&lt;b-progress-bar&gt;</code> will not inherit <code>value</code> from <code>&lt;b-progress&gt;</code>.</li>\n</ul>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components32.8882756cde9b3b65cda9.js.map