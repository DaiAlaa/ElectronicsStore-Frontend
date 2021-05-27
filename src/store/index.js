import Vue from "vue";
import Vuex from "vuex";
import Products from "../modules/Products";
import Users from "../modules/Users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Products,
    Users,
  }
});
