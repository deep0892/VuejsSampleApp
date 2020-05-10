<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { FruitMixins } from "./FruitMixin";
export default {
  mixins: [FruitMixins],
  created() {
    console.log("created inside List vue");
  },
};
</script>

<style></style>
