<template>
  <div class="text-xs-center">
    <v-menu offset-y nudge-left="20">
      <v-avatar slot="activator" size="50px" class="avatar">
        <img src="@/assets/user-profile.png" alt="Avatar" />
      </v-avatar>
      <v-list>
        <v-list-tile @click="signOff">
          <v-list-tile-title>Sign off</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "UserProfileImage",
  computed: {},
  methods: {
    signOff: function() {
      this.$store.dispatch("common/signOff");
    }
  }
};
</script>

<style scoped lang="scss">
.avatar {
  margin: 6px;
}
</style>
