<template>
  <drag
    :transfer-data="{ userStory: userStory }"
    class="flex xs6 user-story-grid-cell"
    @dblclick="onClickGridCell()"
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
  <drop
    @dragenter="over = true"
    @dragover="over = true"
    @dragleave="over = false"
    @drop="onDrop"
    :class="[{ over }, 'flex', 'xs6', 'user-story-grid-cell']"
    @dblclick="onClickGridCell()"
    v-else
  >
    <UserStoryEditorDialog
      :dialog="dialogState.editorDialog"
      :selectedRow="row"
      :selectedColumn="column"
      :activity="activity"
      v-bind.sync="dialogState"
    ></UserStoryEditorDialog>
  </drop>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";
import { find } from "lodash";
import { Drag, Drop } from "vue-drag-drop";

export default {
  name: "UserStoryCell",
  components: {
    Drag,
    Drop,
    UserStoryEditorDialog
  },
  props: {
    activity: { type: Object, required: true },
    row: { type: Number, required: true },
    column: { type: Number, required: true }
  },
  data() {
    return {
      over: false,
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
    onDrop(data) {
      this.over = false;
      // console.info(
      //   `===> onDrop: row: ${this.row}, column: ${this.column}`,
      //   data
      // );
      this.$store.dispatch("userStoryMap/updateUserStory", {
        userStory: data.userStory,
        row: this.row,
        column: this.column
      });
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

.drop.over {
  border-color: #00005f;
  background: #ffc685;
}
</style>
