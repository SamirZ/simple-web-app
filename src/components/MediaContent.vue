<template>
  <div>
    <v-lazy-image v-if="!media.mp4" :src="media.link" />

    <video controls v-if="media.mp4">
      <source :src="media.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "MediaContent",
  components: {
    VLazyImage
  },
  props: ["media"],
};
</script>
