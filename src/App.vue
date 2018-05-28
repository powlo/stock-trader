<template>
  <div class="container">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

import NavBar from './components/NavBar.vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from './store';

const router = new VueRouter({
  routes: routes
});

export default {
  name: 'app',
  components: {
    NavBar
  },
  router: router,
  store: store
}
</script>

<style lang="scss">
</style>
