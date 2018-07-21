<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-content">
        <li
          class="menu-item"
          v-for="(good, index) in shopGoods"
          :key="index"
          :class="{current: index === currentIndex}"
          @click="changeCurrentIndex(index)"
        >
          <span class="category">
            <img class="icon" :src="good.icon" alt="#" v-show="good.icon">
            <span class="name">{{good.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul ref="foodsUl">
        <li class="shop-good" v-for="(shopGood, index) in shopGoods" :key="index">
          <h1 class="title">{{shopGood.name}}</h1>
          <ul>
            <li
              class="food-item"
              v-for="(food, index) in shopGood.foods"
              :key="index"
              @click="handleSelectFood(food)"
            >
              <div>
                <img class="icon" width="57" height="57" :src="food.image" alt="">
              </div>
              <div class="content">
                <div class="name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div class="extra">
                  <span class="sell-count">月售{{food.sellCount}}分</span>
                  <span class="rating">好评{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
              </div>
              <div class="cart-control-wrapper">
                <CartControl :food="food" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Food :food="selectedFood" ref="food" />
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'
import CartControl from '../../../components/CartControl/CartControl'
import Food from '../../../components/Food/Food'

export default {
  name: 'ShopGoods',
  components: {
    CartControl,
    Food
  },
  data () {
    return {
      tops: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  mounted () {
    // this.getShopGoods()
    this.$store.dispatch('getShopGoods', () => { // 更新数据后执行
      this.$nextTick(() => { // 页面渲染完成后执行
        this._initScroll()
        this._initTops()
      })
    })
  },
  methods: {
    ...mapActions(['getShopGoods']),
    changeCurrentIndex (index) {
      const scrollY = this.tops[index]
      this.scrollY = scrollY
      this.foodsScroll.scrollTo(0, -scrollY, 300)
    },
    handleSelectFood (food) {
      this.selectedFood = food
      // 父组件调用子组件方法
      this.$refs.food.showFood()
    },
    // 初始化滚动条
    _initScroll () {
      new BetterScroll('.menu-wrapper', {
        click: true
      })
      this.foodsScroll = new BetterScroll('.foods-wrapper', {
        click: true,
        probeType: 2 // 派发scroll事件
      })

      // 监听滚动事件
      this.foodsScroll.on('scroll', ({x, y}) => {
        this.scrollY = Math.abs(y)
      })
      // 监听滚动完成
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        this.scrollY = Math.abs(y)
      })
    },
    _initTops () {
      const tops = []
      let top = 0
      tops.push(top)
      // 获取所有li
      const lis = this.$refs.foodsUl.children
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      // 更新数据
      this.tops = tops
    }
  },
  // 初始化执行一次  相关属性变化执行
  computed: {
    ...mapState(['shopGoods']),
    currentIndex () {
      const { scrollY, tops } = this
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1]
      })
      return index
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display flex
    position absolute
    top 184px
    bottom 47px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-content
        width 100%
        .menu-item
          display table
          width 56px
          height 54px
          line-height 14px
          padding 0 12px
          bottom-border-1px(#ddd)
          &.current
            background #fff
            color: #02a774
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            background-size 12px 12px
            padding-top 1px
            background-repeat no-repeat
          .category
            display table-cell
            vertical-align middle
            font-size 12px
    .foods-wrapper
      flex 1
      .shop-good
        .title
          padding-left 14px
          height 26px
          line-height 26px
          border-left 2px solid #d9dde1
          font-size 12px
          color rgb(147, 153, 159)
          background #f3f5f7
        .food-item
          position relative
          display flex
          margin 18px
          padding-bottom 18px
          bottom-border-1px(#ddd)
          &:last-child
            border none
            margin-bottom 0
          .icon
            flex 0 0 57px
            margin-right 10px
          .content
            flex 1
            .name
              margin 2px 0 8px
              height 14px
              line-height 14px
              font-size 14px
              color rgb(7, 17, 27)
            .desc, .extra
              margin-bottom 8px
              font-size 10px
              line-height 10px
              color rgb(147, 153, 159)
            .extra
              font-size 0
              .sell-count
                font-size 10px
                margin-right 12px
              .rating
                font-size 10px
            .price
              font-size 10px
              color rgb(147, 153, 159)
              font-weight 700
              .now
                margin-right 8px
                font-size 14px
                color rgb(240, 20, 20)
              .old
                text-decoration line-through
                font-size 10px
                color rgb(147, 153, 159)
          .cart-control-wrapper
            position absolute
            bottom 15px
            right 0
</style>
