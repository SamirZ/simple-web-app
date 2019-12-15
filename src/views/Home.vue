<template>
  <div>
    <div v-if="getIsLoading" class="loader">
      LOADING...
    </div>
    <SectionPicker />
    <masonry
      class="grid"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
      :gutter="{ default: '10px', 700: '5px' }"
    >
      <CardContent v-for="(post, i) in getPosts" :key="i" :post="post" />
    </masonry>
    <Trigger />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Trigger from "../components/Trigger";
import SectionPicker from "../components/SectionPicker";
import CardContent from "../components/CardContent";

export default {
  name: "Home",
  components: {
    CardContent,
    SectionPicker,
    Trigger
  },
  computed: mapGetters(["getPosts", "getIsLoading"]),
};
</script>

<style lang="scss" scoped>
.loader {
  font-size: 40px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: #01b96b;
  opacity: 0.8;
}

.grid {
  margin: 15px 10px 15px 0 !important;
}
</style>
