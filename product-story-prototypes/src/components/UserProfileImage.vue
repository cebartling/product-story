<template>
  <div class="user-profile-picture-wrapper" v-if="isSignedIn">
    <img src="@/assets/user-profile.png" class="image-cover" />
  </div>
</template>

<script>
export default {
  name: "UserProfileImage",
  computed: {
    isSignedIn: function() {
      return this.$store.state.user !== undefined;
    }
  }
};
</script>

<style scoped lang="scss">
.user-profile-picture-wrapper {
  padding: 10px;

  .image-cover {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 4px;

    object-fit: cover;
    object-position: center right;
  }
}
</style>
