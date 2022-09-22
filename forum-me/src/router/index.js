import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from "@/data";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExist = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      // if exists continue
      if (threadExist) {
        next();
      } else {
        next({
          name: "NotFound",
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split("/") },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        });
      }
      // if does'nt exist  redirect to not found
    },
  },
  // will match everything and put it under `$route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
