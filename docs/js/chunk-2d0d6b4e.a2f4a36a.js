(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6b4e"],{7461:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("base-map",{on:{lmap:a.getMap}})],1)},i=[],s=(t("d81d"),t("829f")),p={name:"MiniMap",components:{BaseMap:s["default"]},data:function(){return{map:null,mapLayers:null}},methods:{getMap:function(a,n){this.map=a,this.mapLayers=n},useMiniMap:function(){var a=this.map,n=this.mapLayers[0];L.control.minimap(n,{width:100,height:100,toggleDisplay:!0,strings:{hideText:"隐藏小地图",showText:"展开小地图"}}).addTo(a)}},mounted:function(){this.useMiniMap()}},o=p,u=t("2877"),c=Object(u["a"])(o,e,i,!1,null,"4e5420ac",null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d6b4e.a2f4a36a.js.map