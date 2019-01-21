<template>
  <div class="text-xs-left">
    <v-layout wrap>
      <v-flex xs12>
        <v-combobox
          v-model="selectedMap"
          :items="availableUserStoryMaps"
          item-text="name"
          item-value="id"
          persistent-hint
          return-object
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
    return {};
  },
  computed: {
    availableUserStoryMaps: {
      get: function() {
        return this.$store.state.userStoryMap.userStoryMaps;
      }
    },
    selectedMap: {
      get: function() {
        return this.$store.state.userStoryMap.selectedUserStoryMap;
      },
      set: function(value) {
        this.$store.commit("userStoryMap/setSelectedUserStoryMap", {
          selectedUserStoryMap: value
        });
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("userStoryMap/retrieveUserStoryMaps");
  },
  methods: {}
};
</script>

<style scoped></style>
