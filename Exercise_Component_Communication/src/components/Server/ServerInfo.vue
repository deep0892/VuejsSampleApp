<template>
  <div>
    <li class="list-group-item">
      <p>
        Server #{{ server.id }}, Status: {{ server.status }}
        <button @click="selectServer">Select Server!</button>
      </p>
    </li>
  </div>
</template>

<script>
import { eventBus } from "./../../main";
export default {
  props: ["server"],
  methods: {
    selectServer() {
      eventBus.$emit("setCurrentServer", this.server);
    },
  },
  created() {
    eventBus.$on("statusChanged", (server) => {
      if (server.id == this.server.id) {
        this.server.status = server.status;
      }
    });
  },
};
</script>

<style></style>
