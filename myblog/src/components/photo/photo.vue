<template>
    <div class="photo">
      <div v-for="item in 10" :key="item" class="alum-shadow1 alum-radius">
        <div class="alum-shadow2 alum-radius">
          <img class="alum alum-radius" src="../../../static/img/1.jpg"/>
          <div class="title">中国dodo</div>
        </div>
      </div>
      <div class="alum-shadow1 alum-radius">
        <div class="alum-shadow2 alum-radius">
          <div class="alum alum-radius">
            <img class="add-alum" src="../../../static/img/big-add.png"
                 onmouseout="this.src='../../../static/img/big-add.png'"
                 onmouseenter="this.src='../../../static/img/big-add-blue.png'"/>
          </div>
          <div class="title" style="color: dodgerblue;">新建相册</div>
        </div>
      </div>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'photo'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .photo
    display flow
    position absolute
    margin-top 155px
    margin-left 80px
    .alum-radius
      border-radius 10px
    .alum-shadow1
      float left
      margin-top 60px
      margin-left 80px
      width 200px
      height 200px
      transform rotate(10deg)
      background: #ccdddd
      box-shadow: 20px 10px 20px #CCC
    .alum-shadow2
      width 200px
      height 200px
      transform rotate(-3deg)
      background #ffffff
      .title
        text-align center
        height 20px
        margin-top 10px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .alum
        width 200px
        height 200px
        transform rotate(-3deg)
        &:hover
          animation-duration 1.5s
          animation-fill-mode both
          animation-iteration-count 1
          animation-name aroundAnimation /*动画的名称*/
          transform-origin center bottom /*设置动画旋转元素的基点为*/
          cursor pointer
        .add-alum
          margin-top 50px
          margin-left 50px
  @keyframes aroundAnimation {
    0%
    100%
    20%
    50%
    80% {
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
      transform: rotate(-4deg)
    }
    40%
    43% {
      transition-timing-function: cubic-bezier(0.755, 0.50, 0.855, 0.060)
      transform: rotate(2deg)
    }
    70% {
      transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060)
      transform: rotate(2deg)
    }
    90% {
      transform: rotate(3deg)
    }
  }
</style>
