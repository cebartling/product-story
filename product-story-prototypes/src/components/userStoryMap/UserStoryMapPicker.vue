<template>
  <div class="text-xs-left">
    <v-layout wrap>
      <v-flex xs12>
        <v-combobox
          v-model="selectedMap"
          :items="availableUserStoryMaps"
          label="Select an existing user story map to work with"
        ></v-combobox>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "UserStoryMapPicker",
  data() {
    return {
      selectedMap: "Programming",
      availableUserStoryMaps: ["Programming", "Design", "Vue", "Vuetify"]
    };
  }
};
</script>

<style scoped></style>
