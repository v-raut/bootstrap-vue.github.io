(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{304:function(e,o,E){var map={"./alert/README.md":[326,7],"./badge/README.md":[327,8],"./breadcrumb/README.md":[328,19],"./button-group/README.md":[330,41],"./button-toolbar/README.md":[331,47],"./button/README.md":[329,30],"./calendar/README.md":[332,48],"./card/README.md":[333,49],"./carousel/README.md":[334,50],"./collapse/README.md":[335,51],"./dropdown/README.md":[336,9],"./embed/README.md":[337,10],"./form-checkbox/README.md":[339,12],"./form-datepicker/README.md":[340,13],"./form-file/README.md":[341,14],"./form-group/README.md":[342,15],"./form-input/README.md":[343,16],"./form-radio/README.md":[344,17],"./form-select/README.md":[345,18],"./form-spinbutton/README.md":[346,20],"./form-tags/README.md":[347,21],"./form-textarea/README.md":[348,22],"./form-timepicker/README.md":[349,23],"./form/README.md":[338,11],"./image/README.md":[350,24],"./input-group/README.md":[351,25],"./jumbotron/README.md":[352,26],"./layout/README.md":[353,27],"./link/README.md":[354,28],"./list-group/README.md":[355,29],"./media/README.md":[356,31],"./modal/README.md":[357,32],"./nav/README.md":[358,33],"./navbar/README.md":[359,34],"./overlay/README.md":[360,35],"./pagination-nav/README.md":[362,37],"./pagination/README.md":[361,36],"./popover/README.md":[363,38],"./progress/README.md":[364,39],"./spinner/README.md":[365,40],"./table/README.md":[366,42],"./tabs/README.md":[367,43],"./time/README.md":[368,44],"./toast/README.md":[369,45],"./tooltip/README.md":[370,46]};function r(e){if(!E.o(map,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=map[e],r=o[0];return E.e(o[1]).then((function(){return E.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=304,e.exports=r},396:function(e,o,E){"use strict";E.r(o);var r=E(19),t=E(257),m=E(273),n=E(267),d=E(250),D=E(251),M=E(252),A=E(44);o.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate(e){var{params:o}=e;return Boolean(A.d[o.slug])},asyncData:e=>Object(r.a)((function*(){var o,{params:r}=e;return{readme:(yield(o=r.slug,E(304)("./".concat(o,"/README.md")))).default,meta:A.d[r.slug]}}))(),render(e){var o=e(D.a,{props:{play:!0},domProps:{innerHTML:this.readme}}),E=e(D.a,{class:["bd-component-reference"]},[e(t.a,{props:{id:"component-reference"}},"Component reference"),...this.meta.components.map(o=>{var{component:component,events:E,rootEventListeners:r,slots:t,aliases:n,props:d,version:D}=o;return e(m.a,{props:{component:component,events:E,rootEventListeners:r,slots:t,aliases:n,propsMeta:d,version:D}})}),e(n.a,{props:{meta:this.meta}})]);return e(d.a,{staticClass:"bd-components"},[o,E])}}}}]);