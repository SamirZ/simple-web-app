<template>
  <span ref="trigger"/>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          root: null,
          threshold: "0"
        };
      }
    }
  },
  data() {
    return {
      observer: null
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.handleIntersect(entries[0]);
    }, this.options);

    this.observer.observe(this.$refs.trigger);
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    ...mapActions(["fetchImages"]),
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        this.fetchImages();
      }
    }
  }
};
</script>
