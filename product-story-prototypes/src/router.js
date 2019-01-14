import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import FrontDoor from "@/views/FrontDoor";
import KanbanBoard from "@/views/KanbanBoard";
import UserStoryMap from "@/views/UserStoryMap";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "frontDoor",
      component: FrontDoor
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/kanbanBoard",
      name: "kanbanBoard",
      component: KanbanBoard
    },
    {
      path: "/userStoryMap",
      name: "userStoryMap",
      component: UserStoryMap
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
  ]
});
