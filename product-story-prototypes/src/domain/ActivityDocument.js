import store from "@/vuex/store";
import FirebaseDocument from "@/domain/FirestoreDocument";

class ActivityDocument extends FirebaseDocument {
  constructor(parentUserStoryMap, id, data) {
    super();
    this.parentUserStoryMap = parentUserStoryMap;
    this.id = id;
    this.updateAttributes(data);
    this.startObserving();
  }

  updateAttributes(data) {
    this.activity = data.activity;
    // this.createdAt = data.createdAt;
    // this.updatedAt = data.updatedAt;
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${
      this.parentUserStoryMap.id
    }/activities`;
  }

  documentId() {
    return this.id;
  }

  implementationClassName() {
    return "ActivityDocument";
  }
}

export default ActivityDocument;
