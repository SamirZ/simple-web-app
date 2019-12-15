<template>
  <div class="post">
    <h2 v-if="post.title" class="title">
      <NavigateBack />
      <span>{{ post.title }}</span>
    </h2>
    <h4 v-if="post.description" class="description">{{ post.description }}</h4>

    <Ratings :post="post" />

    <template v-if="post.is_album">
      <MediaContent
        v-for="media in post.images"
        :media="media"
        :key="media.link"
      />
    </template>

    <MediaContent v-else :media="post" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MediaContent from "../components/MediaContent";
import Ratings from "../components/Ratings";
import NavigateBack from "../components/NavigateBack";

export default {
  name: "Post",
  components: {
    MediaContent,
    Ratings,
    NavigateBack
  },
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
.title,
.description {
  margin: 0;
  padding: 10px 5px;
  display: flex;
  align-items: center;
}
.title {
  text-align: center;
}
.description {
  text-align: justify;
}
.title span {
  flex-grow: 1;
  margin-right: 40px;
}

.post {
  max-width: 730px;
  margin: 0 auto;
  color: #000;
  background-color: white;
}
</style>
