<template>
  <div class="ratings">
    <div class="rating">
      <img src="../assets/thumbs-up-solid.svg" />
      <span>{{ post.ups }}</span>
    </div>
    <div class="rating">
      <img src="../assets/thumbs-down-solid.svg" />
      <span>{{ post.downs }}</span>
    </div>
    <div class="rating">Score: {{ post.score }}</div>
    <div class="rating">
      <img src="../assets/eye-regular-black.svg" />
      {{ post.views }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: ["post"]
};
</script>

<style scoped>
.ratings {
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.rating:not(:last-of-type) {
  border-right: 1px solid black;
}
.rating {
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.rating img {
  min-height: auto;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
