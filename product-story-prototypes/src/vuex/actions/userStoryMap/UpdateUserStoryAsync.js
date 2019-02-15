import Vue from "vue";
import { firestore, firestoreServerTimestamp } from "@/Firebase";

const updateUserStoryAsync = async (context, payload) => {
  try {
    const data = {
      column: payload.column,
      row: payload.row,
      updatedAt: firestoreServerTimestamp()
    };
    await firestore().runTransaction(transaction => {
      const collectionRef = firestore().collection(
        payload.userStory.collectionPath()
      );
      const documentRef = collectionRef.doc(payload.userStory.id);

      // // This code may get re-run multiple times if there are conflicts.
      return transaction.get(documentRef).then(documentSnapshot => {
        if (!documentSnapshot.exists) {
          throw "User story document does not exist!";
        }
        transaction.update(documentRef, data);
      });
    });
  } catch (error) {
    console.error(error);
    Vue.toasted.error(
      `Unable to update user story named '${payload.userStory.title}'!`
    );
  }
};

export default updateUserStoryAsync;
