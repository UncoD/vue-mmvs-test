<template>
  <header>
    <router-link to="/">
      Каталог
    </router-link>
    <router-link to="/cart">
      Корзина
    </router-link>
    <div class="header__separator" />
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
header {
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    border: 1px solid #ddd9db;
    padding: 5px 15px;
    margin-right: 15px;
    color: #2c3e50;
    font-size: 20px;

    &.router-link-exact-active {
      border-color: green;
    }
    &:hover {
      background-color: #ddd9db;
    }
    &:active {
      background-color: #ecebec;
    }
  }
}
.header {
  &__separator {
    width: 100vw;
    height: 1px;
    background: #ddd9db;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0);
  }
}
</style>
