<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server # {{ server.id }}</p>
    <p>Server status: {{ server.status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { eventBus } from "./../../main";
export default {
  props: ["server"],
  methods: {
    changeStatus() {
      this.server.status = "Selected";
      eventBus.$emit("statusChanged", this.server);
    },
  },
};
</script>

<style></style>
