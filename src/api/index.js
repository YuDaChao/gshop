import qs from 'qs'
import request from './request'

export const getAddress = (geohash) => request.get(`/api/position/${geohash}`)

export const login = (name, pwd, captcha) => request.post('/api/login_pwd', {name, pwd, captcha})

export const getShops = (params) => request.get(`/api/shops?${qs.stringify(params)}`)
