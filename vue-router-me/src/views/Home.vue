<template>
  <div class="home">
    <h1>All Destinations</h1>
    <router-link
      v-for="destination in destinations"
      :to="destination.slug"
      :key="destination.id"
      >{{}}
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </router-link>
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
