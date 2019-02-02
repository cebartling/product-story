<template>
  <v-layout row pa-2>
    <v-flex xs1>
      <v-select
        :items="rows"
        label="Rows"
        v-model="selectedRows"
        @change="onChangeRows"
      ></v-select>
    </v-flex>
    <v-flex xs1>
      <v-select
        :items="columns"
        label="Columns"
        v-model="selectedColumns"
        @change="onChangeColumns"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "StoryGridSelector",
  props: ["activity"],
  mounted() {
    this.selectedRows = this.activity.rows;
    this.selectedColumns = this.activity.columns;
  },
  data() {
    return {
      selectedRows: 4,
      selectedColumns: 4,
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  methods: {
    onChangeColumns(newValue) {
      this.$store.dispatch("userStoryMap/updateActivity", {
        activityDocument: this.activity,
        rows: this.selectedRows,
        columns: newValue
      });
    },
    onChangeRows(newValue) {
      this.$store.dispatch("userStoryMap/updateActivity", {
        activityDocument: this.activity,
        rows: newValue,
        columns: this.selectedColumns
      });
    }
  }
};
</script>

<style scoped></style>
