import createActivityAsync from "@/vuex/actions/userStoryMap/CreateActivityAsync";
import createUserStoryMapAsync from "@/vuex/actions/userStoryMap/CreateUserStoryMapAsync";
import retrieveUserStoryMapsAsync from "@/vuex/actions/userStoryMap/RetrieveUserStoryMapsAsync";
import setUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetUserStoryMapsMutation";
import setSelectedUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetSelectedUserStoryMapMutation";
import updateActivityAsync from "@/vuex/actions/userStoryMap/UpdateActivityAsync";

const namespaced = true;
const state = {
  userStoryMaps: [],
  selectedUserStoryMap: undefined
};
const mutations = {
  setUserStoryMaps: setUserStoryMapMutation,
  setSelectedUserStoryMap: setSelectedUserStoryMapMutation
};
const actions = {
  createUserStoryMap: createUserStoryMapAsync,
  createActivity: createActivityAsync,
  retrieveUserStoryMaps: retrieveUserStoryMapsAsync,
  updateActivity: updateActivityAsync
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
