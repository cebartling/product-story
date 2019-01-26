<template>
  <v-layout column class="activity-group" mb-2>
    <Toolbar></Toolbar>
    <ActivityPanel></ActivityPanel>
    <!--<v-layout row nowrap pa-2>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--<v-flex xs2 class="new-item epic-story"> </v-flex>-->
    <!--</v-layout>-->
  </v-layout>
</template>

<script>
import ActivityPanel from "@/components/userStoryMap/ActivityPanel";
import Toolbar from "./Toolbar";

export default {
  name: "UserStoryMapCanvas",
  components: { Toolbar, ActivityPanel }
};
</script>

<style scoped lang="scss">
/*.activity-group {*/
/*background-color: #edeeed;*/
/*border: #ececee 1.1px solid;*/
/*border-radius: 5px;*/
/*}*/

/*.new-item {*/
/*border: dashed 0.5px #a6a2a6;*/
/*height: 60px;*/
/*text-align: center;*/
/*vertical-align: middle;*/
/*border-radius: 5px;*/
/*}*/

/*.epic-story {*/
/*background-color: #cbffd8;*/
/*border-radius: 5px;*/

/*&:hover {*/
/*background-color: #a2ffa5;*/
/*}*/
/*}*/
</style>
