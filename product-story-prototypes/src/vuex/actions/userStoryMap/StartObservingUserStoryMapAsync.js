import { firestore } from "@/Firebase";
import Vue from "vue";

const startObservingUserStoryMapAsync = async (context, payload) => {
  try {
    const { uid } = context.rootState.common.user;
    const collectionPath = `users/${uid}/userStoryMaps`;
    const collection = firestore().collection(collectionPath);
    const document = collection.doc(payload.userStoryMapId);
    const unsubscribeFunction = document.onSnapshot(doc => {
      // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      Vue.toasted.info(`User story map document ${doc.id} was changed.`);
    });
    context.commit("setSelectedUserStoryMapDocument", {
      selectedUserStoryMapDocument: document
    });
    context.commit("setSelectedUserStoryMapDocumentUnsubscribeFunction", {
      selectedUserStoryMapDocumentUnsubscribeFunction: unsubscribeFunction
    });
  } catch (error) {
    console.error(error);
    Vue.toasted.error(
      `An error occurred while observing changes on the user story map document: '${
        payload.userStoryMapId
      }'`
    );
  }
};

export default startObservingUserStoryMapAsync;
