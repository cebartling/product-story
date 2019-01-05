<template>
  <div>
    <button class="" @click="signIn" v-if="!isSignedIn">
      Sign in with Google
    </button>
  </div>
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
      this.$store.dispatch("signInWithGoogle", {});
    }
  }
};
</script>

<style scoped></style>
