<template>
  <div class="post">
    <h2 v-if="post.title" class="title">{{ post.title }}</h2>
    <h4 v-if="post.description" class="title">{{ post.description }}</h4>
    <div class="ratings">
      <div class="votes">
        <img src="../assets/thumbs-up-solid.svg" />
        <span>{{ post.ups }}</span>
      </div>
      <div class="votes">
        <img src="../assets/thumbs-down-solid.svg" />
        <span>{{ post.downs }}</span>
      </div>
      <div class="score">Score: {{ post.score }}</div>
    </div>
    <template v-if="post">
      <template v-if="post.is_album">
        <div v-for="image in post.images" :key="image.link">
          <img v-if="!image.mp4" :src="image.link" />

          <video controls v-if="image.mp4">
            <source :src="image.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </template>

      <template v-else>
        <div>
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
.title {
  margin: 0;
  padding: 10px 5px;
}
.post {
  max-width: 730px;
  margin: 0 auto;
  color: #000;
  background-color: white;
}
.ratings {
  display: flex;
  border-top: 1px solid black;
}
.votes {
  padding: 10px;
  border-right: 1px solid black;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.votes img {
  min-height: auto;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.score {
  padding: 10px;
  flex: 3;
  cursor: default;
}
</style>
