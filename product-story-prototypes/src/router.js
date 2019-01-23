import Vue from "vue";
import Router from "vue-router";
import store from "@/vuex/store";
import Home from "@/views/Home.vue";
import FrontDoor from "@/views/FrontDoor";
import KanbanBoard from "@/views/KanbanBoard";
import UserStoryMap from "@/views/UserStoryMap";

Vue.use(Router);

const requireAuth = (to, from, next) => {
  if (!store.state.common.user) {
    next("/");
  } else {
    next();
  }
};

const router = new Router({
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
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: "/kanbanBoard",
      name: "kanbanBoard",
      component: KanbanBoard,
      beforeEnter: requireAuth
    },
    {
      path: "/userStoryMap",
      name: "userStoryMap",
      component: UserStoryMap,
      beforeEnter: requireAuth
    },
    {
      path: "/about",
      name: "about",
      beforeEnter: requireAuth,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      beforeEnter: requireAuth,

      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "profile" */ "@/views/Profile.vue")
    }
  ]
});

export default router;
