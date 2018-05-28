<template>
<div class="card mt-3">
    <div class="row">
        <div class="col-md-6" :key="stock.name" v-for="stock in stocks">
            <div class="card-block p-3">
                <stock-item :name="stock.name" :price="stock.price"></stock-item>
            </div>
        </div>
        </div>
</div>
</template>
<script>
import StockItem from './StockItem.vue';

export default {
  components: {
    StockItem
  },
  computed: {
    stocks () {
      return this.$store.state.stocks;
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
