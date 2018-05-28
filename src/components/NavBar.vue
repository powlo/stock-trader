<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/stocks">Stocks</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button @click="newDay" type="button" class="btn btn-light my-2 my-sm-0">End Day</button>
    </form>
    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Save & Load
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="save" href="#">Save Data</a>
        <a class="dropdown-item" @click="load" href="#">Load Data</a>
      </div>
    </div>
    <span>Funds: ${{ funds.toLocaleString() }}</span>
  </div>
</nav>
</template>
<script>
export default {
  computed : {
    funds : function(){
      return this.$store.state.funds;
    }
  },
  methods: {
    newDay: function() {
      this.$store.commit('newDay');
    },
    save: function(){
      console.log('saving');
      console.log(this.$store.state);
      this.$http.put('https://stocktrader-2f72f.firebaseio.com/data.json', {'store': this.$store.state}).then(response => {
        console.log(response.data);
        // show success message
      });
    },
    load: function(){
      console.log('loading');
      this.$http.get('https://stocktrader-2f72f.firebaseio.com/data/store.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.$store.commit('load', data);
        });
    }
  }
}
</script>
<style scoped>
  .btn {
    border-radius: 0;
  }
</style>
