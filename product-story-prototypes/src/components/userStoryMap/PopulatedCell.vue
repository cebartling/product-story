<template>
  <drag
    :transfer-data="{ userStory }"
    class="flex xs6 user-story-grid-cell"
    @click="onClickGridCell"
    v-if="userStory"
  >
    {{ renderUserStory() }}
    <UserStoryEditorDialog
      :dialog="dialogState.editorDialog"
      :selectedRow="row"
      :selectedColumn="column"
      :activity="activity"
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
  border: #acd3d3 0.8px solid;
  height: 70px;

  &:hover {
    background-color: #c3fffd;
  }
}
</style>
