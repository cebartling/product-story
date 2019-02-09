<template>
  <v-toolbar app>
    <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
    <v-toolbar-title class="headline">
      <span>ProductStory</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="signIn" v-if="!userSignedIn">Sign In</v-btn>
      <v-btn flat to="/home" v-if="userSignedIn">Home</v-btn>
      <v-menu v-if="userSignedIn">
        <v-btn flat slot="activator">
          <span>Views</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile to="/userStoryMap">
            <v-list-tile-title>User Story Map</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/kanbanBoard">
            <v-list-tile-title>Kanban Board</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/nikoNiko">
            <v-list-tile-title>Niko-niko</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
