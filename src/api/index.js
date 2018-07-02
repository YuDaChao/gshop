import qs from 'qs'
import request from './request'

// 获取地址信息
export const getAddress = (geohash) => request.get(`/api/position/${geohash}`)

// 获取商品分类信息
export const getFoodCategorys = () => request.get('/api/index_category')

// 登录
export const login = (name, pwd, captcha) => request.post('/api/login_pwd', {name, pwd, captcha})

// 获取商铺列表
export const getShops = (geohash) => request.get(`/api/shops?${qs.stringify(geohash)}`)
