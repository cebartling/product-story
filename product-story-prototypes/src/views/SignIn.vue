<template>
  <div><button class="" @click="signIn">Sign in with Google</button></div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    signIn() {
      this.$store.dispatch("signInWithGoogle", {});
    }
  }
};
</script>

<style scoped></style>
