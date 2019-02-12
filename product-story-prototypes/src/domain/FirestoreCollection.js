import { firestore } from "@/Firebase";

class FirestoreCollection {
  constructor() {
    this.documents = [];
    this.collectionReference = undefined;
  }

  /**
   * Sets the collection reference for this object.
   */
  setCollectionReference() {
    if (this.collectionReference === undefined) {
      this.collectionReference = firestore().collection(this.collectionPath());
    }
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

  /**
   *
   */
  clear() {
    if (this.documents && this.documents.length > 0) {
      this.documents.forEach(x => {
        x.stopObserving();
      });
    }
    this.documents.length = 0;
  }

  /**
   * Adds the documentData to Firestore as a Firestore Document.
   *
   * @param documentData
   */
  add(documentData) {
    this.setCollectionReference();
    this.collectionReference.add(documentData);
  }

  /**
   *
   */
  retrieveAll() {
    this.setCollectionReference();
    this.clear();
    try {
      this.collectionReference.get().then(querySnapshot => {
        querySnapshot.forEach(queryDocumentSnapshot => {
          const document = this.materialize(queryDocumentSnapshot);
          this.documents.push(document);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   */
  startObserving() {
    this.setCollectionReference();
    this.retrieveAll();

    try {
      this.unsubscribeFunction = this.collectionReference.onSnapshot(
        // eslint-disable-next-line no-unused-vars
        querySnapshot => {
          // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          this.retrieveAll();
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   */
  stopObserving() {
    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
    }
  }
}

export default FirestoreCollection;
