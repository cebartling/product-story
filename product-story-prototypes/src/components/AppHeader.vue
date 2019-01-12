<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <span>ProductStory</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!--<v-btn flat>Link One</v-btn>-->
      <!--<v-btn flat>Link Two</v-btn>-->
      <!--<v-btn flat>Link Three</v-btn>-->
      <UserProfileImage></UserProfileImage>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import UserProfileImage from "./UserProfileImage";
export default {
  name: "AppHeader",
  components: { UserProfileImage }
};
</script>

<style scoped lang="scss"></style>
