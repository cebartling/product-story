import store from "@/vuex/store";
import { firestore } from "@/Firebase";

class UserStoryMap {
  constructor(id, data) {
    this.id = id;
    this.updateAttributes(data);
    this.startObserving();
    this.startObservingActivitiesCollection();
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

  startObservingActivitiesCollection() {
    try {
      const { uid } = store.state.common.user;
      const collectionPath = `users/${uid}/userStoryMaps/${this.id}/activities`;
      this.activitiesCollection = firestore().collection(collectionPath);
      this.unsubscribeActivitiesFunction = this.activitiesCollection.onSnapshot(
        querySnapshot => {
          // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          // this.updateAttributes(doc.data());
          console.info("Activities collection changed.", querySnapshot);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  stopObserving() {
    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
    }
  }

  stopObservingActivitiesCollection() {
    if (this.unsubscribeActivitiesFunction) {
      this.unsubscribeActivitiesFunction();
    }
  }
}

export default UserStoryMap;
