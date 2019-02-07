import store from "@/vuex/store";
import FirestoreCollection from "@/domain/FirestoreCollection";
import ActivityDocument from "@/domain/ActivityDocument";

class ActivitiesCollection extends FirestoreCollection {
  constructor(userStoryMapDocument) {
    super();
    this.userStoryMapDocument = userStoryMapDocument;
    this.startObserving();
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${
      this.userStoryMapDocument.id
    }/activities`;
  }

  materialize(queryDocumentSnapshot) {
    return new ActivityDocument(
      this.userStoryMapDocument,
      queryDocumentSnapshot.id,
      queryDocumentSnapshot.data()
    );
  }
}

export default ActivitiesCollection;
