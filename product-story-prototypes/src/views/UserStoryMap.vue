<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12> <h1>User Story Map</h1> </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12> <CreateActivityDialog></CreateActivityDialog> </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CreateActivityDialog from "@/components/userStoryMap/CreateActivityDialog";

export default {
  name: "UserStoryMap",
  components: { CreateActivityDialog },
  methods: {}
};
</script>

<style scoped></style>
