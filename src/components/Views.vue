<template>
  <div class="views">
    <span class="views-number">{{ post.views }}</span>
    <img class="views-image" src="../assets/eye-regular-white.svg" />
  </div>
</template>

<script>
export default {
  name: 'Views',
  props: {
    post: {
      type: Object
    }
  },
};
</script>

<style lang="scss" scoped>
.views {
  color: white;
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
}
.views-image {
  margin-left: 5px;
  width: 10px !important;
  height: 10px !important;
}
</style>
