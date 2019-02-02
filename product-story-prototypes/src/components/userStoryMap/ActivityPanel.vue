<template>
  <v-layout row nowrap pa-2 class="activity-group">
    <v-flex xs2 class="activity">{{ activity.title }}</v-flex>
    <StoryGridSelector :activity="activity"></StoryGridSelector>
  </v-layout>
</template>

<script>
import StoryGridSelector from "@/components/userStoryMap/StoryGridSelector";

export default {
  name: "ActivityPanel",
  components: { StoryGridSelector },
  data() {
    return {};
  },
  props: ["activity"],
  methods: {}
};
</script>

<style scoped lang="scss">
.activity-group {
  background-color: #edeeed;
  border: #ececee 1.1px solid;
  border-radius: 5px;
}

.activity {
  border: dashed 0.5px #a6a2a6;
  height: 60px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  background-color: #ffe4c4;

  &:hover {
    background-color: #ffc685;
  }
}
</style>
