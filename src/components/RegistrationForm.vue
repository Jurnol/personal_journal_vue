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
    };
  },
  methods: {
    async registerUser() {
      const userData = toSnakeCase(this.user);
      try {
        const response = await fetch("http://localhost:3000/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: userData }),
        });
        if (!response.ok) throw new Error("Registration failed");
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
