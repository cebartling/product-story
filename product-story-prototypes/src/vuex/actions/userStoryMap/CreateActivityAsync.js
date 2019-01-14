// import firebase from "firebase/app";
import "firebase/firestore";

const createActivityAsync = async (/*{ commit }*/) => {
  try {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // const result = await firebase.auth().signInWithPopup(provider);
    // const {
    //   user,
    //   credential: { accessToken }
    // } = result;
    // commit("setAccessToken", { accessToken });
    // commit("setUser", { user });
    // router.push("/home");
  } catch (error) {
    // // const {code, message, credential, email} = error;
    // commit("setUser", { user: undefined });
    // commit("setAccessToken", { accessToken: undefined });

    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default createActivityAsync;
