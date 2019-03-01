<template>
  <populated-cell
    v-if="isUserStoryPresent"
    :activity="activity"
    :row="row"
    :column="column"
  ></populated-cell>
  <available-cell
    v-else
    :activity="activity"
    :row="row"
    :column="column"
  ></available-cell>
</template>

<script>
import PopulatedCell from "@/components/userStoryMap/PopulatedCell";
import AvailableCell from "@/components/userStoryMap/AvailableCell";
import { find } from "lodash";

export default {
  name: "UserStoryCell",
  components: {
    AvailableCell,
    PopulatedCell
  },
  props: {
    activity: { type: Object, required: true },
    row: { type: Number, required: true },
    column: { type: Number, required: true }
  },
  computed: {
    isUserStoryPresent() {
      let result = false;
      if (this.activity.userStoriesCollection.documents.length > 0) {
        result = find(
          this.activity.userStoriesCollection.documents,
          document => {
            return document.row === this.row && document.column === this.column;
          }
        );
      }
      return result;
    }
  }
};
</script>

<style scoped lang="scss"></style>
