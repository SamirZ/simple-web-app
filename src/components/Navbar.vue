<template>
  <div class="navbar">
    <router-link class="navbar__link" :to="'/'">Simple Web App</router-link>
    <Imgur />
  </div>
</template>

<script>
import Imgur from './Imgur';

export default {
  name: "Navbar",
  components: {
    Imgur
  }
};
</script>

<style scoped>
  .navbar {
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar__link {
    color: #fff;
    padding: 15px;
    font-weight: bold;
    font-size: 20px;
  }
</style>
