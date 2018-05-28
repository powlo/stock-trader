<template>
  <div class="card">
  <div class="card-header bg-light">
      <h3>{{ name }}<span class="stock-price ml-2">(Price: {{ price }})</span></h3>
  </div>
  <div class="card-body">
    <form class="form-inline">
      <div class="form-group mb-2 mr-2">
        <label for="quantity" class="sr-only">Quantity</label>
        <input type="text" v-model.number="quantity" class="form-control" :class="{ 'is-invalid': error }" id="quantity" placeholder="Quantity">
        <button :disabled="error" type="button" @click="buy" class="btn btn-light ml-2">Buy</button>
        <div class="invalid-feedback">
          Insufficient funds.
        </div>
      </div>
    </form>
  </div>
</div>
</template>
<script>
export default {
    props: ['name', 'price'],
    data: function(){
        return {
            quantity: undefined,
        }
    },
    methods: {
        buy: function(){
            this.$store.commit('buy', { name: this.name, quantity: this.quantity});
            this.quantity = undefined;
        }
    },
    computed: {
      error: function(){
        return this.quantity * this.price > this.$store.state.funds;
      }
    }
}
</script>
<style lang="scss" scoped>
    .stock-price {
        font-size: 0.5em;
    }
    .form-inline {
      align-items: flex-start;
    }
</style>
