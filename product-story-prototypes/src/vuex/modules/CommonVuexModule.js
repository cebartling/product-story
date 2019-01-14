import signInWithGoogleAsync from "@/vuex/actions/common/SignInWithGoogleAsync";

const namespaced = true;
const state = {
  accessToken: undefined,
  user: undefined
};
const mutations = {
  setAccessToken(state, payload) {
    state.accessToken = payload.accessToken;
  },
  setUser(state, payload) {
    state.user = payload.user;
  }
};
const actions = {
  signInWithGoogle: signInWithGoogleAsync
};
const getters = {};

const commonVuexModule = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};

export default commonVuexModule;
