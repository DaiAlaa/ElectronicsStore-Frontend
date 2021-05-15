import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import Main from "../views/Main.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Category",
    name: "Category",
    component: Category
  },
  {
    path: "/Product",
    name: "Product",
    component: Product
  },
  {
    path: "/Main",
    component: Main,
    children: [
      {
        path: "test",
        component: test
      }
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
