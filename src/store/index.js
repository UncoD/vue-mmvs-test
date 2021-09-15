import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ cart: state.cart }),
})

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  plugins: [vuexLocal.plugin]
})