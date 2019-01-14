import Vue from "vue";
import Vuex from "vuex";
import commonVuexModule from "@/vuex/modules/CommonVuexModule";
import userStoryMapVuexModule from "@/vuex/modules/UserStoryMapVuexModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: commonVuexModule,
    userStoryMap: userStoryMapVuexModule
  }
});
