<template>
  <section class="search">
    <HeaderNav title="搜索"/>
    <form class="search-form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit">
    </form>
  </section>
</template>

<script>
import HeaderNav from '../../components/HanderNav/HanderNav'

export default {
  name: 'Search',
  components: {
    HeaderNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    overflow hidden
    width: 100%;
    height: 100%;
    background-color #f5f5f5
    .header
      position fixed
      top: 0
      left 0
      right 0
      z-index 99999
      height 45px
      background-color #02a774
      span
        color #fff
      .header-title
        position absolute
        top 50%
        width 100%
        box-sizing border-box
        transform translateY(-50%)
        .header-title-text
          display block
          width 100%
          text-align center
          font-size 20px
    .search-form
      margin-top 50px
      background-color #fff
      padding 12px 8px
      .search-input
        width 79%
        height 35px
        padding 0 4px
        font-size 14px
        color: #333
        font-weight bold
        outline none
        border-radius 2px
        background-color #f2f2f2
        border 4px solid #f2f2f2
      .search-submit
        height 35px
        padding 0 13px
        border-radius 2px
        outline none
        background-color #02a774
        color: #fff
</style>
