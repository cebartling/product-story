import { firestore } from "@/Firebase";
import Vue from "vue/types/vue";

const userStoryMapObserver = (context, payload) => {
  try {
    const { uid } = context.rootState.common.user;
    const collectionPath = `users/${uid}/userStoryMaps`;
    const collection = firestore().collection(collectionPath);
    const document = collection.doc(payload.userStoryMapId);
    const unsubscribeFunction = document.onSnapshot(function(doc) {
      // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      Vue.toasted.info(`User story map document ${doc.id} was changed.`);
    });
    context.commit("userStoryMap/setSelectedUserStoryMapDocument", {
      selectedUserStoryMapDocument: document
    });
    context.commit(
      "userStoryMap/setSelectedUserStoryMapDocumentUnsubscribeFunction",
      {
        selectedUserStoryMapDocumentUnsubscribeFunction: unsubscribeFunction
      }
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(
      `An error occurred while observing changes on the user story map document: '${
        payload.userStoryMapId
      }'`
    );
  }
};

export default userStoryMapObserver;
