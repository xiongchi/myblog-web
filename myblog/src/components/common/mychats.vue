<template>
  <div class="chats">
    <div class="chat">
      <div class="content">
        <a>汪汪汪:</a>
        <a>&nbsp;@喵喵喵</a>
        &nbsp;我开始建设的急啊急啊纠结啊就东南那男的啊是大hi的hi去hi撒旦hi去hi带我去hi和三点七五大口径爱上邓丽君去了解啊收到了期间为了大家垃圾堆里去我的
        <div class="rep-info">
          <label>日期</label>
          <img src="../../../static/img/replay.png"/>
          <label>回复</label>
        </div>
      </div>
      <div class="add-reply">
        <img src="../../../static/img/pen.png"/>
        <label @click="isReplay = !isReplay">添加新评论</label>
      </div>
      <mycomment v-if="isReplay"></mycomment>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import mycomment from './mycomment'

export default {
  data () {
    return {
      isReplay: false
    }
  },
  components: {
    mycomment
  },
  name: 'mychats'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .chats
    width 100%
    margin-top 20px
    border-left 2px solid #AFAFAF
    .chat
      margin-left 20px
    .content
      letter-spacing 2.5px
      line-height 20px
      font-size 13px
      color #555
      padding-bottom 20px
      border-bottom 1px dashed #969696
      a
        color #3194D0
      .rep-info
        margin-top 5px
        width 100%
        height 20px
        img
          margin-left 15px
          width 20px
          height 20px
        label
          font-size 12px
          color #969696
    .add-reply
      width 100%
      margin-top 15px
      height 50px
      label
        font-size 15px
        color #7e8c8d
</style>
