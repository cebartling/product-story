<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12> <h1>Welcome to ProductStory</h1> </v-flex>
        <v-flex xs12>
          <v-btn @click="signIn" v-if="!isSignedIn">Sign in with Google</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "FrontDoor",
  computed: {
    isSignedIn: function() {
      return this.$store.state.user !== undefined;
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("common/signInWithGoogle", {});
    }
  }
};
</script>

<style scoped></style>
