<template>
  <v-layout column mb-2>
    <Toolbar></Toolbar>
    <ActivityPanel
      v-for="activity in activities"
      :activity="activity"
      :key="activity.id"
    ></ActivityPanel>
  </v-layout>
</template>

<script>
import ActivityPanel from "@/components/userStoryMap/ActivityPanel";
import Toolbar from "./Toolbar";

export default {
  name: "UserStoryMapCanvas",
  components: { Toolbar, ActivityPanel },
  computed: {
    activities: {
      get: function() {
        const state = this.$store.state.userStoryMap;
        const selectedUserStoryMap = state.selectedUserStoryMap;
        return selectedUserStoryMap.activitiesCollection.documents;
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
