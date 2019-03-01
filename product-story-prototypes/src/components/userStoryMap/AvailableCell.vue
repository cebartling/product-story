<template>
  <drop
    @dragenter="over = true"
    @dragover="over = true"
    @dragleave="over = false"
    @drop="onDrop"
    :class="[{ over }, 'flex', 'xs6', 'user-story-grid-cell']"
    @dblclick="onDoubleClickGridCell"
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
    onDrop(data) {
      this.over = false;
      if (data) {
        this.$store.dispatch("userStoryMap/updateUserStory", {
          userStory: data.userStory,
          row: this.row,
          column: this.column
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.user-story-grid-cell {
  margin: 5px;
  height: 70px;

  &:hover {
    border-radius: 5px;
    border: #acd3d3 0.8px dashed;
    background-color: #c3fffd;
  }
}

.drop.over {
  border-color: #00005f;
  background: #ffc685;
}
</style>
