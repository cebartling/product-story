<template>
  <v-flex xs6 class="user-story-grid-cell" @click="onClickGridCell()">
    {{ renderUserStory() }}
    <UserStoryEditorDialog
      :dialog="dialogState.editorDialog"
      :selectedRow="row"
      :selectedColumn="column"
      :activity="activity"
      v-bind.sync="dialogState"
    ></UserStoryEditorDialog>
  </v-flex>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";
import { find } from "lodash";

export default {
  name: "UserStoryCell",
  components: {
    UserStoryEditorDialog
  },
  props: ["activity", "row", "column"],
  data() {
    return {
      dialogState: {
        editorDialog: false
      }
    };
  },
  methods: {
    onClickGridCell() {
      this.dialogState.editorDialog = true;
    },
    renderUserStory() {
      let content = "";
      const document = find(
        this.activity.userStoriesCollection.documents,
        doc => {
          return doc.row === this.row && doc.column === this.column;
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
