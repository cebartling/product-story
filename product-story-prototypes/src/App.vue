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
  data() {
    return {
      //
    };
  }
};
</script>
