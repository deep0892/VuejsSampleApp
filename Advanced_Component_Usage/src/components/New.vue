<template>
  <div>
    <h2>The New Quote</h2>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increase</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0,
    };
  },
  destroyed() {
    console.log("Destroyed called");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  font: italic;
}
</style>
