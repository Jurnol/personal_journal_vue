<template>
  <div>
    <h1>User Login</h1>
    <form @submit.prevent="loginUser">
      <input type="email" v-model="user.email" placeholder="Email" />
      <input type="password" v-model="user.password" placeholder="Password" />
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { toSnakeCase } from "@/utils";
import axios from "axios";
// import { useRouter } from "vue-router";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    async loginUser() {
      const userData = toSnakeCase(this.user);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          {
            userData,
          }
        );
        console.log(response.data);
        sessionStorage.setItem("session-token", response.data.token);
        console.log(
          "Token stored in sessionStorage:",
          sessionStorage.getItem("session-token")
        );
        setTimeout(() => this.$router.push({ name: "userdashboard" }), 1000);
      } catch (error) {
        this.errorMessage = error.response.data.message || "Login failed";
      }
    },
  },
};
</script>
