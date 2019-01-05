import Vue from "vue";
import Vuex from "vuex";
import signInWithGoogleAsync from "@/vuex/actions/SignInWithGoogleAsync";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: undefined,
    user: undefined
  },
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload.accessToken;
    },
    setUser(state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    signInWithGoogle: signInWithGoogleAsync
  }
});
