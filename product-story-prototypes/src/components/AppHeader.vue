<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <span>ProductStory</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Welcome</v-btn>
      <v-btn flat to="/home">Home</v-btn>
      <v-btn flat to="/kanbanBoard">Kanban Board</v-btn>
      <v-btn flat to="/about">About</v-btn>
      <!--<UserProfileImage></UserProfileImage>-->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// import UserProfileImage from "@/components/UserProfileImage";

export default {
  name: "AppHeader",
  components: {}
};
</script>

<style scoped lang="scss"></style>
