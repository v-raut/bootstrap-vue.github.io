(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{287:function(t,e,n){"use strict";var o=n(2);e.a={name:"BDVMain",functional:!0,props:{tag:{type:String,default:"main"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;return t(n.tag,Object(o.a)(data,{staticClass:"bd-main"}),[r])}}},288:function(t,e,n){"use strict";n(16);var o=n(2),r=n(23),c=function(t){if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var n=e.getAttribute("href");n&&0===n.indexOf("/")&&0!==n.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(n)):n&&0===n.indexOf("#")&&function(t,e){t.preventDefault(),t.stopPropagation();var n=(e||"").replace(/#/g,""),o=document.body.querySelector('[id="'.concat(n,'"]'));if(o){var c=document.scrollingElement||document.documentElement||document.body;Object(r.f)(c,Object(r.c)(o)-70,100,function(){o.tabIndex=-1,o.focus()})}}(t,n)}}};e.a={name:"BDVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,data=e.data,r=e.children,l=[];return n.play&&l.push({name:"play"}),t(n.tag,Object(o.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},289:function(t,e,n){"use strict";n(16),n(19);var o=n(23),r=n(64);e.a={data:function(){return{scrollTimeout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle:function(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),"docs-components-slug"===t?section="Components":"docs-directives-slug"===t?section="Directives":"docs-reference-slug"===t?section="Reference":"docs-misc-slug"===t&&(section="Misc"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta:function(){var meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];if(this.meta&&this.meta.description){var desc=this.meta.description;meta.push({hid:"description",name:"description",content:desc}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:desc})}else r.b&&meta.push({hid:"description",name:"description",content:r.b});return meta}},head:function(){return{title:this.headTitle,meta:this.headMeta}},mounted:function(){var t=this;clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$nextTick(function(){t.$root.$emit("setTOC",t.readme||"",t.meta||null)})},updated:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy:function(){this.$root.$emit("setTOC","")},methods:{focusScroll:function(){var t=this,e=this.$route.hash;this.$nextTick(function(){var n;e&&(n=t.$el.querySelector('[id="'.concat(e.replace("#",""),'"]')),t.scrollIntoView(n)),n||(n=t.$el.querySelector("h1")),n&&(n.tabIndex=-1,n.focus())})},scrollIntoView:function(t){var e=this;if(t){var n=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(function(){Object(o.f)(n,Object(o.c)(t)-70,100),e.scrollTimeout=null},100)}}}}},318:function(t,e,n){var map={"./accessibility/README.md":[377,49],"./color-variants/README.md":[378,50],"./images/README.md":[379,51],"./router-links/README.md":[380,52],"./size-props/README.md":[381,53],"./spacing-classes/README.md":[382,54],"./starter-templates/README.md":[383,55],"./theming/README.md":[384,56],"./utility-classes/README.md":[385,57],"./validation/README.md":[386,58]};function o(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],o=e[0];return n.e(e[1]).then(function(){return n.t(o,7)})}o.keys=function(){return Object.keys(map)},o.id=318,t.exports=o},395:function(t,e,n){"use strict";n.r(e);n(37);var o,r=n(13),c=n(287),l=n(288),d=n(289),m=n(64);e.default={name:"BDVReference",layout:"docs",mixins:[d.a],validate:function(t){var e=t.params;return Boolean(m.j[e.slug])},asyncData:(o=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,r,meta;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.params,t.next=3,c=o.slug,n(318)("./".concat(c,"/README.md"));case 3:return r=t.sent.default,meta=m.j[o.slug],t.abrupt("return",{readme:r,meta:meta});case 6:case"end":return t.stop()}var c},t)})),function(t){return o.apply(this,arguments)}),render:function(t){var e=t(l.a,{props:{play:!0},domProps:{innerHTML:this.readme}});return t(c.a,{staticClass:"bd-components"},[e])}}}}]);