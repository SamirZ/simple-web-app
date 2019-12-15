<template>
  <button class="button" v-on:click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style lang="scss" scoped>
.button:hover,
.button:focus {
  color: #474a51;
  background-color: white;
  box-shadow: 0 0.5em 0.5em -0.4em #474a51;
  transform: translateY(-0.25em);
}

.button {
  color: white;
  background-color: #474a51;
  transition: 0.5s;
  border: 2px solid transparent;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}
</style>
