exports.ids = [4];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=two-slide-slider.js.map