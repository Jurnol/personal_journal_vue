<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="user.firstName" placeholder="First Name" />
      <input type="text" v-model="user.lastName" placeholder="last Name" />
      <input type="text" v-model="user.email" placeholder="Email" />
      <input type="password" v-model="user.password" placeholder="password" />
      <input
        type="password"
        v-model="user.passwordConfirmation"
        placeholder="password confirmation"
      />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { toSnakeCase } from "@/utils";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async registerUser() {
      const router = useRouter();
      const userData = toSnakeCase(this.user);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/register",
          { user: userData }
        );
        // Navigate to login on success
        this.successMessage =
          response.data.message || "Successfully Registered";
        setTimeout(() => router.push({ name: "login" }), 3000);
      } catch (error) {
        this.errorMessage =
          error.response.data.message || "Registration failed";
        console.error(error);
      }
    },
  },
};
</script>
