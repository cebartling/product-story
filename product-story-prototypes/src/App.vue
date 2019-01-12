<template>
  <v-app>
    <AppHeader></AppHeader>
    <router-view></router-view>
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
