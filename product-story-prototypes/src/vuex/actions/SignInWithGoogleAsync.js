import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";

const signInWithGoogleAsync = async ({ commit }) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const {
      user,
      credential: { accessToken }
    } = result;
    commit("setAccessToken", { accessToken });
    commit("setUser", { user });
    router.push("/home");
  } catch (error) {
    // const {code, message, credential, email} = error;
    commit("setUser", { user: undefined });
    commit("setAccessToken", { accessToken: undefined });
  }
};

export default signInWithGoogleAsync;
