<template>
  <div class="container">
    <div v-if="getIsLoading" class="loader">
      LOADING...
    </div>
    <stack
      :column-min-width="240"
      :gutter-width="15"
      :gutter-height="15"
      monitor-images-loaded
      v-if="getPosts.length > 0"
    >
      <stack-item
        v-for="(post, i) in getPosts"
        :key="i"
        style="transition: transform 300ms"
      >
        <router-link :to="'/post/'+ (post.is_album ? 'album' : 'image') +'/' + post.id">
          <div class="wrapper">
            <div class="content">
              <template v-if="post.is_album">
                <template v-for="image in post.images">
                  <img v-if="!image.mp4" :src="image.link" :key="image.link" />

                  <video controls v-if="image.mp4" :key="image.link">
                    <source :src="image.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </template>
              </template>

              <template v-else>
                <img v-if="!post.mp4" :src="post.link" />

                <video controls v-if="post.mp4">
                  <source :src="post.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </template>
            </div>

            <p class="post-title">{{ post.title }}</p>
          </div>
        </router-link>
      </stack-item>
    </stack>
    <Trigger />
  </div>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";
import { mapGetters } from "vuex";
import Trigger from "../components/Trigger";

export default {
  name: "Home",
  components: {
    Stack,
    StackItem,
    Trigger
  },
  data: () => ({
    images: []
  }),
  computed: mapGetters(["getPosts", "getIsLoading"])
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.btn {
  font-size: 18px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
.btn:not(:last-child) {
  margin-right: 10px;
}
video,
img {
  max-width: 100%;
  min-height: 240px;
}

* {
  font-family: "ABeeZee", sans-serif;
}

.post-title {
  margin-top: 0;
  font-size: 14px;
  padding: 0.41em 2px;
  text-decoration: none !important;
  color: #fff;
}

body {
  background-color: #01b96b;
}

.wrapper {
  background: #474a51;
  border-radius: 3px;
  overflow: auto;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 0 6px black;
}

.wrapper:hover {
  transform: scale(1.05, 1.02);
  box-shadow: 0 0 12px black;
}

.content {
  max-height: 427px;
  overflow: hidden;
}
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

a {
    text-decoration: none;
}
</style>
