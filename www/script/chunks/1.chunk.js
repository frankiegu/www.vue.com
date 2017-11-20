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
<<<<<<< HEAD
 * @date: 2017/11/14 10:50:52
 * -------------------------------------------------------------
 */
webpackJsonp([1],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/opt/www/www.vue.com/src/js/src/views/itemx.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] itemx.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a040901", Component.options)
  } else {
    hotAPI.reload("data-v-7a040901", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        title: String
    },
    methods: {
        remove: function remove() {
            this.$emit('remove');
        }
    }
});

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v(_vm._s(_vm.title)), _c('button', {
    on: {
      "click": _vm.remove
    }
  }, [_vm._v("X")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a040901", module.exports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

});
=======
 * @date: 2017/10/11 18:09:23
 * -------------------------------------------------------------
 */
webpackJsonp([1],{0:function(e,t){e.exports=function(e,t,n,o){var r,c=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,c=e.default);var u="function"==typeof c?c.options:c;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var s=Object.create(u.computed||null);Object.keys(o).forEach(function(e){var t=o[e];s[e]=function(){return t}}),u.computed=s}return{esModule:r,exports:c,options:u}}},192:function(e,t,n){var o=n(0)(n(197),n(198),null,null);e.exports=o.exports},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title"],methods:{click_remove:function(){this.$emit("remove")}}}},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(e._s(e.title)),n("button",{on:{click:e.click_remove}},[e._v("X")])])},staticRenderFns:[]}}});
>>>>>>> 6de3aa95aca6842f5e64f186748b05f9f8daac50
//# sourceMappingURL=1.chunk.js.map