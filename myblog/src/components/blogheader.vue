<template>
  <div v-show="!hideNav" class="header">
    <div class="options">
      <router-link v-for="(path, index) in paths" :key="index" :to="{path: '/' + path}" active-class="active">
        {{path}}
      </router-link>
    </div>
    <div class="search">
      <input/>
      <div class="search-btn">
        <img src="../../static/img/search.png" style="margin-left:8px;margin-top:2px;width:30px;height:30px"/>
      </div>
    </div>
    <div class="login-reg">
      <router-link :to="{path: '/login'}" class="login nav-btn">login</router-link>
      <router-link :to="{path: '/reg'}" class="reg nav-btn">register</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import loginreg from './login/loginreg'
export default {
  data () {
    return {
      // 登录框
      loginDialog: false,
      // 是否隐藏nav
      hideNav: false,
      paths: ['Article', 'LOL', 'Music', 'Study']
    }
  },
  mounted () {
    // 防止刷新的时候重新设置显示
    this.toHideNav()
  },
  watch: {
    // 监听url跳转 不需要显示导航栏的直接隐藏
    '$route': 'toHideNav'
  },
  methods: {
    toHideNav: function () {
      const path = this.$route.path
      if (path === '/loginreg' || path === '/login' || path === '/reg' || path === '/Study') {
        this.hideNav = true
      } else {
        this.hideNav = false
      }
    }
  },
  components: {loginreg},
  name: 'blogheader'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    position fixed
    top 20px
    width 100%
    height 120px
    z-index 3000
    background -webkit-linear-gradient(#ffffdd, #fff, #fffddd)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    border-radius 60px
    box-shadow 2px 2px 5px #bbb
    .options
      position absolute
      margin-left 200px
      a
        float left
        position relative
        margin-top 30px
        margin-left 15px
        width 150px
        height 60px
        border-radius 20px 0 20px 20px
        background -webkit-linear-gradient(#FFFFFF, #DFDFDF, #F8F8F8)
        box-shadow 10px 5px 10px #CCC
        font-size 20px
        font-family Arial
        color black
        text-align center
        line-height 60px
        vertical-align center
        &.active
          background -webkit-linear-gradient(#E6773B, #D85622, #E6773B)
          color #fff
        &:hover
          background -webkit-linear-gradient(#E6773B, #D85622, #E6773B)
          color #fff

  .search
    width 270px
    height 40px
    margin-left 780px
    margin-top -15px
    input
      float left
      width 210px
      height 35px
      border-radius 20px 0 0 20px
      box-shadow 10px 10px 20px #bbb
    .search-btn
      float left
      width 48px
      height 35px
      border-radius 0 20px 20px 0
      background #fff
      box-shadow 10px 10px 20px #bbb

  .login-reg
    position absolute
    width 300px
    height 80px
    margin-left 1050px
    .login
      float left
      margin-top 10px
      margin-left 15px
      border 1px solid #D85622
      color #D85622
      box-shadow 10px 5px 10px #CCC
      &:hover
        background -webkit-linear-gradient(#E6773B, #D85622, #E6773B)
        color #fff
        box-shadow 10px 5px 10px #CCC
    .reg
      float left
      margin-top 10px
      margin-left 15px
      &:hover
        background -webkit-linear-gradient(#E6773B, #D85622, #E6773B)
        color #fff
        box-shadow 10px 5px 10px #CCC
</style>
