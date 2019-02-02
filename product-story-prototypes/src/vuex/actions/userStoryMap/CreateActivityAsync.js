import Vue from "vue";
import { firestore, firestoreServerTimestamp } from "@/Firebase";

const createActivityAsync = async (context, payload) => {
  try {
    const data = {
      activity: payload.activity,
      title: payload.activity,
      columns: 4,
      rows: 4,
      createdAt: firestoreServerTimestamp(),
      updatedAt: firestoreServerTimestamp()
    };
    const { uid } = context.rootState.common.user;

    const collectionPath = `users/${uid}/userStoryMaps/${
      payload.userStoryMapId
    }/activities`;

    const collection = firestore().collection(collectionPath);
    // eslint-disable-next-line no-unused-vars
    const documentRef = await collection.add(data);
    Vue.toasted.success(
      `Successfully created activity named '${payload.activity}'!`
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to create activity named '${payload.activity}'!`);
  }
};

export default createActivityAsync;
