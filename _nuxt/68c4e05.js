(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{468:function(e,t,n){"use strict";n.r(t);n(102),n(103),n(4),n(15),n(30),n(37);var r={props:{label:{type:String,default:""},value:{type:[String,Number],default:""},type:{type:String,default:""},types:{type:Object,default:function(){return{success:[],info:[],warning:[],danger:[]}}},props:{type:Object,default:function(){return{size:"small"}}}},computed:{handleType:function(){var e=this;return this.type?this.type:Object.keys(this.types).find((function(t){return e.types[t].includes(e.value)}))||""}}},l=n(0),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-tag",e._b({attrs:{type:e.handleType}},"el-tag",e.props,!1),[e._t("default",(function(){return[e._v(e._s(e.label))]}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);