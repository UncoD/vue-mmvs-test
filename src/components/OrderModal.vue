<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-container__header">
            <h2>Поддтвердить заказ</h2>
          </div>
          <div class="modal-container__body">
            Сумма заказа: {{ price }}{{ currency }}
          </div>
          <div class="modal-container__footer">
            <button
              class="modal-container__cancel-order"
              @click="$emit('close')"
            >
              Отмена
            </button>
            <button
              class="modal-container__create-order"
              @click="$emit('create-order')"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'OrderModal',
  props: {
    price: { type: Number, required: true}
  },
  data() {
    return {
      currency: '₽'
    }
  },
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px #00000054;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-container__header h2 {
  margin-top: 0;
  color: #42b983;
}

.modal-container__body {
  margin: 20px 0;
  font-size: 20px;
}

.modal-container__footer {
  display: flex;

  button {
    font-size: 18px;
    min-width: 70px;
    height: 30px;
    cursor: pointer;

    &:hover {
      background-color: #ddd9db;
    }
    &:active {
      background-color: #ecebec;
    }
  }
}

.modal-container__cancel-order {
  background-color: #fff;
}
.modal-container__create-order {
  background-color: #e1ffcf;
  margin-left: auto;
}

.modal-leave-active,
.modal-enter {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>
