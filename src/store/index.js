//import Vue from "vue";
import { createStore } from "vuex";

import { auth } from "./auth.module";

import { vote } from "./vote.module";

//Vue.use(Vuex);

export default createStore({
  modules: {
    auth,
    vote,
  },
});
