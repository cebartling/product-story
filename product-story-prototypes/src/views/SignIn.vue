<template>
  <v-content>
    <v-container fluid fill-height>
      <!--<v-layout align-center justify-center>-->
      <!--<v-flex xs12 sm8 md4>-->
      <v-btn @click="signInWithGoogle">Sign in with Google</v-btn>
      <!--</v-flex>-->
      <!--</v-layout>-->
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    signInWithGoogle() {
      this.$store.dispatch("signInWithGoogle", {});
    }
  }
};
</script>

<style scoped></style>
