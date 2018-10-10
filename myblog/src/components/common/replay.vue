<template>
    <div class="replay">
      <div class="write">
        <img src="../../../static/img/1.jpg" class="icon normal-shadow"/>
        <div class="comment-div">
          <mycomment></mycomment>
        </div>
      </div>
      <div class="discusslist-div">
        <discusslist></discusslist>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import mycomment from './mycomment'
import discusslist from './discusslist'
export default {
  components: {
    mycomment,
    discusslist
  },
  name: 'replay'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .replay
    width 100%
    height 100%
    .write
      width 100%
      height 180px
      .icon
        float left
        width 60px
        height 60px
        border-radius 60px
      .comment-div
        width 80%
        float left
        margin-left 20px
  .disscusslist-div
    width 100%
</style>
