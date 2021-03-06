import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

Vue.config.productionTip = false;

// axios.defaults.baseURL = "http://localhost:7000/";
// Vue.prototype.$url = "http://localhost:7000/";

axios.defaults.baseURL = "https://electronic-store-back-end.herokuapp.com/";
Vue.prototype.$url = "https://electronic-store-back-end.herokuapp.com/";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
