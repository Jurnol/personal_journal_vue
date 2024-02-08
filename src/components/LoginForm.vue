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
      // const router = useRouter();
      const userData = toSnakeCase(this.user);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          {
            userData,
          }
        );
        // Here you might want to do something with the response, like storing a token
        console.log(response.data); // Log or handle response data
        sessionStorage.setItem("session-token", response.data.token);
        console.log(
          "Token stored in sessionStorage:",
          sessionStorage.getItem("session-token")
        );
        // Redirect to another page after login, adjust the route as needed
        // router.push({ name: "dashboard" }) similar to the registration page, will likely go to a dashboard
      } catch (error) {
        //Take into consideration the thing from the registration page, where there response didn't have
        //User similar error handling as the registration component
        this.errorMessage = error.response.data.message || "Login failed";
      }
    },
  },
};
</script>
