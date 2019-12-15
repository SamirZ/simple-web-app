<template>
  <div class="statistics">
    <Stat :value="post.ups" :imagePath="thumbsUp" />
    <Stat :value="post.downs" :imagePath="thumbsDown" />
    <Stat :value="'Score: ' + post.score" />
    <Stat :value="post.views" :imagePath="eyeRegular" />
  </div>
</template>

<script>
import Stat from "./Stat";
import thumbsUp from "../assets/thumbs-up-solid.svg";
import thumbsDown from "../assets/thumbs-down-solid.svg";
import eyeRegular from "../assets/eye-regular-black.svg";

export default {
  name: "Statistics",
  props: {
    post: {
      type: Object
    }
  },
  components: {
    Stat
  },
  data() {
    return {
      thumbsUp,
      thumbsDown,
      eyeRegular
    };
  }
};
</script>

<style scoped>
.statistics {
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
