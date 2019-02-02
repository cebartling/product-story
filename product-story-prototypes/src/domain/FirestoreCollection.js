import { firestore } from "@/Firebase";

class FirestoreCollection {
  constructor() {
    this.documents = [];
  }

  /**
   * Returns a string representation of the Firestore collection path to observe.
   */
  collectionPath() {}

  /**
   *
   * @param queryDocumentSnapshot
   */
  // eslint-disable-next-line
  materialize(queryDocumentSnapshot) {}

  clear() {
    if (this.documents && this.documents.length > 0) {
      this.documents.forEach(x => {
        x.stopObserving();
      });
    }
    this.documents.length = 0;
  }

  add(document) {
    this.documents.push(document);
  }

  retrieveAll() {
    this.clear();
    try {
      this.collectionReference = firestore().collection(this.collectionPath());
      this.collectionReference.get().then(querySnapshot => {
        querySnapshot.forEach(queryDocumentSnapshot => {
          const document = this.materialize(queryDocumentSnapshot);
          this.add(document);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  startObserving() {
    this.retrieveAll();

    try {
      this.unsubscribeFunction = this.collectionReference.onSnapshot(
        querySnapshot => {
          // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.info("[COLLECTION ON SNAPSHOT]", querySnapshot);
          this.retrieveAll();
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
}

export default FirestoreCollection;
