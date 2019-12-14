<template>
  <div>
    <template v-if="post">
      <template v-if="post.is_album">
        <div class="post" v-for="image in post.images" :key="image.link">
          <img v-if="!image.mp4" :src="image.link" />

          <video controls v-if="image.mp4">
            <source :src="image.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </template>

      <template v-else>
        <div class="post">
          <img v-if="!post.mp4" :src="post.link" />

          <video controls v-if="post.mp4">
            <source :src="post.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Post",
  methods: {
    ...mapActions(["fetchImage"])
  },
  computed: mapGetters(["post", "type"]),
  mounted: function() {
    this.fetchImage({
      type: this.$route.params.type,
      id: this.$route.params.id
    });
  }
};
</script>

<style scoped>
.post {
  max-width: 730px;
  margin: 0 auto;
  background-color: white;
}
</style>
