export default {
  createOrder (cb) {
    setTimeout(() => cb(Math.random() > 0.2), 100)
  }
}