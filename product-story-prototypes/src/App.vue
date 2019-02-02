<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-fade-transition mode="out-in">
      <router-view></router-view>
    </v-fade-transition>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader
  },
  mounted() {
    this.$store.dispatch("common/retrieveUserAndAccessTokenFromLocalStorage");
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
.toasted-message {
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: bold !important;
  color: #fff !important;
}
</style>
