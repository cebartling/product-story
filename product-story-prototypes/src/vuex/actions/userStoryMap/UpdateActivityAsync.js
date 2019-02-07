import Vue from "vue";
import { firestore, firestoreServerTimestamp } from "@/Firebase";

const updateActivityAsync = async (context, payload) => {
  try {
    const data = {
      columns: payload.columns,
      rows: payload.rows,
      updatedAt: firestoreServerTimestamp()
    };
    const { uid } = context.rootState.common.user;

    const collectionPath = `users/${uid}/userStoryMaps/${
      payload.activityDocument.userStoryMapDocument.id
    }/activities`;

    await firestore().runTransaction(transaction => {
      const collection = firestore().collection(collectionPath);
      const documentRef = collection.doc(payload.activityDocument.id);
      // // This code may get re-run multiple times if there are conflicts.
      return transaction.get(documentRef).then(documentSnapshot => {
        if (!documentSnapshot.exists) {
          throw "Activity document does not exist!";
        }
        transaction.update(documentRef, data);
      });
    });
  } catch (error) {
    console.error(error);
    Vue.toasted.error(
      `Unable to update activity named '${payload.activityDocument.title}'!`
    );
  }
};

export default updateActivityAsync;
