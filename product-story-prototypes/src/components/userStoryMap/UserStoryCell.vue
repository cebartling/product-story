<template>
  <populated-cell
    v-if="userStory"
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
    userStory: {
      get: function() {
        return find(this.activity.userStoriesCollection.documents, doc => {
          return doc.row === this.row && doc.column === this.column;
        });
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
