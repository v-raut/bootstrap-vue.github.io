(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{296:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(159),core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7__),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),vue__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_8__),lodash_debounce__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(138),lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(312),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__),_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(140),_content__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(63),_content__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(49),_content__WEBPACK_IMPORTED_MODULE_13___namespace=__webpack_require__.t(49,1),_components_codemirror__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(315);function ownKeys(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function _objectSpread(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach(function(e){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var DEFAULT_HTML='<div>\n  <b-button size="sm" @click="toggle">\n    {{ show ? \'Hide\' : \'Show\' }} Alert\n  </b-button>\n  <b-alert\n    v-model="show"\n    class="mt-3"\n    dismissible\n    @dismissed="dismissed"\n  >\n    Hello {{ name }}!\n  </b-alert>\n</div>',DEFAULT_JS="{\n  data() {\n    return {\n      name: 'BootstrapVue',\n      show: true\n    }\n  },\n  watch: {\n    show(newVal) {\n      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))\n    }\n  },\n  methods: {\n    toggle() {\n      console.log('Toggle button clicked')\n      this.show = !this.show\n    },\n    dismissed() {\n      console.log('Alert dismissed')\n    }\n  }\n}",storage="undefined"!=typeof window&&window.localStorage||null,STORAGE_KEY_PREFIX="BV_playground",STORAGE_KEYS={html:"".concat(STORAGE_KEY_PREFIX,"_html"),js:"".concat(STORAGE_KEY_PREFIX,"_js"),layout:"".concat(STORAGE_KEY_PREFIX,"_layout"),timestamp:"".concat(STORAGE_KEY_PREFIX,"_ts")},STORAGE_MAX_RETENTION=6048e5,removeNode=function(t){return t&&t.parentNode&&t.parentNode.removeChild(t)},indent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{indent:" "},o=n.indent;return 0===e?t:t.replace(/^(?!\s*$)/gm,o.repeat(e))};__webpack_exports__.a={components:{"code-mirror":_components_codemirror__WEBPACK_IMPORTED_MODULE_14__.a},data:function(){return{html:"",js:"",compiledJs:null,logIdx:1,messages:[],vertical:!1,full:!1,isOk:!1,loading:!1,ready:!1,compiling:!1,building:!1}},head:function(){var title="".concat(this.title," | BootstrapVue"),t="Interactively play and test BootstrapVue components online.";return{title:title,meta:[{hid:"og:title",name:"og:title",property:"og:title",content:title},{hid:"og:description",name:"og:description",property:"og:description",content:t},{hid:"description",name:"description",content:t}]}},computed:{title:function(){return"Online Playground"},isDefault:function(){return this.js.trim()===DEFAULT_JS.trim()&&this.html.trim()===DEFAULT_HTML.trim()},isBusy:function(){return this.compiling||this.building||this.loading||!this.ready},needsTranspiler:function(){return _utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a},appData:function(){return{html:this.html.trim(),js:this.compiledJs}},layout:function(){return this.full?"full":this.vertical?"vertical":"horizontal"},exportData:function(){var html=this.html.trim(),t=this.js.trim()||"{}",e="{}"===t?"{ el: '#app' }":t.replace(/^\{/,"{\r\n  el: '#app',");return e="new Vue(".concat(e,")"),e="window.onload = () => {\r\n".concat(indent(e,2),"\r\n}"),{html:html,js:t,css:"body { padding: 1rem; }",extendedHtml:'<div id="app">\r\n'.concat(indent(html,2),"\r\n</div>"),extendedJs:e,externalCss:["//unpkg.com/bootstrap@".concat(_content__WEBPACK_IMPORTED_MODULE_12__.a,"/dist/css/bootstrap.min.css"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_13__.d,"/dist/bootstrap-vue.css")],externalJs:["//unpkg.com/babel-polyfill/dist/polyfill.min.js","//unpkg.com/vue@".concat(_content__WEBPACK_IMPORTED_MODULE_12__.k,"/dist/vue.min.js"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_13__.d,"/dist/bootstrap-vue.js")]}},codepenData:function(){var t=this.exportData,e=t.css,n=t.extendedHtml,o=t.extendedJs,r=t.externalCss,_=t.externalJs,data={editors:"101",layout:"left",html_pre_processor:"none",css_pre_processor:"none",css_prefix:"autoprefixer",js_pre_processor:"babel",head:'<meta name="viewport" content="width=device-width">',css_external:r.join(";"),js_external:_.join(";"),html:n,js:o,css:e};return JSON.stringify(data)},codesandboxData:function(){var t=this.exportData,html=t.html,e=t.js,n=t.css,o=["<template>",indent(html,2),"</template>","","<style>",indent(n,2),"</style>","","<script>",indent("export default ".concat(e),2),"<\/script>"].join("\r\n").replace(/\\\//g,"/"),r=["import Vue from 'vue'","import BootstrapVue from 'bootstrap-vue'","import App from './App'","","import 'bootstrap/dist/css/bootstrap.css'","import 'bootstrap-vue/dist/bootstrap-vue.css'","","Vue.use(BootstrapVue)","","new Vue({ el: '#app', render: h => h(App) })"].join("\r\n"),_={bootstrap:_content__WEBPACK_IMPORTED_MODULE_12__.a,"bootstrap-vue":_content__WEBPACK_IMPORTED_MODULE_13__.d,vue:_content__WEBPACK_IMPORTED_MODULE_12__.k};return Object(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__.getParameters)({files:{"App.vue":{content:o},"index.html":{content:'<div id="app"></div>'},"index.js":{content:r},"package.json":{content:{dependencies:_}}}})},fakeConsole:function(){var t,e,n,o,r,_,l=this.log,c=this.clear;try{t=window.console,e=window.console.info,n=window.console.log,o=window.console.warn,r=window.console.error,_=window.console.clear}catch(t){}return{info:function(){try{l.apply(void 0,["info"].concat(Array.prototype.slice.call(arguments))),e.apply(t,arguments)}catch(t){}},log:function(){try{l.apply(void 0,["info"].concat(Array.prototype.slice.call(arguments))),n.apply(t,arguments)}catch(t){}},warn:function(){try{l.apply(void 0,["warning"].concat(Array.prototype.slice.call(arguments))),o.apply(t,arguments)}catch(t){}},error:function(){try{l.apply(void 0,["danger"].concat(Array.prototype.slice.call(arguments))),r.apply(t,arguments)}catch(t){}},clear:function(){try{c(),_.apply(t)}catch(t){}}}}},watch:{layout:function(t,e){t!==e&&this.saveToStorage()}},created:function(){this.playVM=null,this.contentUnWatch=null,this.jsUnWatch=null,this.run=function(){},this.compileJs=function(){},this.compiler=function(code){return code}},beforeMount:function(){this.loadFromStorage()},mounted:function(){var t=this;this.loading=_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a,_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a?this.$nextTick(function(){t.$nuxt&&t.$nuxt.$loading&&t.$nuxt.$loading.start(),Promise.all([__webpack_require__.e(1),__webpack_require__.e(0)]).then(__webpack_require__.bind(null,284)).then(function(e){t.compiler=e.default||e,t.loading=!1,t.$nuxt&&t.$nuxt.$loading&&t.$nuxt.$loading.finish(),t.doSetup(750)})}):this.doSetup()},beforeDestroy:function(){this.jsUnWatch&&this.jsUnWatch(),this.contentUnWatch&&this.contentUnWatch(),this.$isServer||this.destroyVM()},methods:{doSetup:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.run=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(this._run,500),this.compileJs=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(this._compileJs,e),this.$nextTick(function(){t.contentUnWatch=t.$watch("appData",function(e,n){t.run()},{deep:!0}),t.jsUnWatch=t.$watch(function(){return t.js.trim()},function(e,n){t.compileJs()},{immediate:!0}),t.ready=!0})},destroyVM:function(){var t=this.playVM;if(t){var e;try{e=t.$parent,t.$destroy(),removeNode(t.$el),t.$el.innerHTML=""}catch(t){}try{e.$destroy()}catch(t){}}this.playVM=t=null,this.$refs.result.innerHTML=""},createVM:function createVM(){var _this3=this,playground=this,js=this.compiledJs,html=this.html.trim();if(this.isOk=!1,null!==js){var options={};try{eval("var console = this.fakeConsole; ".concat(js))}catch(t){return this.errHandler(t,"javascript"),void window.console.error("Error in javascript",t)}if(html||"string"==typeof options.template||"function"==typeof options.render)if(html||"string"!=typeof options.template||"#"!==options.template.charAt(0))if(options.el)this.errHandler('Do not set "el" property',"javascript");else if(options.render&&"function"!=typeof options.render)this.errHandler("render must be a function","javascript");else{options.render?delete options.template:options.template='<div id="playground-app">'.concat(options.template||html,"</div>"),options.methods&&Object.keys(options.methods).forEach(function(t){var e=options.methods[t];"function"!=typeof e?_this3.errorHandler("TypeError: ".concat(t," is not a function"),"methods"):options.methods[t]=function(){try{return e.apply(this,arguments)}catch(e){playground.errHandler(e,'method "'.concat(t,'"'))}}});try{var holder=document.createElement("div");this.$refs.result.appendChild(holder),this.playVM=new vue__WEBPACK_IMPORTED_MODULE_8___default.a(_objectSpread({},options,{el:holder,router:this.$router,parent:new vue__WEBPACK_IMPORTED_MODULE_8___default.a({template:"<span></span>",errorCaptured:function(t,e,n){return playground.errHandler(t,n),!1}})}))}catch(t){return this.destroyVM(),void this.errHandler(t,"app create")}this.isOk=!0,this.saveToStorage()}else this.errHandler("Do not set template to an element ID","template");else this.errHandler("No template or render function provided","template")}},errHandler:function(t,e){this.log("danger","Error in ".concat(e,": ").concat(String(t))),this.destroyVM()},_compileJs:function(){var t=this;if(this.$isServer)this.compiledJs=null;else{var e=this.js.trim()||"{}";this.compiling=!0;var n=null;this.$nextTick(function(){t.requestAF(function(){try{n=t.compiler(";options = ".concat(e,";"))}catch(e){t.errHandler(e,"javascript"),window.console.error("Error in javascript",e),n=null}t.compiledJs=n,t.$nextTick(function(){t.compiling=!1})})})}},_run:function(){var t=this;this.$isServer||(this.building=!0,this.destroyVM(),this.clear(),this.requestAF(function(){t.createVM(),t.$nextTick(function(){t.building=!1})}))},toggleVertical:function(){this.vertical=!this.vertical},toggleFull:function(){this.full=!this.full},log:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(-1===String(n[0]).indexOf("Avoid mutating a prop directly")){var r=n.map(String).join(" ");this.messages.length&&-1!==r.indexOf("Error in render")&&r===this.messages[0][1]||(this.messages.length>10&&this.messages.splice(10),this.messages.unshift([t,r,this.logIdx++]))}},clear:function(){this.logIdx=1,this.messages.splice(0)},reset:function(){var t=this;this.$bvModal.msgBoxConfirm("Are you sure that you want to reset to the playground to the default values?",{title:"Please Confirm Reset",size:"sm",buttonSize:"sm",okTitle:"YES",cancelTitle:"NO",titleTag:"h6",headerClass:"p-2",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(function(e){e&&t.doReset()}).catch(function(t){console.log(t)})},doReset:function(){var t=this;this.js=this.html="",this.$nextTick(function(){t.js=DEFAULT_JS.trim(),t.html=DEFAULT_HTML.trim(),t.saveToStorage()})},clearStorage:function(){storage&&Object.keys(STORAGE_KEYS).forEach(function(t){storage.removeItem(t)})},loadFromStorage:function(){if(!storage)return this.js=DEFAULT_JS.trim(),void(this.html=DEFAULT_HTML.trim());var t=parseInt(storage.getItem(STORAGE_KEYS.timestamp),10)||0;Date.now()-t>STORAGE_MAX_RETENTION&&this.clearStorage(),this.html=storage.getItem(STORAGE_KEYS.html)||DEFAULT_HTML.trim(),this.js=storage.getItem(STORAGE_KEYS.js)||DEFAULT_JS.trim();var e=storage.getItem(STORAGE_KEYS.layout)||"horizontal";"full"===e?this.full=!0:"vertical"===e?(this.vertical=!0,this.full=!1):"horizontal"===e&&(this.vertical=!1,this.full=!1)},saveToStorage:function(){if(storage)try{storage.setItem(STORAGE_KEYS.html,this.html),storage.setItem(STORAGE_KEYS.js,this.js),storage.setItem(STORAGE_KEYS.layout,this.layout),storage.setItem(STORAGE_KEYS.timestamp,String(Date.now()))}catch(t){}},requestAF:function(t){var e="undefined"==typeof window?{}:window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||e.oRequestAnimationFrame||function(t){return setTimeout(t,16)})(t)}}}},297:function(t,e,n){},312:function(t,e,n){"use strict";e.__esModule=!0;var o=n(313);e.getParameters=o.getParameters},313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(314);e.getParameters=function(t){return input=JSON.stringify(t),o.compressToBase64(input).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var input}},314:function(t,e,n){var o,r=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function r(t,e){if(!o[t]){o[t]={};for(var i=0;i<t.length;i++)o[t][t.charAt(i)]=i}return o[t][e]}var _={compressToBase64:function(input){if(null==input)return"";var t=_._compress(input,6,function(a){return e.charAt(a)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(input){return null==input?"":""==input?null:_._decompress(input.length,32,function(t){return r(e,input.charAt(t))})},compressToUTF16:function(input){return null==input?"":_._compress(input,15,function(a){return t(a+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:_._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(t){for(var e=_.compress(t),n=new Uint8Array(2*e.length),i=0,o=e.length;i<o;i++){var r=e.charCodeAt(i);n[2*i]=r>>>8,n[2*i+1]=r%256}return n},decompressFromUint8Array:function(e){if(null==e)return _.decompress(e);for(var n=new Array(e.length/2),i=0,o=n.length;i<o;i++)n[i]=256*e[2*i]+e[2*i+1];var r=[];return n.forEach(function(e){r.push(t(e))}),_.decompress(r.join(""))},compressToEncodedURIComponent:function(input){return null==input?"":_._compress(input,6,function(a){return n.charAt(a)})},decompressFromEncodedURIComponent:function(input){return null==input?"":""==input?null:(input=input.replace(/ /g,"+"),_._decompress(input.length,32,function(t){return r(n,input.charAt(t))}))},compress:function(e){return _._compress(e,16,function(a){return t(a)})},_compress:function(t,e,n){if(null==t)return"";var i,o,r,_={},l={},c="",d="",m="",h=2,f=3,v=2,E=[],y=0,O=0;for(r=0;r<t.length;r+=1)if(c=t.charAt(r),Object.prototype.hasOwnProperty.call(_,c)||(_[c]=f++,l[c]=!0),d=m+c,Object.prototype.hasOwnProperty.call(_,d))m=d;else{if(Object.prototype.hasOwnProperty.call(l,m)){if(m.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==e-1?(O=0,E.push(n(y)),y=0):O++;for(o=m.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1}else{for(o=1,i=0;i<v;i++)y=y<<1|o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o=0;for(o=m.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1}0==--h&&(h=Math.pow(2,v),v++),delete l[m]}else for(o=_[m],i=0;i<v;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1;0==--h&&(h=Math.pow(2,v),v++),_[d]=f++,m=String(c)}if(""!==m){if(Object.prototype.hasOwnProperty.call(l,m)){if(m.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==e-1?(O=0,E.push(n(y)),y=0):O++;for(o=m.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1}else{for(o=1,i=0;i<v;i++)y=y<<1|o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o=0;for(o=m.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1}0==--h&&(h=Math.pow(2,v),v++),delete l[m]}else for(o=_[m],i=0;i<v;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1;0==--h&&(h=Math.pow(2,v),v++)}for(o=2,i=0;i<v;i++)y=y<<1|1&o,O==e-1?(O=0,E.push(n(y)),y=0):O++,o>>=1;for(;;){if(y<<=1,O==e-1){E.push(n(y));break}O++}return E.join("")},decompress:function(t){return null==t?"":""==t?null:_._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,n,o){var i,r,_,l,c,d,m,h=[],f=4,v=4,E=3,y="",O=[],data={val:o(0),position:n,index:1};for(i=0;i<3;i+=1)h[i]=i;for(_=0,c=Math.pow(2,2),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;switch(_){case 0:for(_=0,c=Math.pow(2,8),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;m=t(_);break;case 1:for(_=0,c=Math.pow(2,16),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;m=t(_);break;case 2:return""}for(h[3]=m,r=m,O.push(m);;){if(data.index>e)return"";for(_=0,c=Math.pow(2,E),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;switch(m=_){case 0:for(_=0,c=Math.pow(2,8),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;h[v++]=t(_),m=v-1,f--;break;case 1:for(_=0,c=Math.pow(2,16),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=n,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;h[v++]=t(_),m=v-1,f--;break;case 2:return O.join("")}if(0==f&&(f=Math.pow(2,E),E++),h[m])y=h[m];else{if(m!==v)return null;y=r+r.charAt(0)}O.push(y),h[v++]=r+y.charAt(0),r=y,0==--f&&(f=Math.pow(2,E),E++)}}};return _}();void 0===(o=function(){return r}.call(e,n,e,t))||(t.exports=o)},315:function(t,e,n){"use strict";n(12);e.a={name:"CodeMirror",props:{value:{type:String,default:""},mode:{type:[String,Object],default:""},theme:{type:String,default:"default"},tabMode:{type:String,default:"indent"},tabSize:{type:[Number,String],default:2},lineWrapping:{type:Boolean,default:!0},lineNumbers:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1}},data:function(){return{CM:null}},computed:{componentData:function(){return{staticClass:"notranslate m-0 p-0",style:{minHeight:"300px"},attrs:{translate:"no"}}}},watch:{value:function(t,e){e&&""!==e||this.CM.setValue(t)}},mounted:function(){var t=this;Promise.all([n.e(73),n.e(3)]).then(n.bind(null,323)).then(function(e){var n=e.default||e;t.CM=n.fromTextArea(t.$refs.input,{mode:t.mode,theme:t.theme,tabMode:t.tabMode,tabSize:parseInt(t.tabSize,10)||2,lineWrapping:t.lineWrapping,lineNumbers:t.lineNumbers,autoCloseTags:!0,autoCloseBrackets:!0,readOnly:t.readOnly}),t.CM.on("changes",function(){t.$emit("input",t.CM.getValue())}),t.$nextTick(function(){t.$nextTick(function(){t.CM.setValue(t.value)})})})},beforeDestroy:function(){this.CM&&this.CM.toTextArea(),this.CM=null},render:function(t){return t("div",this.componentData,[t("textarea",{ref:"input",staticClass:"w-100 border-0",style:{minWidth:"100px"},props:{value:this.value}})])}}},316:function(t,e,n){"use strict";var o=n(297);n.n(o).a},401:function(t,e,n){"use strict";n.r(e);var o=n(296).a,r=(n(316),n(22)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"pb-5",attrs:{fluid:"",tag:"main"}},[n("div",{staticClass:"bd-content mb-4"},[n("h1",[n("span",{staticClass:"bd-content-title"},[t._v(t._s(t.title))])]),t._v(" "),n("p",{staticClass:"bd-lead"},[t._v("\n      Here you can interactively play and test components with a fresh Vue.js instance. Please\n      refer to the "),n("b-link",{attrs:{to:"/docs"}},[t._v("Docs")]),t._v(" section for more information about\n      available components and usage.\n    ")],1)]),t._v(" "),t.loading?n("b-row",[n("b-col",{staticClass:"mb-2 mb-md-0"},[n("b-alert",{staticClass:"text-center",attrs:{variant:"info",show:""}},[t._v("\n        Loading JavaScript compiler...\n      ")])],1)],1):t._e(),t._v(" "),t.ready&&t.needsTranspiler?n("b-container",[n("b-row",[n("b-col",[n("b-alert",{staticClass:"mb-3",attrs:{variant:"info",show:"",fade:"",dismissible:""}},[t._v("\n          Your browser does not support modern ES6 JavaScript syntax. However, the code in the\n          JavaScipt editor will be transpiled to work with your browser, except for any ES6 code\n          that is in the Template editor (i.e. destructuring, arrow functions, etc.)\n        ")])],1)],1)],1):t._e(),t._v(" "),n("b-row",[n("b-col",{staticClass:"mb-2 mb-md-0"},[n("b-btn",{attrs:{size:"sm",variant:"danger",disabled:t.isDefault||t.isBusy},on:{click:t.reset}},[t._v("\n        Reset to default\n      ")])],1),t._v(" "),n("b-col",{staticClass:"mt-2 mt-md-0",attrs:{md:"auto"}},[n("b",{staticClass:"d-block d-sm-inline-block mr-sm-2 mb-1 mb-sm-0"},[t._v("Export to")]),t._v(" "),n("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codepen.io/pen/define",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"data"},domProps:{value:t.codepenData}}),t._v(" "),n("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("CodePen")])],1),t._v(" "),n("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"parameters"},domProps:{value:t.codesandboxData}}),t._v(" "),n("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("CodeSandbox")])],1),t._v(" "),n("b-form",{staticClass:"d-inline-block notranslate",attrs:{translate:"no",method:"post",action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"html"},domProps:{value:t.exportData.extendedHtml}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"js"},domProps:{value:t.exportData.extendedJs}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"resources"},domProps:{value:t.exportData.externalCss.concat([t.exportData.externalJs]).join(",")}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"css"},domProps:{value:t.exportData.css}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"js_wrap",value:"l"}}),t._v(" "),n("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("JSFiddle")])],1)],1)],1),t._v(" "),n("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[n("b-col",{key:"A",attrs:{cols:t.full?12:null}},[n("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[n("b-col",{key:"A1",staticClass:"mt-3",attrs:{md:t.vertical&&!t.full?6:12,sm:"12"}},[n("b-card",{attrs:{"no-body":"","header-tag":"header"}},[n("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[n("h5",{staticClass:"mb-0"},[n("span",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("Template")])]),t._v(" "),n("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleFull}},[n("span",[t._v(t._s(t.full?"Split":"Full"))])])],1),t._v(" "),n("code-mirror",{attrs:{mode:"htmlmixed"},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}})],1)],1),t._v(" "),n("b-col",{key:"A2",staticClass:"mt-3",attrs:{md:t.vertical&&!t.full?6:12,sm:"12"}},[n("b-card",{attrs:{"no-body":"","header-tag":"header"}},[n("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[n("h5",{staticClass:"mb-0"},[n("span",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("JavaScript")]),t._v(" "),t.compiling?n("small",{staticClass:"text-muted"},[t._v(" compiling")]):t._e()]),t._v(" "),n("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleFull}},[n("span",[t._v(t._s(t.full?"Split":"Full"))])])],1),t._v(" "),n("code-mirror",{attrs:{mode:"javascript"},model:{value:t.js,callback:function(e){t.js=e},expression:"js"}})],1)],1)],1)],1),t._v(" "),n("b-col",{key:"B",attrs:{md:t.vertical||t.full?12:6,sm:"12"}},[n("b-row",[n("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[n("b-card",{staticClass:"play-result",attrs:{"header-tag":"header"}},[n("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[n("h5",{staticClass:"mb-0"},[n("span",[t._v("Result")]),t._v(" "),t.compiling||t.building?n("small",{staticClass:"text-muted"},[t._v(" building")]):t._e()]),t._v(" "),t.full?t._e():n("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleVertical}},[n("span",[t._v(t._s(t.vertical?"Horizontal":"Vertical"))])])],1),t._v(" "),n("div",{ref:"result",staticClass:"notranslate",attrs:{translate:"no"}})])],1),t._v(" "),n("b-col",{staticClass:"mt-3 notranslate",attrs:{cols:"12",translate:"no"}},[n("b-card",{attrs:{"no-body":"","header-tag":"header"}},[n("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[n("h5",{staticClass:"mb-0"},[n("span",[t._v("Console log")])]),t._v(" "),n("b-btn",{attrs:{disabled:0===t.messages.length,size:"sm",variant:"outline-danger"},on:{click:t.clear}},[n("span",[t._v("Clear")])])],1),t._v(" "),n("transition-group",{staticClass:"list-group list-group-flush play-log",attrs:{tag:"ul",name:"flip-list"}},[t.messages.length?t._e():n("b-list-group-item",{key:"empty-console"},[t._v("\n                 \n              ")]),t._v(" "),t._l(t.messages,function(e){return n("b-list-group-item",{key:"console-"+e[2],staticClass:"py-2 d-flex"},[n("b-badge",{staticClass:"mr-1",staticStyle:{"font-size":"90%"},attrs:{variant:e[0]}},[t._v("\n                  "+t._s("danger"===e[0]?"error":"warning"===e[0]?"warn":"log")+"\n                ")]),t._v(" "),n("span",{class:["text-"+e[0],"text-monospace","small","d-block"],staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e[1]))])],1)})],2)],1)],1)],1)],1)],1)],1)},[],!1,null,"2af07cd0",null);e.default=component.exports}}]);