import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite/MSite'
// import Search from '../pages/Search/Search'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Login from '../pages/Login/Login'
// import Shop from '../pages/Shop/Shop'
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
// import ShopRating from '../pages/Shop/ShopRating/ShopRating'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

const MSite = () => import('../pages/MSite/MSite')
const Search = () => import('../pages/Search/Search')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Login = () => import('../pages/Login/Login')
const Shop = () => import('../pages/Shop/Shop')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods')
const ShopRating = () => import('../pages/Shop/ShopRating/ShopRating')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      redirect: '/shop/goods',
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/rating',
          component: ShopRating
        },
        {
          path: '/shop/info',
          component: ShopInfo
        }
      ]
    }
  ]
})
