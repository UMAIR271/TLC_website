import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Signup from "../views/signupView.vue";
import test from "../views/test.vue";
import producr_list from "../views/productList.vue";
import Dashboard from "../admin/DashboardView.vue";
import Catagory from "../admin/catagaries.vue";
import productView from "../admin/product.vue";
import uploadCatagory from "../admin/uploadCatagory.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/product_list",
    name: "product_list",
    component: producr_list,
  },
  {
    path: "/admin",
    name: "admin",
    component: Dashboard,
  },
  {
    path: "/catagory",
    name: "Catagory",
    component: Catagory,
  },
  {
    path: "/productList",
    name: "Product",
    component: productView,
  },
  {
    path: "/uploadCatagory",
    name: "uploadCatagory",
    component: uploadCatagory,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
