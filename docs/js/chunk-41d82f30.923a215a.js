(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d82f30"],{"829f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map"}})},n=[],o=(a("d81d"),function(t){var e="40e50cca6823476482e8721bb2eee900",a="http://t0.tianditu.com/DataServer?T={id}_w&x={x}&y={y}&l={z}&tk={tk}",i=t.tileLayer(a,{attribution:"简单组件库~ <a>@author youzge</a>",tileSize:512,zoomOffset:-1,id:"vec",tk:e}),n=t.tileLayer(a,{tileSize:512,zoomOffset:-1,id:"cva",tk:e}),o=t.layerGroup([i,n]);return o}),r={name:"BaseMap",data:function(){return{map:null}},methods:{createMap:function(){this.map=L.map("map",{zoomControl:!0,maxZoom:18,minZoom:2}).setView([23.1520135,113.3231695],12),o(L).addTo(this.map),this.$emit("lmap",this.map)}},mounted:function(){this.createMap()}},c=r,u=(a("8c7d"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"28598ee9",null);e["default"]=d.exports},"8c7d":function(t,e,a){"use strict";a("97aa")},"97aa":function(t,e,a){},d81d:function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").map,o=a("1dde"),r=o("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-41d82f30.923a215a.js.map