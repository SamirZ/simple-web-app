<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  * {
    font-family: 'ABeeZee', sans-serif;
  }

  body {
    background-color: #01b96b;
  }

  img, video {
    max-width: 100%;
  }
</style>
