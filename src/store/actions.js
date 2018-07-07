import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_CAPTCHA,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'

import {
  getAddress,
  getFoodCategorys,
  getShops,
  getCaptcha,
  getUserInfo,
  logout
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
  recordUser ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  async getUser ({ commit }) {
    const result = await getUserInfo()
    if (result && result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
  async logout ({ commit }) {
    const result = await logout()
    if (result && result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }
}
