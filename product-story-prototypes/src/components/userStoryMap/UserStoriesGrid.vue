<template>
  <v-layout column pa-3>
    <v-layout
      row
      v-for="row in activity.rows"
      :key="row"
      class="user-story-grid-row"
    >
      <v-flex
        v-for="column in activity.columns"
        :key="column"
        xs6
        class="user-story-grid-cell"
        @click="dialogState.editorDialog = true"
      >
      </v-flex>
    </v-layout>
    <v-layout>
      <UserStoryEditorDialog
        :dialog="dialogState.editorDialog"
        v-bind.sync="dialogState"
      ></UserStoryEditorDialog>
    </v-layout>
  </v-layout>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";

export default {
  name: "UserStoriesGrid",
  components: {
    UserStoryEditorDialog
  },
  props: ["activity"],
  data() {
    return {
      dialogState: {
        editorDialog: false
      }
    };
  }
};
</script>

<style scoped lang="scss">
.user-story-grid-row {
}

.user-story-grid-cell {
  margin: 5px;
  border-radius: 5px;
  border: #acd3d3 0.8px dashed;
  height: 70px;

  &:hover {
    background-color: #c3fffd;
  }
}
</style>
