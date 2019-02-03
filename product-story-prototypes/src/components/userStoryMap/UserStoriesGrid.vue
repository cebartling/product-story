<template>
  <v-layout column pa-3>
    <v-layout row v-for="row in activity.rows" :key="row">
      <v-flex
        v-for="column in activity.columns"
        :key="column"
        xs2
        class="user-story-grid-cell"
      >
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: "UserStoriesGrid",
  props: ["activity"]
};
</script>

<style scoped lang="scss">
.user-story-grid-cell {
  border-radius: 5px;
  border: #acd3d3 0.8px dashed;
  height: 70px;

  &:hover {
    background-color: #c3fffd;
  }
}
</style>
