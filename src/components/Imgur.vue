<template>
  <div class="imgur">
    <span class="imgur__text">Powered by</span>
    <img
      class="imgur__image"
      src="https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.9c748ecccb607d5f3f00d7eee7a22f42.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Imgur"
};
</script>

<style lang="scss" scoped>
.imgur{
  padding: 15px;
  display: flex;
  align-items: center;
}
.imgur__text {
  color: #fff;
  font-size: 14px;
}
.imgur__image {
  width: 60px;
  height: 21px;
  margin-left: 5px;
  display: inline-block;
}
</style>
