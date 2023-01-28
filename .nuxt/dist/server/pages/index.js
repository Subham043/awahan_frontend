exports.ids = [5,3,4];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d82dda1e", content, true, context)
};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.ca4ae34.jpg";

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSlideComponent_vue_vue_type_style_index_0_id_325d1f8d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSlideComponent_vue_vue_type_style_index_0_id_325d1f8d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSlideComponent_vue_vue_type_style_index_0_id_325d1f8d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSlideComponent_vue_vue_type_style_index_0_id_325d1f8d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSlideComponent_vue_vue_type_style_index_0_id_325d1f8d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-box[data-v-325d1f8d]{padding:0 14px!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TwoSlideSlider.vue?vue&type=template&id=79852bd4&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"slide-2-slider\">", "</div>", [_vm._ssrNode("<div class=\"row p-rel\">", "</div>", [_vm.banner.length > 0 ? [_c('VueSlickCarousel', _vm._b({
    ref: "slickBanner"
  }, 'VueSlickCarousel', _vm.slickOptions, false), [_vm._l(_vm.involved, function (idata) {
    return [_c('div', {
      key: idata.id,
      staticClass: "col-md-6 cp"
    }, [_c('div', {
      staticClass: "inv-card"
    }, [_c('div', {
      staticClass: "inv-card-img"
    }, [_c('img', {
      attrs: {
        "src": idata.image
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "inv-card-content txt-center"
    }, [_c('h3', [_vm._v(_vm._s(idata.heading))]), _vm._v(" "), _c('div', {
      staticClass: "p5"
    }, [_c('div', {
      staticClass: "inv-card-bootom-btn row"
    }, [_c('div', {
      staticClass: "col-6 inv-left-btn"
    }, [_vm._v("\n                                                    Know More\n                                                ")]), _vm._v(" "), _c('div', {
      staticClass: "col-6 inv-right-btn"
    }, [_vm._v("\n                                                    Join Now\n                                                ")])])])])])])])];
  })], 2), _vm._ssrNode(" <button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow two-slide-arrow-left\"><i class=\"far fa-arrow-alt-circle-left\"></i></button> <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow two-slide-arrow-right\"><i class=\"far fa-arrow-alt-circle-right\"></i></button>")] : _vm._e()], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TwoSlideSlider.vue?vue&type=template&id=79852bd4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TwoSlideSlider.vue?vue&type=script&lang=js&
/* harmony default export */ var TwoSlideSlidervue_type_script_lang_js_ = ({
  name: "MultiSlide",

  data() {
    return {
      banner: [{
        id: 1,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 2,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 3,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 1,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 2,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 3,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }],
      involved: [{
        id: 1,
        heading: 'Tree Plantation',
        image: "https://dummyimage.com/608x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 2,
        heading: 'Organic Vilage',
        image: "https://dummyimage.com/608x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 3,
        heading: 'Lake Restoration',
        image: "https://dummyimage.com/608x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 4,
        heading: 'Lake Restoration',
        image: "https://dummyimage.com/608x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }],
      slickOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      }
    };
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {} // this.getBlogs();
    // this.getBanners();
    // this.getVideoBanner();
    // this.getGalleryImages();

  },

  methods: {
    nextNavClick() {
      this.$refs.slickBanner.next();
    },

    prevNavClick() {
      this.$refs.slickBanner.prev();
    },

    async getBlogs() {
      this.loading = true;

      try {
        const response = await this.$axios.get('https://hrudayaspandana.org/blog/wp-json/wp/v2/posts');
        this.blogs = response.data; // console.log(this.blogs);
      } catch (e) {} finally {
        this.loading = false;
      }
    },

    async formHandler() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const formData = {
          'name': this.name,
          'email': this.email,
          'phone': this.phone,
          'ebook': this.ebook,
          'event': this.event,
          'blog': this.blog,
          'crossword': this.crossword,
          'newsletter': this.newsletter
        };
        const response = await this.$publicApi.post('/api/subscription/create', formData); // eslint-disable-line

        this.$toast.success('Subscribed successfully');
        this.name = '';
        this.email = '';
        this.phone = '';
        this.ebook = false;
        this.event = false;
        this.blog = false;
        this.crossword = false;
        this.newsletter = false;
        this.$refs.form.reset();
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response10, _err$response10$data, _err$response11, _err$response11$data, _err$response12, _err$response12$data;

        // console.log(err.response);// eslint-disable-line
        this.$refs.form.setErrors({
          name: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : _err$response$data$er.name,
          email: err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email,
          phone: err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : _err$response3$data$e.phone,
          ebook: err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.ebook,
          event: err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : _err$response5$data$e.event,
          blog: err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.blog,
          crossword: err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : _err$response7$data$e.crossword,
          newsletter: err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.newsletter
        });
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.message);
        if (err !== null && err !== void 0 && (_err$response11 = err.response) !== null && _err$response11 !== void 0 && (_err$response11$data = _err$response11.data) !== null && _err$response11$data !== void 0 && _err$response11$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : _err$response12$data.error);
      } finally {
        loading.close();
      }
    },

    async getBanners() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/banner/random'); // eslint-disable-line

        this.banner = response.data.data;
      } catch (err) {
        var _err$response13, _err$response13$data, _err$response14, _err$response14$data, _err$response15, _err$response15$data, _err$response16, _err$response16$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response13 = err.response) !== null && _err$response13 !== void 0 && (_err$response13$data = _err$response13.data) !== null && _err$response13$data !== void 0 && _err$response13$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : _err$response14$data.message);
        if (err !== null && err !== void 0 && (_err$response15 = err.response) !== null && _err$response15 !== void 0 && (_err$response15$data = _err$response15.data) !== null && _err$response15$data !== void 0 && _err$response15$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : _err$response16$data.error);
      } finally {
        loading.close();
      }
    },

    async getGalleryImages() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/gallery-image/random'); // eslint-disable-line

        this.galleryImages = response.data.data;
      } catch (err) {
        var _err$response17, _err$response17$data, _err$response18, _err$response18$data, _err$response19, _err$response19$data, _err$response20, _err$response20$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response17 = err.response) !== null && _err$response17 !== void 0 && (_err$response17$data = _err$response17.data) !== null && _err$response17$data !== void 0 && _err$response17$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : _err$response18$data.message);
        if (err !== null && err !== void 0 && (_err$response19 = err.response) !== null && _err$response19 !== void 0 && (_err$response19$data = _err$response19.data) !== null && _err$response19$data !== void 0 && _err$response19$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : _err$response20$data.error);
      } finally {
        loading.close();
      }
    },

    async getVideoBanner() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/banner-video/display'); // eslint-disable-line

        this.videoBannerImage = response.data.data.image;
        this.videoBannerVideo = response.data.data.video;
      } catch (err) {
        var _err$response21, _err$response21$data, _err$response22, _err$response22$data, _err$response23, _err$response23$data, _err$response24, _err$response24$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response21 = err.response) !== null && _err$response21 !== void 0 && (_err$response21$data = _err$response21.data) !== null && _err$response21$data !== void 0 && _err$response21$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : _err$response22$data.message);
        if (err !== null && err !== void 0 && (_err$response23 = err.response) !== null && _err$response23 !== void 0 && (_err$response23$data = _err$response23.data) !== null && _err$response23$data !== void 0 && _err$response23$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : _err$response24$data.error);
      } finally {
        loading.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/TwoSlideSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TwoSlideSlidervue_type_script_lang_js_ = (TwoSlideSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/TwoSlideSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TwoSlideSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2528ad30"
  
)

/* harmony default export */ var TwoSlideSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3b37931b", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MultiSlideComponent.vue?vue&type=template&id=325d1f8d&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [[_vm._ssrNode("<div class=\"multi-slider-main\" data-v-325d1f8d>", "</div>", [_vm.banner.length > 0 ? [_c('VueSlickCarousel', _vm._b({
    ref: "slickBanner"
  }, 'VueSlickCarousel', _vm.slickOptions, false), [_vm._l(_vm.banner, function (item, i) {
    return [_c('div', {
      key: i,
      staticClass: "slide-box"
    }, [_c('div', {
      staticClass: "slide-box-collsp"
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": item.image
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "slide-heading-box"
    }, [_c('h4', [_vm._v("Health")]), _vm._v(" "), _c('p', [_vm._v("Lorem Ipsum is simply dummy text of the printing")])]), _vm._v(" "), _c('div', {
      staticClass: "middle"
    }, [_c('div', {
      staticClass: "middle-box"
    }, [_c('h3', [_vm._v("Help us to educate")]), _vm._v(" "), _c('p', [_vm._v("Lorem Ipsum is simply dummy text of the printing. \n                                               Lorem Ipsum is simply dummy text of the printing.\n                                            ")])])])])])];
  })], 2), _vm._ssrNode(" <button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow multi-slider-left\" data-v-325d1f8d><i class=\"far fa-arrow-alt-circle-left\" data-v-325d1f8d></i></button> <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow multi-slider-right\" data-v-325d1f8d><i class=\"far fa-arrow-alt-circle-right\" data-v-325d1f8d></i></button>")] : _vm._e()], 2)]], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MultiSlideComponent.vue?vue&type=template&id=325d1f8d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MultiSlideComponent.vue?vue&type=script&lang=js&
/* harmony default export */ var MultiSlideComponentvue_type_script_lang_js_ = ({
  name: "MultiSlide",

  data() {
    return {
      banner: [{
        id: 1,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 2,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 3,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 1,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 2,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }, {
        id: 3,
        name: '',
        image: 'https://dummyimage.com/370x450/000/fff'
      }],
      slickOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      }
    };
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {} // this.getBlogs();
    // this.getBanners();
    // this.getVideoBanner();
    // this.getGalleryImages();

  },

  methods: {
    nextNavClick() {
      this.$refs.slickBanner.next();
    },

    prevNavClick() {
      this.$refs.slickBanner.prev();
    },

    async getBlogs() {
      this.loading = true;

      try {
        const response = await this.$axios.get('https://hrudayaspandana.org/blog/wp-json/wp/v2/posts');
        this.blogs = response.data; // console.log(this.blogs);
      } catch (e) {} finally {
        this.loading = false;
      }
    },

    async formHandler() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const formData = {
          'name': this.name,
          'email': this.email,
          'phone': this.phone,
          'ebook': this.ebook,
          'event': this.event,
          'blog': this.blog,
          'crossword': this.crossword,
          'newsletter': this.newsletter
        };
        const response = await this.$publicApi.post('/api/subscription/create', formData); // eslint-disable-line

        this.$toast.success('Subscribed successfully');
        this.name = '';
        this.email = '';
        this.phone = '';
        this.ebook = false;
        this.event = false;
        this.blog = false;
        this.crossword = false;
        this.newsletter = false;
        this.$refs.form.reset();
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response10, _err$response10$data, _err$response11, _err$response11$data, _err$response12, _err$response12$data;

        // console.log(err.response);// eslint-disable-line
        this.$refs.form.setErrors({
          name: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : _err$response$data$er.name,
          email: err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email,
          phone: err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : _err$response3$data$e.phone,
          ebook: err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.ebook,
          event: err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : _err$response5$data$e.event,
          blog: err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.blog,
          crossword: err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : _err$response7$data$e.crossword,
          newsletter: err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.newsletter
        });
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.message);
        if (err !== null && err !== void 0 && (_err$response11 = err.response) !== null && _err$response11 !== void 0 && (_err$response11$data = _err$response11.data) !== null && _err$response11$data !== void 0 && _err$response11$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : _err$response12$data.error);
      } finally {
        loading.close();
      }
    },

    async getBanners() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/banner/random'); // eslint-disable-line

        this.banner = response.data.data;
      } catch (err) {
        var _err$response13, _err$response13$data, _err$response14, _err$response14$data, _err$response15, _err$response15$data, _err$response16, _err$response16$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response13 = err.response) !== null && _err$response13 !== void 0 && (_err$response13$data = _err$response13.data) !== null && _err$response13$data !== void 0 && _err$response13$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : _err$response14$data.message);
        if (err !== null && err !== void 0 && (_err$response15 = err.response) !== null && _err$response15 !== void 0 && (_err$response15$data = _err$response15.data) !== null && _err$response15$data !== void 0 && _err$response15$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : _err$response16$data.error);
      } finally {
        loading.close();
      }
    },

    async getGalleryImages() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/gallery-image/random'); // eslint-disable-line

        this.galleryImages = response.data.data;
      } catch (err) {
        var _err$response17, _err$response17$data, _err$response18, _err$response18$data, _err$response19, _err$response19$data, _err$response20, _err$response20$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response17 = err.response) !== null && _err$response17 !== void 0 && (_err$response17$data = _err$response17.data) !== null && _err$response17$data !== void 0 && _err$response17$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : _err$response18$data.message);
        if (err !== null && err !== void 0 && (_err$response19 = err.response) !== null && _err$response19 !== void 0 && (_err$response19$data = _err$response19.data) !== null && _err$response19$data !== void 0 && _err$response19$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : _err$response20$data.error);
      } finally {
        loading.close();
      }
    },

    async getVideoBanner() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get('/api/banner-video/display'); // eslint-disable-line

        this.videoBannerImage = response.data.data.image;
        this.videoBannerVideo = response.data.data.video;
      } catch (err) {
        var _err$response21, _err$response21$data, _err$response22, _err$response22$data, _err$response23, _err$response23$data, _err$response24, _err$response24$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response21 = err.response) !== null && _err$response21 !== void 0 && (_err$response21$data = _err$response21.data) !== null && _err$response21$data !== void 0 && _err$response21$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : _err$response22$data.message);
        if (err !== null && err !== void 0 && (_err$response23 = err.response) !== null && _err$response23 !== void 0 && (_err$response23$data = _err$response23.data) !== null && _err$response23$data !== void 0 && _err$response23$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : _err$response24$data.error);
      } finally {
        loading.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/MultiSlideComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiSlideComponentvue_type_script_lang_js_ = (MultiSlideComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/MultiSlideComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MultiSlideComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "325d1f8d",
  "549b571a"
  
)

/* harmony default export */ var MultiSlideComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b1.6c20851.jpg";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b2.fddce6c.jpg";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b3.7ef717c.jpg";

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68cef654_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68cef654_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68cef654_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68cef654_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68cef654_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error[data-v-68cef654]{color:red!important}.viewMoreBtn[data-v-68cef654]{background:transparent!important;border:none!important;outline:none!important;color:#ffaa49;font-weight:700}.viewMoreBtn[data-v-68cef654]:hover{text-decoration:underline}.tata[data-v-68cef654]{z-index:99999999!important}#certification p[data-v-68cef654]{margin-left:15px}.blog2[data-v-68cef654],.blog3[data-v-68cef654],.moretext[data-v-68cef654]{display:none}.pointer[data-v-68cef654]{cursor:pointer}.about .about-row .col-3-about .about-card h4 a[data-v-68cef654]{color:inherit;text-decoration:none}.text-hidden-3[data-v-68cef654]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:6;line-clamp:6;-webkit-box-orient:vertical}.slider-div-box[data-v-68cef654]{position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=68cef654&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<section class=\"banner\" data-v-68cef654>", "</section>", [_vm._ssrNode("<div class=\"wrapper-1\" data-v-68cef654>", "</div>", [_vm._ssrNode("<div class=\"slider-div-box\" data-v-68cef654>", "</div>", [_vm._ssrNode("<div class=\"regular slider\" data-v-68cef654>", "</div>", [_vm.banner.length > 0 ? [_c('VueSlickCarousel', _vm._b({
    ref: "slickBanner"
  }, 'VueSlickCarousel', _vm.slickOptions, false), [_c('img', {
    staticClass: "w-100",
    attrs: {
      "src": __webpack_require__(133)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "w-100",
    attrs: {
      "src": __webpack_require__(134)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "w-100",
    attrs: {
      "src": __webpack_require__(135)
    }
  })])] : _vm._e(), _vm._ssrNode(" <div data-v-68cef654><button type=\"button\" data-role=\"none\" class=\"slick-prev slick-arrow\" data-v-68cef654><i class=\"fas fa-long-arrow-alt-left\" data-v-68cef654></i></button> <button type=\"button\" data-role=\"none\" class=\"slick-next slick-arrow\" data-v-68cef654><i class=\"fas fa-long-arrow-alt-right\" data-v-68cef654></i></button></div>")], 2)])]), _vm._ssrNode(" <div class=\"row slider-btn-section\" data-v-68cef654><div class=\"col-4 slider-btn-bg\" data-v-68cef654><div class=\"sbtn-box txt-center\" data-v-68cef654>\n                    Donate now\n                </div></div> <div class=\"col-4 slider-btn-bg\" data-v-68cef654><div class=\"sbtn-box txt-center\" data-v-68cef654>\n                    Join us\n                </div></div> <div class=\"col-4 slider-btn-bg\" data-v-68cef654><div class=\"sbtn-box txt-center\" data-v-68cef654>\n                    Get involved\n                </div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"about-sec\" data-v-68cef654>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-68cef654>", "</div>", [_vm._ssrNode("<h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>About</span> <span class=\"heading-2nd\" data-v-68cef654>Aahwahan</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div> <div class=\"row\" data-v-68cef654><div class=\"col-md-4\" data-v-68cef654><div class=\"about-img-box\" data-v-68cef654><img" + _vm._ssrAttr("src", __webpack_require__(127)) + " class=\"w-100\" data-v-68cef654></div></div> <div class=\"col-md-8\" data-v-68cef654><div class=\"about-content\" data-v-68cef654><h3 data-v-68cef654>AAHWAHAN FOUNDATION</h3> <p data-v-68cef654>Aahwahan - is an NGO that is involved in promoting the welfare of the economically \n                            backward sections of the society by generating employment across various sectors. \n                            It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.\n                             Our constant efforts have touched the lives of people. We believe in community development. \n                             Urbanization has had an impact on the traditional economic systems in the country and has shifted\n                              the socioeconomic preferences.\n                        </p></div></div></div> "), _c('MultiSlideComponent')], 2)]), _vm._ssrNode(" <a href=\"https://online.flippingbook.com/view/418950909/\" data-fbo-id=\"065d1636d2\" data-fbo-ratio=\"3:2\" data-fbo-lightbox=\"yes\" data-fbo-width=\"100%\" data-fbo-height=\"80vh\" data-fbo-version=\"1\" class=\"fbo-embed\" style=\"max-width: 100%\" data-v-68cef654>Types Of Education</a> <section class=\"donate-sec\" data-v-68cef654><div class=\"container\" data-v-68cef654><h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>Donate for</span> <span class=\"heading-2nd\" data-v-68cef654>Cause</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div> <div class=\"row\" data-v-68cef654><div class=\"col-md-8\" data-v-68cef654><div class=\"about-content\" data-v-68cef654><h3 data-v-68cef654>We help around the world</h3> <p data-v-68cef654>Aahwahan - is an NGO that is involved in promoting the welfare of the economically \n                            backward sections of the society by generating employment across various sectors. \n                            It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.\n                             Our constant efforts have touched the lives of people. We believe in community development. \n                             Urbanization has had an impact on the traditional economic systems in the country and has shifted\n                              the socioeconomic preferences.\n                        </p></div></div> <div class=\"col-md-4\" data-v-68cef654><div class=\"about-img-box\" data-v-68cef654><img" + _vm._ssrAttr("src", __webpack_require__(127)) + " class=\"w-100\" data-v-68cef654></div></div></div></div></section> "), _vm._ssrNode("<section class=\"about-sec innovative\" data-v-68cef654>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-68cef654>", "</div>", [_vm._ssrNode("<h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>Our</span> <span class=\"heading-2nd\" data-v-68cef654>Innovative Initiatives</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div> <div class=\"row\" data-v-68cef654><div class=\"col-md-4\" data-v-68cef654><div class=\"about-img-box\" data-v-68cef654><img" + _vm._ssrAttr("src", __webpack_require__(127)) + " class=\"w-100\" data-v-68cef654></div></div> <div class=\"col-md-8\" data-v-68cef654><div class=\"about-content\" data-v-68cef654><h3 data-v-68cef654>We Give The Power To Change Lives</h3> <p data-v-68cef654>Aahwahan - is an NGO that is involved in promoting the welfare of the economically \n                            backward sections of the society by generating employment across various sectors. \n                            It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.\n                             Our constant efforts have touched the lives of people. We believe in community development. \n                             Urbanization has had an impact on the traditional economic systems in the country and has shifted\n                              the socioeconomic preferences.\n                        </p></div></div></div> "), _c('MultiSlideComponent')], 2)]), _vm._ssrNode(" <section class=\"about-sec environment\" data-v-68cef654><div class=\"container\" data-v-68cef654><div class=\"envi-heading txt-center\" data-v-68cef654><h2 data-v-68cef654><span class=\"heading-2nd\" data-v-68cef654>Environment</span></h2> <p data-v-68cef654>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p></div> <div class=\"row\" data-v-68cef654>" + _vm._ssrList(_vm.environment, function (edata) {
    return "<div class=\"col-md-4\" data-v-68cef654><div class=\"env-card\" data-v-68cef654><div class=\"env-card-body\" data-v-68cef654><div class=\"env-image-card\" data-v-68cef654><img" + _vm._ssrAttr("src", edata.image) + " data-v-68cef654></div> <div class=\"env-card-content\" data-v-68cef654><h3 data-v-68cef654>" + _vm._ssrEscape(_vm._s(edata.heading)) + "</h3> <p data-v-68cef654>" + _vm._ssrEscape(_vm._s(edata.description)) + "</p></div> <div class=\"env-card-bottom-btn\" data-v-68cef654>\n                                    Read More\n                                </div></div></div></div>";
  }) + "</div></div></section> "), _vm._ssrNode("<div class=\"about-sec involed\" data-v-68cef654>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-68cef654>", "</div>", [_vm._ssrNode("<div class=\"sec-heading\" data-v-68cef654><h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>Get</span> <span class=\"heading-2nd\" data-v-68cef654>Involved</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div></div> "), _c('TwoSlideSlider')], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"about-sec blog\" data-v-68cef654>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-68cef654>", "</div>", [_vm._ssrNode("<h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>Our</span> <span class=\"heading-2nd\" data-v-68cef654>Blogs</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div> <div class=\"row\" data-v-68cef654><div class=\"col-md-4\" data-v-68cef654><div class=\"about-img-box\" data-v-68cef654><img" + _vm._ssrAttr("src", __webpack_require__(127)) + " class=\"w-100\" data-v-68cef654></div></div> <div class=\"col-md-8\" data-v-68cef654><div class=\"about-content\" data-v-68cef654><h3 data-v-68cef654>We Give The Power To Change Lives</h3> <p data-v-68cef654>Aahwahan - is an NGO that is involved in promoting the welfare of the economically \n                            backward sections of the society by generating employment across various sectors. \n                            It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.\n                             Our constant efforts have touched the lives of people. We believe in community development. \n                             Urbanization has had an impact on the traditional economic systems in the country and has shifted\n                              the socioeconomic preferences.\n                        </p></div></div></div> "), _c('MultiSlideComponent')], 2)]), _vm._ssrNode(" <section class=\"about-sec achievements\" data-v-68cef654><div class=\"container\" data-v-68cef654><h2 data-v-68cef654><span class=\"heading-span-clr\" data-v-68cef654>Our</span> <span class=\"heading-2nd\" data-v-68cef654>Achievements</span></h2> <div class=\"w-50\" data-v-68cef654><hr role=\"tournament6\" data-v-68cef654></div></div> <div class=\"container-fluid\" data-v-68cef654></div></section>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=68cef654&scoped=true&

// EXTERNAL MODULE: ./components/TwoSlideSlider.vue + 4 modules
var TwoSlideSlider = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "MainPageLayout",

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      ebook: false,
      event: false,
      newsletter: false,
      crossword: false,
      blog: false,
      banner: [{
        id: 1,
        name: "",
        image: "logo.png"
      }, {
        id: 2,
        name: "",
        image: "b2.jpg"
      }, {
        id: 3,
        name: "",
        image: "b3.jpg"
      }],
      environment: [{
        id: 1,
        heading: "Tree Plantation",
        image: "https://dummyimage.com/390x220/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 2,
        heading: "Organic Vilage",
        image: "https://dummyimage.com/390x220/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 3,
        heading: "Lake Restoration",
        image: "https://dummyimage.com/390x220/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }],
      involved: [{
        id: 1,
        heading: "Tree Plantation",
        image: "https://dummyimage.com/640x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 2,
        heading: "Organic Vilage",
        image: "https://dummyimage.com/640x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 3,
        heading: "Lake Restoration",
        image: "https://dummyimage.com/640x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }, {
        id: 4,
        heading: "Lake Restoration",
        image: "https://dummyimage.com/640x280/000/fff",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      }],
      galleryImages: [],
      videoBannerImage: "",
      videoBannerVideo: "",
      dialogFormVisible: false,
      blogs: [],
      loading: false,
      slickOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }]
      }
    };
  },

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (false) {} // this.getBlogs();
    // this.getBanners();
    // this.getVideoBanner();
    // this.getGalleryImages();


    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=418950909';
    document.body.appendChild(script);
  },

  methods: {
    nextNavClick() {
      this.$refs.slickBanner.next();
    },

    prevNavClick() {
      this.$refs.slickBanner.prev();
    },

    async getBlogs() {
      this.loading = true;

      try {
        const response = await this.$axios.get("https://hrudayaspandana.org/blog/wp-json/wp/v2/posts");
        this.blogs = response.data; // console.log(this.blogs);
      } catch (e) {} finally {
        this.loading = false;
      }
    },

    async formHandler() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const formData = {
          "name": this.name,
          "email": this.email,
          "phone": this.phone,
          "ebook": this.ebook,
          "event": this.event,
          "blog": this.blog,
          "crossword": this.crossword,
          "newsletter": this.newsletter
        };
        const response = await this.$publicApi.post("/api/subscription/create", formData); // eslint-disable-line

        this.$toast.success("Subscribed successfully");
        this.name = "";
        this.email = "";
        this.phone = "";
        this.ebook = false;
        this.event = false;
        this.blog = false;
        this.crossword = false;
        this.newsletter = false;
        this.$refs.form.reset();
      } catch (err) {
        var _err$response, _err$response$data, _err$response$data$er, _err$response2, _err$response2$data, _err$response2$data$e, _err$response3, _err$response3$data, _err$response3$data$e, _err$response4, _err$response4$data, _err$response4$data$e, _err$response5, _err$response5$data, _err$response5$data$e, _err$response6, _err$response6$data, _err$response6$data$e, _err$response7, _err$response7$data, _err$response7$data$e, _err$response8, _err$response8$data, _err$response8$data$e, _err$response9, _err$response9$data, _err$response10, _err$response10$data, _err$response11, _err$response11$data, _err$response12, _err$response12$data;

        // console.log(err.response);// eslint-disable-line
        this.$refs.form.setErrors({
          name: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : _err$response$data$er.name,
          email: err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : (_err$response2$data$e = _err$response2$data.errors) === null || _err$response2$data$e === void 0 ? void 0 : _err$response2$data$e.email,
          phone: err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : (_err$response3$data = _err$response3.data) === null || _err$response3$data === void 0 ? void 0 : (_err$response3$data$e = _err$response3$data.errors) === null || _err$response3$data$e === void 0 ? void 0 : _err$response3$data$e.phone,
          ebook: err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : (_err$response4$data = _err$response4.data) === null || _err$response4$data === void 0 ? void 0 : (_err$response4$data$e = _err$response4$data.errors) === null || _err$response4$data$e === void 0 ? void 0 : _err$response4$data$e.ebook,
          event: err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : (_err$response5$data = _err$response5.data) === null || _err$response5$data === void 0 ? void 0 : (_err$response5$data$e = _err$response5$data.errors) === null || _err$response5$data$e === void 0 ? void 0 : _err$response5$data$e.event,
          blog: err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : (_err$response6$data = _err$response6.data) === null || _err$response6$data === void 0 ? void 0 : (_err$response6$data$e = _err$response6$data.errors) === null || _err$response6$data$e === void 0 ? void 0 : _err$response6$data$e.blog,
          crossword: err === null || err === void 0 ? void 0 : (_err$response7 = err.response) === null || _err$response7 === void 0 ? void 0 : (_err$response7$data = _err$response7.data) === null || _err$response7$data === void 0 ? void 0 : (_err$response7$data$e = _err$response7$data.errors) === null || _err$response7$data$e === void 0 ? void 0 : _err$response7$data$e.crossword,
          newsletter: err === null || err === void 0 ? void 0 : (_err$response8 = err.response) === null || _err$response8 === void 0 ? void 0 : (_err$response8$data = _err$response8.data) === null || _err$response8$data === void 0 ? void 0 : (_err$response8$data$e = _err$response8$data.errors) === null || _err$response8$data$e === void 0 ? void 0 : _err$response8$data$e.newsletter
        });
        if (err !== null && err !== void 0 && (_err$response9 = err.response) !== null && _err$response9 !== void 0 && (_err$response9$data = _err$response9.data) !== null && _err$response9$data !== void 0 && _err$response9$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response10 = err.response) === null || _err$response10 === void 0 ? void 0 : (_err$response10$data = _err$response10.data) === null || _err$response10$data === void 0 ? void 0 : _err$response10$data.message);
        if (err !== null && err !== void 0 && (_err$response11 = err.response) !== null && _err$response11 !== void 0 && (_err$response11$data = _err$response11.data) !== null && _err$response11$data !== void 0 && _err$response11$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response12 = err.response) === null || _err$response12 === void 0 ? void 0 : (_err$response12$data = _err$response12.data) === null || _err$response12$data === void 0 ? void 0 : _err$response12$data.error);
      } finally {
        loading.close();
      }
    },

    async getBanners() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get("/api/banner/random"); // eslint-disable-line

        this.banner = response.data.data;
      } catch (err) {
        var _err$response13, _err$response13$data, _err$response14, _err$response14$data, _err$response15, _err$response15$data, _err$response16, _err$response16$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response13 = err.response) !== null && _err$response13 !== void 0 && (_err$response13$data = _err$response13.data) !== null && _err$response13$data !== void 0 && _err$response13$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response14 = err.response) === null || _err$response14 === void 0 ? void 0 : (_err$response14$data = _err$response14.data) === null || _err$response14$data === void 0 ? void 0 : _err$response14$data.message);
        if (err !== null && err !== void 0 && (_err$response15 = err.response) !== null && _err$response15 !== void 0 && (_err$response15$data = _err$response15.data) !== null && _err$response15$data !== void 0 && _err$response15$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response16 = err.response) === null || _err$response16 === void 0 ? void 0 : (_err$response16$data = _err$response16.data) === null || _err$response16$data === void 0 ? void 0 : _err$response16$data.error);
      } finally {
        loading.close();
      }
    },

    async getGalleryImages() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get("/api/gallery-image/random"); // eslint-disable-line

        this.galleryImages = response.data.data;
      } catch (err) {
        var _err$response17, _err$response17$data, _err$response18, _err$response18$data, _err$response19, _err$response19$data, _err$response20, _err$response20$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response17 = err.response) !== null && _err$response17 !== void 0 && (_err$response17$data = _err$response17.data) !== null && _err$response17$data !== void 0 && _err$response17$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response18 = err.response) === null || _err$response18 === void 0 ? void 0 : (_err$response18$data = _err$response18.data) === null || _err$response18$data === void 0 ? void 0 : _err$response18$data.message);
        if (err !== null && err !== void 0 && (_err$response19 = err.response) !== null && _err$response19 !== void 0 && (_err$response19$data = _err$response19.data) !== null && _err$response19$data !== void 0 && _err$response19$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response20 = err.response) === null || _err$response20 === void 0 ? void 0 : (_err$response20$data = _err$response20.data) === null || _err$response20$data === void 0 ? void 0 : _err$response20$data.error);
      } finally {
        loading.close();
      }
    },

    async getVideoBanner() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true
      });

      try {
        const response = await this.$publicApi.get("/api/banner-video/display"); // eslint-disable-line

        this.videoBannerImage = response.data.data.image;
        this.videoBannerVideo = response.data.data.video;
      } catch (err) {
        var _err$response21, _err$response21$data, _err$response22, _err$response22$data, _err$response23, _err$response23$data, _err$response24, _err$response24$data;

        // console.log(err.response);// eslint-disable-line
        if (err !== null && err !== void 0 && (_err$response21 = err.response) !== null && _err$response21 !== void 0 && (_err$response21$data = _err$response21.data) !== null && _err$response21$data !== void 0 && _err$response21$data.message) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response22 = err.response) === null || _err$response22 === void 0 ? void 0 : (_err$response22$data = _err$response22.data) === null || _err$response22$data === void 0 ? void 0 : _err$response22$data.message);
        if (err !== null && err !== void 0 && (_err$response23 = err.response) !== null && _err$response23 !== void 0 && (_err$response23$data = _err$response23.data) !== null && _err$response23$data !== void 0 && _err$response23$data.error) this.$toast.error(err === null || err === void 0 ? void 0 : (_err$response24 = err.response) === null || _err$response24 === void 0 ? void 0 : (_err$response24$data = _err$response24.data) === null || _err$response24$data === void 0 ? void 0 : _err$response24$data.error);
      } finally {
        loading.close();
      }
    }

  },
  components: {
    TwoSlideSlider: TwoSlideSlider["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68cef654",
  "471b4e76"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MultiSlideComponent: __webpack_require__(132).default,TwoSlideSlider: __webpack_require__(130).default})


/***/ })

};;
//# sourceMappingURL=index.js.map