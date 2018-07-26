<template>
  <div class="cart-controller" ref="cart">
    <transition name="decrement">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop.prevent="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop.prevent="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      if (isAdd) {
        this.$emit('drop', this.$refs.cart)
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart-controller
    display flex
    .icon-remove_circle_outline
      &.decrement-enter-active, &.decrement-leave-active
        transition all 0.3s
      &.decrement-enter, &.decrement-leave-to
        opacity 0
        transform translateX(25px) rotate(180deg)
    .iconfont
      color: #02a774
      font-size 20px
    .cart-count
      margin 0 10px
      font-size: 10px;
      line-height: 20px;
      color: rgba(0,0,0,0.7);
</style>
