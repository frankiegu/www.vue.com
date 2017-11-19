/*!
 * 
 * -------------------------------------------------------------
 * 本人保留所有版权与权利.
 * 
 * https://github.com/ningxiao
 * @version: 1.0.0
 * @author: ningxiao
 * @qq:363305175
 * @description:  VUE_TEST
 * @date: 2017/10/11 18:09:23
 * -------------------------------------------------------------
 */
webpackJsonp([1],{0:function(e,t){e.exports=function(e,t,n,o){var r,c=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,c=e.default);var u="function"==typeof c?c.options:c;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var s=Object.create(u.computed||null);Object.keys(o).forEach(function(e){var t=o[e];s[e]=function(){return t}}),u.computed=s}return{esModule:r,exports:c,options:u}}},192:function(e,t,n){var o=n(0)(n(197),n(198),null,null);e.exports=o.exports},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title"],methods:{click_remove:function(){this.$emit("remove")}}}},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(e._s(e.title)),n("button",{on:{click:e.click_remove}},[e._v("X")])])},staticRenderFns:[]}}});
//# sourceMappingURL=1.chunk.js.map