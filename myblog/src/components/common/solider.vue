<template>
    <div class="solider">
      <el-carousel :interval="3500" arrow="hover">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item" class="img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      imgList: [
        '/static/img/1.jpg',
        '/static/img/2.jpg',
        '/static/img/3.jpg'
      ]
    }
  },
  name: 'solider'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .solider
    margin-top 20px
    margin-left 18px
    width 95%
    border-radius 20px
    .img
      width 100%
      height 100%
      border-radius 20px
</style>
