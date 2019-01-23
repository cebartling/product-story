<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <span>ProductStory</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="signIn" v-if="!userSignedIn">Sign In</v-btn>
      <v-btn flat to="/home" v-if="userSignedIn">Home</v-btn>
      <v-btn flat to="/userStoryMap" v-if="userSignedIn">User Story Map</v-btn>
      <v-btn flat to="/kanbanBoard" v-if="userSignedIn">Kanban Board</v-btn>
      <v-btn flat to="/about" v-if="userSignedIn">About</v-btn>
      <UserProfileImage v-if="userSignedIn"></UserProfileImage>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import UserProfileImage from "@/components/UserProfileImage";

export default {
  name: "AppHeader",
  components: { UserProfileImage },
  computed: {
    userSignedIn: {
      get: function() {
        return this.$store.state.common.user !== undefined;
      }
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("common/signInWithGoogle");
    }
  }
};
</script>

<style scoped lang="scss"></style>
