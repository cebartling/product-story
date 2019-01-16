import Vue from "vue";
import "@/plugins/vuetify";
import App from "@/App.vue";
import router from "@/router";
import store from "@/vuex/store";
import firebase from "firebase/app";
import "@/toasted";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
