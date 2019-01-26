<template>
  <v-layout row nowrap pa-2>
    <v-flex xs2 class="new-item activity"> </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ActivityPanel",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.new-item {
  border: dashed 0.5px #a6a2a6;
  height: 60px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
}

.activity {
  background-color: #ffe4c4;
  border-radius: 5px;

  &:hover {
    background-color: #ffc685;
  }
}
</style>
