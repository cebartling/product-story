import { firestore } from "@/Firebase";

class FirestoreDocument {
  /**
   * Template function that allows implementation to receive data updates from Firestore.
   *
   * @param data
   */
  // eslint-disable-next-line
  updateAttributes(data) {}

  /**
   *
   */
  collectionPath() {}

  /**
   *
   */
  documentId() {}

  /**
   *
   */
  implementationClassName() {}

  /**
   *
   */
  startObserving() {
    try {
      const collection = firestore().collection(this.collectionPath());
      this.document = collection.doc(this.documentId());
      this.unsubscribeFunction = this.document.onSnapshot(doc => {
        // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        this.updateAttributes(doc.data());
      });
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

export default FirestoreDocument;
