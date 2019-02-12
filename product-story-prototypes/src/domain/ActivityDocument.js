import store from "@/vuex/store";
import FirestoreDocument from "@/domain/FirestoreDocument";
import UserStoriesCollection from "@/domain/UserStoriesCollection";

class ActivityDocument extends FirestoreDocument {
  constructor(userStoryMapDocument, id, data) {
    super();
    this.userStoryMapDocument = userStoryMapDocument;
    this.id = id;
    this.updateAttributes(data);
    this.startObserving();
    this.userStoriesCollection = new UserStoriesCollection(this);
  }

  updateAttributes(data) {
    this.title = data.title;
    this.rows = data.rows;
    this.columns = data.columns;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${
      this.userStoryMapDocument.id
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
