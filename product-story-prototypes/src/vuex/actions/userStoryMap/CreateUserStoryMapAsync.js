import Vue from "vue";
import { firestore, firestoreServerTimestamp } from "@/Firebase";

const createUserStoryMapAsync = async (context, payload) => {
  try {
    const data = {
      name: payload.name,
      description: payload.description,
      createdAt: firestoreServerTimestamp(),
      updatedAt: firestoreServerTimestamp()
    };
    const { uid } = context.rootState.common.user;
    const collectionPath = `users/${uid}/userStoryMaps`;
    const collection = firestore().collection(collectionPath);
    await collection.add(data);
    Vue.toasted.success(
      `Successfully created user story map named '${payload.name}'!`
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(
      `Unable to create user story map named '${payload.name}'!`
    );
  }
};

export default createUserStoryMapAsync;
