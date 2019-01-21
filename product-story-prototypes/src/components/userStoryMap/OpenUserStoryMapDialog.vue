<template>
  <v-dialog v-model="dialog" width="500">
    <v-list-tile slot="activator">
      <v-list-tile-title>Open</v-list-tile-title>
    </v-list-tile>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Open User Story Map
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex xs12 md12>
                <v-combobox
                  v-model="selectedMap"
                  :items="availableUserStoryMaps"
                  item-text="name"
                  item-value="id"
                  persistent-hint
                  label="Select an existing user story map to work with"
                  return-object
                >
                </v-combobox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" flat @click="onClickCancel"> Cancel </v-btn>
        <v-btn color="primary" flat @click="onClickOpen"> Open </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "OpenUserStoryMapDialog",
  data() {
    return {
      dialog: false,
      valid: false,
      name: undefined
    };
  },
  computed: {
    availableUserStoryMaps: {
      get: function() {
        return this.$store.state.userStoryMap.userStoryMaps;
      }
    },
    selectedMap: {
      get: function() {
        return this.$store.state.userStoryMap.selectedUserStoryMap;
      },
      set: function(value) {
        this.$store.commit("userStoryMap/setSelectedUserStoryMap", {
          selectedUserStoryMap: value
        });
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("userStoryMap/retrieveUserStoryMaps");
  },
  methods: {
    onClickCancel: function() {
      this.dialog = false;
    },
    onClickOpen: function() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
