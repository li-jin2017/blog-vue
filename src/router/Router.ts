import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/content/CenterContent.vue"),
      meta: { index: 1 }
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => import("@/components/content/Timeline.vue"),
      meta: { index: 2 }
    },
    {
      path: "/add",
      name: "add",
      component: () => import("@/components/edit/AddBlog.vue"),
      meta: { index: 4 }
    },
    {
      path: "/study",
      name: "study",
      component: () => import("@/components/study/StudyGo.vue")
    }
  ]
});
