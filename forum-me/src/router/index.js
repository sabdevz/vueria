import { createRouter, createWebHistory } from "vue-router";

import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import sourceData from "@/data";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
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
  { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
