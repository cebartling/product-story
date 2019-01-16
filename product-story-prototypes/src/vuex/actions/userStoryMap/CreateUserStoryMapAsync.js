import Vue from "vue";
import { firestore, firestoreServerTimestamp } from "@/Firebase";

const createUserStoryMapAsync = async (_, payload) => {
  try {
    const data = {
      name: payload.name,
      activities: [],
      createdAt: firestoreServerTimestamp(),
      updatedAt: firestoreServerTimestamp()
    };
    const collection = firestore().collection("userStoryMaps");
    const userStoryMapDocument = await collection.add(data);
    // eslint-disable-next-line no-console
    console.info(`Created UserStoryMap: ${userStoryMapDocument.id}`);
    Vue.toasted.success(
      `Successfully created user story map named '${payload.name}'!`
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    Vue.toasted.error(
      `Unable to create user story map named '${payload.name}'!`
    );
  }
};

export default createUserStoryMapAsync;
