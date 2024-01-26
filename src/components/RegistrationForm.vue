<template>
  <div>
    <h1>Register</h1>
    <!-- This displays the success message by binding it to the form-->
    <p v-if="successMessage" class="success-message">
      {{ successMessage }}
    </p>
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
    <!-- Error Message-->
    <p v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { toSnakeCase } from "@/utils";
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
      // clear error/success message incase a person makes a mistake, then fixes it
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/register",
          { user: toSnakeCase(this.user) }
        );

        this.successMessage =
          response.data.message || "Successfully Registered";

        // Use this.$router to access the router instance
        setTimeout(() => this.$router.push({ name: "login" }), 2000);
      } catch (error) {
        if (error.response && error.response.data) {
          // Check if the custom error message is in the 'data' object
          this.errorMessage =
            error.response.data.error || "Registration failed";
        } else {
          // Fallback error message
          this.errorMessage = "An unexpected error occurred";
        }
        console.error(error);
      }
    },
  },
};
</script>
