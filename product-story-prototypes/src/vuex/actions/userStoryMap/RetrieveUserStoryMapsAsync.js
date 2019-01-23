import Vue from "vue";
import { firestore } from "@/Firebase";

const retrieveUserStoryMapsAsync = async context => {
  const { uid } = context.rootState.common.user;
  const collectionPath = `users/${uid}/userStoryMaps`;
  try {
    const querySnapshot = await firestore()
      .collection(collectionPath)
      .get();
    const userStoryMaps = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      const id = doc.id;
      userStoryMaps.push({ id, ...data });
    });
    context.commit("setUserStoryMaps", { userStoryMaps });
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to retrieve user story maps!`);
  }
};

export default retrieveUserStoryMapsAsync;
