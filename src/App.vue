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

.grid-item {
  width: 300px;
}
.grid-item--width2 {
  width: 400px;
}

body {
  background-color: #01b96b;
  margin: 0;
}
img,
video {
  width: 100%;
}
.card {
  background-color: #474a51;
  position: relative;
  margin: 0 5px 15px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
}

@media only screen and (min-width: 1000px) {
  .card:hover {
    transform: scaleX(1.02);
    box-shadow: 0 0 12px black;
  }
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #ccc;
  text-decoration: none;
}

.grid {
  margin: 15px 10px 15px 0 !important;
}

.card-body {
  padding: 4px;
}
.card-title {
  text-align: center;
  margin: 1rem 1.25rem 1.25rem;
}
</style>
