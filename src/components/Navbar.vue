<template>
  <div class="navbar">
    <router-link :to="'/'">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
  .navbar {
    padding: 15px 0;
    background: black;
  }
  a {
    color: white;
  }
</style>
