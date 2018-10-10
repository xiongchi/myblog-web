<template>
  <div class="main deep-shadow">
    <div class="title">
      <router-link class="font-syl" :to="{path: '/login'}" active-class="active">Sign-In</router-link>
      <label style="font-size: 50px; color: #AFAFAF; margin-left: -300px;">·</label>
      <router-link class="font-syl" :to="{path: '/reg'}" active-class="active">Sign-Up</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="other-login">
      <label>
        ————— &nbsp;&nbsp;&nbsp; 社交登录&nbsp;&nbsp;&nbsp; —————
      </label>
      <img class="qq" src="../../../static/img/qq.png"/>
      <img class="wechat" src="../../../static/img/wechat.png"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    alert(document.getElementById('blog-header').style.display)
    if (document.getElementById('blog-header') !== undefined) {
      alert(11)
      document.getElementById('blog-header').style.display = 'none'
    }
  },
  mounted () {
  },
  name: 'loginreg'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    margin 80px auto 0
    width 480px
    height auto
    border-radius 30px
    background #fff
    .title
      position absolute
      margin-top 40px
      margin-left 50px
      width 380px
      height 50px
      text-align center
      line-height 50px
      a
        float left
        text-shadow 0.1em 0.05em #ccc
        margin-left 80px
        &.active
          color #E6773B
          text-decoration-line underline
          text-decoration-color #E6773B
        &:hover
          text-decoration-line underline
          text-decoration-color #E6773B
    .other-login
      margin-left 50px
      width 380px
      height 100px
      label
        margin-left 60px
        color #969696
        font-size 15px
        font-family Arial
      .qq
        width 40px
        height 40px
        margin-left 100px
        margin-top 20px
      .wechat
        width 40px
        height 40px
        margin-left 100px
        margin-top 20px
</style>
