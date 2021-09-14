<template>
  <div class="catalog">
    <Product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :img="product.img"
      :description="product.description"
      :price="product.price"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '@/components/Product.vue'

export default {
  name: 'Catalog',
  components: {
    Product
  },
  computed: {
    ...mapGetters('products', {
      products: 'getProducts'
    })
  },
  created() {
    this.$store.dispatch('products/loadAllProducts')
  }
}
</script>

<style scoped lang="scss">
.catalog {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}
@media screen and (max-width: 1100px) {
  .catalog {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 650px) {
  .catalog {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 430px) {
  .catalog {
    grid-template-columns: 1fr;
  }
}
</style>
