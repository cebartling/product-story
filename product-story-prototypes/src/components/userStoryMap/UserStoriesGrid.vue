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
        @click="onClickGridCell(row, column)"
      >
        {{ renderUserStory(row, column) }}
      </v-flex>
    </v-layout>
    <v-layout>
      <UserStoryEditorDialog
        :dialog="dialogState.editorDialog"
        :selectedRow="selectedRow"
        :selectedColumn="selectedColumn"
        :activity="activity"
        v-bind.sync="dialogState"
      ></UserStoryEditorDialog>
    </v-layout>
  </v-layout>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";
import { find } from "lodash";

export default {
  name: "UserStoriesGrid",
  components: {
    UserStoryEditorDialog
  },
  props: ["activity"],
  data() {
    return {
      selectedRow: undefined,
      selectedColumn: undefined,
      dialogState: {
        editorDialog: false
      }
    };
  },
  methods: {
    onClickGridCell(row, column) {
      this.selectedRow = row;
      this.selectedColumn = column;
      this.dialogState.editorDialog = true;
    },
    renderUserStory(row, column) {
      let content = "";
      const document = find(
        this.activity.userStoriesCollection.documents,
        function(doc) {
          return doc.row === row && doc.column === column;
        }
      );
      if (document) {
        content = document.title;
      }
      return content;
    }
  }
};
</script>

<style scoped lang="scss">
.user-story-grid-row {
}


</style>
