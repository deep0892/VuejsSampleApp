import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import config from '../config';

Vue.use(VueResource);

Vue.http.options.root = config.firebaseUrl;
Vue.http.interceptors.push((request, next) => {
    console.log('interceptors called');
    next();
});

new Vue({
    el: "#app",
    render: (h) => h(App),
});