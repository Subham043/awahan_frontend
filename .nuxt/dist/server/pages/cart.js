exports.ids = [1];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("25c0d8b4", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_8dcd342a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_8dcd342a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_8dcd342a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_8dcd342a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_8dcd342a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-primary[data-v-8dcd342a]{--bs-table-bg:rgba(45,127,148,0.2902);--bs-table-striped-bg:rgba(45,127,148,0.2902);--bs-table-striped-color:rgba(45,127,148,0.2902);--bs-table-active-bg:#bacbe6;--bs-table-active-color:rgba(45,127,148,0.2902);--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:rgba(45,127,148,0.2902);color:#000;border-color:rgba(45,127,148,.2902);vertical-align:middle}.ctrl-btn[data-v-8dcd342a]{display:inline-block;width:30px;height:30px;border-radius:15px;outline:none;border:1px dotted #2e8094;font-size:30px;line-height:0}.del-btn[data-v-8dcd342a]{font-size:14px;padding:5px 15px}.chkout-btn[data-v-8dcd342a],.del-btn[data-v-8dcd342a]{display:inline-block;border-radius:5px;outline:none;border:1px dotted #2e8094;background-color:#2d8094;color:#fff;margin-top:15px}.chkout-btn[data-v-8dcd342a]{width:70%;font-size:15px;padding:10px 15px}.counter-label[data-v-8dcd342a]{font-size:25px;margin:0 5px;border:none;max-width:35px;display:inline-block;text-align:center}td[data-v-8dcd342a],th[data-v-8dcd342a]{vertical-align:middle}.cart-container[data-v-8dcd342a]{text-decoration:none;display:inline;color:#000}.cart-container .col-img img[data-v-8dcd342a]{height:120px;-o-object-fit:contain;object-fit:contain}.cart-container .col-detail[data-v-8dcd342a]{padding:0 10px;width:70%}.cart-container .col-detail h5[data-v-8dcd342a],.cart-container .col-detail h6[data-v-8dcd342a]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:auto}.text-right[data-v-8dcd342a]{text-align:right}.table>:not(caption)>*>*[data-v-8dcd342a]{border-color:#2e8094}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=8dcd342a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"category-view\" data-v-8dcd342a><div class=\"category-image\" data-v-8dcd342a><img src=\"https://staticinm2.ishalife.com/in/pub/media/catalog/category/3_Web.jpg\" alt=\"Clothing & Accessories\" title=\"Clothing & Accessories\" class=\"image\" data-v-8dcd342a></div></div> <section class=\"about-sec about-sec-product\" data-v-8dcd342a><div class=\"container\" data-v-8dcd342a><h2 data-v-8dcd342a><span class=\"heading-span-clr\" data-v-8dcd342a>Shopping</span> <span class=\"heading-2nd\" data-v-8dcd342a>Cart</span></h2> <div class=\"w-100\" data-v-8dcd342a><hr role=\"tournament6\" data-v-8dcd342a></div></div></section> "), _vm._ssrNode("<div class=\"container\" data-v-8dcd342a>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-8dcd342a>", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-7 col-sm-12 col-cart\" data-v-8dcd342a>", "</div>", [_vm._ssrNode("<table class=\"table\" style=\"width: 100%;\" data-v-8dcd342a>", "</table>", [_vm._ssrNode("<thead data-v-8dcd342a><tr class=\"table-primary\" data-v-8dcd342a><th scope=\"col\" data-v-8dcd342a>Product</th> <th scope=\"col\" class=\"text-center\" data-v-8dcd342a>Quantity</th> <th scope=\"col\" class=\"text-center\" data-v-8dcd342a>Sub Total</th></tr></thead> "), _vm._ssrNode("<tbody data-v-8dcd342a>", "</tbody>", [_vm._ssrNode("<tr class=\"py-4\" data-v-8dcd342a>", "</tr>", [_vm._ssrNode("<td style=\"width: 50%;\" data-v-8dcd342a>", "</td>", [_c('NuxtLink', {
    staticClass: "cart-container",
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-auto col-img"
  }, [_c('img', {
    attrs: {
      "src": "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-auto col-detail"
  }, [_c('h5', [_vm._v("Organic Unisex T Shirt Harvest Green 11-12 yrs")]), _vm._v(" "), _c('p', {
    staticClass: "m-0"
  }, [_vm._v("₹ 360 (Incl. of all taxes)")]), _vm._v(" "), _c('button', {
    staticClass: "del-btn"
  }, [_vm._v("Remove")])])])])], 1), _vm._ssrNode(" <td class=\"text-center\" style=\"width: 30%;\" data-v-8dcd342a><div class=\"cart-btn-container\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center justify-content-center\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center\" data-v-8dcd342a><button class=\"ctrl-btn\" data-v-8dcd342a>-</button> <input type=\"text\" value=\"1\" class=\"counter-label\" data-v-8dcd342a> <button class=\"ctrl-btn\" data-v-8dcd342a>+</button></div></div></div></td> <th scope=\"row\" class=\"text-center\" style=\"width: 20%;\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 360</h6></th>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<tr class=\"py-4\" data-v-8dcd342a>", "</tr>", [_vm._ssrNode("<td style=\"width: 50%;\" data-v-8dcd342a>", "</td>", [_c('NuxtLink', {
    staticClass: "cart-container",
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-auto col-img"
  }, [_c('img', {
    attrs: {
      "src": "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-auto col-detail"
  }, [_c('h5', [_vm._v("Organic Unisex T Shirt Harvest Green 11-12 yrs")]), _vm._v(" "), _c('p', {
    staticClass: "m-0"
  }, [_vm._v("₹ 360 (Incl. of all taxes)")]), _vm._v(" "), _c('button', {
    staticClass: "del-btn"
  }, [_vm._v("Remove")])])])])], 1), _vm._ssrNode(" <td class=\"text-center\" style=\"width: 30%;\" data-v-8dcd342a><div class=\"cart-btn-container\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center justify-content-center\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center\" data-v-8dcd342a><button class=\"ctrl-btn\" data-v-8dcd342a>-</button> <input type=\"text\" value=\"1\" class=\"counter-label\" data-v-8dcd342a> <button class=\"ctrl-btn\" data-v-8dcd342a>+</button></div></div></div></td> <th scope=\"row\" class=\"text-center\" style=\"width: 20%;\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 360</h6></th>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<tr class=\"py-4\" data-v-8dcd342a>", "</tr>", [_vm._ssrNode("<td style=\"width: 50%;\" data-v-8dcd342a>", "</td>", [_c('NuxtLink', {
    staticClass: "cart-container",
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-auto col-img"
  }, [_c('img', {
    attrs: {
      "src": "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-auto col-detail"
  }, [_c('h5', [_vm._v("Organic Unisex T Shirt Harvest Green 11-12 yrs")]), _vm._v(" "), _c('p', {
    staticClass: "m-0"
  }, [_vm._v("₹ 360 (Incl. of all taxes)")]), _vm._v(" "), _c('button', {
    staticClass: "del-btn"
  }, [_vm._v("Remove")])])])])], 1), _vm._ssrNode(" <td class=\"text-center\" style=\"width: 30%;\" data-v-8dcd342a><div class=\"cart-btn-container\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center justify-content-center\" data-v-8dcd342a><div class=\"d-flex flex-wrap align-items-center\" data-v-8dcd342a><button class=\"ctrl-btn\" data-v-8dcd342a>-</button> <input type=\"text\" value=\"1\" class=\"counter-label\" data-v-8dcd342a> <button class=\"ctrl-btn\" data-v-8dcd342a>+</button></div></div></div></td> <th scope=\"row\" class=\"text-center\" style=\"width: 20%;\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 360</h6></th>")], 2)], 2)], 2)]), _vm._ssrNode(" <div class=\"col-lg-4 col-md-5 col-sm-12 col-summary\" data-v-8dcd342a><table class=\"table\" style=\"width: 100%;\" data-v-8dcd342a><thead data-v-8dcd342a><tr class=\"table-primary\" data-v-8dcd342a><th scope=\"col\" colspan=\"2\" data-v-8dcd342a>Summary</th></tr> <tr style=\"border: none;\" data-v-8dcd342a><th scope=\"col\" class=\"text-mute\" style=\"font-size: 16px;border: none;\" data-v-8dcd342a>\n                                Subtotal\n                                <br data-v-8dcd342a> <span style=\"font-size: 12px;\" data-v-8dcd342a>(Inclusive of all taxes)</span></th> <th scope=\"col\" class=\"text-right\" style=\"border: none;\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 360</h6></th></tr> <tr class=\"border-none\" data-v-8dcd342a><th scope=\"col\" class=\"text-mute\" style=\"font-size: 16px;\" data-v-8dcd342a>\n                                Shipping\n                                <br data-v-8dcd342a> <span style=\"font-size: 12px;\" data-v-8dcd342a>(Shipping Charges)</span></th> <th scope=\"col\" class=\"text-right\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 20</h6></th></tr> <tr class=\"table-primary border-none\" data-v-8dcd342a><th scope=\"col\" data-v-8dcd342a><h6 data-v-8dcd342a>ORDER TOTAL</h6></th> <th scope=\"col\" class=\"text-right\" data-v-8dcd342a><h6 data-v-8dcd342a>₹ 380</h6></th></tr></thead></table> <div class=\"text-center\" data-v-8dcd342a><button class=\"chkout-btn\" data-v-8dcd342a>PROCEED TO CHECKOUT</button></div></div>")], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=8dcd342a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&
/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  name: "CartPage",
  layout: "MainPageLayout",

  data() {
    return {};
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  }

});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/cart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8dcd342a",
  "30411078"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart.js.map