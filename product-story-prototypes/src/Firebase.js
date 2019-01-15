import firebase from "firebase/app";
import "firebase/firestore";

export const firestore = () => {
  const firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
  return firestore;
};

export const firestoreServerTimestamp = () => {
  return firebase.firestore.FieldValue.serverTimestamp();
};
