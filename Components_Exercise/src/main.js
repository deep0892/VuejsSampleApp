import Vue from "vue";

import App from "./App.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Servers from "./ServerList.vue";

Vue.component("headercmp", Header);

Vue.component("footercmp", Footer);

Vue.component("servers", Servers);

new Vue({
    el: "#app",
    render: (h) => h(App),
});