import firebase from "firebase/app";
import "firebase/firestore";

export const firestore = () => {
  const firestore = firebase.firestore();
  const settings = {};
  firestore.settings(settings);
  return firestore;
};

export const firestoreServerTimestamp = () => {
  return firebase.firestore.FieldValue.serverTimestamp();
};

export const COLLECTION_USER_STORY_MAPS = "userStoryMaps";
