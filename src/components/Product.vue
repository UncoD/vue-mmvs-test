<template>
  <div
    class="product"
    :class="{
      'in-cart': count > 0
    }"
  >
    <img
      class="product__image"
      :src="image"
    >
    <div class="main-info">
      <div class="main-info__name">
        {{ name }}
      </div>
      <div class="main-info__price">
        {{ price }}{{ currency }}
      </div>
    </div>
    <div class="product__description">
      {{ description }}
    </div>
    <div class="count">
      <button
        class="count__sub"
        :disabled="count < 1"
        @click="setCount(count - 1)"
      >
        -
      </button>
      <input
        v-model.number="count"
        class="count__input"
        type="number"
        @input="setCount(Math.min(99, Math.max(0, count)))"
      >
      <button
        class="count__add"
        :disabled="count > 98"
        @click="setCount(count + 1)"
      >
        +
      </button>
      <img
        v-if="count > 0"
        class="count__clear-cart"
        src="@/assets/remove-from-cart.svg"
        @click="setCount(0)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    name: { type: String, required: true},
    img: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true}
  },
  data() {
    return {
      count: 0,
      currency: '$'
    }
  },
  computed: {
    image() {
      return require('../assets/' + this.img)
    }
  },
  methods: {
    setCount(value) {
      this.count = value
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  border: 1px solid #dfdfdf;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 17px;

  &.in-cart {
    border-color: green;
  }

  &__image {
    border-bottom: 1px solid #dfdfdf;
    width: calc(100% - 20px);
    height: 230px;
    object-fit: contain;
    padding: 10px;
  }

  &__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    padding: 10px 10px 0;
    margin-top: auto;
  }
}
.main-info {
  display: flex;
  padding: 10px 10px 0;

  &__name {
    font-weight: 600;
    flex: 1;
    font-size: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &__price {
    font-size: 25px;
    margin-left: 5px;
  }
}
.count {
  padding: 20px 10px 10px;
  display: flex;

  &__input {
    width: 50px;
    font-size: 23px;
    height: 30px;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    text-align: center;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus-visible {
      border-color: #c2c4c7;
    }
  }

  &__sub,
  &__add {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    color: #0d172a;
    font-size: 18px;
    width: 34px;
    height: 34px;

    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }

    &:disabled {
      background-color: #fff;
      color: #c1c1c1;
      cursor: default;
    }
  }

  &__clear-cart {
    border: 1px solid #df0000;
    width: 22px;
    height: 22px;
    padding: 5px;
    margin-left: auto;
    cursor: pointer;

    &:hover {
      background-color: #ffdcdc;
    }
    &:active {
      background-color: #fff0f0;
    }
  }
}
</style>
