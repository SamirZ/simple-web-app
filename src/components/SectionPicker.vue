<template>
  <div class="section-picker">
      <Select name="section" @change="setSection" :value="section">
        <option value="hot">Hot</option>
        <option value="top">Top</option>
        <option value="user">User</option>
      </Select>
      <!-- viral | top | time | rising (only available with user section) - defaults to viral -->
      <Select name="sort" @change="setSort" :value="sort">
        <option value="viral">Viral</option>
        <option value="top">Top</option>
        <option value="time">Time</option>
        <option v-if="section === 'user'" value="rising">Rising</option>
      </Select>
      <!-- Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day -->
      <Select v-if="section === 'top'" name="window" @change="setWindow" :value="window">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="all">All</option>
      </Select>
      <!-- true | false - Show or hide viral images from the 'user' section. Defaults to true -->
      <Button v-if="section === 'user'" @click="toggleViral">{{includeViral ? 'Hide' : 'Show'}} Viral</Button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "./Button";
import Select from "./Select";
export default {
  name: "SectionPicker",
  components: {
Button,
Select
  },
  computed: mapGetters(["includeViral", "section", "sort", "window"]),
  methods: {
    ...mapActions(["setSection", "setShowViral", "setSort", "setWindow"]),
    toggleViral() {
      this.setShowViral(!this.includeViral);
    }
  }
}
</script>

<style lang="scss" scoped>
.section-picker {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 60px;
  div {
    flex: 1;
  }

  * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>