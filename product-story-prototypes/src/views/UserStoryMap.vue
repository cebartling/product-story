<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs11> </v-flex>
        <v-flex xs1>
          <v-menu offset-y>
            <v-btn slot="activator" color="primary"> Actions </v-btn>
            <v-list>
              <v-list-tile @click="createDialog = true">
                <v-list-tile-title>Create</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="openDialog = true">
                <v-list-tile-title>Open</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <CreateUserStoryMapDialog
          :dialog="createDialog"
          v-on:update:createDialog="onUpdateCreateDialog($event)"
        ></CreateUserStoryMapDialog>
        <OpenUserStoryMapDialog
          :dialog="openDialog"
          v-on:update:openDialog="onUpdateOpenDialog($event)"
        ></OpenUserStoryMapDialog>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CreateUserStoryMapDialog from "@/components/userStoryMap/CreateUserStoryMapDialog";
import OpenUserStoryMapDialog from "@/components/userStoryMap/OpenUserStoryMapDialog";

export default {
  name: "UserStoryMap",
  components: {
    OpenUserStoryMapDialog,
    CreateUserStoryMapDialog
  },
  data() {
    return {
      createDialog: false,
      openDialog: false
    };
  },
  methods: {
    onUpdateCreateDialog: function(event) {
      this.createDialog = event;
    },
    onUpdateOpenDialog: function(event) {
      this.openDialog = event;
    }
  }
};
</script>

<style scoped></style>
