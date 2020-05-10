<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-myon:click="click">
          This is a custom directive to execute a function
        </button>
        <hr />
        <div
          style="width: 100px; height: 100px; background-color: lightgreen;"
          v-myon:mouseenter="mouseEnter"
          v-myon:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myon: {
      bind(el, binding, vnode) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      },
    },
  },
  methods: {
    click() {
      alert("Customon click event triggered!");
    },
    mouseEnter() {
      alert("mouseEnter!!!");
    },
    mouseLeave() {
      alert("mouseLeave!!!");
    },
  },
};
</script>

<style></style>
