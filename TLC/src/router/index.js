import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Signup from "../views/signupView.vue";
import test from "../views/test.vue";
import producr_list from "../views/productList.vue";
import Dashboard from "../admin/DashboardView.vue";
import Catagory from "../admin/catagaries.vue";
import productView from "../admin/product.vue";
import generateCoupon from "../admin/coupon.vue";
import uploadCatagory from "../admin/uploadCatagory.vue";
import uploadProduct from "../admin/uploadProduct.vue";
import testadmin from "../admin/testadmin.vue";
import singleProduct from "../views/singleProduct.vue";
import checkOut from "../views/checkOut.vue";
import shopingCart from "../views/shopingStore.vue";
import kid from "../views/kid.vue";
import women from "../views/women.vue";
import shoes from "../views/shose.vue";
import men from "../views/men.vue";
import orderSuccess from "../views/orderSuccess.vue";
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
    path: "/",
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
    path: "/singleProduct",
    name: "singleProduct",
    component: singleProduct,
  },
  {
    path: "/checkOut",
    name: "checkOut",
    component: checkOut,
  },
  // {
  //   path: "/addTocard",
  //   name: "addTocard",
  //   component: addTocard,
  // },
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
    path: "/shopingCart",
    name: "shopingCart",
    component: shopingCart,
  },
  {
    path: "/adminProductList",
    name: "adminProductList",
    component: productView,
  },
  {
    path: "/uploadCatagory",
    name: "uploadCatagory",
    component: uploadCatagory,
  },
  {
    path: "/uploadProduct",
    name: "uploadProduct",
    component: uploadProduct,
  },
  {
    path: "/generateCoupon",
    name: "generateCoupon",
    component: generateCoupon,
  },
  {
    path: "/orderSuccess",
    name: "orderSuccess",
    component: orderSuccess,
  },
  {
    path: "/kid",
    name: "kid",
    component: kid,
  },
  {
    path: "/women",
    name: "women",
    component: women,
  },
  {
    path: "/shoes",
    name: "shoes",
    component: shoes,
  },
  {
    path: "/Men",
    name: "Men",
    component: men,
  },
  {
    path: "/testadmin",
    name: "testadmin",
    component: testadmin,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
