<template>
  <div id="app">
    <blog-header id="blog-header" v-show="navShow"></blog-header>
    <div v-show="navBtn" id="nav-btn" class="nav-btn" @click="showNav"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import blogheader from './components/blogheader'
export default {
  data () {
    return {
      navShow: true,
      navFlag: false,
      navBtn: false
    }
  },
  components: {
    'blog-header': blogheader
  },
  mounted () {
    window.addEventListener('scroll', function () {
      let high = document.documentElement.scrollTop
      if (high > 180) {
        document.getElementById('blog-header').style.display = 'none'
        document.getElementById('nav-btn').style.display = 'block'
        this.navShow = false
      } else {
        document.getElementById('nav-btn').style.display = 'none'
        document.getElementById('blog-header').style.display = 'block'
        this.navShow = true
      }
    })
  },
  methods: {
    showNav: function () {
      if (document.getElementById('blog-header').style.display === 'none') {
        document.getElementById('blog-header').style.display = 'block'
        this.navShow = true
      } else {
        document.getElementById('blog-header').style.display = 'none'
        this.navShow = false
      }
    }
  },
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nav-btn
    width 30px
    height 30px
    border-radius 30px
    position fixed
    left 20px
    background red
</style>
