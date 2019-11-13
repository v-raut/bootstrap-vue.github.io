(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{301:function(n,l){n.exports='<h1 id="collapse"><span class="bd-content-title">Collapse</span></h1>\n<p class="bd-lead">Easily toggle visibility of almost any content on your pages. Includes support for making\naccordions.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.collapse-1</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-text"</span>&gt;</span>Collapse contents Here<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.collapse-1-inner</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>Toggle Inner Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-1-inner"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-collapse.vue --&gt;</span></pre><h2 id="usage"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-label="Anchor"></a></span></h2>\n<p>Other elements can easily toggle <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> components using the <code translate="no" class="notranslate text-nowrap">v-b-toggle</code> directive.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Using modifiers --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.collapse-2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Using value --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle</span>=<span class="hljs-string">"\'collapse-2\'"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Element to collapse --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I am collapsible content!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-collapse-usage.vue --&gt;</span></pre><h2 id="initial-visibility-start-expanded"><span class="bd-content-title">Initial visibility (start expanded)<a class="anchorjs-link" href="#initial-visibility-start-expanded" aria-label="Anchor"></a></span></h2>\n<p>To make the <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> show initially, set the <code translate="no" class="notranslate text-nowrap">visible</code> prop:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.collapse-3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">visible</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I should start open!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-collapse-visible.vue --&gt;</span></pre><h2 id="v-model-support"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">v-model</code> support<a class="anchorjs-link" href="#v-model-support" aria-label="Anchor"></a></span></h2>\n<p>The component&#39;s collapsed (visible) state can also be set with <code translate="no" class="notranslate text-nowrap">v-model</code> which binds internally to\nthe <code translate="no" class="notranslate text-nowrap">visible</code> prop.</p>\n<p>Note, when using <code translate="no" class="notranslate text-nowrap">v-model</code> to control <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code>, the <code translate="no" class="notranslate text-nowrap">aria-*</code> attributes and class <code translate="no" class="notranslate text-nowrap">collapsed</code>\nare not automatically placed on the trigger button (as is the case when using the <code translate="no" class="notranslate text-nowrap">v-b-toggle</code>\ndirective). In this example we <strong>must control the attributes ourselves</strong> for proper accessibility\nsupport.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>\n      <span class="hljs-attr">:class</span>=<span class="hljs-string">"visible ? null : \'collapsed\'"</span>\n      <span class="hljs-attr">:aria-expanded</span>=<span class="hljs-string">"visible ? \'true\' : \'false\'"</span>\n      <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">"collapse-4"</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">"visible = !visible"</span>\n    &gt;</span>\n      Toggle Collapse\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-4"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"visible"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I should start open!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">visible</span>: <span class="hljs-literal">true</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-collapse-v-model.vue --&gt;</span></pre><h2 id="trigger-multiple-collapse-elements"><span class="bd-content-title">Trigger multiple collapse elements<a class="anchorjs-link" href="#trigger-multiple-collapse-elements" aria-label="Anchor"></a></span></h2>\n<p>You can even collapse multiple <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> components via a single <code translate="no" class="notranslate text-nowrap">v-b-toggle</code> by providing\nmultiple target IDs using modifiers:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Single button triggers two "&lt;b-collapse&gt;" components --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.collapse-a.collapse-b</span>&gt;</span>Toggle Both Collapse A and B<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Elements to collapse --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-a"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I am collapsible content A!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"collapse-b"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>I am collapsible content B!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-collapse-trigger-multiple.vue --&gt;</span></pre><h2 id="accordion-support"><span class="bd-content-title">Accordion support<a class="anchorjs-link" href="#accordion-support" aria-label="Anchor"></a></span></h2>\n<p>Turn a group of <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> components into an accordion by supplying an accordion group\nidentifier via the <code translate="no" class="notranslate text-nowrap">accordion</code> prop. Note that only one collapse in an accordion group can be open\nat a time.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tablist"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">"header"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">v-b-toggle.accordion-1</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Accordion 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"accordion-1"</span> <span class="hljs-attr">visible</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">"my-accordion"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tabpanel"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-card-text</span>&gt;</span>I start opened because <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>visible<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> is <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>true<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-card-text</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-card-text</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-text</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">"header"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">v-b-toggle.accordion-2</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Accordion 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"accordion-2"</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">"my-accordion"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tabpanel"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-card-text</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-text</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">"header"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">v-b-toggle.accordion-3</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Accordion 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"accordion-3"</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">"my-accordion"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tabpanel"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-card-text</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-text</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">text</span>: <span class="hljs-string">`\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven\'t heard of them accusamus labore VHS.\n        `</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-accordion.vue --&gt;</span></pre><p><strong>Notes:</strong></p>\n<ul>\n<li>When using accordion mode, make sure you place the trigger elements and <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> components\ninside an element with <code translate="no" class="notranslate text-nowrap">role=&quot;tablist&quot;</code> and set <code translate="no" class="notranslate text-nowrap">role=&quot;tab&quot;</code> on each trigger element&#39;s container\n(each trigger element should be wrapped) in order to help screen reader users navigate the\naccordion group.</li>\n<li>If using the <code translate="no" class="notranslate text-nowrap">v-model</code> feature of <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> in accordion mode, do not bind the <code translate="no" class="notranslate text-nowrap">v-model</code> or\n<code translate="no" class="notranslate text-nowrap">visible</code> prop of all the collapses in the accordion group to the same variable!</li>\n<li>Ensure, at most, only one <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> in the accordion group has the <code translate="no" class="notranslate text-nowrap">visible</code> prop and/or\n<code translate="no" class="notranslate text-nowrap">v-model</code> set to <code translate="no" class="notranslate text-nowrap">true</code>. Only one collapse in an accordion group can be open at a time.</li>\n</ul>\n<h2 id="hiding-and-showing-content-in-the-toggle-button-based-on-collapse-state"><span class="bd-content-title">Hiding and showing content in the toggle button based on collapse state<a class="anchorjs-link" href="#hiding-and-showing-content-in-the-toggle-button-based-on-collapse-state" aria-label="Anchor"></a></span></h2>\n<p>When using the <code translate="no" class="notranslate text-nowrap">v-b-toggle</code> directive, the class <code translate="no" class="notranslate text-nowrap">collapsed</code> will automatically be placed on the\ntrigger element when the collapse is closed, and removed when open. You can use this class to\ndisplay or hide content within the toggle via custom CSS:</p>\n<p><strong>Example HTML markup:</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.my-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"when-opened"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"when-closed"</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> My Collapse\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"my-collapse"</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Content here --&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre><p><strong>Example Custom CSS:</strong></p>\n<pre class="hljs css text-monospace p-2 notranslate" translate="no"><span class="hljs-selector-class">.collapsed</span> &gt; <span class="hljs-selector-class">.when-opened</span>,\n<span class="hljs-selector-pseudo">:not(.collapsed)</span> &gt; <span class="hljs-selector-class">.when-closed</span> {\n  <span class="hljs-attribute">display</span>: none;\n}</pre><h2 id="global-root-instance-events"><span class="bd-content-title">&#39;Global&#39; $root instance events<a class="anchorjs-link" href="#global-root-instance-events" aria-label="Anchor"></a></span></h2>\n<p>Using <code translate="no" class="notranslate text-nowrap">$root</code> instance it is possible to emit and listen events somewhere out of a component, where\n<code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> is used. In short, <code translate="no" class="notranslate text-nowrap">$root</code> behaves like a global event emitters and listener. Details\nabout <code translate="no" class="notranslate text-nowrap">$root</code> instance can be found in\n<a href="https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance" target="_blank" rel="noopener">the official Vue docs</a>.</p>\n<h3 id="listening-to-collapses-state-changes-via-root-events"><span class="bd-content-title">Listening to collapses state changes via $root events<a class="anchorjs-link" href="#listening-to-collapses-state-changes-via-root-events" aria-label="Anchor"></a></span></h3>\n<p>To listen to any collapse state changes, use:</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  mounted() {\n    <span class="hljs-keyword">this</span>.$root.$on(<span class="hljs-string">\'bv::collapse::state\'</span>, (collapseId, isJustShown) =&gt; {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'collapseId:\'</span>, collapseId)\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'isJustShown:\'</span>, isJustShown)\n    })\n  }\n}</pre><p>where <code translate="no" class="notranslate text-nowrap">collapseId</code> is collapse id which changed its state; <code translate="no" class="notranslate text-nowrap">isJustShown</code> is true/false, i.e.\nshown/hidden collapse.</p>\n<h3 id="toggling-collapses-via-root-events"><span class="bd-content-title">Toggling collapses via $root events<a class="anchorjs-link" href="#toggling-collapses-via-root-events" aria-label="Anchor"></a></span></h3>\n<p>To toggle (open/close) a <strong>specific collapse</strong>, pass the collapse <code translate="no" class="notranslate text-nowrap">id</code>:</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::toggle::collapse\'</span>, <span class="hljs-string">\'my-collapse-id\'</span>)</pre><h2 id="accessibility"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-label="Anchor"></a></span></h2>\n<p>The <code translate="no" class="notranslate text-nowrap">v-b-toggle</code> directive will automatically add the ARIA attributes <code translate="no" class="notranslate text-nowrap">aria-controls</code> and\n<code translate="no" class="notranslate text-nowrap">aria-expanded</code> to the component that the directive appears on (as well as add the class <code translate="no" class="notranslate text-nowrap">collapsed</code>\nwhen not expanded). <code translate="no" class="notranslate text-nowrap">aria-expanded</code> will reflect the state of the target <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> component,\nwhile <code translate="no" class="notranslate text-nowrap">aria-controls</code> will be set to the ID(s) of the target <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> component(s).</p>\n<p>If using <code translate="no" class="notranslate text-nowrap">v-model</code> to set the visible state instead of the directive <code translate="no" class="notranslate text-nowrap">v-b-toggle</code>, you will be\nrequired to, on the toggle element, add the <code translate="no" class="notranslate text-nowrap">aria-controls</code> and other appropriate attributes and\nclasses yourself.</p>\n<p>While the <code translate="no" class="notranslate text-nowrap">v-b-toggle</code> directive can be placed on almost any HTML element or Vue component, it is\nrecommended to use a button or link (or similar component) to act as your toggler. Otherwise your\ntrigger elements may be inaccessible to keyboard or screen reader users. If you do place them on\nsomething other than a button or link (or similar component), you should add the attributes\n<code translate="no" class="notranslate text-nowrap">tabindex=&quot;0&quot;</code> and <code translate="no" class="notranslate text-nowrap">role=&quot;button&quot;</code> to allow users of assistive technology to reach your trigger\nelement.</p>\n<p>When using accordion mode, make sure you place the trigger elements and <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> components\ninside an element with <code translate="no" class="notranslate text-nowrap">role=&quot;tablist&quot;</code> and set <code translate="no" class="notranslate text-nowrap">role=&quot;tab&quot;</code> on each trigger element&#39;s container in\norder to help screen reader users navigate the accordion group. Unfortunately, BootstrapVue cannot\napply those roles for you automatically, as it depends on your final document markup.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);