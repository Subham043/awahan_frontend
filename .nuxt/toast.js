import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002FUsers\u002Fjs-pro-11\u002FDownloads\u002Fawahan\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css","timeout":8000,"position":"bottom-center"});
  inject('toast', toast);
}
