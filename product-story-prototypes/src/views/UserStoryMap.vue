<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs11>
          <h1>{{ name }}</h1>
        </v-flex>
        <v-flex xs1>
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
        </v-flex>
      </v-layout>
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

export default {
  name: "UserStoryMap",
  components: {
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
    }
  },
  methods: {}
};
</script>

<style scoped></style>
