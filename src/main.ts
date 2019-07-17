import Vue from "vue";
import router from "@/router/Router";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import CKEditor from "@ckeditor/ckeditor5-vue";

Vue.use(ElementUI);
Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
