import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";

const signOffAsync = async ({ commit }) => {
  try {
    await firebase.auth().signOut();
    commit("setUser", { user: undefined });
    commit("setAccessToken", { accessToken: undefined });
    router.push("/");
  } catch (error) {
    // const {code, message, credential, email} = error;
    commit("setUser", { user: undefined });
    commit("setAccessToken", { accessToken: undefined });
    router.push("/");
  }
};

export default signOffAsync;
