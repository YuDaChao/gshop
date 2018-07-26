import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_CAPTCHA,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_CAPTCHA] (state, { captcha }) {
    state.captcha = captcha
  },
  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_SHOP_GOODS] (state, { shopGoods }) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_SHOP_RATINGS] (state, { shopRatings }) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOP_INFO] (state, { shopInfo }) {
    state.shopInfo = shopInfo
  },
  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      // 加入购物车
      state.shopCart.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, { food }) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 重置count
    state.shopCart.forEach(item => {
      item.count = 0
    })
    state.shopCart = []
  }
}
