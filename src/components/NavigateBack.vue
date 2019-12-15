<template>
  <div class="back">
    <img v-on:click="goBack" class="back-image" src="../assets/arrow-left-solid.svg" />
  </div>
</template>

<script>
export default {
  name: "NavigateBack",
  props: ["text"],
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  color: white;
  display: flex;
  font-size: 10px;
  align-items: center;
  cursor: pointer;
}
.back-image {
  width: 20px !important;
  height: 20px !important;
  padding: 10px;
}
</style>
