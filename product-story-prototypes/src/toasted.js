// register the plugin on vue
import Toasted from "vue-toasted";
import Vue from "vue";

const options = {
  position: "bottom-right",
  duration: 5000,
  className: "toasted-message"
};

Vue.use(Toasted, options);

// Lets Register a Global Error Notification Toast.
Vue.toasted.register("my_app_error", "Oops.. Something Went Wrong..", {
  type: "error",
  icon: "error_outline"
});
