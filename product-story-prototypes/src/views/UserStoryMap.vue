<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs4>
          <CreateUserStoryMapDialog></CreateUserStoryMapDialog>
        </v-flex>
        <v-flex xs8> <UserStoryMapPicker></UserStoryMapPicker> </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!--<v-flex xs12> <CreateActivityDialog></CreateActivityDialog> </v-flex>-->
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// import CreateActivityDialog from "@/components/userStoryMap/CreateActivityDialog";
import CreateUserStoryMapDialog from "../components/userStoryMap/CreateUserStoryMapDialog";
import UserStoryMapPicker from "../components/userStoryMap/UserStoryMapPicker";

export default {
  name: "UserStoryMap",
  components: {
    UserStoryMapPicker,
    CreateUserStoryMapDialog
  },
  methods: {}
};
</script>

<style scoped></style>
