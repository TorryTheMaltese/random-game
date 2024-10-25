import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    theme: "theme-light",
  },
  getters: {
    theme: (state) => state.theme,
  },
  mutations: {
    CHANGETHEME(state) {
      if (state.theme === "theme-light") {
        state.theme = "theme-dark";
      } else if (state.theme === "theme-dark") {
        state.theme = "theme-light";
      }
    },
  },
  actions: {
    CHANGETHEME({ commit }) {
      commit("CHANGETHEME");
    },
  },
});
