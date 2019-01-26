import Vue from "vue";
import { firestore } from "@/Firebase";

const createActivityAsync = async (context, payload) => {
  try {
    const data = { activity: payload.activity };
    const { uid } = context.rootState.common.user;

    const collectionPath = `users/${uid}/userStoryMaps/${
      payload.userStoryMapId
    }/activities`;

    const collection = firestore().collection(collectionPath);
    const documentRef = await collection.add(data);
    console.info(`Created activity: ${documentRef.id}`);
    Vue.toasted.success(
      `Successfully created activity named '${payload.activity}'!`
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to create activity named '${payload.activity}'!`);
  }
};

export default createActivityAsync;
