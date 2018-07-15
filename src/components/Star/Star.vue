<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item"
          v-for="(status, index) in starStatus"
          :key="index" :class="status">
    </span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    size: {
      type: Number,
      default: 24
    },
    score: Number
  },
  computed: {
    starStatus () {
      const starStatus = []
      for (let i = 0; i < Math.floor(this.score); i++) {
        starStatus.push('on')
      }
      const num = (this.score - Math.floor(this.score)) * 10
      if (num >= 5) {
        starStatus.push('half')
      }
      while (starStatus.length < 5) {
        starStatus.push('off')
      }
      return starStatus
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-24
      .star-item
        width 10px
        height 10px
        background-size 10px 10px
        &.on
          bg-image("./images/stars/star24_on")
        &.half
          bg-image("./images/stars/star24_half")
        &.off
          bg-image("./images/stars/star24_off")
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image("./images/stars/star36_on")
        &.half
          bg-image("./images/stars/star36_half")
        &.off
          bg-image("./images/stars/star36_off")
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image("./images/stars/star48_on")
        &.half
          bg-image("./images/stars/star48_half")
        &.off
          bg-image("./images/stars/star48_off")
</style>
