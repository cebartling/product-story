import createActivityAsync from "@/vuex/actions/userStoryMap/CreateActivityAsync";
import createUserStoryMapAsync from "@/vuex/actions/userStoryMap/CreateUserStoryMapAsync";
import retrieveUserStoryMapsAsync from "@/vuex/actions/userStoryMap/RetrieveUserStoryMapsAsync";
import setUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetUserStoryMapsMutation";
import setSelectedUserStoryMapMutation from "@/vuex/mutations/userStoryMap/SetSelectedUserStoryMapMutation";
import setSelectedUserStoryMapDocumentMutation from "@/vuex/mutations/userStoryMap/SetSelectedUserStoryMapDocumentMutation";
import setSelectedUserStoryMapDocumentUnsubscribeFunctionMutation from "@/vuex/mutations/userStoryMap/SetSelectedUserStoryMapDocumentUnsubscribeFunction";

const namespaced = true;
const state = {
  userStoryMaps: [],
  selectedUserStoryMap: undefined,
  selectedUserStoryMapDocument: undefined,
  selectedUserStoryMapDocumentUnsubscribeFunction: undefined
};
const mutations = {
  setUserStoryMaps: setUserStoryMapMutation,
  setSelectedUserStoryMap: setSelectedUserStoryMapMutation,
  setSelectedUserStoryMapDocument: setSelectedUserStoryMapDocumentMutation,
  setSelectedUserStoryMapDocumentUnsubscribeFunction: setSelectedUserStoryMapDocumentUnsubscribeFunctionMutation
};
const actions = {
  createUserStoryMap: createUserStoryMapAsync,
  createActivity: createActivityAsync,
  retrieveUserStoryMaps: retrieveUserStoryMapsAsync
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
