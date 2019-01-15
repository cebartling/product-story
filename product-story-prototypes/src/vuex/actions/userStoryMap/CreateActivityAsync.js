import { firestore } from "@/Firebase";

const createActivityAsync = async (_, payload) => {
  try {
    const data = { activity: payload.activity };
    const collection = firestore().collection("user_story_maps");
    const documentRef = await collection.add(data);
    // eslint-disable-next-line no-console
    console.info(`Created activity: ${documentRef.id}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default createActivityAsync;
