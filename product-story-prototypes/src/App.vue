<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content> <HelloWorld /> </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<!--<template>-->
<!--<div id="app">-->
<!--<AppHeader></AppHeader>-->
<!--&lt;!&ndash;<div id="nav">&ndash;&gt;-->
<!--&lt;!&ndash;<router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--<div id="app-content"><router-view /></div>-->
<!--</div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--body {-->
<!--margin: 0;-->
<!--}-->
<!--#app {-->
<!--font-family: "Roboto", Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: left;-->
<!--color: #2c3e50;-->
<!--padding: 0;-->
<!--}-->
<!--#nav {-->
<!--padding: 30px;-->
<!--a {-->
<!--font-weight: bold;-->
<!--color: #2c3e50;-->
<!--&.router-link-exact-active {-->
<!--color: #42b983;-->
<!--}-->
<!--}-->
<!--}-->
<!--#app-content {-->
<!--padding: 10px;-->
<!--}-->
<!--</style>-->
<!--<script>-->
<!--import AppHeader from "@/components/AppHeader";-->

<!--export default {-->
<!--components: { AppHeader }-->
<!--};-->
<!--</script>-->
