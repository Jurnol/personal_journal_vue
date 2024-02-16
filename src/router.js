import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import HomePage from "./components/HomePage.vue";
import UserDashboard from "./components/UserDashboard.vue";

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
  {
    path: "/userdashboard",
    name: "userdashboard",
    component: UserDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
