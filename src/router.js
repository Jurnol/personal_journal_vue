import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationForm,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
