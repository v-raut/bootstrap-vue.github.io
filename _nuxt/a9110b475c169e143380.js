(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{231:function(e,t,n){"use strict";var o=n(2);t.a={name:"BDVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(e,t){var{props:n,data:data,children:r}=t;return e(n.tag,Object(o.a)(data,{staticClass:"bd-main"}),[r])}}},232:function(e,t,n){"use strict";n(10);var o=n(2),r=n(11),c=e=>{if(e&&"click"===e.type){var t=e.target&&e.target.closest?e.target.closest("a[href]"):null;if(!(!t||"click"!==e.type||t.__vue__||t.closest(".bd-example")||t.closest("pre")||e.defaultPrevented)){var n=t.getAttribute("href");n&&0===n.indexOf("/")&&0!==n.indexOf("//")?(e.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(n)):n&&0===n.indexOf("#")&&((e,t)=>{e.preventDefault(),e.stopPropagation();var n=(t||"").replace(/#/g,""),o=document.body.querySelector('[id="'.concat(n,'"]'));if(o){var c=document.scrollingElement||document.documentElement||document.body;Object(r.f)(c,Object(r.c)(o)-70,100,()=>{o.tabIndex=-1,o.focus()})}})(e,n)}}};t.a={name:"BDVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(e,t){var{props:n,data:data,children:r}=t,l=[];return n.play&&l.push({name:"play"}),e(n.tag,Object(o.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},233:function(e,t,n){"use strict";n(10);var o=n(11),r=n(40);t.a={data:()=>({scrollTimeout:null}),computed:{content(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle(){var e=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),"docs-components-slug"===e?section="Components":"docs-directives-slug"===e?section="Directives":"docs-reference-slug"===e?section="Reference":"docs-misc-slug"===e&&(section="Misc"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];if(this.meta&&this.meta.description){var desc=this.meta.description;meta.push({hid:"description",name:"description",content:desc}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:desc})}else r.b&&meta.push({hid:"description",name:"description",content:r.b});return meta}},head(){return{title:this.headTitle,meta:this.headMeta}},mounted(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$nextTick(()=>{this.$root.$emit("setTOC",this.readme||"",this.meta||null)})},updated(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy(){this.$root.$emit("setTOC","")},methods:{focusScroll(){var e=this.$route.hash;this.$nextTick(()=>{var t;e&&(t=this.$el.querySelector('[id="'.concat(e.replace("#",""),'"]')),this.scrollIntoView(t)),t||(t=this.$el.querySelector("h1")),t&&(t.tabIndex=-1,t.focus())})},scrollIntoView(e){if(e){var t=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(()=>{Object(o.f)(t,Object(o.c)(e)-70,100),this.scrollTimeout=null},100)}}}}},262:function(e,t,n){var map={"./accessibility/README.md":[321,49],"./color-variants/README.md":[322,50],"./images/README.md":[323,51],"./router-links/README.md":[324,52],"./size-props/README.md":[325,53],"./spacing-classes/README.md":[326,54],"./starter-templates/README.md":[327,55],"./theming/README.md":[328,56],"./utility-classes/README.md":[329,57],"./validation/README.md":[330,58]};function o(e){if(!n.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,7)})}o.keys=function(){return Object.keys(map)},o.id=262,e.exports=o},339:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n(231),c=n(232),l=n(233),d=n(40);t.default={name:"BDVReference",layout:"docs",mixins:[l.a],validate(e){var{params:t}=e;return Boolean(d.j[t.slug])},asyncData:e=>Object(o.a)(function*(){var{params:t}=e;return{readme:(yield(e=>n(262)("./".concat(e,"/README.md")))(t.slug)).default,meta:d.j[t.slug]}})(),render(e){var t=e(c.a,{props:{play:!0},domProps:{innerHTML:this.readme}});return e(r.a,{staticClass:"bd-components"},[t])}}}}]);