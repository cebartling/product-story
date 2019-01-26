<template>
  <v-layout row nowrap pa-2>
    <CreateActivityDialog></CreateActivityDialog>
  </v-layout>
</template>

<script>
import CreateActivityDialog from "@/components/userStoryMap/CreateActivityDialog";
export default {
  name: "Toolbar",
  components: { CreateActivityDialog }
};
</script>

<style scoped lang="scss"></style>
