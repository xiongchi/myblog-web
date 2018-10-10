<template>
    <div class="comment">
      <textarea class="comment-text normal-shadow" placeholder="写下你的评论...."></textarea>
      <div class="todo">
        <meme class="smile"></meme>
        <div class="clear">清空</div>
        <div class="enter">发送</div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import meme from './meme'

export default {
  components: {
    meme
  },
  name: 'mycomment'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .comment
    height 160px
    .comment-text
      width 100%
      height 100px
      border 2px solid #ccc
    .todo
      float left
      width 100%
      height 50px
      margin-top 10px
      .smile
        float left
      .clear
        float left
        margin-left 55%
        margin-top 15px
        letter-spacing 5px
        font-size 16px
        font-family Arial
        color #7e8c8d
        &:hover
          color black
      .enter
        float left
        width 100px
        height 40px
        margin-left 5%
        margin-top 3px
        text-align center
        vertical-align center
        line-height 40px
        letter-spacing 5px
        font-size 16px
        font-family Arial
        border-radius 40px
        background #42C02E
        color #fff
</style>
