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
      this.documents.each(x => {
        x.stopObserving();
      });
    }
    this.documents.length = 0;
  }

  add(document) {
    this.documents.push(document);
  }

  startObserving() {
    this.clear();

    try {
      this.collectionReference = firestore().collection(this.collectionPath());
      this.collectionReference.get().then(querySnapshot => {
        querySnapshot.forEach(queryDocumentSnapshot => {
          const document = this.materialize(queryDocumentSnapshot);
          this.add(document);
        });
        // console.info("documents length", this.documents.length);
      });
      // this.unsubscribeFunction = this.collectionReference.onSnapshot(
      //   querySnapshot => {
      //     // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      //     console.info("[COLLECTION ON SNAPSHOT]", querySnapshot);
      //   }
      // );
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
