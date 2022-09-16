<template>
  <div class="container">
    <the-navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
export default {
  name: 'App',
  components: { TheNavigation },
};
</script>

<style>
@import './main.css';
</style>
