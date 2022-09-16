import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

const forumMe = createApp(App);
forumMe.use(router);
forumMe.mount("#app");
