<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-info
        v-for="server in servers"
        :key="server.id"
        :server="server"
      ></server-info>
    </ul>
  </div>
</template>

<script>
import ServerInfo from "./ServerInfo.vue";
export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Critical" },
      ],
    };
  },
  components: {
    "server-info": ServerInfo,
  },
};
</script>

<style></style>
