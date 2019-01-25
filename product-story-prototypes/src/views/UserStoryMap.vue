<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap align-center="true">
        <v-flex xs12>
          <v-menu offset-y>
            <v-btn flat icon color="blue" slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="dialogState.createDialog = true">
                <v-list-tile-title>Create</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="dialogState.openDialog = true">
                <v-list-tile-title>Open</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <span class="user-story-map-name">{{ name }}</span>
        </v-flex>
      </v-layout>
      <UserStoryMapCanvas v-if="selectedUserStoryMap"></UserStoryMapCanvas>
      <v-layout row wrap>
        <CreateUserStoryMapDialog
          :dialog="dialogState.createDialog"
          v-bind.sync="dialogState"
        ></CreateUserStoryMapDialog>
        <OpenUserStoryMapDialog
          :dialog="dialogState.openDialog"
          v-bind.sync="dialogState"
        ></OpenUserStoryMapDialog>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CreateUserStoryMapDialog from "@/components/userStoryMap/CreateUserStoryMapDialog";
import OpenUserStoryMapDialog from "@/components/userStoryMap/OpenUserStoryMapDialog";
import UserStoryMapCanvas from "../components/userStoryMap/UserStoryMapCanvas";

export default {
  name: "UserStoryMap",
  components: {
    UserStoryMapCanvas,
    OpenUserStoryMapDialog,
    CreateUserStoryMapDialog
  },
  data() {
    return {
      dialogState: {
        createDialog: false,
        openDialog: false
      }
    };
  },
  computed: {
    name: function() {
      let name = "";
      if (this.$store.state.userStoryMap.selectedUserStoryMap) {
        name = this.$store.state.userStoryMap.selectedUserStoryMap.name;
      }
      return name;
    },
    selectedUserStoryMap: function() {
      return this.$store.state.userStoryMap.selectedUserStoryMap;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.user-story-map-name {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
