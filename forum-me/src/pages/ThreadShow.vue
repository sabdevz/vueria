<template>
  <div :key="thread.id" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{
            userById(postById(postId).userId).name
          }}</a>
          <a href="#"
            ><img
              :src="userById(postById(postId).userId).avatar"
              alt=""
              class="avatar-large"
          /></a>
          <p class="desktop-only text-small"></p>
        </div>
        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "PageThreadShow",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.$route.params.id);
    },
  },
};
</script>
