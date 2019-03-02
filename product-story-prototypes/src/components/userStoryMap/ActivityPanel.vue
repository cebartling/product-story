<template>
  <v-layout column pa-2 class="activity-group">
    <v-layout row nowrap pa-2>
      <v-flex xs3 class="activity">{{ activity.title }}</v-flex>
      <StoryGridSelector :activity="activity"></StoryGridSelector>
    </v-layout>
    <UserStoriesGrid :activity="activity"></UserStoriesGrid>
  </v-layout>
</template>

<script>
import StoryGridSelector from "@/components/userStoryMap/StoryGridSelector.vue";
import UserStoriesGrid from "@/components/userStoryMap/UserStoriesGrid.vue";

export default {
  name: "ActivityPanel",
  components: {
    UserStoriesGrid,
    StoryGridSelector
  },
  data() {
    return {};
  },
  props: ["activity"],
  methods: {}
};
</script>

<style scoped lang="scss">
.activity-group {
  .activity {
    border: solid 0.8px #fbc083;
    height: 60px;
    text-align: left;
    vertical-align: middle;
    background-color: #ffe4c4;
    font-size: 1.2rem;
    font-weight: bold;
    color: #464646;

    &:hover {
      background-color: #ffc685;
    }
  }
}
</style>
