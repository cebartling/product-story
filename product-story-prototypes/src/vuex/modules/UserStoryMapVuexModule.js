import createActivityAsync from "@/vuex/actions/userStoryMap/CreateActivityAsync";
import createUserStoryMapAsync from "@/vuex/actions/userStoryMap/CreateUserStoryMapAsync";

const namespaced = true;
const state = {};
const mutations = {};
const actions = {
  createUserStoryMap: createUserStoryMapAsync,
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
