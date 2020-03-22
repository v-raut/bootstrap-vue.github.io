(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{411:function(t,n){t.exports='<h1 id=form-textarea class=bv-no-focus-ring><span class=bd-content-title>Form textarea</span></h1> <p class=bd-lead>Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n      <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea"</span>\n      <span class=hljs-attr>v-model</span>=<span class=hljs-string>"text"</span>\n      <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Enter something..."</span>\n      <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span>\n      <span class=hljs-attr>max-rows</span>=<span class=hljs-string>"6"</span>\n    &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>pre</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3 mb-0"</span>&gt;</span>{{ text }}<span class=hljs-tag>&lt;/<span class=hljs-name>pre</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>text</span>: <span class=hljs-string>\'\'</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea.vue --&gt;</span></pre></div><h2 id=control-sizing class=bv-no-focus-ring><span class=bd-content-title>Control sizing<a class=anchorjs-link href=#control-sizing aria-labelledby=control-sizing></a></span></h2> <p>Set text height using the <code class=text-nowrap translate=no>size</code> prop to <code class=text-nowrap translate=no>sm</code> or <code class=text-nowrap translate=no>lg</code> for small or large respectively.</p> <p>To control width, place the input inside standard Bootstrap grid column.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>b-container</span> <span class=hljs-attr>fluid</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>"textarea-small"</span>&gt;</span>Small:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"10"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-small"</span>\n        <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Small textarea"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>"textarea-default"</span>&gt;</span>Default:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"10"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-default"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Default textarea"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>"textarea-large"</span>&gt;</span>Large:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"10"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-large"</span>\n        <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Large textarea"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-container</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-sizes.vue --&gt;</span></pre></div><h2 id=displayed-rows class=bv-no-focus-ring><span class=bd-content-title>Displayed rows<a class=anchorjs-link href=#displayed-rows aria-labelledby=displayed-rows></a></span></h2> <p>To set the height of <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code>, set the <code class=text-nowrap translate=no>rows</code> prop to the desired number of rows. If no value is provided to <code class=text-nowrap translate=no>rows</code>, then it will default to <code class=text-nowrap translate=no>2</code> (the browser default and minimum acceptable value). Setting it to null or a value below 2 will result in the default of <code class=text-nowrap translate=no>2</code> being used.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n    <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-rows"</span>\n    <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Tall textarea"</span>\n    <span class=hljs-attr>rows</span>=<span class=hljs-string>"8"</span>\n  &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-rows.vue --&gt;</span></pre></div><h3 id=disable-resize-handle class=bv-no-focus-ring><span class=bd-content-title>Disable resize handle<a class=anchorjs-link href=#disable-resize-handle aria-labelledby=disable-resize-handle></a></span></h3> <p>Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the <code class=text-nowrap translate=no>no-resize</code> prop to <code class=text-nowrap translate=no>true</code>.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n    <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-no-resize"</span>\n    <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Fixed height textarea"</span>\n    <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span>\n    <span class=hljs-attr>no-resize</span>\n  &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-no-resize.vue --&gt;</span></pre></div><h3 id=auto-height class=bv-no-focus-ring><span class=bd-content-title>Auto height<a class=anchorjs-link href=#auto-height aria-labelledby=auto-height></a></span></h3> <p><code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> can also automatically adjust its height (text rows) to fit the content, even as the user enters or deletes text. The height of the textarea will either grow or shrink to fit the content (grow to a maximum of <code class=text-nowrap translate=no>max-rows</code> or shrink to a minimum of <code class=text-nowrap translate=no>rows</code>).</p> <p>To set the initial minimum height (in rows), set the <code class=text-nowrap translate=no>rows</code> prop to the desired number of lines (or leave it at the default of <code class=text-nowrap translate=no>2</code>), And then set maximum rows that the text area will grow to (before showing a scrollbar) by setting the <code class=text-nowrap translate=no>max-rows</code> prop to the maximum number of lines of text.</p> <p>To make the height <code class=text-nowrap translate=no>sticky</code> (i.e. never shrink), set the <code class=text-nowrap translate=no>no-auto-shrink</code> prop to <code class=text-nowrap translate=no>true</code>. The <code class=text-nowrap translate=no>no-auto-shrink</code> props has no effect if <code class=text-nowrap translate=no>max-rows</code> is not set or is equal to or less than <code class=text-nowrap translate=no>rows</code>.</p> <p>Note that the resize handle of the textarea (if supported by the browser) will automatically be disabled in auto-height mode.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>b-container</span> <span class=hljs-attr>fluid</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>"textarea-auto-height"</span>&gt;</span>Auto height:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"10"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-auto-height"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Auto height textarea"</span>\n        <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span>\n        <span class=hljs-attr>max-rows</span>=<span class=hljs-string>"8"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>"textarea-no-auto-shrink"</span>&gt;</span>No auto-shrink:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>"10"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-no-auto-shrink"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Auto height (no-shrink) textarea"</span>\n        <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span>\n        <span class=hljs-attr>max-rows</span>=<span class=hljs-string>"8"</span>\n        <span class=hljs-attr>no-auto-shrink</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-container</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-auto-height.vue --&gt;</span></pre></div><h4 id=auto-height-implementation-note class=bv-no-focus-ring><span class=bd-content-title>Auto height implementation note<a class=anchorjs-link href=#auto-height-implementation-note aria-labelledby=auto-height-implementation-note></a></span></h4> <p>Auto-height works by computing the resulting height via CSS queries, hence the input has to be in document (DOM) and visible (not hidden via <code class=text-nowrap translate=no>display: none</code>). Initial height is computed on mount. If the browser client supports <a href="https://caniuse.com/#feat=intersectionobserver" target=_blank rel=noopener><code class=text-nowrap translate=no>IntersectionObserver</code></a> (either natively or via <a href=/docs#js class=font-weight-bold>a polyfill</a>), <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> will take advantage of this to determine when the textarea becomes visible and will then compute the height. Refer to the <a href=/docs#browser class=font-weight-bold>Browser support</a> section on the getting started page.</p> <h2 id=contextual-states class=bv-no-focus-ring><span class=bd-content-title>Contextual states<a class=anchorjs-link href=#contextual-states aria-labelledby=contextual-states></a></span></h2> <p>Bootstrap includes validation styles for <code class=text-nowrap translate=no>valid</code> and <code class=text-nowrap translate=no>invalid</code> states on most form controls.</p> <p>Generally speaking, you&#39;ll want to use a particular state for specific types of feedback:</p> <ul> <li><code class=text-nowrap translate=no>false</code> (denotes invalid state) is great for when there&#39;s a blocking or required field. A user must fill in this field properly to submit the form.</li> <li><code class=text-nowrap translate=no>true</code> (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.</li> <li><code class=text-nowrap translate=no>null</code> Displays no validation state (neither valid nor invalid)</li> </ul> <p>To apply one of the contextual state icons on <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code>, set the <code class=text-nowrap translate=no>state</code> prop to <code class=text-nowrap translate=no>false</code> (for invalid), <code class=text-nowrap translate=no>true</code> (for valid), or <code class=text-nowrap translate=no>null</code> (no validation state).</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n      <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-state"</span>\n      <span class=hljs-attr>v-model</span>=<span class=hljs-string>"text"</span>\n      <span class=hljs-attr>:state</span>=<span class=hljs-string>"text.length &gt;= 10"</span>\n      <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Enter at least 10 characters"</span>\n      <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span>\n    &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>text</span>: <span class=hljs-string>\'\'</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-state.vue --&gt;</span></pre></div><h3 id=conveying-contextual-state-to-assistive-technologies-and-colorblind-users class=bv-no-focus-ring><span class=bd-content-title>Conveying contextual state to assistive technologies and colorblind users<a class=anchorjs-link href=#conveying-contextual-state-to-assistive-technologies-and-colorblind-users aria-labelledby=conveying-contextual-state-to-assistive-technologies-and-colorblind-users></a></span></h3> <p>Using these contextual states to denote the state of a form control only provides a visual, color-based indication, which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.</p> <p>Ensure that an alternative indication of state is also provided. For instance, you could include a hint about state in the form control&#39;s <code class=text-nowrap translate=no>&lt;label&gt;</code> text itself, or by providing an additional help text block.</p> <h3 id=aria-invalid-attribute class=bv-no-focus-ring><span class=bd-content-title><code class=text-nowrap translate=no>aria-invalid</code> attribute<a class=anchorjs-link href=#aria-invalid-attribute aria-labelledby=aria-invalid-attribute></a></span></h3> <p>When <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> has an invalid contextual state (i.e. state is <code class=text-nowrap translate=no>false</code>) you may also want to set the prop <code class=text-nowrap translate=no>aria-invalid</code> to <code class=text-nowrap translate=no>true</code>, or one of the supported values:</p> <ul> <li><code class=text-nowrap translate=no>false</code>: No errors (default)</li> <li><code class=text-nowrap translate=no>true</code> or <code class=text-nowrap translate=no>&#39;true&#39;</code>: The value has failed validation.</li> <li><code class=text-nowrap translate=no>&#39;grammar&#39;</code>: A grammatical error has been detected.</li> <li><code class=text-nowrap translate=no>&#39;spelling&#39;</code> A spelling error has been detected.</li> </ul> <p>If the <code class=text-nowrap translate=no>state</code> prop is set to <code class=text-nowrap translate=no>false</code>, and the <code class=text-nowrap translate=no>aria-invalid</code> prop is not explicitly set, <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> will automatically set the <code class=text-nowrap translate=no>aria-invalid</code> attribute to <code class=text-nowrap translate=no>&#39;true&#39;</code>.</p> <h2 id=formatter-support class=bv-no-focus-ring><span class=bd-content-title>Formatter support<a class=anchorjs-link href=#formatter-support aria-labelledby=formatter-support></a></span></h2> <p><code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> optionally supports formatting by passing a function reference to the <code class=text-nowrap translate=no>formatter</code> prop.</p> <p>Formatting (when a formatter function is supplied) occurs when the control&#39;s native <code class=text-nowrap translate=no>input</code> and <code class=text-nowrap translate=no>change</code> events fire. You can use the boolean prop <code class=text-nowrap translate=no>lazy-formatter</code> to restrict the formatter function to being called on the control&#39;s native <code class=text-nowrap translate=no>blur</code> event.</p> <p>The <code class=text-nowrap translate=no>formatter</code> function receives two arguments: the raw <code class=text-nowrap translate=no>value</code> of the input element, and the native <code class=text-nowrap translate=no>event</code> object that triggered the format (if available).</p> <p>The <code class=text-nowrap translate=no>formatter</code> function should return the formatted value as a <em>string</em>.</p> <p>Formatting does not occur if a <code class=text-nowrap translate=no>formatter</code> is not provided.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span>\n      <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-0"</span>\n      <span class=hljs-attr>label</span>=<span class=hljs-string>"Textarea with formatter (on input)"</span>\n      <span class=hljs-attr>label-for</span>=<span class=hljs-string>"textarea-formatter"</span>\n      <span class=hljs-attr>description</span>=<span class=hljs-string>"We will convert your text to lowercase instantly"</span>\n    &gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-formatter"</span>\n        <span class=hljs-attr>v-model</span>=<span class=hljs-string>"text1"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Enter your text"</span>\n        <span class=hljs-attr>:formatter</span>=<span class=hljs-string>"formatter"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"white-space: pre-line"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b</span>&gt;</span>Value:<span class=hljs-tag>&lt;/<span class=hljs-name>b</span>&gt;</span> {{ text1 }}<span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span>\n      <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-0"</span>\n      <span class=hljs-attr>label</span>=<span class=hljs-string>"Textarea with lazy formatter (on blur)"</span>\n      <span class=hljs-attr>label-for</span>=<span class=hljs-string>"textarea-lazy"</span>\n      <span class=hljs-attr>description</span>=<span class=hljs-string>"This one is a little lazy!"</span>\n    &gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span>\n        <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-lazy"</span>\n        <span class=hljs-attr>v-model</span>=<span class=hljs-string>"text2"</span>\n        <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Enter your text"</span>\n        <span class=hljs-attr>lazy-formatter</span>\n        <span class=hljs-attr>:formatter</span>=<span class=hljs-string>"formatter"</span>\n      &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-0"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"white-space: pre-line"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b</span>&gt;</span>Value:<span class=hljs-tag>&lt;/<span class=hljs-name>b</span>&gt;</span> {{ text2 }}<span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>text1</span>: <span class=hljs-string>\'\'</span>,\n        <span class=hljs-attr>text2</span>: <span class=hljs-string>\'\'</span>\n      }\n    },\n    <span class=hljs-attr>methods</span>: {\n      formatter(value) {\n        <span class=hljs-keyword>return</span> value.toLowerCase()\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-formatter.vue --&gt;</span></pre></div><p><strong>Note:</strong> With non-lazy formatting, if the cursor is not at the end of the input value, the cursor may jump to the end <em>after</em> a character is typed. You can use the provided event object and the <code class=text-nowrap translate=no>event.target</code> to access the native input&#39;s selection methods and properties to control where the insertion point is. This is left as an exercise for the reader.</p> <h2 id=readonly-plain-text class=bv-no-focus-ring><span class=bd-content-title>Readonly plain text<a class=anchorjs-link href=#readonly-plain-text aria-labelledby=readonly-plain-text></a></span></h2> <p>If you want to have <code class=text-nowrap translate=no>&lt;b-form-textarea readonly&gt;</code> elements in your form styled as plain text, set the <code class=text-nowrap translate=no>plaintext</code> prop (no need to set <code class=text-nowrap translate=no>readonly</code> as it will be set automatically) to remove the default form field styling and preserve the correct text size, margin, padding and height.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"textarea-plaintext"</span> <span class=hljs-attr>plaintext</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"text"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>text</span>: <span class=hljs-string>"This is some text.\\nIt is read only and doesn\'t look like an input."</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-plaintext.vue --&gt;</span></pre></div><h2 id=v-model-modifiers class=bv-no-focus-ring><span class=bd-content-title><code class=text-nowrap translate=no>v-model</code> modifiers<a class=anchorjs-link href=#v-model-modifiers aria-labelledby=v-model-modifiers></a></span></h2> <p>Vue does not officially support <code class=text-nowrap translate=no>.lazy</code>, <code class=text-nowrap translate=no>.trim</code>, and <code class=text-nowrap translate=no>.number</code> modifiers on the <code class=text-nowrap translate=no>v-model</code> of custom component based inputs, and may generate a bad user experience. Avoid using Vue&#39;s native modifiers.</p> <p>To get around this, <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> has three boolean props <code class=text-nowrap translate=no>trim</code>, <code class=text-nowrap translate=no>number</code>, and <code class=text-nowrap translate=no>lazy</code> which emulate the native Vue <code class=text-nowrap translate=no>v-model</code> modifiers <code class=text-nowrap translate=no>.trim</code> and <code class=text-nowrap translate=no>.number</code> and <code class=text-nowrap translate=no>.lazy</code> respectively. The <code class=text-nowrap translate=no>lazy</code> prop will update the v-model on <code class=text-nowrap translate=no>change</code>/<code class=text-nowrap translate=no>blur</code>events.</p> <p><strong>Notes:</strong></p> <ul> <li>The <code class=text-nowrap translate=no>number</code> prop takes precedence over the <code class=text-nowrap translate=no>trim</code> prop (i.e. <code class=text-nowrap translate=no>trim</code> will have no effect when <code class=text-nowrap translate=no>number</code> is set).</li> <li>When using the <code class=text-nowrap translate=no>number</code> prop, and if the value can be parsed as a number (via <code class=text-nowrap translate=no>parseFloat</code>) it will return a value of type <code class=text-nowrap translate=no>Number</code> to the <code class=text-nowrap translate=no>v-model</code>, otherwise the original input value is returned as type <code class=text-nowrap translate=no>String</code>. This is the same behaviour as the native <code class=text-nowrap translate=no>.number</code> modifier.</li> <li>The <code class=text-nowrap translate=no>trim</code> and <code class=text-nowrap translate=no>number</code> modifier props do not affect the value returned by the <code class=text-nowrap translate=no>input</code> or <code class=text-nowrap translate=no>change</code> events. These events will always return the string value of the content of <code class=text-nowrap translate=no>&lt;textarea&gt;</code> after optional formatting (which may not match the value returned via the <code class=text-nowrap translate=no>v-model</code> <code class=text-nowrap translate=no>update</code> event, which handles the modifiers).</li> </ul> <h2 id=debounce-support class=bv-no-focus-ring><span class=bd-content-title>Debounce support<a class=anchorjs-link href=#debounce-support aria-labelledby=debounce-support></a></span></h2> <p>As an alternative to the <code class=text-nowrap translate=no>lazy</code> modifier prop, <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> optionally supports debouncing user input, updating the <code class=text-nowrap translate=no>v-model</code> after a period of idle time from when the last character was entered by the user (or a <code class=text-nowrap translate=no>change</code> event occurs). If the user enters a new character (or deletes characters) before the idle timeout expires, the timeout is re-started.</p> <p>To enable debouncing, set the prop <code class=text-nowrap translate=no>debounce</code> to any integer greater than zero. The value is specified in milliseconds. Setting <code class=text-nowrap translate=no>debounce</code> to <code class=text-nowrap translate=no>0</code> will disable debouncing.</p> <p>Note: debouncing will <em>not</em> occur if the <code class=text-nowrap translate=no>lazy</code> prop is set.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>debounce</span>=<span class=hljs-string>"500"</span> <span class=hljs-attr>rows</span>=<span class=hljs-string>"3"</span> <span class=hljs-attr>max-rows</span>=<span class=hljs-string>"5"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>pre</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2 mb-0"</span>&gt;</span>{{ value }}<span class=hljs-tag>&lt;/<span class=hljs-name>pre</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-string>\'\'</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-textarea-debounce.vue --&gt;</span></pre></div><h2 id=autofocus class=bv-no-focus-ring><span class=bd-content-title>Autofocus<a class=anchorjs-link href=#autofocus aria-labelledby=autofocus></a></span></h2> <p>When the <code class=text-nowrap translate=no>autofocus</code> prop is set on <code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code>, the textarea will be auto-focused when it is inserted (i.e. <strong>mounted</strong>) into the document or re-activated when inside a Vue <code class=text-nowrap translate=no>&lt;keep-alive&gt;</code> component. Note that this prop <strong>does not</strong> set the <code class=text-nowrap translate=no>autofocus</code> attribute on the textarea, nor can it tell when the textarea becomes visible.</p> <h2 id=native-and-custom-events class=bv-no-focus-ring><span class=bd-content-title>Native and custom events<a class=anchorjs-link href=#native-and-custom-events aria-labelledby=native-and-custom-events></a></span></h2> <p>All native events (other than the custom <code class=text-nowrap translate=no>input</code> and <code class=text-nowrap translate=no>change</code> events) are supported, without the need for the <code class=text-nowrap translate=no>.native</code> modifier.</p> <p>The custom <code class=text-nowrap translate=no>input</code> and <code class=text-nowrap translate=no>change</code> events receive a single argument of the current <code class=text-nowrap translate=no>value</code> (after any formatting has been applied), and are triggered by user interaction.</p> <p>The custom <code class=text-nowrap translate=no>update</code> event is passed the input value, and is emitted whenever the <code class=text-nowrap translate=no>v-model</code> needs updating (it is emitted before <code class=text-nowrap translate=no>input</code>, <code class=text-nowrap translate=no>change</code>. and <code class=text-nowrap translate=no>blur</code> as needed).</p> <p>You can always access the native <code class=text-nowrap translate=no>input</code> and <code class=text-nowrap translate=no>change</code> events by using the <code class=text-nowrap translate=no>.native</code> modifier.</p> <h2 id=exposed-input-properties-and-methods class=bv-no-focus-ring><span class=bd-content-title>Exposed input properties and methods<a class=anchorjs-link href=#exposed-input-properties-and-methods aria-labelledby=exposed-input-properties-and-methods></a></span></h2> <p><code class=text-nowrap translate=no>&lt;b-form-textarea&gt;</code> exposes several of the native input element&#39;s properties and methods on the component reference (i.e. assign a <code class=text-nowrap translate=no>ref</code> to your <code class=text-nowrap translate=no>&lt;b-form-textarea ref=&quot;foo&quot; ...&gt;</code> and use <code class=text-nowrap translate=no>this.$refs[&#39;foo&#39;].propertyName</code> or <code class=text-nowrap translate=no>this.$refs[&#39;foo&#39;].methodName(...)</code>).</p> <h3 id=input-properties class=bv-no-focus-ring><span class=bd-content-title>Input properties<a class=anchorjs-link href=#input-properties aria-labelledby=input-properties></a></span></h3> <div class=table-responsive-sm><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class=thead-default> <tr> <th>Property</th> <th>Notes</th> </tr> </thead> <tbody><tr> <td><code class=text-nowrap translate=no>.selectionStart</code></td> <td>Read/Write</td> </tr> <tr> <td><code class=text-nowrap translate=no>.selectionEnd</code></td> <td>Read/Write</td> </tr> <tr> <td><code class=text-nowrap translate=no>.selectionDirection</code></td> <td>Read/Write</td> </tr> <tr> <td><code class=text-nowrap translate=no>.validity</code></td> <td>Read only</td> </tr> <tr> <td><code class=text-nowrap translate=no>.validationMessage</code></td> <td>Read only</td> </tr> <tr> <td><code class=text-nowrap translate=no>.willValidate</code></td> <td>Read only</td> </tr> </tbody></table> </div><h3 id=input-methods class=bv-no-focus-ring><span class=bd-content-title>Input methods<a class=anchorjs-link href=#input-methods aria-labelledby=input-methods></a></span></h3> <div class=table-responsive-sm><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class=thead-default> <tr> <th>Method</th> <th>Notes</th> </tr> </thead> <tbody><tr> <td><code class=text-nowrap translate=no>.focus()</code></td> <td>Focus the input</td> </tr> <tr> <td><code class=text-nowrap translate=no>.blur()</code></td> <td>Remove focus from the input</td> </tr> <tr> <td><code class=text-nowrap translate=no>.select()</code></td> <td>Selects all text within the input</td> </tr> <tr> <td><code class=text-nowrap translate=no>.setSelectionRange()</code></td> <td></td> </tr> <tr> <td><code class=text-nowrap translate=no>.setRangeText()</code></td> <td></td> </tr> <tr> <td><code class=text-nowrap translate=no>.setCustomValidity()</code></td> <td></td> </tr> <tr> <td><code class=text-nowrap translate=no>.checkValidity()</code></td> <td></td> </tr> <tr> <td><code class=text-nowrap translate=no>.reportValidity()</code></td> <td></td> </tr> </tbody></table> </div><p>Refer to <a href=https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement target=_blank rel=noopener>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement</a> for more information on these methods and properties. Support will vary based on input type.</p> '}}]);