import Vue from "vue";
import App from "./App.vue";

Vue.filter("toCountLength", function(value) {
    let len = value.length;
    return value + " (" + len + ")";
});

new Vue({
    el: "#app",
    render: (h) => h(App),
});