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
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default createUserStoryMapAsync;
