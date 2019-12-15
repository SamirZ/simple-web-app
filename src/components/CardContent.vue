<template>
  <div class="card" v-if="post">
    <router-link
      :to="'/post/' + (post.is_album ? 'album' : 'image') + '/' + post.id"
    >
      <Views :post="post" />

      <template v-if="post.is_album">
        <MediaContent
          v-for="media in post.images"
          :media="media"
          :key="media.link"
        />
      </template>

      <MediaContent v-else :media="post" />

      <h4 class="card__title">{{ post.title }}</h4>
    </router-link>
  </div>
</template>

<script>
import MediaContent from "./MediaContent";
import Views from "./Views";
export default {
  name: "CardContent",
  props: {
    post: {
      type: Object
    }
  },
  components: {
    MediaContent,
    Views
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #474a51;
  position: relative;
  margin: 0 5px 15px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
}

@media only screen and (min-width: 1000px) {
  .card:hover {
    transform: scaleX(1.02);
    box-shadow: 0 0 12px black;
  }
}

.card__title {
  text-align: center;
  margin: 1rem 1.25rem 1.25rem;
}
</style>
