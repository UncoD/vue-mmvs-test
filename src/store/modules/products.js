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
  clearProducts ({ commit }) {
    commit('setProducts', [])
  },
  loadAllProducts ({ commit, dispatch }) {
    dispatch('clearProducts')
    apiProducts.getProducts(products => {
      commit('setProducts', products)
    })
  },
  loadProductsById ({commit, dispatch}, ids) {
    dispatch('clearProducts')
    apiProducts.getProductsById(ids, products => {
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