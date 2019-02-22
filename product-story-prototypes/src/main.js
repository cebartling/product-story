import Vue from "vue";
import "@/plugins/vuetify";
import App from "@/App.vue";
import router from "@/router";
import store from "@/vuex/store";
import firebase from "firebase/app";
import "@/toasted";
import VueDragDrop from "vue-drag-drop";

Vue.use(VueDragDrop);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const vueApp = new Vue({
  router,
  store,
  render: h => h(App)
});

vueApp.$mount("#app");

// Add the Vue app for testability with Cypress
if (window.Cypress) {
  // only available during E2E tests
  window.vueApp = vueApp;
}
