import Vue from "vue";
import { firestoreServerTimestamp } from "@/Firebase";

const createUserStoryAsync = async (context, payload) => {
  try {
    const data = {
      title: payload.title,
      row: payload.selectedRow,
      column: payload.selectedColumn,
      createdAt: firestoreServerTimestamp(),
      updatedAt: firestoreServerTimestamp()
    };
    // eslint-disable-next-line no-unused-vars
    const documentRef = await payload.activity.userStoriesCollection.add(data);
    Vue.toasted.success(
      `Successfully created user story titled '${payload.title}'!`
    );
  } catch (error) {
    console.error(error);
    Vue.toasted.error(`Unable to create user story titled '${payload.title}'!`);
  }
};

export default createUserStoryAsync;
