<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12> <h1>Welcome to ProductStory</h1> </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "FrontDoor",
  computed: {
    userSignedIn: {
      get: function() {
        return this.$store.state.common.user !== undefined;
      }
    }
  },
  methods: {}
};
</script>

<style scoped></style>
