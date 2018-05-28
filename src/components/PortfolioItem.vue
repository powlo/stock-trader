<template>
  <div class="card">
  <div class="card-header bg-light">
      <h3 class="stock-title mr-2 mb-0">{{ name }}</h3><span class="stock-price">(Price: {{ price }} | Quantity: {{ quantity }})</span>
  </div>
  <div class="card-body">
    <form class="form-inline">
      <div class="form-group mb-2 mr-2">
        <label for="quantity" class="sr-only">Quantity</label>
        <input type="text" v-model.number="tosell" class="form-control" :class="{ 'is-invalid': error }" id="quantity" placeholder="Quantity">
        <button :disabled="error" type="button" @click="sell" class="btn btn-light ml-2">Sell</button>
        <div class="invalid-feedback">
          You do not have this many stocks.
        </div>
      </div>
    </form>
  </div>
</div>
</template>
<script>
export default {
    props: ['name', 'price', 'quantity'],
    data: function(){
      return {
        tosell: 0
        
      }
    },
    methods: {
        sell: function(){
            this.$store.commit('sell', { name: this.name, quantity: this.tosell});
        }
    },
    computed: {
      error: function(){
        return this.tosell >  this.quantity;
      }
    }
}
</script>
<style lang="scss" scoped>
    .card-header {
      display: flex;
      flex-wrap: wrap;
    }
</style>
