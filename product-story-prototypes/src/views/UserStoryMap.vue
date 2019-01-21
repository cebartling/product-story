<template>
  <v-content>
    <v-container fluid grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs11> </v-flex>
        <v-flex xs1>
          <v-menu offset-y>
            <v-btn slot="activator" color="primary"> Actions </v-btn>
            <v-list>
              <CreateUserStoryMapDialog></CreateUserStoryMapDialog>
              <OpenUserStoryMapDialog></OpenUserStoryMapDialog>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap> </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CreateUserStoryMapDialog from "@/components/userStoryMap/CreateUserStoryMapDialog";
import OpenUserStoryMapDialog from "@/components/userStoryMap/OpenUserStoryMapDialog";

export default {
  name: "UserStoryMap",
  components: {
    OpenUserStoryMapDialog,
    CreateUserStoryMapDialog
  },
  methods: {}
};
</script>

<style scoped></style>
