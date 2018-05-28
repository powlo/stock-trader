import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      {
          name: 'BMW',
          price: 100,
          quantity: 0
      },
      {
          name: 'Google',
          price: 100,
          quantity: 0
      },
      {
          name: 'Apple',
          price: 100,
          quantity: 0
      },
      {
          name: 'Twitter',
          price: 100,
          quantity: 0
      }
    ]
  },
  getters: {
    portfolio: state => {
      return state.stocks.filter(s => s.quantity > 0);
    }
  },
  mutations: {
    buy (state, payload) {
        //find the stock price and remove finds
        
        const stock = state.stocks.find(s => s.name === payload.name);
        state.funds = state.funds - stock.price * payload.quantity;

        //update the stock in the users portfolio
        stock.quantity += parseInt(payload.quantity, 10);
    },
    sell (state, payload) {
        //find the stock price and remove finds
        
        const stock = state.stocks.find(s => s.name === payload.name);
        state.funds = state.funds + stock.price * payload.quantity;

        //update the stock in the users portfolio
        stock.quantity -= parseInt(payload.quantity, 10);
    },
    newDay (state) {
      state.stocks.forEach(s => s.price += Math.floor(Math.random() * 20 - 10) )
    },
    load (state, payload) {
      console.log('payload');
      console.log(payload);
      state.stocks = payload.stocks;
      state.funds = payload.funds;
    }
  }
})