require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8706cb6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f8706cb6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8706cb6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8706cb6", Component.options)
  } else {
    hotAPI.reload("data-v-f8706cb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fetch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_logo_png__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_images_logo_png__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      logo: __WEBPACK_IMPORTED_MODULE_3__assets_images_logo_png___default.a
    };
  },

  computed: {
    authenticated: function authenticated() {
      return this.$store.getters.authenticated;
    }
  },
  methods: {
    wxlogin: function wxlogin() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var infoResult, loginResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_fetch__["a" /* getUserProfile */])();

              case 2:
                infoResult = _context.sent;
                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_fetch__["c" /* wxlogin */])();

              case 5:
                loginResult = _context.sent;

                if (!(infoResult.userInfo === '' || loginResult.code === '')) {
                  _context.next = 8;
                  break;
                }

                throw new Error('登录失败，请重试');

              case 8:

                _this.$store.dispatch('login', {
                  code: loginResult.code,
                  userInfo: infoResult.userInfo
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login-box"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('image', {
    attrs: {
      "src": _vm.logo
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Wtbuer")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("武汉工商学院学生社区")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("咳咳，说点啥?")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("我在划水，别打扰我 💦")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("Emmmm，我说点啥？")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("开发君：🙇🏻‍别嫁人，我努力！")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("由人工智能学院学生运营 🤖")])]), _vm._v(" "), _c('div', {
    staticClass: "login-action",
    staticStyle: {
      "bottom": "20px"
    }
  }, [_c('van-button', {
    attrs: {
      "type": "primary",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.wxlogin
    }
  }, [_vm._v("微信账号快速登录")]), _vm._v(" "), _c('div', {
    staticClass: "login-tips"
  }, [_vm._v("提示：登录后绑定教务账号才能查阅课表噢~")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-bg"
  }, [_c('image', {
    staticStyle: {
      "background-image": "url('http://tva1.sinaimg.cn/large/002ZE6Hrgy1guerewdsnkj62s02307wh02.jpg')"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f8706cb6", esExports)
  }
}

/***/ })

},[139]);