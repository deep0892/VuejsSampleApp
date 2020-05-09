<template>
  <li class="list-group-item">Server # {{ this.item }}</li>
</template>

<script>
console.log("this", this);
export default {
  props: ["item"],
};
</script>
