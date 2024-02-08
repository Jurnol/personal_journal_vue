<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="navbar-title">
        jurno
        <div style="color: #ec9947">.</div>
      </h1>
      <div class="nav-buttons">
        <button @click="navigateTo('/')">Home</button>
        <button @click="navigateTo('/register')">Register</button>
        <button @click="navigateTo('/login')">Login</button>
      </div>
    </nav>
    <!--This uses the router to display the current page-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures the title and button group are spaced apart */
  padding: 0 20px;
  background-color: rgb(138, 192, 239);
  height: 60px; /* Adjust as necessary */
}

.navbar-title {
  display: flex;
  flex-grow: 1; /* Allows the title to grow and center itself */
  text-align: left;
  margin: 0; /* Removes default margin */
  text-align: center;
  color: antiquewhite;
}

.nav-buttons {
  display: flex;
  gap: 10px; /* Space between buttons */
}

button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  background-color: #ec9947;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s; /* Smooth background color transition on hover */
}

button:hover {
  background-color: #a76c05;
}
</style>
