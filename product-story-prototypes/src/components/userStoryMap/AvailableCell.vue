<template>
  <drop
    @dragenter="over = true"
    @dragover="over = true"
    @dragleave="over = false"
    @drop="onDrop"
    :class="[{ over }, 'flex', 'xs6']"
  >
    <div
      class="available-user-story-grid-cell"
      @dblclick="onDoubleClickGridCell"
    ></div>
    <user-story-editor-dialog
      dialogTitle="Create user story"
      :dialog="dialogState.editorDialog"
      :selectedRow="row"
      :selectedColumn="column"
      :activity="activity"
      v-bind.sync="dialogState"
    ></user-story-editor-dialog>
  </drop>
</template>

<script>
import UserStoryEditorDialog from "@/components/userStoryMap/UserStoryEditorDialog";
import { Drop } from "vue-drag-drop";

export default {
  name: "AvailableCell",
  components: {
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
  methods: {
    onDoubleClickGridCell() {
      this.dialogState.editorDialog = true;
    },
    onDrop(data) {
      this.over = false;
      if (data) {
        this.$store.dispatch("userStoryMap/updateUserStory", {
          userStory: data.userStory,
          selectedRow: this.row,
          selectedColumn: this.column
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.available-user-story-grid-cell {
  height: 70px;
  border: #acd3d3 0.8px dashed;

  &:hover {
    background-color: #c3fffd;
  }
}

.drop.over {
  border-color: #00005f;
  background: #ffc685;
}
</style>
