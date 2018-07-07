import qs from 'qs'
import request from './request'

// 获取地址信息
export const getAddress = (geohash) => request.get(`/api/position/${geohash}`)

// 获取商品分类信息
export const getFoodCategorys = () => request.get('/api/index_category')

// 获取商铺列表
export const getShops = (geohash) => request.get(`/api/shops?${qs.stringify(geohash)}`)

// 账号登录
export const login = (name, pwd, captcha) => request.post('/api/login_pwd', {name, pwd, captcha})

// 短信登录
export const smsLogin = (phone, code) => request.post(`/api/login_sms`, {phone, code})

// 获取一次性验证码
export const getCaptcha = () => request.get('/api/captcha')

// 发送手机验证码
export const sendPhoneCode = (phone) => request.get(`/api/sendCode?phone=${phone}`)

// 获取用户信息
export const getUserInfo = () => request.get(`/api/userinfo`)
