import store from "@/vuex/store";
import FirestoreDocument from "@/domain/FirestoreDocument";

class UserStoryDocument extends FirestoreDocument {
  constructor(activityDocument, id, data) {
    super();
    this.id = id;
    this.activityDocument = activityDocument;
    this.updateAttributes(data);
    this.startObserving();
  }

  updateAttributes(data) {
    this.title = data.title;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${
      this.activityDocument.userStoryMapDocument.id
    }/activities/${this.activityDocument.id}/userStories`;
  }

  documentId() {
    return this.id;
  }

  implementationClassName() {
    return "UserStoryDocument";
  }
}

export default UserStoryDocument;
