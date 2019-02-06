<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Create User Story
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
        <v-btn color="primary" flat @click="onClickSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UserStoryEditorDialog",
  props: {
    dialog: Boolean
  },
  data() {
    return {
      valid: false,
      title: undefined
    };
  },
  methods: {
    onClickCancel: function() {
      this.$emit("update:editorDialog", false);
    },
    onClickSave: function() {
      this.$emit("update:editorDialog", false);
      // this.$store.dispatch("userStoryMap/createUserStory", {
      //   title: this.title
      // });
    }
  }
};
</script>

<style scoped></style>
