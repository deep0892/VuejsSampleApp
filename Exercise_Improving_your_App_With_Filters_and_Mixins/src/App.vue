<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toReverseText }} <== using local filters</p>
        <hr />
        <p>{{ newText | toCountLength }} <== Using global filters</p>
        <hr />
        <p>{{ countWord }} <== Using Computed</p>
        <hr />
        <p>{{ toComputeTextCount }} <== Using mixins></p>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { ComputedText } from "./ComputedText";
export default {
  mixins: [ComputedText],
  data() {
    return {
      text: "This is a text",
      newText: "Text",
    };
  },
  filters: {
    toReverseText(value) {
      return value.split("").reverse().join("");
    },
  },
  computed: {
    countWord() {
      return (
        this.newText.split("").reverse().join("") +
        " (" +
        this.newText.length +
        ")"
      );
    },
  },
};
</script>

<style></style>
