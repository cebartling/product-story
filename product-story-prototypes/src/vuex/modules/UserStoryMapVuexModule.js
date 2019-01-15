import createActivityAsync from "@/vuex/actions/userStoryMap/CreateActivityAsync";

const namespaced = true;
const state = {};
const mutations = {};
const actions = {
  createActivity: createActivityAsync
};
const getters = {};

const userStoryVuexModule = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};

export default userStoryVuexModule;
