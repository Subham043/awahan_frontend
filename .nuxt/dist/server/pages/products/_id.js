exports.ids = [7];
exports.modules = {

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6716f488", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_49c89e3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_49c89e3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_49c89e3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_49c89e3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_49c89e3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart-btn[data-v-49c89e3e]{width:auto;border:none;background-color:#2e8094;color:#fff;padding:15px 25px;border-radius:5px;margin-left:50px}.cart-btn[data-v-49c89e3e],.ctrl-btn[data-v-49c89e3e]{display:inline-block;outline:none}.ctrl-btn[data-v-49c89e3e]{width:40px;height:40px;border-radius:20px;border:1px dotted #2e8094;font-size:30px;line-height:0}.counter-label[data-v-49c89e3e]{font-size:35px;margin:0 15px;border:none;text-align:center;max-width:50px;display:inline-block}.note-underline[data-v-49c89e3e]{border-bottom:1px solid #d63384;padding-bottom:5px}.tab-slot-cont[data-v-49c89e3e]{padding:0 10px;font-size:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=template&id=49c89e3e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"category-view\" data-v-49c89e3e><div class=\"category-image\" data-v-49c89e3e><img src=\"https://staticinm2.ishalife.com/in/pub/media/catalog/category/3_Web.jpg\" alt=\"Clothing & Accessories\" title=\"Clothing & Accessories\" class=\"image\" data-v-49c89e3e></div></div> "), _vm._ssrNode("<div class=\"container my-5\" data-v-49c89e3e>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-49c89e3e>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-12\" data-v-49c89e3e>", "</div>", [_vm._ssrNode("<div class=\"image-container\" data-v-49c89e3e>", "</div>", [_c('client-only', [_c('ProductZoomer', {
    attrs: {
      "base-images": _vm.images,
      "base-zoomer-options": _vm.zoomerOptions
    }
  })], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-12\" data-v-49c89e3e>", "</div>", [_vm._ssrNode("<div class=\"detail-container\" data-v-49c89e3e>", "</div>", [_vm._ssrNode("<h4 data-v-49c89e3e>Organic Unisex T Shirt Harvest Green 11-12 yrs</h4> <label for class=\"d-flex flex-wrap align-items-center my-3\" data-v-49c89e3e><h3 class=\"m-0\" data-v-49c89e3e>₹ 360</h3> <p class=\"m-0 p-0 px-2\" data-v-49c89e3e>(Incl. of all taxes)</p></label> <p data-v-49c89e3e>Unisex cotton t-shirt with 'Harvest the Ultimate' embroidered in green.</p> <div class=\"cart-btn-container my-4\" data-v-49c89e3e><div class=\"d-flex flex-wrap align-items-center\" data-v-49c89e3e><div class=\"d-flex flex-wrap align-items-center\" data-v-49c89e3e><button class=\"ctrl-btn\" data-v-49c89e3e>-</button> <input type=\"text\" value=\"1\" class=\"counter-label\" data-v-49c89e3e> <button class=\"ctrl-btn\" data-v-49c89e3e>+</button></div> <button class=\"cart-btn\" data-v-49c89e3e>ADD TO CART</button></div></div> <div class=\"shipping-note-container mb-5\" data-v-49c89e3e><p data-v-49c89e3e><code class=\"note-underline\" data-v-49c89e3e>Shipping Note:</code></p> <ul data-v-49c89e3e><li data-v-49c89e3e>Free Shipping on all orders of Rs 590 and above.</li> <li data-v-49c89e3e>All orders shall be dispatched within 24-48 hours except on bank holidays</li> <li data-v-49c89e3e>Delivery within India is usually completed within 5 - 10 working days depending on the location.</li></ul></div> "), _vm._ssrNode("<div class=\"tab-container\" data-v-49c89e3e>", "</div>", [_c('el-tabs', {
    model: {
      value: _vm.activeName,
      callback: function ($$v) {
        _vm.activeName = $$v;
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "name": "first"
    }
  }, [_c('div', {
    staticClass: "tab-slot-cont",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v(" Description")]), _vm._v(" "), _c('div', {
    staticClass: "tab-content-cont"
  }, [_c('p', [_vm._v("This unisex cotton t-shirt comes with an embroidery of 'Harvest the Ultimate' along with a distinctive design. Made of pure cotton fabric, it gives your child comfort and ease of movement.")])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "name": "second"
    }
  }, [_c('div', {
    staticClass: "tab-slot-cont",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v(" Details")]), _vm._v(" "), _c('div', {
    staticClass: "tab-content-cont"
  }, [_c('ul', [_c('li', [_vm._v("Fabric: Cotton")]), _vm._v(" "), _c('li', [_vm._v("Color: Light green")]), _vm._v(" "), _c('li', [_vm._v("Pattern: Round neck, Sleeveless")]), _vm._v(" "), _c('li', [_vm._v("Print: Embroidered tree motif")])])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "name": "third"
    }
  }, [_c('div', {
    staticClass: "tab-slot-cont",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v(" Additional Information")]), _vm._v(" "), _c('div', {
    staticClass: "tab-content-cont"
  }, [_c('ul', [_c('li', [_vm._v("Free Shipping on all orders of Rs 590 and above.")]), _vm._v(" "), _c('li', [_vm._v("EMI available on orders above Rs 3,000 on select credit cards")]), _vm._v(" "), _c('li', [_vm._v("We accept Credit or Debit Cards, Net Banking, Mobile Wallets, and UPI. All International and Indian cards are accepted.")]), _vm._v(" "), _c('li', [_vm._v("View our Return and Refund Policy")])])])])], 1)], 1)], 2)])], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=template&id=49c89e3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "ProductDetailPage",
  layout: "MainPageLayout",

  data() {
    return {
      graphPer: 67,
      activeName: 'first',
      images: {
        thumbs: [{
          id: 1,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }, {
          id: 2,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg"
        }, {
          id: 3,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg"
        }, {
          id: 4,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg"
        }, {
          id: 5,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }],
        normal_size: [{
          id: 1,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }, {
          id: 2,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg"
        }, {
          id: 3,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg"
        }, {
          id: 4,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg"
        }, {
          id: 5,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }],
        large_size: [{
          id: 1,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }, {
          id: 2,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg"
        }, {
          id: 3,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg"
        }, {
          id: 4,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg"
        }, {
          id: 5,
          url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg"
        }]
      },
      zoomerOptions: {
        zoomFactor: 3,
        // scale for zoomer
        pane: "pane",
        // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300,
        // how long after the zoomer take effects
        move_by_click: true,
        // move image by click thumb image or by mouseover
        scroll_items: 5,
        // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb",
        // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "bottom",
        zoomer_pane_position: "right"
      }
    };
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {}
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/products/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49c89e3e",
  "745a2fb3"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map