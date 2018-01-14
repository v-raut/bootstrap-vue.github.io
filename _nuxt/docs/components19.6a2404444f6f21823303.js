webpackJsonp([38],{Q6dL:function(s,a){s.exports='<h1 id="images">Images</h1>\n<blockquote>\n<p>Documentation and examples for opting images (via <code>&lt;b-img&gt;</code> component) into\nresponsive behavior (so they never become larger than their parent elements),\noptionally adding lightweight styles to them &#x2014; all via props. Support for\nrounded images, thumbnail styling, alignment, and even the ability to create\nblank images with  an optional solid background color.</p>\n</blockquote>\n<h2 id="image-src-resolving">Image src resolving</h2>\n<p>The <code>src</code> prop (and <code>blank-src</code> prop of <code>&lt;b-img-lazy&gt;</code>), out of the box, works\nonly with absolute/fully-qualified-domain-name URLs. If you are using project\nassets as image sources, please refer to\n<a href="/docs/reference/images">Component img src resolving</a> for configuring <code>vue-loader</code>\nto understand custom component props that specify image sources.</p>\n<h2 id="responsive-images">Responsive images</h2>\n<p>Images in Bootstrap-Vue can be made responsive with the <code>fluid</code> prop (which\nsets <code>max-width: 100%; height: auto;</code> via CSS classes) so that it scales\nwith the parent element - up to the maximum native width of the image.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/1024/400/&quot;</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Responsive image&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-responsive-1.vue --&gt;</span>\n</pre>\n<p>To make a fluid image that will grow to fill the width of it&apos;s container, use\nthe <code>fluid-grow</code> prop. Note this may cause bluring on small bitmap images.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/300/150/&quot;</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Fluid image&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-3&quot;</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid-grow<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/300/150/&quot;</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Fluid-Grow image&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-responsive-2.vue --&gt;</span>\n</pre>\n<p>Use the <code>block</code> prop to force the image to display as a block element rather than the\nbrowser default of inline-block element.</p>\n<p><strong>Note:</strong> <em>In Internet Explorer 10, SVG images with <code>fluid</code> are disproportionately sized.\nTo fix this, add the style <code>width: 100% \\9;</code> where necessary. This fix improperly sizes\nother image formats, so Bootstrap V4 doesn&#x2019;t apply it automatically.</em></p>\n<h2 id="image-thumbnails">Image thumbnails</h2>\n<p>You can use prop <code>thumbnail</code> to give an image a rounded light border appearance.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-4 bg-dark&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/250/250/technics/4/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Thumbnail&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/250/250/technics/8/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Thumbnail&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/250/250/technics/4/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Thumbnail&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-thumbnail.vue --&gt;</span>\n</pre>\n<h2 id="rounded-corners">Rounded corners</h2>\n<p>You can control which corners are rounded by setting the rounded prop to one\nof the following values:</p>\n<ul>\n<li><code>true</code> (or prop present with no value): round all corners</li>\n<li><code>false</code> (or prop not present): no explit rounding or corners (default)</li>\n<li><code>&apos;top&apos;</code>: round the top corners</li>\n<li><code>&apos;right&apos;</code>: round the right corners</li>\n<li><code>&apos;bottom&apos;</code>: round the bottom corners</li>\n<li><code>&apos;left&apos;</code>: round the left corners</li>\n<li><code>&apos;circle&apos;</code>: make a circle (if square image) or oval (if not square) border</li>\n<li><code>&apos;0&apos;</code>: explicity turn off rounding of corners</li>\n</ul>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-rounded.vue --&gt;</span>\n</pre>\n<h2 id="aligning-images">Aligning images</h2>\n<p>Align images with the boolean props <code>left</code> (floats left) <code>right</code>(floats right),\nand <code>center</code> (auto left+right margins). You can also center images by placing them\nin a container that has the class <code>text-center</code>.</p>\n<p><strong>Left an Right aligned (float):</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;clearfix&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">left</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/125/125/technics/8/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;left image&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">right</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/125/125/technics/8/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;right image&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-left-right.vue --&gt;</span>\n</pre>\n<p><strong>Center aligned (block):</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">center</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/125/125/technics/8/&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;center image&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-center.vue --&gt;</span>\n</pre>\n<p>Note: <code>left</code> takes precedence over <code>right</code> which takes precedence over <code>center</code>.</p>\n<h2 id="blank-or-solid-color-images">Blank (or solid color) Images</h2>\n<p><code>&lt;b-img&gt;</code> provides built-in support for generating blank images (transparent by\ndefault) of any width and height, by setting the <code>blank</code> prop, and specifying\n<code>width</code> and <code>height</code> values (in pixels). You can apply any of the other\n<code>&lt;b-img&gt;</code> props to change the style/behavior of the generted image.</p>\n<p>Use the <code>blank-color</code> prop to set the blank image color. The <code>blank-color</code>prop\ncan accept any CSS color value:</p>\n<ul>\n<li>Named colors &#x2014; i.e. <code>orange</code> or <code>blue</code></li>\n<li>Hex colors &#x2014; i.e. <code>#FF9E2C</code></li>\n<li>RGB and RGBa colors &#x2014; i.e. <code>rgb(255, 158, 44)</code> and <code>rgba(255, 158, 44, .5)</code></li>\n<li>HSL and HSLa colors &#x2014; i.e. <code>hsl(32, 100%, 59%)</code> and <code>hsla(32, 100%, 59%, .5)</code></li>\n</ul>\n<p>The default <code>blank-color</code> is <code>transparent</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;transparent&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;hex shorthand color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;named color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;black&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;named color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#338833&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;hex color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;rgba(128,255,255,0.5)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;RGBa color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;75&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#88f&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;hex shorthand color&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-blank.vue --&gt;</span>\n</pre>\n<p><strong>Notes:</strong></p>\n<ul>\n<li>In blank image mode, if only one of width or height is set, the image will be have both width and height set to the same value.</li>\n<li>In blank image mode, if width and height are not set, both width and height will internally be set to 1.</li>\n<li>The <code>blank</code> prop takes precedence over the <code>src</code> prop. If you set both and later set <code>blank</code> to <code>false</code> the image specified in <code>src</code> will then be displayed.</li>\n<li>Blank images are rendered using SVG image data URLs.</li>\n<li>The <code>width</code> and <code>height</code> props will also apply the <code>width</code> and <code>height</code> attributes to the rendered <code>&lt;img&gt;</code> tag, even if <code>blank</code> is not set.</li>\n</ul>\n<h2 id="lazy-loaded-images">Lazy Loaded images</h2>\n<blockquote>\n<p>Use our complementary <code>&lt;b-img-lazy&gt;</code> image component (based on <code>&lt;b-img&gt;</code>) to lazy\nload images as they are scrolled into view (or within <code>offset</code> pixels of the viewport).</p>\n</blockquote>\n<p>Lazy loading images relies on the document scrolling to trigger the loading of the final image.\nScrolling of other elements is not monitored, and will not trigger image loading.</p>\n<h3 id="usage">Usage</h3>\n<p>Set the <code>src</code> prop to the URL of the image you want loadied lazily, and either specify a\nplaceholder image URL via the prop <code>blank-src</code>, or have a blank placeholder image generated\nfor you by leaving <code>blank-src</code> as <code>null</code>.</p>\n<p>Specify the width and height of the placeholder via the <code>blank-width</code> and <code>blank-height</code>\nprops. If these props are not set, then they will fall back to the <code>width</code> and <code>height</code>\nprops (which are applied to the image specified via <code>src</code>).</p>\n<p>Control the generated blank image color by setting the prop <code>blank-color</code>.</p>\n<p>Placeholder images (either explicity provided, or dynamicaly generated) should have the same\nwidth and height values, or at least the same aspect ratio, as the <code>src</code> image.</p>\n<p>Feel free to use the <code>fluid</code>, <code>fluid-grow</code>, <code>thumbnail</code>, and <code>rounded</code> props of <code>&lt;b-img&gt;</code>.</p>\n<p>The <code>offset</code> prop specifies the number of pixels that an image needs to be near to\nthe viewport to trigger it to be shown. The default value is <code>360</code>.</p>\n<p>The <code>throttle</code> prop controls how long (in ms) after a scroll (or resize or\norientationchange) event happens before checking if the image is has come within\nview (or within <code>offset</code> of view). The default is <code>100</code> (ms).</p>\n<p>Once an image has come into view and is shown, the scroll event listeners are\nremoved.</p>\n<p><strong>Example usage:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/1/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/3/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/4/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/5/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/6/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/7/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/8/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/9/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://lorempixel.com/600/400/cats/10/&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;600&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bbb&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;img&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-5&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-lazy.vue --&gt;</span>\n</pre>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components19.6a2404444f6f21823303.js.map