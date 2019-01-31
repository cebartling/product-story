import store from "@/vuex/store";
import FirestoreCollection from "@/domain/FirestoreCollection";
import ActivityDocument from "@/domain/ActivityDocument";

class ActivitiesCollection extends FirestoreCollection {
  constructor(userStoryMap) {
    super();
    this.userStoryMap = userStoryMap;
    this.startObserving();
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${this.userStoryMap.id}/activities`;
  }

  materialize(queryDocumentSnapshot) {
    return new ActivityDocument(
      this.userStoryMap,
      queryDocumentSnapshot.id,
      queryDocumentSnapshot.data()
    );
  }
}

export default ActivitiesCollection;
