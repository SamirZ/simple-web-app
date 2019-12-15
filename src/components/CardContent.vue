<template>
  <div class="card" v-if="post">
    <router-link
      :to="'/post/' + (post.is_album ? 'album' : 'image') + '/' + post.id"
    >
      <div class="views">
        <span class="views-number">{{ post.views }}</span>
        <img class="views-image" src="../assets/eye-regular-white.svg" />
      </div>

      <template v-if="post.is_album">
        <MediaContent
          v-for="media in post.images"
          :media="media"
          :key="media.link"
        />
      </template>

      <MediaContent v-else :media="post" />

      <h4 class="card-title">{{ post.title }}</h4>
    </router-link>
  </div>
</template>

<script>
import MediaContent from "./MediaContent";
export default {
  name: "CardContent",
  props: ["post"],
  components: {
    MediaContent
  }
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
