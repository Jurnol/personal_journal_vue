import { createRouter, createWebHistory } from "vue-router";
import RegistrationForm from "./components/RegistrationForm.vue";
import LoginForm from "./components/LoginForm.vue";

const routes = [
  {
    path: "/register",
    name: "/register",
    component: RegistrationForm,
  },
  {
    path: "/login",
    name: "/login",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASER_URL),
  routes,
});

export default router;
