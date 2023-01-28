import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"D:\\jurysoft_projects\\Aahwahan\\node_modules\\vue-toastification\\dist\\index.css","timeout":8000,"position":"bottom-center"});
  inject('toast', toast);
}
