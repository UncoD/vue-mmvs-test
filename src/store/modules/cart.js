import apiOrders from '../../api/orders'

const state = () => ({
  cart: {} // {id, count}
})

const getters = {
  getCart: (state) => {
    return state.cart
  },
  getCountById: (state) => (id) => {
    return state.cart[id] || 0
  }
}

const mutations = {
  addProduct (state, data) {
    state.cart[data.id] = data.count
  },
  removeProduct (state, id) {
    if (state.cart[id]) {
      delete state.cart[id]
    }
  },
  clearCart (state) {
    state.cart = {}
  }
}

const actions = {
  addToCart ({ commit }, data) {
    // {id, count}
    commit('addProduct', data)
  },
  removeFromCart ({ commit }, id) {
    commit('removeProduct', id)
  },
  createOrder ({ commit }) {
    return new Promise((resolve, reject) => {
      apiOrders.createOrder(response => {
        if (response) {
          commit('clearCart')
          resolve(response)
        } else {
          reject("Can't create order")
        }
      })
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