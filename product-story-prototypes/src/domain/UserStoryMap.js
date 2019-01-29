import store from "@/vuex/store";
import { firestore } from "@/Firebase";

class UserStoryMap {
  constructor(id, data) {
    this.id = id;
    this.updateAttributes(data);
    this.startObserving();
  }

  updateAttributes(data) {
    this.name = data.name;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  startObserving() {
    try {
      const { uid } = store.state.common.user;
      const collectionPath = `users/${uid}/userStoryMaps`;
      const collection = firestore().collection(collectionPath);
      this.document = collection.doc(this.id);
      this.unsubscribeFunction = this.document.onSnapshot(doc => {
        // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        this.updateAttributes(doc.data());
        console.info(`User story map document ${doc.id} was changed.`);
      });
    } catch (error) {
      console.error(error);
    }
  }

  stopObserving() {
    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
    }
  }
}

export default UserStoryMap;
