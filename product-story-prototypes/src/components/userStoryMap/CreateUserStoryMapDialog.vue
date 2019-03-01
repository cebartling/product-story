<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Create User Story Map
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="name"
                  label="Name"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="description"
                  label="Description"
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
  name: "CreateUserStoryMapDialog",
  props: {
    dialog: Boolean
  },
  data() {
    return {
      valid: false,
      name: undefined,
      description: undefined
    };
  },
  methods: {
    onClickCancel: function() {
      this.$emit("update:createDialog", false);
    },
    onClickSave: function() {
      this.$emit("update:createDialog", false);
      this.$store.dispatch("userStoryMap/createUserStoryMap", {
        name: this.name,
        description: this.description
      });
    }
  }
};
</script>

<style scoped></style>
