import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import Main from "../views/Main.vue";
import AdminPanel from "../views/AdminPanel.vue";
import ControlUsers from "../views/ControlUsers.vue";
import Login from "../views/Login.vue";
import AddProduct from "../views/AddProduct.vue";
import Statistics from "../views/Statistics.vue";
import OrdersDetails from "../views/OrdersDetails.vue";
import AddNewAdmin from "../views/AddNewAdmin.vue";
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
        path: "Category/:categoryId",
        component: Category
      },
      {
        path: "Product/:ProductId",
        component: Product
      },
      {
        path: "AdminPanel",
        component: AdminPanel,
        children: [
          {
            path: "ControlUsers",
            component: ControlUsers
          },
          {
            path: "Statistics",
            component: Statistics
          },
          {
            path: "AddNewAdmin",
            component: AddNewAdmin
          },
        ]
      },
      {
        path: "OrdersDetails",
        component: OrdersDetails,
      },
      {
        path: "/AddProduct",
        name: "AddProduct",
        component: AddProduct,
      },
    ]
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component:SignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
