<template>
  <v-layout column pa-3>
    <v-layout
      row
      v-for="row in activity.rows"
      :key="row"
      class="user-story-grid-row"
    >
      <UserStoryCell
        v-for="column in activity.columns"
        :key="column"
        :row="row"
        :column="column"
        :activity="activity"
      >
      </UserStoryCell>
    </v-layout>
  </v-layout>
</template>

<script>
import UserStoryCell from "@/components/userStoryMap/UserStoryCell";

export default {
  name: "UserStoriesGrid",
  components: {
    UserStoryCell
  },
  props: ["activity"]
};
</script>

<style scoped lang="scss">
.user-story-grid-row {
}
</style>
