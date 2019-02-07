import store from "@/vuex/store";
import FirestoreDocument from "@/domain/FirestoreDocument";
import ActivitiesCollection from "@/domain/ActivitiesCollection";

class UserStoryMapDocument extends FirestoreDocument {
  constructor(id, data) {
    super();
    this.id = id;
    this.updateAttributes(data);
    this.startObserving();
    this.activitiesCollection = new ActivitiesCollection(this);
  }

  updateAttributes(data) {
    this.name = data.name;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps`;
  }

  documentId() {
    return this.id;
  }

  implementationClassName() {
    return "UserStoryMapDocument";
  }
}

export default UserStoryMapDocument;
