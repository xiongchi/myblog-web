<template>
    <div class="articles">
      <div v-for="item in 4" :key="item" class="article card-shadow">
        <div class="brief">
          <router-link :to="{path: '/article/info'}" class="title font-syl">Java配置</router-link>
          <p class="content">内容.saadadasdddddddddddwjssa是啊话说地哈哈似乎嗲回答属地化hi还hi的撒德哈花蛤还是啊实打实地海上帝啊hi的婚纱的哈</p>
        </div>
        <img class="img normal-shadow" src="../../../static/img/2.jpg"/>
        <div class="author-info">
          <a class="common-font">作者</a>
          <a>点赞</a>
          <a>评论</a>
          <label>时间</label>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'articles'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .articles
    width 780px
    margin-top 380px
    .article
      width 780px
      height 180px
      margin-top 15px
      background #fff
      .brief
        float left
        width 80%
        height 70%
        margin-top 20px
        margin-left 20px
        .title
          color #000
          letter-spacing 1.5px
          &:hover
            text-decoration-line underline
        .content
          margin-top 10px
          font-size 15px
          font-family Arial
          color #969696
      .img
        float left
        width 15%
        height 70%
        margin-top 25px
      .author-info
        float left
        width 80%
        height 25px
        margin-left 20px
</style>
