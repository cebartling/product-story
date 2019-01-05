<template>
  <v-avatar slot="activator" size="50px" class="avatar" v-if="isSignedIn">
    <img src="@/assets/user-profile.png" alt="Avatar" />
  </v-avatar>
</template>

<script>
export default {
  name: "UserProfileImage",
  computed: {
    isSignedIn: () => {
      return this.$store.state.user !== undefined;
    }
  }
};
</script>

<style scoped lang="scss">
.avatar {
  margin: 6px;
}
</style>
