(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{355:function(n,t){n.exports='<h1 id="input-groups"><span class="bd-content-title">Input Groups</span></h1>\n<p class="bd-lead">Easily extend form controls by adding text, buttons, or button groups on either side of textual\ninputs.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Using props --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"$"</span> <span class="hljs-attr">append</span>=<span class="hljs-string">".00"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Using slots --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Using components --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"Username"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-append</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group.vue --&gt;</span></pre><h2 id="usage"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-label="Anchor"></a></span></h2>\n<p>You can attach addons using either props, named slots and/or sub-components.</p>\n<h3 id="using-prepend-and-append-props"><span class="bd-content-title">Using <code translate="no" class="notranslate text-nowrap">prepend</code> and <code translate="no" class="notranslate text-nowrap">append</code> props<a class="anchorjs-link" href="#using-prepend-and-append-props" aria-label="Anchor"></a></span></h3>\n<p>Values will be internally wrapped by a <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-text&gt;</code> to display correctly.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"$"</span> <span class="hljs-attr">append</span>=<span class="hljs-string">".00"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">append</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"range"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"100"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-using-props.vue --&gt;</span></pre><h3 id="using-named-slots"><span class="bd-content-title">Using named slots<a class="anchorjs-link" href="#using-named-slots" aria-label="Anchor"></a></span></h3>\n<p>if you want better control over addons, you can use <code translate="no" class="notranslate text-nowrap">prepend</code> and <code translate="no" class="notranslate text-nowrap">append</code> slots instead.</p>\n<p>The slot content will automatically be wrapped by\n<a href="#using-sub-components" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-input-group-prepend&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-append&gt;</code></a> to display correctly.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:prepend</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-text</span> &gt;</span>Username<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Dropdown"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action A<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action B<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-using-slots.vue --&gt;</span></pre><h3 id="using-sub-components"><span class="bd-content-title">Using sub-components<a class="anchorjs-link" href="#using-sub-components" aria-label="Anchor"></a></span></h3>\n<p>Use the <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-prepend&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-append&gt;</code> to add arbitrary addons wherever you\nlike, and use these components to group buttons in your input group. Single buttons must always be\nwrapped in these components for proper styling.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-info"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"0.00"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-append</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-addons-placement.vue --&gt;</span></pre><p>Set the <code translate="no" class="notranslate text-nowrap">is-text</code> prop on <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-prepend&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-append&gt;</code> if the content is\ntextual in nature to apply proper styling. Alternatively, place the <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-text&gt;</code>\nsubcomponent inside of the <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-prepend&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;b-input-group-append&gt;</code>.</p>\n<h2 id="supported-form-controls"><span class="bd-content-title">Supported form-controls<a class="anchorjs-link" href="#supported-form-controls" aria-label="Anchor"></a></span></h2>\n<p>The following are the form controls supported as the input-group&#39;s <em>main</em> input element:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-input&gt;</code></li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-textarea&gt;</code></li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-select&gt;</code></li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-file&gt;</code></li>\n</ul>\n<p><strong>Notes:</strong></p>\n<ul>\n<li>BootstrapVue uses custom SCSS/CSS to handling sizing the <code translate="no" class="notranslate text-nowrap">&lt;b-form-file&gt;</code> input when it is placed\nin a <code translate="no" class="notranslate text-nowrap">&lt;b-input-group&gt;</code> which has a <a href="#control-sizing" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">size</code></a> specified.</li>\n<li>BootstrapVue uses custom SCSS/CSS when <code translate="no" class="notranslate text-nowrap">&lt;b-form-input type=&quot;range&quot;&gt;</code> is placed in a\n<code translate="no" class="notranslate text-nowrap">&lt;b-input-group&gt;</code>.</li>\n</ul>\n<h2 id="checkbox-and-radio-addons"><span class="bd-content-title">Checkbox and radio addons<a class="anchorjs-link" href="#checkbox-and-radio-addons" aria-label="Anchor"></a></span></h2>\n<p>Place any checkbox or radio within an input group&#39;s addon instead of text.</p>\n<p><strong>Note:</strong> Bootstrap v4.x recommends using native radio and checkbox inputs over custom radios and\ncheckboxes, but it is possible to use as <code translate="no" class="notranslate text-nowrap">&lt;b-form-radio&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-form-checkbox&gt;</code> with a few utility\nclasses applied.</p>\n<h3 id="native-checkbox-and-radio-addons"><span class="bd-content-title">Native checkbox and radio addons<a class="anchorjs-link" href="#native-checkbox-and-radio-addons" aria-label="Anchor"></a></span></h3>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Checkbox for following text input"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with checkbox"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Radio for following text input"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with radio input"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-checks-radios.vue --&gt;</span></pre><h3 id="custom-radio-checkbox-and-switch-addons"><span class="bd-content-title">Custom radio, checkbox, and switch addons<a class="anchorjs-link" href="#custom-radio-checkbox-and-switch-addons" aria-label="Anchor"></a></span></h3>\n<p>Using <code translate="no" class="notranslate text-nowrap">&lt;b-form-checkbox&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-form-radio&gt;</code> components as addons, using Bootstrap\n<a href="/docs/reference/utility-classes" class="font-weight-bold">utility classes</a> for additional styling to get them to &quot;fit&quot; in\nthe addon:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-n2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Checkbox for following text input<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with checkbox"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-radio</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-n2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Radio for following text input<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-radio</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with radio input"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-n2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Switch for following text input<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with switch"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-custom-checks-radios.vue --&gt;</span></pre><p>In the above example, we have use the <code translate="no" class="notranslate text-nowrap">.sr-only</code> class on a <code translate="no" class="notranslate text-nowrap">&lt;span&gt;</code> to visually hide the custom\ncontrol&#39;s label content (while making them still accessible to screen reader users), and used the\nutility class <code translate="no" class="notranslate text-nowrap">.mr-n2</code> to add a negative right margin to compensate for the &quot;gutter&quot; space between\nthe control and the hidden label.</p>\n<h2 id="multiple-inputs"><span class="bd-content-title">Multiple inputs<a class="anchorjs-link" href="#multiple-inputs" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"First and last name"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"First name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Last name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-multiple-inputs.vue --&gt;</span></pre><h2 id="multiple-addons"><span class="bd-content-title">Multiple addons<a class="anchorjs-link" href="#multiple-addons" aria-label="Anchor"></a></span></h2>\n<p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"Item"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Checkbox for following text input"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-prepend</span> <span class="hljs-attr">is-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-prepend</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Text input with checkbox"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-multiple-addons.vue --&gt;</span></pre><h2 id="dropdown-addons"><span class="bd-content-title">Dropdown addons<a class="anchorjs-link" href="#dropdown-addons" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:prepend</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Dropdown"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action A<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action B<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Dropdown"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"i in 2"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"i"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action C<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action D<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-dropdown.vue --&gt;</span></pre><h2 id="control-sizing"><span class="bd-content-title">Control sizing<a class="anchorjs-link" href="#control-sizing" aria-label="Anchor"></a></span></h2>\n<p>Set height using the <code translate="no" class="notranslate text-nowrap">size</code> prop to <code translate="no" class="notranslate text-nowrap">sm</code> or <code translate="no" class="notranslate text-nowrap">lg</code> for small or large respectively. There is no need\nto set size on the individual inputs or buttons. Note however, you <em>will be required</em> to also set\nthe size on dropdowns.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>\n    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"size in [\'sm\',\'\',\'lg\']"</span>\n    <span class="hljs-attr">:key</span>=<span class="hljs-string">"size"</span>\n    <span class="hljs-attr">:size</span>=<span class="hljs-string">"size"</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>\n    <span class="hljs-attr">prepend</span>=<span class="hljs-string">"Label"</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-append</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Button"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-append</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-size.vue --&gt;</span></pre><p>To control width, place the input inside standard Bootstrap grid column.</p>\n<h3 id="sizing-custom-radio-checkbox-and-switch-addons"><span class="bd-content-title">Sizing custom radio, checkbox and switch addons<a class="anchorjs-link" href="#sizing-custom-radio-checkbox-and-switch-addons" aria-label="Anchor"></a></span></h3>\n<p>If using <code translate="no" class="notranslate text-nowrap">&lt;b-form-radio&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;b-form-checkbox&gt;</code> as addons, additional utility classes may be\nrequired to make everything fit correctly, depending on the size chosen:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"Small"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Small text input with custom switch"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-append</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-n2 mb-n1"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Checkbox for previous text input<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-append</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"Large"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Large text input with switch"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-append</span> <span class="hljs-attr">is-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-n2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Switch for previous text input<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-append</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-input-group-custom-checks-radios-sizing.vue --&gt;</span></pre><p>Specifically, when using the <code translate="no" class="notranslate text-nowrap">sm</code> size on <code translate="no" class="notranslate text-nowrap">&lt;b-input-group&gt;</code> you will need to add a negative bottom\nmargin, via the use of the <code translate="no" class="notranslate text-nowrap">.mb-n1</code> <a href="/docs/reference/utility-classes" class="font-weight-bold">utility class</a>.</p>\n<h2 id="contextual-states"><span class="bd-content-title">Contextual states<a class="anchorjs-link" href="#contextual-states" aria-label="Anchor"></a></span></h2>\n<p>Bootstrap v4 currently <strong>does not</strong> support contextual state styling (i.e. valid or invalid) of\ninput groups. However, the inputs inside the input group do support contextual state.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);