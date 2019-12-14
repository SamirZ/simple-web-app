<template>
  <div class="dw">
    <div class="dw-pnl" v-for="image in getImages" :key="image.id">
      <h2 class="dw-pnl__title">{{ image.title }}</h2>

      <img v-if="!image.is_album" :src="image.link" class="dw-pnl__cntnt" />

      <div v-if="image.is_album">
        <template v-for="i in image.images">
          <video controls v-if="i.mp4" :key="i.link">
            <source :src="i.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <img v-else class="dw-pnl__cntnt" :key="i.link" :src="i.link" />
        </template>
      </div>

      <h4 v-if="image.description" class="dw-pnl__desc">
        {{ image.description }}
      </h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: mapGetters(["getImages"]),
  created() {
    this.fetchImages("test");
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style scoped>
.dw {
  animation: fade 2s;
}
.dw {
  box-sizing: border-box;
  column-gap: 0;
  position: relative;
}
.dw * {
  box-sizing: border-box;
}
.dw__fcs-crtn {
  background-color: #000;
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0.75;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
}
.dw-pnl__title {
  text-align: center;
  border-bottom: 5px solid #000;
  margin: 5px -4px;
  padding: 5px 2px 10px;
}
.dw-pnl__desc {
  text-align: center;
  border-top: 5px solid #000;
  margin: 5px -4px;
  padding: 10px 2px 5px;
}
@media (min-width: 768px) {
  .dw {
    column-count: 2;
  }
}
@media (min-width: 992px) {
  .dw {
    column-count: 3;
  }
}
@media (min-width: 1500px) {
  .dw {
    column-count: 4;
  }
}
.dw-pnl {
  margin: 10px 5px;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
}
.dw-pnl--fcs {
  position: relative;
}
.dw-pnl--fcs:hover {
  z-index: 3;
}
.dw-pnl--fcs:hover ~ .dw__fcs-crtn {
  display: block;
}
.dw-pnl--pls {
  transform-style: preserve-3d;
  perspective: 1000;
  transition: transform 0.25s ease 0s;
}
.dw-pnl--pls:hover {
  transform: scale(1.02);
}
.dw-pnl__cntnt {
  overflow: hidden;
  padding: 10px;
  width: 100%;
}
@media (min-width: 768px) {
  .dw-pnl {
    break-inside: avoid;
  }
}
.dw-flp {
  perspective: 1000;
}
.dw-flp:hover .dw-flp__cntnt {
  transform: rotateY(180deg);
}
.dw-flp--sm {
  height: 200px;
}
.dw-flp--md {
  height: 300px;
}
.dw-flp--lg {
  height: 400px;
}
.dw-flp__pnl {
  backface-visibility: hidden;
  border-radius: 10px;
  height: 100%;
  left: 0;
  overflow: visible;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 100%;
}
.dw-flp__pnl--frnt {
  transform: rotateY(0deg);
  z-index: 2;
}
.dw-flp__pnl--bck {
  transform: rotateY(180deg);
}
.dw-flp__cntnt {
  height: 100%;
  overflow: visible;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.25s;
}
.dw-clstr {
  display: flex;
  padding: 0;
}
@media (max-width: 430px) {
  .dw-clstr--vrt {
    flex-direction: column;
  }
}
.dw-clstr--hrz {
  flex-direction: column;
}
.dw-clstr__sgmnt {
  display: flex;
  flex: 1 1 auto;
}
.dw-clstr__sgmnt--rw {
  display: flex;
}
@media (max-width: 430px) {
  .dw-clstr__sgmnt--rw {
    flex-direction: column;
  }
}
.dw-clstr__sgmnt--clmn {
  flex-direction: column;
}
@media (min-width: 430px) {
  .dw-clstr__sgmnt--hlf {
    flex-basis: 50%;
  }
  .dw-clstr__sgmnt--qrt {
    flex-basis: 25%;
  }
}
@-moz-keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
