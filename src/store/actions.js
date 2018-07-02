import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from './mutation-types'

import {
  getAddress,
  getFoodCategorys,
  getShops
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
  }
}
