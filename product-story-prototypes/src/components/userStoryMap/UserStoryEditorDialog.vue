<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        {{ dialogTitle }}
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="title"
                  label="Title"
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
        <v-btn
          color="primary"
          flat
          @click="onClickSave"
          :disabled="title === undefined"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UserStoryEditorDialog",
  props: {
    dialog: { type: Boolean, required: true },
    selectedRow: { type: Number, required: true },
    selectedColumn: { type: Number, required: true },
    activity: { type: Object, required: true },
    userStory: { type: Object, required: false },
    dialogTitle: { type: String, required: true }
  },
  data() {
    return {
      valid: !!this.userStory,
      title: this.userStory ? this.userStory.title : undefined
    };
  },
  methods: {
    onClickCancel: function() {
      this.$emit("update:editorDialog", false);
    },
    onClickSave: function() {
      this.$emit("update:editorDialog", false);
      if (this.userStory) {
        this.$store.dispatch("userStoryMap/updateUserStory", {
          title: this.title,
          selectedRow: this.selectedRow,
          selectedColumn: this.selectedColumn,
          userStory: this.userStory
        });
      } else {
        this.$store.dispatch("userStoryMap/createUserStory", {
          title: this.title,
          selectedRow: this.selectedRow,
          selectedColumn: this.selectedColumn,
          activity: this.activity
        });
      }
    }
  }
};
</script>

<style scoped></style>
