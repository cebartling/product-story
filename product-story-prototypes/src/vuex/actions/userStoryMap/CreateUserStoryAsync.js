import Vue from "vue";
// import { firestore, firestoreServerTimestamp } from "@/Firebase";

const createUserStoryAsync = async (context, payload) => {
  try {
    console.info("activity", payload.activity);
    // const data = {
    //   title: payload.title,
    //   row: payload.selectedRow,
    //   column: payload.selectedColumn,
    //   createdAt: firestoreServerTimestamp(),
    //   updatedAt: firestoreServerTimestamp()
    // };
    // const { uid } = context.rootState.common.user;

    // const collectionPath = `users/${uid}/userStoryMaps/${
    //   payload.userStoryMapId
    // }/activities`;
    //
    // const collection = firestore().collection(collectionPath);
    // eslint-disable-next-line no-unused-vars
    // const documentRef = await collection.add(data);
    Vue.toasted.success(
      `Successfully created user story titled '${payload.title}'!`
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to create user story titled '${payload.title}'!`);
  }
};

export default createUserStoryAsync;
