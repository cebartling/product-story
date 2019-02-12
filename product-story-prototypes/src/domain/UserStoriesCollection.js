import store from "@/vuex/store";
import FirestoreCollection from "@/domain/FirestoreCollection";
import UserStoryDocument from "@/domain/UserStoryDocument";

class UserStoriesCollection extends FirestoreCollection {
  constructor(activityDocument) {
    super();
    this.activityDocument = activityDocument;
    this.startObserving();
  }

  collectionPath() {
    const { uid } = store.state.common.user;
    return `users/${uid}/userStoryMaps/${
      this.activityDocument.userStoryMapDocument.id
    }/activities/${this.activityDocument.id}/userStories`;
  }

  materialize(queryDocumentSnapshot) {
    return new UserStoryDocument(
      this.activityDocument,
      queryDocumentSnapshot.id,
      queryDocumentSnapshot.data()
    );
  }
}

export default UserStoriesCollection;
