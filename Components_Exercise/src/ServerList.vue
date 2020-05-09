<template>
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server v-for="item in 5" :item="item" :key="item"> </server>
        </ul>
      </div>
      <server-details></server-details>
    </div>
    <hr />
  </div>
</template>

<script>
import Server from "./Server.vue";
import ServerDetails from "./ServerDetails.vue";
export default {
  components: {
    server: Server,
    "server-details": ServerDetails,
  },
};
</script>

<style></style>
