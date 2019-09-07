(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{286:function(n,t){n.exports='<h1 id="carousel"><span class="bd-content-title">Carousel</span></h1>\n<p class="bd-lead">The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms.\nIt works with a series of images, text, or custom markup. It also includes support for\nprevious/next controls and indicators.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">"carousel-1"</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"slide"</span>\n      <span class="hljs-attr">:interval</span>=<span class="hljs-string">"4000"</span>\n      <span class="hljs-attr">controls</span>\n      <span class="hljs-attr">indicators</span>\n      <span class="hljs-attr">background</span>=<span class="hljs-string">"#ababab"</span>\n      <span class="hljs-attr">img-width</span>=<span class="hljs-string">"1024"</span>\n      <span class="hljs-attr">img-height</span>=<span class="hljs-string">"480"</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">"text-shadow: 1px 1px 2px #333;"</span>\n      @<span class="hljs-attr">sliding-start</span>=<span class="hljs-string">"onSlideStart"</span>\n      @<span class="hljs-attr">sliding-end</span>=<span class="hljs-string">"onSlideEnd"</span>\n    &gt;</span>\n      <span class="hljs-comment">&lt;!-- Text slides with image --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n        <span class="hljs-attr">caption</span>=<span class="hljs-string">"First slide"</span>\n        <span class="hljs-attr">text</span>=<span class="hljs-string">"Nulla vitae elit libero, a pharetra augue mollis interdum."</span>\n        <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=52"</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Slides with custom text --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span> <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=54"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Slides with image only --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span> <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=58"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Slides with img slot --&gt;</span>\n      <span class="hljs-comment">&lt;!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:img</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">img</span>\n            <span class="hljs-attr">class</span>=<span class="hljs-string">"d-block img-fluid w-100"</span>\n            <span class="hljs-attr">width</span>=<span class="hljs-string">"1024"</span>\n            <span class="hljs-attr">height</span>=<span class="hljs-string">"480"</span>\n            <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=55"</span>\n            <span class="hljs-attr">alt</span>=<span class="hljs-string">"image slot"</span>\n          &gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Slide with blank fluid image to maintain slide aspect ratio --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span> <span class="hljs-attr">caption</span>=<span class="hljs-string">"Blank Image"</span> <span class="hljs-attr">img-blank</span> <span class="hljs-attr">img-alt</span>=<span class="hljs-string">"Blank image"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-4"</span>&gt;</span>\n      Slide #: {{ slide }}<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n      Sliding: {{ sliding }}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">slide</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">sliding</span>: <span class="hljs-literal">null</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      onSlideStart(slide) {\n        <span class="hljs-keyword">this</span>.sliding = <span class="hljs-literal">true</span>\n      },\n      onSlideEnd(slide) {\n        <span class="hljs-keyword">this</span>.sliding = <span class="hljs-literal">false</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-carousel.vue --&gt;</span></pre><p>Please be aware that nested carousels are <strong>not</strong> supported.</p>\n<h2 id="sizing"><span class="bd-content-title">Sizing<a class="anchorjs-link" href="#sizing" aria-label="Anchor"></a></span></h2>\n<p>Carousels don&#39;t automatically normalize slide dimensions. As such, you may need to use additional\nutilities or custom styles to appropriately size content. When using images in each slide, ensure\nthey all have the same dimensions (or aspect ratio).</p>\n<p>When using <code translate="no" class="notranslate text-nowrap">img-src</code> or <code translate="no" class="notranslate text-nowrap">img-blank</code> on <code translate="no" class="notranslate text-nowrap">&lt;b-carousel-slide&gt;</code>, you can set the image width and height\nvia the <code translate="no" class="notranslate text-nowrap">img-width</code> and <code translate="no" class="notranslate text-nowrap">img-height</code> props on <code translate="no" class="notranslate text-nowrap">&lt;b-carousel&gt;</code> and have these values automatically\napplied to each <code translate="no" class="notranslate text-nowrap">carousel-slide</code> image.</p>\n<p>Note that images will still be responsive and automatically grow or shrink to fit within the width\nof its parent container.</p>\n<p>Internally, <code translate="no" class="notranslate text-nowrap">&lt;b-carousel-slide&gt;</code> uses the <a href="/docs/components/image" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code></a> component to render\nthe images. The <code translate="no" class="notranslate text-nowrap">img-*</code> props map to the corresponding props available to <code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code>.</p>\n<h2 id="interval"><span class="bd-content-title">Interval<a class="anchorjs-link" href="#interval" aria-label="Anchor"></a></span></h2>\n<p>Carousel defaults to an interval of <code translate="no" class="notranslate text-nowrap">5000</code>ms (5 seconds). You can change the interval between slides\nby setting the <code translate="no" class="notranslate text-nowrap">interval</code> prop to the desired number of milliseconds. The smallest supported sliding\ninterval is 1000ms (1 second).</p>\n<p>In browsers where the <a href="https://www.w3.org/TR/page-visibility/" target="_blank" rel="noopener">Page Visibility API</a> is supported,\nthe carousel will avoid sliding when the webpage is not visible to the user (such as when the\nbrowser tab is inactive, the browser window is minimized, etc.). Sliding will resume when the\nbrowser tab is active.</p>\n<h3 id="pausing-the-carousel"><span class="bd-content-title">Pausing the carousel<a class="anchorjs-link" href="#pausing-the-carousel" aria-label="Anchor"></a></span></h3>\n<p>To pause the carousel from auto sliding, set the <code translate="no" class="notranslate text-nowrap">interval</code> prop to <code translate="no" class="notranslate text-nowrap">0</code>. To restart a paused\ncarousel, set the <code translate="no" class="notranslate text-nowrap">interval</code> back to the desired number of ms.</p>\n<p>When the carousel is paused, the user can still switch slides via the controls (if enabled) or touch\nswipe (on touch enabled devices, if not disabled).</p>\n<p>When the users mouse hovers the carousel it will automatically pause, and will automatically restart\nwhen the mouse leaves the carousel. To disable this feature, set the <code translate="no" class="notranslate text-nowrap">no-hover-pause</code> prop on\n<b-carousel>`.</p>\n<h2 id="controls-and-indicators"><span class="bd-content-title">Controls and indicators<a class="anchorjs-link" href="#controls-and-indicators" aria-label="Anchor"></a></span></h2>\n<p>Set the prop <code translate="no" class="notranslate text-nowrap">controls</code> to enable the previous and next control buttons.</p>\n<p>Set the prop <code translate="no" class="notranslate text-nowrap">indicators</code> to show the slide indicator buttons.</p>\n<p>Both indicators and controls can be set at the same time or independently.</p>\n<h2 id="carousel-slide-content"><span class="bd-content-title">Carousel slide content<a class="anchorjs-link" href="#carousel-slide-content" aria-label="Anchor"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">b-carousel-slide</code> provides several props and slots for placing content in the slide.</p>\n<h3 id="props"><span class="bd-content-title">Props<a class="anchorjs-link" href="#props" aria-label="Anchor"></a></span></h3>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">caption</code> Text to use as the main title on the slide (placed inside the inner element which has\nthe class <code translate="no" class="notranslate text-nowrap">carousel-caption</code>)</li>\n<li><code translate="no" class="notranslate text-nowrap">text</code> Textual placed under the title (placed inside the inner element which has the class\n<code translate="no" class="notranslate text-nowrap">carousel-caption</code>)</li>\n<li><code translate="no" class="notranslate text-nowrap">img-src</code> URL of image to be placed into the background of the slide</li>\n<li><code translate="no" class="notranslate text-nowrap">caption-html</code> Alternate prop to the <code translate="no" class="notranslate text-nowrap">caption</code> prop, which supports HTML strings</li>\n<li><code translate="no" class="notranslate text-nowrap">html</code> Alternate prop to the <code translate="no" class="notranslate text-nowrap">text</code> prop, which supports HTML strings</li>\n</ul>\n<p class="alert alert-danger">\n  <strong>Warning:</strong> Be cautious of using the <code class="notranslate" translate="no">caption-html</code> and <code class="notranslate" translate="no">html</code>\n  props to display user supplied content, as it may make your application vulnerable to\n  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">\n  <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first\n  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the\n  user supplied string.\n</p>\n\n<h3 id="named-slots"><span class="bd-content-title">Named slots<a class="anchorjs-link" href="#named-slots" aria-label="Anchor"></a></span></h3>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">default</code> content that will be placed inside of the inner element which has the class\n<code translate="no" class="notranslate text-nowrap">carousel-caption</code>. Appears after any content from the <code translate="no" class="notranslate text-nowrap">caption</code> and <code translate="no" class="notranslate text-nowrap">text</code> props.</li>\n<li><code translate="no" class="notranslate text-nowrap">img</code> content to place into the background of the slide. Despite the slot&#39;s name, you can place\nalmost any content in this slot in lieu of using the <code translate="no" class="notranslate text-nowrap">default</code> slot or <code translate="no" class="notranslate text-nowrap">caption</code> and <code translate="no" class="notranslate text-nowrap">text</code> props.</li>\n</ul>\n<h2 id="carousel-animation"><span class="bd-content-title">Carousel animation<a class="anchorjs-link" href="#carousel-animation" aria-label="Anchor"></a></span></h2>\n<p>Carousel, by default, uses a sliding animation. You can change the slide animation to a cross-fade\nanimation, or disable animation completely.</p>\n<h3 id="crossfade-animation"><span class="bd-content-title">Crossfade animation<a class="anchorjs-link" href="#crossfade-animation" aria-label="Anchor"></a></span></h3>\n<p>Set the <code translate="no" class="notranslate text-nowrap">&lt;b-carousel&gt;</code> <code translate="no" class="notranslate text-nowrap">fade</code> prop to <code translate="no" class="notranslate text-nowrap">true</code> to animate slides with a fade transition instead of the\ndefault slide animation.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel</span>\n    <span class="hljs-attr">id</span>=<span class="hljs-string">"carousel-fade"</span>\n    <span class="hljs-attr">style</span>=<span class="hljs-string">"text-shadow: 0px 0px 2px #000"</span>\n    <span class="hljs-attr">fade</span>\n    <span class="hljs-attr">indicators</span>\n    <span class="hljs-attr">img-width</span>=<span class="hljs-string">"1024"</span>\n    <span class="hljs-attr">img-height</span>=<span class="hljs-string">"480"</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"First slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=10"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"Second Slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=12"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"Third Slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=22"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-carousel-fade.vue --&gt;</span></pre><h3 id="disable-animation"><span class="bd-content-title">Disable animation<a class="anchorjs-link" href="#disable-animation" aria-label="Anchor"></a></span></h3>\n<p>Set the <code translate="no" class="notranslate text-nowrap">&lt;b-carousel&gt;</code> <code translate="no" class="notranslate text-nowrap">no-animation</code> prop to <code translate="no" class="notranslate text-nowrap">true</code> to disable slide animation.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel</span>\n    <span class="hljs-attr">id</span>=<span class="hljs-string">"carousel-no-animation"</span>\n    <span class="hljs-attr">style</span>=<span class="hljs-string">"text-shadow: 0px 0px 2px #000"</span>\n    <span class="hljs-attr">no-animation</span>\n    <span class="hljs-attr">indicators</span>\n    <span class="hljs-attr">img-width</span>=<span class="hljs-string">"1024"</span>\n    <span class="hljs-attr">img-height</span>=<span class="hljs-string">"480"</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"First slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=10"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"Second Slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=12"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"Third Slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=22"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel-slide</span>\n      <span class="hljs-attr">caption</span>=<span class="hljs-string">"Fourth Slide"</span>\n      <span class="hljs-attr">img-src</span>=<span class="hljs-string">"https://picsum.photos/1024/480/?image=23"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel-slide</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-carousel-no-animation.vue --&gt;</span></pre><h2 id="slide-wrapping"><span class="bd-content-title">Slide wrapping<a class="anchorjs-link" href="#slide-wrapping" aria-label="Anchor"></a></span></h2>\n<p>Normally when the carousel reaches one end or the other in the list of slides, it will wrap to the\nopposite end of the list of slides and continue cycling.</p>\n<p>To disable carousel slide wrapping, set the <code translate="no" class="notranslate text-nowrap">no-wrap</code> prop to true.</p>\n<h2 id="hide-slide-text-content-on-small-screens"><span class="bd-content-title">Hide slide text content on small screens<a class="anchorjs-link" href="#hide-slide-text-content-on-small-screens" aria-label="Anchor"></a></span></h2>\n<p>On smaller screens you may want to hide the captions and headings. You can do so via the\n<code translate="no" class="notranslate text-nowrap">content-visible-up</code> prop of <code translate="no" class="notranslate text-nowrap">&lt;b-carousel-slide&gt;</code>. The prop accepts a breakpoint name (i.e. <code translate="no" class="notranslate text-nowrap">sm</code>,\n<code translate="no" class="notranslate text-nowrap">md</code>, <code translate="no" class="notranslate text-nowrap">lg</code>, <code translate="no" class="notranslate text-nowrap">xl</code>, or custom breakpoint names if you have defined them), and will hide the headings\nand captions on screens <em>smaller</em> than the breakpoint.</p>\n<h2 id="touch-swipe-support"><span class="bd-content-title">Touch swipe support<a class="anchorjs-link" href="#touch-swipe-support" aria-label="Anchor"></a></span></h2>\n<p>On touch enabled devices, users can switch slides by swiping left or right on the carousel. To\ndisable touch control, set the <code translate="no" class="notranslate text-nowrap">no-touch</code> prop to <code translate="no" class="notranslate text-nowrap">true</code>.</p>\n<h2 id="v-model-support"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">v-model</code> support<a class="anchorjs-link" href="#v-model-support" aria-label="Anchor"></a></span></h2>\n<p>Programmatically control which slide is showing via <code translate="no" class="notranslate text-nowrap">v-model</code> (which binds to the <code translate="no" class="notranslate text-nowrap">value</code> prop).\nNote, that slides are indexed starting at <code translate="no" class="notranslate text-nowrap">0</code>.</p>\n<h2 id="programmatic-slide-control"><span class="bd-content-title">Programmatic slide control<a class="anchorjs-link" href="#programmatic-slide-control" aria-label="Anchor"></a></span></h2>\n<p>The <code translate="no" class="notranslate text-nowrap">&lt;b-carousel&gt;</code> instance provides several public methods for controlling sliding:</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">setSlide(index)</code></td>\n<td>Go to slide specified by <code translate="no" class="notranslate text-nowrap">index</code></td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">next()</code></td>\n<td>Go to next slide</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">prev()</code></td>\n<td>Go to previous slide</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">pause()</code></td>\n<td>Pause the slide cycling</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">start()</code></td>\n<td>Start slide cycling (prop <code translate="no" class="notranslate text-nowrap">interval</code> must have a value)</td>\n</tr>\n</tbody></table>\n</div><p>You will need a reference (via <code translate="no" class="notranslate text-nowrap">this.$refs</code>) to the carousel instance in order to call these\nmethods:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-carousel</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"myCarousel"</span> <span class="hljs-attr">....</span> &gt;</span>\n    <span class="hljs-comment">&lt;!-- slides go here --&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-carousel</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-comment">// ...</span>\n    methods: {\n      prev() {\n        <span class="hljs-keyword">this</span>.$refs.myCarousel.prev()\n      },\n      next() {\n        <span class="hljs-keyword">this</span>.$refs.myCarousel.next()\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre><h2 id="accessibility"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-label="Anchor"></a></span></h2>\n<p>Carousels are generally not fully compliant with accessibility standards, although we try to make\nthem as accessible as possible.</p>\n<p>By providing a document unique value via the <code translate="no" class="notranslate text-nowrap">id</code> prop, <code translate="no" class="notranslate text-nowrap">&lt;b-carousel&gt;</code> will enable accessibility\nfeatures. It is highly recommended to always add an ID to all components.</p>\n<p>All carousel controls and indicators have aria labels. These can be customized by setting the\nvarious <code translate="no" class="notranslate text-nowrap">label-*</code> props.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);