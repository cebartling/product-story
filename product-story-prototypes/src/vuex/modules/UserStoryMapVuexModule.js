import createActivityAsync from "@/vuex/actions/userStoryMap/CreateActivityAsync";
import createUserStoryMapAsync from "@/vuex/actions/userStoryMap/CreateUserStoryMapAsync";
import retrieveUserStoryMapsAsync from "@/vuex/actions/userStoryMap/RetrieveUserStoryMapsAsync";
import setUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetUserStoryMapsMutation";
import setSelectedUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetSelectedUserStoryMapMutation";
import updateActivityAsync from "@/vuex/actions/userStoryMap/UpdateActivityAsync";
import createUserStoryAsync from "@/vuex/actions/userStoryMap/CreateUserStoryAsync";
import updateUserStoryAsync from "@/vuex/actions/userStoryMap/UpdateUserStoryAsync";

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
  createUserStory: createUserStoryAsync,
  retrieveUserStoryMaps: retrieveUserStoryMapsAsync,
  updateActivity: updateActivityAsync,
  updateUserStory: updateUserStoryAsync
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
