<template>
  <div class="article">
    <div class="left"></div>
    <div class="center">
      <div class="slider">
        <solider></solider>
      </div>
      <authorcard></authorcard>
      <articles></articles>
    </div>
    <div class="right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import solider from '../common/solider'
import authorcard from './authorcard'
import articles from './articles'

export default {
  data () {
    return {}
  },
  components: {
    solider,
    authorcard,
    articles
  },
  name: 'myarticle'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .article
    position relative
    top 170px
    width 100%
    .left
      float left
      width 10%
      height 100px
    .center
      float left
      width 80%
      height 100%
      .slider
        position absolute
        width 780px
        height 350px
        border-radius 20px
        box-shadow 20px 20px 50px #ccc
        background #FFD
    .right
      float left
      width 10%
      height 100%
</style>
