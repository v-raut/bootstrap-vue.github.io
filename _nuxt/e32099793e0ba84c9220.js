(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{377:function(e,t){e.exports='<h1 id="accessibility"><span class="bd-content-title">Accessibility</span></h1>\n<p class="bd-lead">A brief overview of BootstrapVue&#39;s features and limitations for the creation of accessible\ncontent.</p>\n<h2 id="overview-and-limitations"><span class="bd-content-title">Overview and Limitations<a class="anchorjs-link" href="#overview-and-limitations" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue will automatically add in the appropriate accessibility markup for most interactive\ncomponents. But the overall accessibility of any project built with Bootstrap and BootstrapVue\ndepends in large part on the author&#39;s markup, additional styling, and scripting they&#39;ve included.\nHowever, provided that these have been implemented correctly, it should be perfectly possible to\ncreate websites and applications with BootstrapVue that fulfill\n<a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noopener">\n<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0</a> (A/AA/AAA),\n<a href="https://www.section508.gov/" target="_blank" rel="noopener">Section 508</a> and similar\naccessibility standards and requirements.</p>\n<h2 id="structural-markup"><span class="bd-content-title">Structural markup<a class="anchorjs-link" href="#structural-markup" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue&#39;s custom components have been optimized for accessible/semantic generated HTML markup\nout of the box. This documentation aims to provide developers with best practice examples to\ndemonstrate the use of Bootstrap itself and illustrate appropriate semantic markup, including ways\nin which potential accessibility concerns can be addressed.</p>\n<p>Most component documentation pages include an accessibility section (or sections) noting best\npractices and limitations.</p>\n<h2 id="interactive-components"><span class="bd-content-title">Interactive components<a class="anchorjs-link" href="#interactive-components" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue&#39;s interactive components — such as modal dialogs, dropdown menus and custom tooltips —\nare designed to work for touch, mouse and keyboard users. Through the use of relevant\n<a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noopener">\n<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>\n</a> roles and attributes, these components should also be understandable and operable using\nassistive technologies (such as screen readers).</p>\n<p>Because BootstrapVue&#39;s components are purposely designed to be fairly generic, authors may need to\ninclude further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and\nattributes, as well as JavaScript behavior, to more accurately convey the precise nature and\nfunctionality of their component. This is usually noted in the documentation.</p>\n<h2 id="color-contrast"><span class="bd-content-title">Color contrast<a class="anchorjs-link" href="#color-contrast" aria-label="Anchor"></a></span></h2>\n<p>Most colors that currently make up Bootstrap V4&#39;s default palette — used throughout the framework\nfor things such as button variations, alert variations, form validation indicators — lead to\n<em>insufficient</em> color contrast (below the recommended\n<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank" rel="noopener">WCAG 2.0 color contrast ratio of 4.5:1</a>)\nwhen used against a light background. Authors will need to manually modify/extend these default\ncolors to ensure adequate color contrast ratios.</p>\n<p>Refer to the <a href="/docs/reference/theming" class="font-weight-bold">Theming</a> section for customizing Bootstrap&#39;s SCSS.</p>\n<h2 id="visually-hidden-content"><span class="bd-content-title">Visually hidden content<a class="anchorjs-link" href="#visually-hidden-content" aria-label="Anchor"></a></span></h2>\n<p>Content which should be visually hidden, but remain accessible to assistive technologies such as\nscreen readers, can be styled using the <code translate="no" class="notranslate text-nowrap">.sr-only</code> class. This can be useful in situations where\nadditional visual information or cues (such as meaning denoted through the use of color) need to\nalso be conveyed to non-visual users.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Danger: <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  This action is not reversible\n<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></pre><p>For visually hidden interactive controls, such as traditional &quot;skip&quot; links, class <code translate="no" class="notranslate text-nowrap">.sr-only</code> can be\ncombined with the <code translate="no" class="notranslate text-nowrap">.sr-only-focusable</code> class. This will ensure that the control becomes visible once\nfocused (for sighted keyboard users).</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only sr-only-focusable"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#content"</span>&gt;</span>Skip to main content<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></pre><h2 id="reduced-motion"><span class="bd-content-title">Reduced motion<a class="anchorjs-link" href="#reduced-motion" aria-label="Anchor"></a></span></h2>\n<p>Bootstrap includes support for the\n<a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">prefers-reduced-motion</code> media feature</a>.\nIn browsers/environments that allow the user to specify their preference for reduced motion, most\nCSS transition effects in Bootstrap (for instance, when a modal dialog is opened or closed, or the\nsliding animation in carousels) will be disabled.</p>\n<p>If you are expecting animations and/or transitions to work and they are not, then you may have the\nreduced motion (no animation) setting enabled in your operating system control panel.</p>\n<h2 id="additional-resources"><span class="bd-content-title">Additional resources<a class="anchorjs-link" href="#additional-resources" aria-label="Anchor"></a></span></h2>\n<ul>\n<li><a href="https://getbootstrap.com/docs/4.3/getting-started/accessibility/" target="_blank" rel="noopener">Bootstrap v4 Accessibility Documentation</a></li>\n<li><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noopener">Web Content Accessibility Guidelines (WCAG) 2.0</a></li>\n<li><a href="https://a11yproject.com/" target="_blank" rel="noopener">The A11Y Project</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank" rel="noopener">MDN accessibility documentation</a></li>\n<li><a href="https://tenon.io/" target="_blank" rel="noopener">Tenon.io Accessibility Checker</a></li>\n<li><a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank" rel="noopener">Colour Contrast Analyser (CCA)</a></li>\n<li><a href="https://github.com/squizlabs/HTML_CodeSniffer" target="_blank" rel="noopener">&quot;HTML CodeSniffer&quot; bookmarklet for identifying accessibility issues</a></li>\n</ul>\n'}}]);