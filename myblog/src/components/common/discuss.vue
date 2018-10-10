<template>
    <div class="discuss">
      <div class="reviewer">
        <img src="../../../static/img/1.jpg" class="icon"/>
        <a class="name font-syl">姓名</a>
        <label class="info">楼层 · 时间</label>
      </div>
      <div class="content">你是不是我的天啊 怎么了？？？？</div>
      <div class="do">
        <img src="../../../static/img/zan.png"/>
        <label>100人赞</label>
        <img style="margin-left: 20px" src="../../../static/img/replay.png"/>
        <label>回复</label>
      </div>
      <mychats></mychats>
    </div>
</template>

<script type="text/ecmascript-6">
import mychats from './mychats'
export default {
  components: {
    mychats
  },
  name: 'discuss'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discuss
    width 100%
    border-top 0.5px solid #AFAFAF
    padding-bottom 30px
    .reviewer
      width 100%
      margin-top 10px
      height 65px
      .icon
        width 60px
        height 60px
        border-radius 60px
      .name
        position absolute
        margin-top 10px
        margin-left 10px
        color #000
        font-weight normal
      .info
        position absolute
        margin-top 40px
        margin-left 5px
        color #969696
        font-size 10px
    .content
      width 100%
      margin-top 15px
    .do
      width 100%
      height 28px
      margin-top 20px
      label
        font-size 10px
        color #969696
</style>
