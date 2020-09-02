import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as actions from "./actions";
import state from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";

export default new Vuex.Store({
  state,
  actions,
  mutations,
  // modules:{},
  getters
});
