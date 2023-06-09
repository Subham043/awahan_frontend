exports.ids = [2];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("515965d6", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_style_index_0_id_7d91e630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_style_index_0_id_7d91e630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_style_index_0_id_7d91e630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_style_index_0_id_7d91e630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_style_index_0_id_7d91e630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart-btn[data-v-7d91e630]{display:inline-block;border-radius:5px;outline:none;border:1px dotted #2e8094;background-color:#2d8094;color:#fff;font-size:14px;padding:10px 20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/change-password.vue?vue&type=template&id=7d91e630&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"category-view\" data-v-7d91e630><div class=\"category-image\" data-v-7d91e630><img src=\"https://staticinm2.ishalife.com/in/pub/media/catalog/category/3_Web.jpg\" alt=\"Clothing & Accessories\" title=\"Clothing & Accessories\" class=\"image\" data-v-7d91e630></div></div> <section class=\"about-sec about-sec-product\" data-v-7d91e630><div class=\"container\" data-v-7d91e630><h2 data-v-7d91e630><span class=\"heading-span-clr\" data-v-7d91e630>Change</span> <span class=\"heading-2nd\" data-v-7d91e630>Password</span></h2> <div class=\"w-100\" data-v-7d91e630><hr role=\"tournament6\" data-v-7d91e630></div></div></section> <div class=\"container\" data-v-7d91e630><div class=\"row\" data-v-7d91e630><div class=\"col-lg-12 col-md-12 col-sm-12 col-cart\" data-v-7d91e630><form class=\"row g-3\" data-v-7d91e630><div class=\"col-md-4\" data-v-7d91e630><label for=\"old_password\" class=\"form-label\" data-v-7d91e630>Old Password</label> <input type=\"password\" id=\"old_password\" class=\"form-control\" data-v-7d91e630></div> <div class=\"col-md-4\" data-v-7d91e630><label for=\"password\" class=\"form-label\" data-v-7d91e630>Password</label> <input type=\"password\" id=\"password\" class=\"form-control\" data-v-7d91e630></div> <div class=\"col-md-4\" data-v-7d91e630><label for=\"confirm_password\" class=\"form-label\" data-v-7d91e630>Confirm Password</label> <input type=\"password\" id=\"confirm_password\" class=\"form-control\" data-v-7d91e630></div> <div class=\"col-12\" data-v-7d91e630><button type=\"submit\" class=\"cart-btn\" data-v-7d91e630>SAVE</button></div></form></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/change-password.vue?vue&type=template&id=7d91e630&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/change-password.vue?vue&type=script&lang=js&
/* harmony default export */ var change_passwordvue_type_script_lang_js_ = ({
  name: "AccountPage",
  layout: "MainPageLayout",

  data() {
    return {};
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  }

});
// CONCATENATED MODULE: ./pages/change-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_change_passwordvue_type_script_lang_js_ = (change_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/change-password.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_change_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d91e630",
  "004e45b8"
  
)

/* harmony default export */ var change_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=change-password.js.map