<template>
  <div class="select-input">
    <select
      class="select-input__select"
      :value="value"
      v-on:change="$emit('change', $event.target.value)"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    name: {
      type: String
    },
    value: {
    }
  }
};
</script>

<style lang="scss" scoped>
.select-input {
  position: relative;
  display: flex;
  width: 20rem;
  height: 52px;
  margin: 5px 10px;
  line-height: 3;
  background: #474a51;
  overflow: hidden;
  border-radius: .25rem;
}
@media only screen and (max-width: 700px) {
  .select-input {
    margin-top: 10px;
    margin-bottom: 0px;
  }
}
.select-input__select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #474a51;
  background-image: none;
  flex: 1;
  padding: 0 1rem;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
/* Remove IE arrow */
.select-input__select::-ms-expand {
  display: none;
}
/* Arrow */
.select-input::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1rem;
  color: #fff;
  background: #474a51;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Arrow Transition */
.select-input:hover::after {
  color: #01b96b;
}
</style>
