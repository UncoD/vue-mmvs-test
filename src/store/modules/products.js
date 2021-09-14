import apiProducts from '../../api/products'

const state = () => ({
  items: []
})

const getters = {
  getProducts: (state) => {
    return state.items
  }
}

const mutations = {
  setProducts (state, products) {
    state.items = products
  }
}

const actions = {
  loadAllProducts ({ commit }) {
    apiProducts.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}