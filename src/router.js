import Vue from "vue";
import Router from "vue-router";
import RegistrationForm from "./components/RegistrationForm.vue";
import LoginForm from "./components/LoginForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
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
  ],
});
