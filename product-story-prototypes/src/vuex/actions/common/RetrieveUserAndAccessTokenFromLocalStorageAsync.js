import router from "@/router";

const retrieveUserAndAccessTokenFromLocalStorageAsync = async ({ commit }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (user && accessToken) {
      commit("setUser", { user });
      commit("setAccessToken", { accessToken });
      router.push("/home");
    } else {
      router.push("/");
    }
  } catch (error) {
    // const {code, message, credential, email} = error;
    commit("setUser", { user: undefined });
    commit("setAccessToken", { accessToken: undefined });
  }
};

export default retrieveUserAndAccessTokenFromLocalStorageAsync;
