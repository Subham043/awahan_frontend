(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{525:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(46),n(59),{name:"TwoSlideSlider",data:function(){return{banner:[{id:1,name:"",image:"https://dummyimage.com/370x450/000/fff"},{id:2,name:"",image:"https://dummyimage.com/370x450/000/fff"},{id:3,name:"",image:"https://dummyimage.com/370x450/000/fff"},{id:1,name:"",image:"https://dummyimage.com/370x450/000/fff"},{id:2,name:"",image:"https://dummyimage.com/370x450/000/fff"},{id:3,name:"",image:"https://dummyimage.com/370x450/000/fff"}],involved:[{id:1,heading:"Tree Plantation",image:"https://dummyimage.com/608x280/000/fff",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},{id:2,heading:"Organic Vilage",image:"https://dummyimage.com/608x280/000/fff",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},{id:3,heading:"Lake Restoration",image:"https://dummyimage.com/608x280/000/fff",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},{id:4,heading:"Lake Restoration",image:"https://dummyimage.com/608x280/000/fff",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}],slickOptions:{arrows:!1,dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:3e3,draggable:!0,pauseOnHover:!0,swipe:!0,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}}},mounted:function(){this.$scrollTo("#__nuxt",0,{force:!0})},methods:{nextNavClick:function(){this.$refs.slickBanner.next()},prevNavClick:function(){this.$refs.slickBanner.prev()},getBlogs:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.get("https://hrudayaspandana.org/blog/wp-json/wp/v2/posts");case 4:n=t.sent,e.blogs=n.data,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:return t.prev=10,e.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,8,10,13]])})))()},formHandler:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,v,c,m,f,h,w,y,k,x,$,C,_,R,S,I,L,O,T,B,j,N,V,A,J,H,E,G,K,M;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$loading({lock:!0,fullscreen:!0}),t.prev=1,r={name:e.name,email:e.email,phone:e.phone,ebook:e.ebook,event:e.event,blog:e.blog,crossword:e.crossword,newsletter:e.newsletter},t.next=5,e.$publicApi.post("/api/subscription/create",r);case 5:t.sent,e.$toast.success("Subscribed successfully"),e.name="",e.email="",e.phone="",e.ebook=!1,e.event=!1,e.blog=!1,e.crossword=!1,e.newsletter=!1,e.$refs.form.reset(),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(1),e.$refs.form.setErrors({name:null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o||null===(l=o.data)||void 0===l||null===(d=l.errors)||void 0===d?void 0:d.name,email:null===t.t0||void 0===t.t0||null===(v=t.t0.response)||void 0===v||null===(c=v.data)||void 0===c||null===(m=c.errors)||void 0===m?void 0:m.email,phone:null===t.t0||void 0===t.t0||null===(f=t.t0.response)||void 0===f||null===(h=f.data)||void 0===h||null===(w=h.errors)||void 0===w?void 0:w.phone,ebook:null===t.t0||void 0===t.t0||null===(y=t.t0.response)||void 0===y||null===(k=y.data)||void 0===k||null===(x=k.errors)||void 0===x?void 0:x.ebook,event:null===t.t0||void 0===t.t0||null===($=t.t0.response)||void 0===$||null===(C=$.data)||void 0===C||null===(_=C.errors)||void 0===_?void 0:_.event,blog:null===t.t0||void 0===t.t0||null===(R=t.t0.response)||void 0===R||null===(S=R.data)||void 0===S||null===(I=S.errors)||void 0===I?void 0:I.blog,crossword:null===t.t0||void 0===t.t0||null===(L=t.t0.response)||void 0===L||null===(O=L.data)||void 0===O||null===(T=O.errors)||void 0===T?void 0:T.crossword,newsletter:null===t.t0||void 0===t.t0||null===(B=t.t0.response)||void 0===B||null===(j=B.data)||void 0===j||null===(N=j.errors)||void 0===N?void 0:N.newsletter}),null!==t.t0&&void 0!==t.t0&&null!==(V=t.t0.response)&&void 0!==V&&null!==(A=V.data)&&void 0!==A&&A.message&&e.$toast.error(null===t.t0||void 0===t.t0||null===(J=t.t0.response)||void 0===J||null===(H=J.data)||void 0===H?void 0:H.message),null!==t.t0&&void 0!==t.t0&&null!==(E=t.t0.response)&&void 0!==E&&null!==(G=E.data)&&void 0!==G&&G.error&&e.$toast.error(null===t.t0||void 0===t.t0||null===(K=t.t0.response)||void 0===K||null===(M=K.data)||void 0===M?void 0:M.error);case 23:return t.prev=23,n.close(),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[1,18,23,26]])})))()},getBanners:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,v,c,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$loading({lock:!0,fullscreen:!0}),t.prev=1,t.next=4,e.$publicApi.get("/api/banner/random");case 4:r=t.sent,e.banner=r.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),null!==t.t0&&void 0!==t.t0&&null!==(o=t.t0.response)&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.message&&e.$toast.error(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d||null===(v=d.data)||void 0===v?void 0:v.message),null!==t.t0&&void 0!==t.t0&&null!==(c=t.t0.response)&&void 0!==c&&null!==(m=c.data)&&void 0!==m&&m.error&&e.$toast.error(null===t.t0||void 0===t.t0||null===(f=t.t0.response)||void 0===f||null===(h=f.data)||void 0===h?void 0:h.error);case 12:return t.prev=12,n.close(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})))()},getGalleryImages:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,v,c,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$loading({lock:!0,fullscreen:!0}),t.prev=1,t.next=4,e.$publicApi.get("/api/gallery-image/random");case 4:r=t.sent,e.galleryImages=r.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),null!==t.t0&&void 0!==t.t0&&null!==(o=t.t0.response)&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.message&&e.$toast.error(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d||null===(v=d.data)||void 0===v?void 0:v.message),null!==t.t0&&void 0!==t.t0&&null!==(c=t.t0.response)&&void 0!==c&&null!==(m=c.data)&&void 0!==m&&m.error&&e.$toast.error(null===t.t0||void 0===t.t0||null===(f=t.t0.response)||void 0===f||null===(h=f.data)||void 0===h?void 0:h.error);case 12:return t.prev=12,n.close(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})))()},getVideoBanner:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,v,c,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$loading({lock:!0,fullscreen:!0}),t.prev=1,t.next=4,e.$publicApi.get("/api/banner-video/display");case 4:r=t.sent,e.videoBannerImage=r.data.data.image,e.videoBannerVideo=r.data.data.video,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),null!==t.t0&&void 0!==t.t0&&null!==(o=t.t0.response)&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.message&&e.$toast.error(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d||null===(v=d.data)||void 0===v?void 0:v.message),null!==t.t0&&void 0!==t.t0&&null!==(c=t.t0.response)&&void 0!==c&&null!==(m=c.data)&&void 0!==m&&m.error&&e.$toast.error(null===t.t0||void 0===t.t0||null===(f=t.t0.response)||void 0===f||null===(h=f.data)||void 0===h?void 0:h.error);case 13:return t.prev=13,n.close(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,9,13,16]])})))()}}}),l=n(33),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"slide-2-slider"},[t("div",{staticClass:"row p-rel"},[e.banner.length>0?[t("VueSlickCarousel",e._b({ref:"slickBanner"},"VueSlickCarousel",e.slickOptions,!1),[e._l(e.involved,(function(n){return[t("div",{key:n.id,staticClass:"col-md-6 cp"},[t("div",{staticClass:"inv-card"},[t("div",{staticClass:"inv-card-img"},[t("img",{attrs:{src:n.image}}),e._v(" "),t("div",{staticClass:"inv-card-content txt-center"},[t("h3",[e._v(e._s(n.heading))]),e._v(" "),t("div",{staticClass:"p5"},[t("div",{staticClass:"inv-card-bootom-btn row"},[t("div",{staticClass:"col-6 inv-left-btn"},[e._v("\n                                                    Know More\n                                                ")]),e._v(" "),t("div",{staticClass:"col-6 inv-right-btn"},[e._v("\n                                                    Join Now\n                                                ")])])])])])])])]}))],2),e._v(" "),t("button",{staticClass:"slick-prev slick-arrow two-slide-arrow-left",attrs:{type:"button","data-role":"none"},on:{click:e.prevNavClick}},[t("i",{staticClass:"far fa-arrow-alt-circle-left"})]),e._v(" "),t("button",{staticClass:"slick-next slick-arrow two-slide-arrow-right",attrs:{type:"button","data-role":"none"},on:{click:e.nextNavClick}},[t("i",{staticClass:"far fa-arrow-alt-circle-right"})])]:e._e()],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);