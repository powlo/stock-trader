<template>
<div class="card mt-3">
    <div class="row">
        <div class="col-md-6" :key="p.name" v-for="p in portfolio">
            <div class="card-block p-3">
                <portfolio-item :name="p.name" :price="p.price" :quantity="p.quantity"></portfolio-item>
            </div>
        </div>
        <div class="col" v-if="portfolio.length === 0">
            <h3 class="p-3 text-secondary">You have no items in your portfolio. Click <router-link to="/stocks">here</router-link> to start trading!</h3>
        </div>
    </div>
</div>
</template>
<script>
import PortfolioItem from './PortfolioItem.vue';

export default {
  components: {
    PortfolioItem
  },
  computed: {
    portfolio () {
      return this.$store.getters.portfolio;
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
