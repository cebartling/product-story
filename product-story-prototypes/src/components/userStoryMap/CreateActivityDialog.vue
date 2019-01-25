<template>
  <div class="text-xs-left">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Create Activity
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-layout>
                <v-flex xs12 md12>
                  <v-text-field
                    v-model="activity"
                    label="Activity"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat @click="onClickCancel"> Cancel </v-btn>
          <v-btn color="primary" flat @click="onClickSave"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateActivityDialog",
  props: {
    dialog: Boolean
  },
  data() {
    return {
      valid: false,
      activity: undefined
    };
  },
  methods: {
    onClickCancel: function() {
      this.$emit("update:createActivityDialog", false);
    },
    onClickSave: function() {
      this.$store.dispatch("userStoryMap/createActivity", {
        userStoryMapId: this.$store.state.userStoryMap.selectedUserStoryMap.id,
        activity: this.activity
      });
      this.$emit("update:createActivityDialog", false);
    }
  }
};
</script>

<style scoped></style>
