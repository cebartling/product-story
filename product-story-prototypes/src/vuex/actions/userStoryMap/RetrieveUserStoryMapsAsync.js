import Vue from "vue";
import { COLLECTION_USER_STORY_MAPS, firestore } from "@/Firebase";

const retrieveUserStoryMapsAsync = async ({ commit }) => {
  try {
    const querySnapshot = await firestore()
      .collection(COLLECTION_USER_STORY_MAPS)
      .get();
    const userStoryMaps = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      const id = doc.id;
      userStoryMaps.push({ id, ...data });
    });
    commit("setUserStoryMaps", { userStoryMaps });
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to retrieve user story maps!`);
  }
};

export default retrieveUserStoryMapsAsync;
