(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{305:function(e,E,o){var map={"./alert/README.md":[327,7],"./aspect/README.md":[328,8],"./avatar/README.md":[329,19],"./badge/README.md":[330,30],"./breadcrumb/README.md":[331,41],"./button-group/README.md":[333,50],"./button-toolbar/README.md":[334,51],"./button/README.md":[332,49],"./calendar/README.md":[335,52],"./card/README.md":[336,53],"./carousel/README.md":[337,9],"./collapse/README.md":[338,10],"./dropdown/README.md":[339,11],"./embed/README.md":[340,12],"./form-checkbox/README.md":[342,14],"./form-datepicker/README.md":[343,15],"./form-file/README.md":[344,16],"./form-group/README.md":[345,17],"./form-input/README.md":[346,18],"./form-radio/README.md":[347,20],"./form-select/README.md":[348,21],"./form-spinbutton/README.md":[349,22],"./form-tags/README.md":[350,23],"./form-textarea/README.md":[351,24],"./form-timepicker/README.md":[352,25],"./form/README.md":[341,13],"./image/README.md":[353,26],"./input-group/README.md":[354,27],"./jumbotron/README.md":[355,28],"./layout/README.md":[356,29],"./link/README.md":[357,31],"./list-group/README.md":[358,32],"./media/README.md":[359,33],"./modal/README.md":[360,34],"./nav/README.md":[361,35],"./navbar/README.md":[362,36],"./overlay/README.md":[363,37],"./pagination-nav/README.md":[365,39],"./pagination/README.md":[364,38],"./popover/README.md":[366,40],"./progress/README.md":[367,42],"./spinner/README.md":[368,43],"./table/README.md":[369,44],"./tabs/README.md":[370,45],"./time/README.md":[371,46],"./toast/README.md":[372,47],"./tooltip/README.md":[373,48]};function r(e){if(!o.o(map,e))return Promise.resolve().then((function(){var E=new Error("Cannot find module '"+e+"'");throw E.code="MODULE_NOT_FOUND",E}));var E=map[e],r=E[0];return o.e(E[1]).then((function(){return o.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=305,e.exports=r},399:function(e,E,o){"use strict";o.r(E);var r=o(19),t=o(258),m=o(274),n=o(268),d=o(251),D=o(252),M=o(253),A=o(43);E.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate(e){var{params:E}=e;return Boolean(A.d[E.slug])},asyncData:e=>Object(r.a)((function*(){var E,{params:r}=e;return{readme:(yield(E=r.slug,o(305)("./".concat(E,"/README.md")))).default,meta:A.d[r.slug]}}))(),render(e){var E=e(D.a,{props:{play:!0},domProps:{innerHTML:this.readme}}),o=e(D.a,{class:["bd-component-reference"]},[e(t.a,{props:{id:"component-reference"}},"Component reference"),...this.meta.components.map(E=>{var{component:component,events:o,rootEventListeners:r,slots:t,aliases:n,props:d,version:D}=E;return e(m.a,{props:{component:component,events:o,rootEventListeners:r,slots:t,aliases:n,propsMeta:d,version:D}})}),e(n.a,{props:{meta:this.meta}})]);return e(d.a,{staticClass:"bd-components"},[E,o])}}}}]);