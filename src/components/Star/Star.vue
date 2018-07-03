<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(status, index) in starStatus" :key="index" :class="status"></span>
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
  .star
    margin-top -3px
    .star-item
      display inline-block
      background-size 10px 10px
      background-repeat no-repeat
      width 10px
      height 10px
  .star-24
    .on
      background-image url("./images/stars/star24_on@2x.png")
    .half
      background-image url("./images/stars/star24_half@2x.png")
    .off
      background-image url("./images/stars/star24_off@2x.png")
  .star-36
    .on
      background-image url("./images/stars/star36_on@2x.png")
    .half
      background-image url("./images/stars/star36_half@2x.png")
    .off
      background-image url("./images/stars/star36_off@2x.png")
  .star-48
    .on
      background-image url("./images/stars/star48_on@2x.png")
    .half
      background-image url("./images/stars/star48_half@2x.png")
    .off
      background-image url("./images/stars/star48_off@2x.png")
</style>
