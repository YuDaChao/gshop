import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_CAPTCHA,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

import {
  getAddress,
  getFoodCategorys,
  getShops,
  getCaptcha,
  getUserInfo,
  logout,
  getShopGoods,
  getShopRatings,
  getShopInfo
} from '../api'

export default {
  // 获取地址
  async getAddress ({ commit, state }) {
    // 发生请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await getAddress(geohash)
    // 提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },

  // 获取食品分类
  async getCategory ({ commit }) {
    const result = await getFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },

  // 获取商家列表
  async getShops ({ commit, state }) {
    const { latitude, longitude } = state
    const result = await getShops({latitude, longitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },

  // 获取图片验证码
  async getPicCaptcha ({ commit }) {
    const captcha = await getCaptcha()
    commit(RECEIVE_CAPTCHA, { captcha })
  },

  // 将用户信息放到vuex中
  recordUser ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },

  // 获取登录用户信息
  async getUser ({ commit }) {
    const result = await getUserInfo()
    if (result && result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },

  // 登出登录
  async logout ({ commit }) {
    const result = await logout()
    if (result && result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 商品列表
  async getShopGoods ({ commit }, callback) {
    const result = await getShopGoods()
    if (result && result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, { shopGoods })
      callback && callback()
    }
  },

  // 评论
  async getShopRatings ({ commit }) {
    const result = await getShopRatings()
    if (result && result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS, { shopRatings })
    }
  },

  // 商家信息
  async getShopInfo ({ commit }) {
    const result = await getShopInfo()
    if (result && result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, { shopInfo })
    }
  },

  // 添加 减少 商品
  updateFoodCount ({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  }
}
