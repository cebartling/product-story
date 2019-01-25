import { firestore } from "@/Firebase";

const createActivityAsync = async (context, payload) => {
  try {
    const data = { activity: payload.activity };
    const { uid } = context.rootState.common.user;

    const collectionPath = `users/${uid}/userStoryMaps/${
      payload.userStoryMapId
    }/activities`;

    const collection = firestore().collection(collectionPath);
    const documentRef = await collection.add(data);
    // eslint-disable-next-line no-console
    console.info(`Created activity: ${documentRef.id}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default createActivityAsync;
