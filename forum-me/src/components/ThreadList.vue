<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <!-- <router-link :to="`/thread/${thread.id}`"> below also works-->
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
            >
              {{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By
            <router-link :to="`/thread/${thread.id}`">{{
              userById(thread.userId).name
            }}</router-link
            >, {{ thread.publishedAt }}
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.count }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  name: "ThreadList",
  data() {
    return {
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
};
</script>
