<template>
  <v-dialog v-model="dialog" width="500">
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
        <v-btn
          color="primary"
          flat
          @click="onClickOpen"
          :disabled="selectedMap === undefined"
        >
          Open
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "OpenUserStoryMapDialog",
  props: {
    dialog: Boolean
  },
  data() {
    return {
      selectedMap: undefined,
      valid: false,
      name: undefined
    };
  },
  computed: {
    availableUserStoryMaps: {
      get: function() {
        return this.$store.state.userStoryMap.userStoryMaps;
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("userStoryMap/retrieveUserStoryMaps");
  },
  methods: {
    onClickCancel: function() {
      this.selectedMap = undefined;
      this.$emit("update:openDialog", false);
    },
    onClickOpen: function() {
      this.$store.commit("userStoryMap/setSelectedUserStoryMap", {
        selectedUserStoryMap: this.selectedMap
      });
      this.selectedMap = undefined;
      this.$emit("update:openDialog", false);
    }
  }
};
</script>

<style scoped></style>
