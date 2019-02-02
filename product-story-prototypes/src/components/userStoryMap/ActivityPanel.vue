<template>
  <v-layout row nowrap pa-2 class="activity-group">
    <v-flex xs2 class="activity">{{ activity.activity }}</v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ActivityPanel",
  components: {},
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
