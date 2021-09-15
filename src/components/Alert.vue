<template>
  <div
    v-if="show"
    class="alert"
    :class="variant"
    @click="closeAlert"
  >
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    message: {type: String, required: true},
    alertCountdown: {type: Number, required: true},
    variant: {type: String, default: 'success'}
  },
  data() {
    return {
      show: false,
      alertCounter: 0
    }
  },
  watch: {
    alertCountdown(value) {
      this.alertCounter = value
    },
    alertCounter(value) {
      if (value === 0) {
        return
      }
      this.show = true
      setTimeout(() => this.closeAlert(), value)
    }
  },
  methods: {
    closeAlert() {
      this.show = false
      this.$emit('alert-closed')
    }
  }
}
</script>
<style lang="scss">
.alert {
  position: fixed;
  width: 30%;
  height: 70px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 5000;
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 25px;

  &.success {
    background: #ceff9c;
  }
  &.danger {
    background: #ffa6a6;
  }
}
</style>