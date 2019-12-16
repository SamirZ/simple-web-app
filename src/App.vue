<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  font-family: "ABeeZee", sans-serif;
}

body {
  background: linear-gradient(to right, rgb(1, 185, 107) 0%, rgba(1,145,147,1) 100%);
  margin: 0;
}
img,
video {
  width: 100%;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #ccc;
  text-decoration: none;
}

</style>
