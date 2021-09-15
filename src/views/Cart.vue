<template>
  <div class="cart">
    <ul v-if="products && products.length">
      <li
        v-for="product in products"
        :key="product.id"
      >
        <span class="cart__product-name">{{ product.name }}</span>
        <span
          v-if="cart[product.id] > 1"
          class="cart__product-count"
        >({{ cart[product.id] }})</span>
      </li>
    </ul>
    <span
      v-else
      class="cart__empty"
    >Корзина пуста</span>
    <button
      class="cart__order"
      :disabled="!products || products.length === 0"
      @click="showModal = true"
    >
      Заказать
    </button>
    <OrderModal
      v-if="showModal"
      :price="totalPrice"
      @create-order="showModal = false; createOrder()"
      @close="showModal = false"
    />
    <Alert
      :message="alert.text"
      :alert-countdown="alert.countdown"
      :variant="alert.variant"
      @alert-closed="alert.countdown = 0"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderModal from '@/components/OrderModal.vue'
import Alert from '@/components/Alert.vue'
export default {
  name: 'Cart',
  components: {
    OrderModal,
    Alert
  },
  data() {
    return {
      showModal: false,
      alert: {
        text: '',
        countdown: 0,
        variant: 'success'
      }
    }
  },
  computed: {
    ...mapGetters('products', {
      products: 'getProducts'
    }),
    ...mapGetters('cart', {
      cart: 'getCart'
    }),
    totalPrice() {
      const productTotalPrices = this.products.map(p => p.price * this.cart[p.id])
      return productTotalPrices.reduce((total, price) => total + price, 0)
    }
  },
  created() {
    this.$store.dispatch('products/loadProductsById', Object.keys(this.cart).map(key => parseInt(key)))
  },
  methods: {
    createOrder() {
      this.$store.dispatch("cart/createOrder").then(res => {
          this.$store.dispatch('products/clearProducts')
          this.alert.text = 'Заказ успешно оформлен'
          this.alert.countdown = 3000
          this.alert.variant = 'success'
        }, error => {
          this.alert.text = 'Не удалось оформить заказ'
          this.alert.countdown = 3000
          this.alert.variant = 'danger'
          console.error(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  font-size: 18px;
  display: flex;
  padding-top: 20px;
  max-width: calc(100% - 16px);

  &__empty {
    flex: 1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    width: 100%;

    li {
      height: 50px;
      border: 1px solid #dfdfdf;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
  }

  &__product-name {
    margin-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__product-count {
    margin-left: 5px;
  }

  &__order {
    font-size: 18px;
    min-width: 150px;
    height: 50px;
    margin-left: 30px;
    background-color: white;
    border-color: green;
    cursor: pointer;
    position: sticky;
    top: 20px;

    &:hover {
      background-color: #ddd9db;
    }
    &:active {
      background-color: #ecebec;
    }
    &:disabled {
      background-color: #fff;
      cursor: default;
    }
  }
}
@media screen and (max-width: 550px) {
  .cart {
    flex-direction: column;
    max-width: 100%;

    &__order {
      margin: 30px 0;
    }
  }
}
</style>
