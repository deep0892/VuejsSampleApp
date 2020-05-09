<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers></servers>
      <app-server-details :server="currentServer"></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import { eventBus } from "./main";

export default {
  data: function () {
    return {
      currentServer: {
        id: 1,
        status: "Normal",
      },
    };
  },
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer,
  },
  created() {
    eventBus.$on("setCurrentServer", (server) => {
      this.currentServer = server;
    });
  },
};
</script>

<style></style>
