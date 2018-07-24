export default {
  totalCount (state) {
    return state.shopCart.reduce((preCount, food) => preCount + food.count, 0)
  },
  totalPrice (state) {
    return state.shopCart.reduce((prePrice, food) => prePrice + food.count * food.price, 0)
  }
}
