<template>
  <div class="container">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

import NavBar from './NavBar.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import routes from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueResource);

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
