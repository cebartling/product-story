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
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // // ...
    commit("setUser", { user: undefined });
    commit("setAccessToken", { accessToken: undefined });
  }
};

export default signInWithGoogleAsync;
