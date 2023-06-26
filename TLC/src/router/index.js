import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Signup from "../views/signupView.vue";
import test from "../views/test.vue";
import producr_list from "../views/productList.vue";

const routes = [
  {
    path: "/login",
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
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
