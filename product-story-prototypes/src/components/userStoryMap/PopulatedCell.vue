<template>
  <drag :transfer-data="{ userStory }" class="flex xs6" v-if="userStory">
    <div class="user-story-grid-cell" @dblclick="onDoubleClickGridCell">
      {{ renderUserStory() }}
    </div>
    <UserStoryEditorDialog
      dialogTitle="Edit user story"
      :dialog="dialogState.editorDialog"
      :selectedRow="row"
      :selectedColumn="column"
      :activity="activity"
      :userStory="userStory"
      v-bind.sync="dialogState"
    ></UserStoryEditorDialog>
  </drag>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";
import { find } from "lodash";
import { Drag } from "vue-drag-drop";

export default {
  name: "PopulatedCell",
  components: {
    Drag,
    UserStoryEditorDialog
  },
  props: {
    activity: { type: Object, required: true },
    row: { type: Number, required: true },
    column: { type: Number, required: true }
  },
  data() {
    return {
      dialogState: {
        editorDialog: false
      }
    };
  },
  computed: {
    userStory: {
      get: function() {
        return find(this.activity.userStoriesCollection.documents, doc => {
          return doc.row === this.row && doc.column === this.column;
        });
      }
    }
  },
  methods: {
    onDoubleClickGridCell() {
      this.dialogState.editorDialog = true;
    },
    renderUserStory() {
      let content = "";
      const document = this.userStory;
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
  border: #acd3d3 0.8px solid;
  background-color: beige;
  height: 70px;
  padding: 4px;

  &:hover {
    background-color: #c3fffd;
  }
}
</style>
