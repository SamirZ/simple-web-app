<template>
  <div class="stat">
    <img v-if="imagePath" class="stat__image" :src="imagePath" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Stat",
  props: {
    value: {
    },
    imagePath: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.stat:not(:last-of-type) {
  border-right: 1px solid black;
}
.stat {
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.stat__image {
  min-height: auto;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
