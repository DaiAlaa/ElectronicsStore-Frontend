import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "Category",
        component: Category
      },
      {
        path: "Product",
        component: Product
      },
    ]
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
