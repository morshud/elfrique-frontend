import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import "@/assets/css/style.css";
import "@/assets/css/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(router).use(VueApexCharts).use(Vuex).use(store).mount("#app");
//createApp(App).use(store).mount("#app");
//app.use(LoadScript);
