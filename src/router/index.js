import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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
import ForgetPassword from "../views/ForgetPassword.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "Category/:categoryId",
        component: Category,
      },
      {
        path: "Product/:ProductId",
        component: Product,
      },
      {
        path: "AdminPanel",
        component: AdminPanel,
        children: [
          {
            path: "ControlUsers",
            component: ControlUsers,
          },
          {
            path: "Statistics",
            component: Statistics,
          },
          {
            path: "AddNewAdmin",
            component: AddNewAdmin,
          },
        ],
      },
      {
        path: "OrdersDetails",
        component: OrdersDetails,
      },
      {
        path: "/AddProduct",
        name: "AddProduct",
        component: AddProduct,
        meta: {
          requiresAuth: true
        }
      },
      
    ]
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component:SignUp,
    meta: {
      isLogged: true
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      isLogged: true
    }
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword
  },
];

const router = new VueRouter({
  routes,
  store
});
// router.beforeEach((to, next) => {
//   console.log(store.getters["Authorization/GetStatus"]);
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     var status = localStorage.getItem("x-auth-token");
//     if (!status) {
//       // next("/UnAuthorized");
//       next();
//       return;
//     }
//   } else {
//     next();
//   }
//   if (to.matched.some(record => record.meta.isLogged)) {
//     if (store.getters["Authorization/GetStatus"] == "success") {
//       next("/");
//       return;
//     }
//   } else {
//     next();
//   }
// });
export default router;
